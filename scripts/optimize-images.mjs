import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

// Resolve relative to this script, so invoking from another directory is safe.
const root = fileURLToPath(new URL('../public/assets/images/', import.meta.url));
const output = path.join(root, 'generated');
const manifestPath = path.join(output, 'manifest.json');
const supported = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif']);
const widths = [320, 640, 960, 1440];
const profile = {
  version: 1,
  widths,
  webpQuality: 82,
  avifQuality: 55
};
let previous = { images: {} };
try {
  previous = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
await fs.mkdir(output, { recursive: true });
const manifest = { profile, images: {}, errors: {} };
let generated = 0;
let reused = 0;

async function walk(directory) {
  const entries = (await fs.readdir(directory, { withFileTypes: true })).sort((a, b) =>
    a.name.localeCompare(b.name, 'en')
  );
  for (const entry of entries) {
    const file = path.join(directory, entry.name);
    if (file === output) continue;
    if (entry.isDirectory()) await walk(file);
    else if (supported.has(path.extname(file).toLowerCase())) {
      try {
        await optimize(file);
      } catch (error) {
        const source = '/assets/images/' + path.relative(root, file).split(path.sep).join('/');
        manifest.errors[source] = error.message;
        console.warn('Skipped ' + source + ': ' + error.message);
      }
    }
  }
}
async function exists(url) {
  try {
    await fs.access(path.join(root, url.replace('/assets/images/', '')));
    return true;
  } catch {
    return false;
  }
}
async function optimize(file) {
  const source = await fs.readFile(file);
  const relative = path.relative(root, file).split(path.sep).join('/');
  const sourceUrl = '/assets/images/' + relative;
  const fingerprint = createHash('sha256')
    .update(source)
    .update(JSON.stringify(profile))
    .digest('hex');
  const cached = previous.images[sourceUrl];
  if (
    cached?.fingerprint === fingerprint &&
    cached.variants?.length &&
    (await Promise.all(cached.variants.map((variant) => exists(variant.src)))).every(Boolean)
  ) {
    manifest.images[sourceUrl] = cached;
    reused++;
    return;
  }
  const metadata = await sharp(source).metadata();
  if (!metadata.width || !metadata.height) throw new Error('Missing image dimensions: ' + file);
  const rotated = [5, 6, 7, 8].includes(metadata.orientation);
  const width = rotated ? metadata.height : metadata.width;
  const height = rotated ? metadata.width : metadata.height;
  const targetWidths = [...new Set(widths.map((size) => Math.min(size, width)))];
  const variants = [];
  // Keep the source extension in the filename to prevent foo.png/foo.jpg collisions.
  for (const size of targetWidths) {
    for (const format of ['webp', 'avif']) {
      const destination = path.join(output, relative + '-' + size + '.' + format);
      await fs.mkdir(path.dirname(destination), { recursive: true });
      let image = sharp(source).rotate().resize({ width: size, withoutEnlargement: true });
      image =
        format === 'webp'
          ? image.webp({ quality: profile.webpQuality, effort: 4 })
          : image.avif({ quality: profile.avifQuality, effort: 1 });
      const temporary = destination + '.tmp';
      try {
        const info = await image.toFile(temporary);
        // Only generated derivatives are ever replaced; originals are never written.
        await fs.rename(temporary, destination);
        variants.push({
          src: '/assets/images/generated/' + relative + '-' + size + '.' + format,
          format,
          width: info.width,
          height: info.height,
          bytes: info.size
        });
        generated++;
      } finally {
        await fs.rm(temporary, { force: true });
      }
    }
  }
  manifest.images[sourceUrl] = { fingerprint, width, height, variants };
}
await walk(root);
const serialized = JSON.stringify(manifest, null, 2) + '\n';
let existing = '';
try {
  existing = await fs.readFile(manifestPath, 'utf8');
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
if (existing !== serialized) {
  const temporary = manifestPath + '.tmp';
  await fs.writeFile(temporary, serialized);
  await fs.rename(temporary, manifestPath);
}
console.log(
  'Generated ' +
    generated +
    ' responsive variants; reused ' +
    reused +
    ' unchanged sources. Originals preserved.'
);
