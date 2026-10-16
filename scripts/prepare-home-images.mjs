import fs from 'node:fs/promises';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

// Figma supplies the four photos as one 2 × 2 source image. Extract lossless
// originals so each responsive card can crop naturally rather than stretch it.
const directory = new URL('../public/assets/images/home/', import.meta.url);
const source = await fs.readFile(new URL('category-materials.png', directory));
const { width, height } = await sharp(source).metadata();
if (!width || !height || width % 2 || height % 2) {
  throw new Error('The home category source must contain four equal image quadrants.');
}
const hash = (buffer) => createHash('sha256').update(buffer).digest('hex');
for (const [index, slug] of ['food', 'substrates', 'fiber', 'shell'].entries()) {
  const destination = new URL(`category-${slug}.png`, directory);
  const output = await sharp(source)
    .extract({
      left: (index % 2) * (width / 2),
      top: Math.floor(index / 2) * (height / 2),
      width: width / 2,
      height: height / 2
    })
    .png()
    .toBuffer();
  let previous;
  try {
    previous = await fs.readFile(destination);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  if (!previous || hash(previous) !== hash(output)) await fs.writeFile(destination, output);
}
