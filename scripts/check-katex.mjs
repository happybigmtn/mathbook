import fs from "fs";
import path from "path";
import katex from "katex";

const slugs = [
  "spherical-harmonics",
  "the-mandelbrot-set",
  "calabiyau-manifolds",
  "homology-and-cohomology",
  "axiom-of-choice",
  "dynamical-systems-and-chaos",
  "c--algebras",
  "cardinals",
  "linear-and-nonlinear-waves-and-solitons",
  "bayesian-analysis",
  "homotopy-groups",
  "the-fast-fourier-transform",
  "quantum-computation",
  "genus",
  "optimization-and-lagrange-multipliers",
  "fuchsian-groups",
  "categories",
  "riemann-surfaces",
  "projective-space",
  "topological-spaces",
];

const root = path.join(process.cwd(), "src/content/part-03");
const errors = [];

function stripCodeBlocks(text) {
  return text.replace(/```[\s\S]*?```/g, "");
}

function extractMath(text) {
  const parts = [];
  let remaining = text;
  while (remaining.length > 0) {
    const blockMatch = remaining.match(/^(.*?)\$\$([\s\S]*?)\$\$/);
    if (blockMatch) {
      if (blockMatch[2]) parts.push({ type: "block", content: blockMatch[2].trim() });
      remaining = remaining.slice(blockMatch[0].length);
      continue;
    }
    const inlineMatch = remaining.match(/^(.*?)\$([^$\n]+?)\$/);
    if (inlineMatch) {
      if (inlineMatch[2]) parts.push({ type: "inline", content: inlineMatch[2] });
      remaining = remaining.slice(inlineMatch[0].length);
      continue;
    }
    break;
  }
  return parts;
}

for (const slug of slugs) {
  const filePath = path.join(root, `${slug}.md`);
  const text = fs.readFileSync(filePath, "utf-8");
  const clean = stripCodeBlocks(text);
  const mathBlocks = extractMath(clean);
  for (const block of mathBlocks) {
    try {
      katex.renderToString(block.content, { throwOnError: true });
    } catch (err) {
      errors.push({ slug, type: block.type, content: block.content, message: err.message });
    }
  }
}

if (errors.length) {
  console.error(`KaTeX errors: ${errors.length}`);
  for (const err of errors.slice(0, 50)) {
    console.error(`- ${err.slug} (${err.type}): ${err.message}`);
    console.error(`  ${err.content.replace(/\s+/g, " ").slice(0, 160)}`);
  }
  process.exit(1);
}

console.log("KaTeX check passed for selected part-03 pages");
