import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('public/assets/images');
const supported = new Set(['.png', '.jpg', '.jpeg', '.webp']);
let optimized = 0;
let skipped = 0;

async function walk(directory) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (supported.has(path.extname(entry.name).toLowerCase())) await optimize(file);
  }
}

async function optimize(file) {
  try {
    const image = sharp(file);
    const metadata = await image.metadata();
    const temporary = `${file}.optimized`;
    if (metadata.format === 'png')
      await image.png({ compressionLevel: 9, palette: true }).toFile(temporary);
    else if (metadata.format === 'jpeg')
      await image.jpeg({ quality: 86, progressive: true, mozjpeg: true }).toFile(temporary);
    else if (metadata.format === 'webp')
      await image.webp({ quality: 86, effort: 5 }).toFile(temporary);
    else return;
    const [before, after] = await Promise.all([fs.stat(file), fs.stat(temporary)]);
    if (after.size < before.size) {
      try {
        await fs.rename(temporary, file);
      } catch {
        await fs.copyFile(temporary, file);
        await fs.rm(temporary);
      }
      optimized += 1;
    } else {
      await fs.rm(temporary);
    }
  } catch (error) {
    skipped += 1;
    console.warn(`Skipped ${file}: ${error.message}`);
  }
}

await walk(root);
console.log(`Optimized ${optimized} image(s); skipped ${skipped}.`);
