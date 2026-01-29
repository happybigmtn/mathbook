import fs from "fs";
import path from "path";

const pagePath = path.join(process.cwd(), "src/app/[part]/[chapter]/page.tsx");
const pageText = fs.readFileSync(pagePath, "utf-8");

const errors = [];
if (!/params\.json/.test(pageText)) {
  errors.push("page.tsx does not import params.json")
}
if (!/return params/.test(pageText)) {
  errors.push("page.tsx does not return params")
}

if (errors.length) {
  console.error("static params checks failed:");
  for (const err of errors) console.error(`- ${err}`);
  process.exit(1);
}

console.log("static params checks passed");
