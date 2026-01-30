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
    const chapterId = file.name.replace(/\.md$/, "");
    if (!chapterId) continue;
    params.push({ part: partId, chapter: chapterId });
  }
}
const empty = params.filter(p => !p.part || !p.chapter);
const missing = params.filter(p => !p.part || !p.chapter || p.part.trim() === '' || p.chapter.trim() === '');
const dupes = new Set();
const seen = new Set();
for (const p of params) {
  const key = `${p.part}/${p.chapter}`;
  if (seen.has(key)) dupes.add(key);
  seen.add(key);
}
console.log('params', params.length);
console.log('empty', empty.length);
console.log('missing', missing.length);
console.log('dupes', dupes.size);
if (dupes.size) {
  console.log([...dupes].slice(0, 10));
}
