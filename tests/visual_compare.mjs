import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

const REF_DIR = 'docs/reference/desktop';
const IMP_DIR = 'docs/testing/screenshots';
const OUT_DIR = 'docs/testing/comparisons';
fs.mkdirSync(OUT_DIR, { recursive: true });

const TARGETS = [
  'home-hero-1440.png',
  'home-desktop-1440.png',
  'services-desktop-1440.png',
  'results-desktop-1440.png',
  'about-desktop-1440.png',
  'pricing-desktop-1440.png',
  'blog-desktop-1440.png',
  'careers-desktop-1440.png',
  'contact-desktop-1440.png',
  'privacy-desktop-1440.png',
  'terms-desktop-1440.png',
  '404-desktop-1440.png',
  'style-guide-desktop-1440.png',
];

const reportRows = [];

for (const file of TARGETS) {
  const refPath = path.join(REF_DIR, file);
  const impPath = path.join(IMP_DIR, file);
  if (!fs.existsSync(refPath) || !fs.existsSync(impPath)) continue;

  const refMeta = await sharp(refPath).metadata();
  const impMeta = await sharp(impPath).metadata();
  const width = Math.min(refMeta.width, impMeta.width);
  // Compare top viewport/common height up to 2400px so PNG buffers match dimensions cleanly
  const height = Math.min(refMeta.height, impMeta.height, 2400);

  const refBuf = await sharp(refPath)
    .extract({ left: 0, top: 0, width, height })
    .ensureAlpha()
    .raw()
    .toBuffer();

  const impBuf = await sharp(impPath)
    .extract({ left: 0, top: 0, width, height })
    .ensureAlpha()
    .raw()
    .toBuffer();

  const diffPng = new PNG({ width, height });
  const diffPixels = pixelmatch(refBuf, impBuf, diffPng.data, width, height, {
    threshold: 0.22,
    includeAA: false,
  });

  const baseName = file.replace('.png', '');
  fs.writeFileSync(path.join(OUT_DIR, `${baseName}-diff.png`), PNG.sync.write(diffPng));

  // Create side-by-side overlay/composite for top section
  const sideBySide = await sharp({
    create: { width: width * 2, height, channels: 4, background: { r: 243, g: 245, b: 248, alpha: 1 } },
  })
    .composite([
      { input: await sharp(refPath).extract({ left: 0, top: 0, width, height }).toBuffer(), left: 0, top: 0 },
      { input: await sharp(impPath).extract({ left: 0, top: 0, width, height }).toBuffer(), left: width, top: 0 },
    ])
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(OUT_DIR, `${baseName}-side-by-side.png`), sideBySide);

  const heightDelta = impMeta.height - refMeta.height;
  reportRows.push({
    page: file,
    refHeight: refMeta.height,
    impHeight: impMeta.height,
    heightDelta,
    comparedRegion: `${width}x${height}`,
    diffPixels,
    diffRatio: Number(((diffPixels / (width * height)) * 100).toFixed(2)),
  });
  console.log(`${file}: refH=${refMeta.height}, impH=${impMeta.height}, diffPixels=${diffPixels}`);
}

fs.writeFileSync('docs/testing/visual-diff-metrics.json', JSON.stringify(reportRows, null, 2));
