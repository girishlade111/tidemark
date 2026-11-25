import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const discoveredPages = JSON.parse(fs.readFileSync('docs/research/discovered-pages.json', 'utf8'));
const rawAssets = JSON.parse(fs.readFileSync('docs/research/discovered-raw-assets.json', 'utf8'));

// 1. route-manifest.json
const routeManifest = discoveredPages.map((p) => {
  let pageType = 'static';
  if (p.route.startsWith('/services/')) pageType = 'service-detail';
  else if (p.route.startsWith('/case-studies/')) pageType = 'case-study-detail';
  else if (p.route.startsWith('/team/')) pageType = 'team-detail';
  else if (p.route.startsWith('/blog/')) pageType = 'blog-detail';
  else if (p.route.startsWith('/careers/')) pageType = 'job-detail';
  else if (['/privacy', '/terms', '/style-guide', '/licenses', '/changelog', '/instructions', '/404'].includes(p.route)) pageType = 'utility';

  return {
    referenceUrl: p.url,
    localRoute: p.route,
    pageTitle: p.title.replace(' - Webflow HTML website template', ''),
    pageType,
    hasForm: p.hasForm,
    hasVideo: p.hasVideo,
    inspectionStatus: p.status === 200 ? 'verified' : 'failed',
  };
});
fs.writeFileSync('docs/research/route-manifest.json', JSON.stringify(routeManifest, null, 2));

// 2. asset-manifest.json
const localImages = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else localImages.push(full.replace(/\\/g, '/'));
  }
}
walk('public/assets');

const assetManifest = [];
for (const file of localImages) {
  const buf = fs.readFileSync(file);
  const checksum = crypto.createHash('sha256').update(buf).digest('hex');
  const ext = path.extname(file).toLowerCase();
  let width = 0;
  let height = 0;
  let mimeType = 'application/octet-stream';
  let licenseStatus = 'generated';

  if (ext === '.webp') {
    mimeType = 'image/webp';
    const meta = await sharp(file).metadata();
    width = meta.width || 0;
    height = meta.height || 0;
  } else if (ext === '.svg') {
    mimeType = 'image/svg+xml';
    licenseStatus = 'generated';
  } else if (ext === '.woff2') {
    mimeType = 'font/woff2';
    licenseStatus = 'verified (SIL OFL 1.1 - Geist)';
  }

  assetManifest.push({
    id: path.basename(file, ext),
    localPath: '/' + file.replace(/^public\//, ''),
    mediaType: ext === '.woff2' ? 'font' : 'image',
    mimeType,
    originalWidth: width,
    originalHeight: height,
    fileSizeBytes: buf.length,
    licenseStatus,
    acquisitionStatus: ext === '.woff2' ? 'bundled-open-source' : 'local-generated-replacement',
    checksum,
  });
}

fs.writeFileSync(
  'docs/research/asset-manifest.json',
  JSON.stringify(
    {
      referenceDiscoveredUrlCount: rawAssets.length,
      localBundledAssetsCount: assetManifest.length,
      assets: assetManifest,
    },
    null,
    2,
  ),
);

// 3. motion-media-manifest.json
const motionManifest = [
  { id: 'hero-sequence', page: '/', target: 'Hero H1, audit prompt, dashboard', sourceType: 'CSS + React', trigger: 'Page load', easing: 'cubic-bezier(0.22, 1, 0.36, 1)', videoPresent: false },
  { id: 'section-reveal', page: 'all', target: 'Section cards & headings', sourceType: 'GSAP ScrollTrigger', trigger: 'Scroll into view', easing: 'power3.out', durationMs: 600 },
  { id: 'results-carousel', page: '/, /results', target: 'FeaturedResultCarousel', sourceType: 'React state + CSS transform', trigger: 'Click / Arrow keys', durationMs: 400 },
  { id: 'pricing-toggle', page: '/, /pricing', target: 'PricingSection', sourceType: 'React state + CSS transition', trigger: 'Click Monthly/Quarterly', durationMs: 200 },
  { id: 'faq-accordion', page: '/, /services, /pricing', target: 'FAQSection', sourceType: 'CSS grid-template-rows', trigger: 'Click question', durationMs: 400 },
  { id: 'team-card-bio', page: '/about', target: 'TeamCard overlay', sourceType: 'CSS opacity transition', trigger: 'Hover', durationMs: 200 },
  { id: 'testimonial-switch', page: '/, /results, /about', target: 'TestimonialSection', sourceType: 'React state + CSS transition', trigger: 'Avatar click', durationMs: 200 },
  { id: 'cta-prompt-rotate', page: '/, CTA', target: 'HomeHero & FinalCloudCTA', sourceType: 'React interval', trigger: 'Auto (pauses on input)', durationMs: 3400 },
];
fs.writeFileSync('docs/research/motion-media-manifest.json', JSON.stringify(motionManifest, null, 2));
console.log('Generated route, asset, and motion manifests.');
