import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/app/[part]/[chapter]/ChapterContent.tsx");
const text = fs.readFileSync(filePath, "utf-8");

const errors = [];
if (!/if \(!chapter\)/.test(text)) {
  errors.push("ChapterContent does not guard for missing chapter")
}
if (!/initialFullText/.test(text)) {
  errors.push("ChapterContent does not reference initialFullText")
}
if (!/renderFullTextContent/.test(text)) {
  errors.push("ChapterContent missing renderFullTextContent")
}
if (!/fallbackTitle/.test(text)) {
  errors.push("ChapterContent missing fallback full-text rendering branch")
}

if (errors.length) {
  console.error("full text fallback checks failed:");
  for (const err of errors) console.error(`- ${err}`);
  process.exit(1);
}

console.log("full text fallback checks passed");
