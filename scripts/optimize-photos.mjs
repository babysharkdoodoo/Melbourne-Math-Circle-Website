import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicRoot = path.resolve("public");
const sources = ["home-screen-photo.jpg", "about_1.jpg", "about_2.jpg"];
for (const folder of ["Photos/monthly_meetings", "Photos/IndiaFest", "Photos/university_park", "pfps"]) {
  for (const file of await fs.readdir(path.join(publicRoot, folder))) {
    if (/\.(png|jpe?g)$/i.test(file)) sources.push(`${folder}/${file}`);
  }
}
let originalBytes = 0;
let optimizedBytes = 0;
for (const source of sources) {
  const input = path.join(publicRoot, source);
  const output = path.join(publicRoot, "optimized", source.replace(/\.(png|jpe?g)$/i, ".webp"));
  await fs.mkdir(path.dirname(output), { recursive: true });
  await sharp(input).rotate().resize({ width: source.startsWith("pfps/") ? 800 : 1440, withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 }).toFile(output);
  originalBytes += (await fs.stat(input)).size;
  optimizedBytes += (await fs.stat(output)).size;
}
console.log(JSON.stringify({ photos: sources.length, originalBytes, optimizedBytes, savedPercent: Math.round((1 - optimizedBytes / originalBytes) * 100) }));
