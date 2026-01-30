import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const BASE_URL = process.env.BASE_URL || "http://localhost:3005";
const CONTENT_ROOT = path.resolve("src/content");
const CHAPTERS_PATH = path.resolve("src/data/chapters.ts");
const OUT_PATH = process.env.OUT_PATH || path.resolve("fulltext_audit_report.json");
const CONCURRENCY = Number(process.env.CONCURRENCY || 4);
const START = Number(process.env.START || 0);
const COUNT = process.env.COUNT ? Number(process.env.COUNT) : null;
const RESUME = process.env.RESUME === "1";
const ROUTES_SOURCE = process.env.ROUTES_SOURCE || "chapters";
const PART_FILTER = process.env.PART_FILTER || null;

async function listMarkdownFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}

function toRoute(filePath) {
  const rel = path.relative(CONTENT_ROOT, filePath);
  const withoutExt = rel.replace(/\.md$/, "");
  return `/${withoutExt.split(path.sep).join("/")}/`;
}

function extractMatches(text, regex, limit = 6, context = 40) {
  const matches = [];
  let match;
  while ((match = regex.exec(text)) && matches.length < limit) {
    const start = Math.max(0, match.index - context);
    const end = Math.min(text.length, match.index + match[0].length + context);
    matches.push(text.slice(start, end).replace(/\s+/g, " ").trim());
  }
  return matches;
}

async function auditPage(page, url) {
  const result = {
    url,
    katexErrors: 0,
    katexSnippets: [],
    longTokens: [],
    spacedLetters: [],
    note: null,
  };

  await page.goto(url, { waitUntil: "networkidle" });
  const fullTextButton = page.locator('button:has-text("Full Text")');
  if (await fullTextButton.count()) {
    await fullTextButton.first().click();
  }
  await page.waitForTimeout(200);
  await page.waitForSelector(".prose-content", { state: "attached", timeout: 45000 });

  const { text, katexErrors, katexSnippets } = await page.evaluate(() => {
    const container = document.querySelector(".prose-content");
    const text = container ? container.innerText : "";
    const katexNodes = Array.from(document.querySelectorAll(".katex-error"));
    const katexErrors = katexNodes.length;
    const katexSnippets = katexNodes.slice(0, 5).map((node) => {
      const title = node.getAttribute("title") || "";
      const snippet = (node.textContent || "").trim();
      return title || snippet;
    });
    return { text, katexErrors, katexSnippets };
  });

  result.katexErrors = katexErrors;
  result.katexSnippets = katexSnippets;
  result.longTokens = extractMatches(text, /\b[A-Za-z]{20,}\b/g);
  result.spacedLetters = extractMatches(
    text,
    /(?:\b[A-Za-z]\s+){6,}[A-Za-z]\b/g
  );
  return result;
}

async function loadExisting() {
  if (!RESUME) return new Map();
  try {
    const raw = await fs.readFile(OUT_PATH, "utf8");
    const parsed = JSON.parse(raw);
    return new Map(parsed.map((entry) => [entry.url, entry]));
  } catch {
    return new Map();
  }
}

async function listRoutesFromChapters() {
  const raw = await fs.readFile(CHAPTERS_PATH, "utf8");
  const routes = new Set();
  const lines = raw.split(/\r?\n/);
  let currentId = null;
  for (const line of lines) {
    const idMatch = line.match(/^ {4}id: "([^"]+)"/);
    if (idMatch) {
      currentId = idMatch[1];
      continue;
    }
    const partMatch = line.match(/^ {4}part: "(part-\d{2})"/);
    if (partMatch && currentId) {
      routes.add(`/${partMatch[1]}/${currentId}/`);
      currentId = null;
    }
  }
  return Array.from(routes);
}

async function run() {
  const existing = await loadExisting();
  let routes = [];
  if (ROUTES_SOURCE === "content") {
    const files = await listMarkdownFiles(CONTENT_ROOT);
    routes = files.map(toRoute);
  } else {
    routes = await listRoutesFromChapters();
    routes = await Promise.all(
      routes.map(async (route) => {
        const [part, id] = route.replace(/^\/|\/$/g, "").split("/");
        const filePath = path.join(CONTENT_ROOT, part, `${id}.md`);
        try {
          await fs.access(filePath);
          return route;
        } catch {
          return null;
        }
      })
    );
  }
  routes = routes.filter((route) => route && !existing.has(new URL(route, BASE_URL).toString()));
  if (PART_FILTER) {
    routes = routes.filter((route) => route.startsWith(`/${PART_FILTER}/`));
  }
  routes.sort();

  if (START > 0 || COUNT !== null) {
    routes = routes.slice(START, COUNT === null ? undefined : START + COUNT);
  }
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

  const queue = routes.slice();
  const results = Array.from(existing.values());

  async function worker(id) {
    const page = await context.newPage();
    page.setDefaultTimeout(45000);
    while (queue.length) {
      const route = queue.shift();
      if (!route) break;
      const url = new URL(route, BASE_URL).toString();
      try {
        const res = await auditPage(page, url);
        results.push(res);
      } catch (error) {
        results.push({
          url,
          katexErrors: 0,
          longTokens: [],
          spacedLetters: [],
          note: error?.message || String(error),
        });
      }
    }
    await page.close();
  }

  const workers = Array.from({ length: CONCURRENCY }, (_, i) => worker(i + 1));
  await Promise.all(workers);

  await browser.close();

  results.sort((a, b) => a.url.localeCompare(b.url));
  await fs.writeFile(OUT_PATH, JSON.stringify(results, null, 2));

  const summary = results.reduce(
    (acc, r) => {
      if (r.note) acc.failures += 1;
      if (r.katexErrors > 0) acc.katexPages += 1;
      if (r.longTokens.length > 0) acc.longTokenPages += 1;
      if (r.spacedLetters.length > 0) acc.spacedLetterPages += 1;
      return acc;
    },
    {
      total: results.length,
      failures: 0,
      katexPages: 0,
      longTokenPages: 0,
      spacedLetterPages: 0,
    }
  );

  console.log("Full Text Audit Summary:");
  console.log(summary);
  console.log(`Report written to ${OUT_PATH}`);
}

run().catch((error) => {
  console.error("Audit failed:", error);
  process.exit(1);
});
