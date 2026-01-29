import fs from "fs";
import path from "path";

const baseDir = path.join(process.cwd(), "src/content");
const params = [];
for (const part of fs.readdirSync(baseDir, { withFileTypes: true })) {
  if (!part.isDirectory()) continue;
  const partId = part.name;
  const partDir = path.join(baseDir, partId);
  for (const file of fs.readdirSync(partDir, { withFileTypes: true })) {
    if (!file.isFile()) continue;
    if (!file.name.endsWith('.md')) continue;
    const chapter = file.name.replace(/\.md$/, "");
    if (!chapter) continue;
    params.push({ part: partId, chapter });
  }
}
params.sort((a, b) => `${a.part}/${a.chapter}`.localeCompare(`${b.part}/${b.chapter}`));
for (const p of params) {
  console.log(`${p.part}/${p.chapter}`);
}
