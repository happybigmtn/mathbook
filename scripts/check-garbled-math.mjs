import fs from "fs";
import path from "path";

const patterns = [
  /\\maxx/,       // should be \max x
  /\\minx/,       // should be \min x
  /\\logs/,       // should be \log s
  /\\l\\text\{og/, // OCR split of \log
  /\\i\(n/,       // OCR of \in
  /\\co\(sn\)/,  // OCR of \cos n
  /\\si\(n/,      // OCR of \sin n
];

const root = path.join(process.cwd(), "src/content/part-03");
const errors = [];
for (const file of fs.readdirSync(root)) {
  if (!file.endsWith(".md")) continue;
  const slug = file.replace(/\.md$/, "");
  const text = fs.readFileSync(path.join(root, file), "utf-8");
  for (const pattern of patterns) {
    if (pattern.test(text)) {
      errors.push({ slug, pattern: pattern.toString() });
    }
  }
}

if (errors.length) {
  console.error(`Garbled math patterns found: ${errors.length}`);
  for (const err of errors) {
    console.error(`- ${err.slug}: ${err.pattern}`);
  }
  process.exit(1);
}

console.log("No garbled math patterns found in part-03 content");
