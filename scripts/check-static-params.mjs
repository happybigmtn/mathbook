import fs from "fs";
import path from "path";

const baseDir = path.join(process.cwd(), "src/content");
const expected = [];
for (const part of fs.readdirSync(baseDir, { withFileTypes: true })) {
  if (!part.isDirectory()) continue;
  const partId = part.name;
  const partDir = path.join(baseDir, partId);
  for (const file of fs.readdirSync(partDir, { withFileTypes: true })) {
    if (!file.isFile()) continue;
    if (!file.name.endsWith('.md')) continue;
    const chapter = file.name.replace(/\.md$/, "");
    if (!chapter) continue;
    expected.push(`${partId}/${chapter}`);
  }
}
expected.sort();
console.log(`content params count: ${expected.length}`);
console.log(expected.slice(0, 5).join('\n'));
