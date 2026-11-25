# Performance Report

**Audit Date:** 2026-11-24  
**Target Build:** `npm run build` (`vite build` + `vite preview --port 4173`)  
**Lighthouse Status:** Not measured with Lighthouse CLI (not executed in this environment); runtime timing and asset sizes were measured directly from `dist/` and headless Chromium via Playwright (`networkidle`, `1440x900`).

## 1. Production Bundle Output (`vite build`)

- **Build Tooling:** `tsc -b && vite build` (`✓ built in 6.16s`)
- **Total `dist/` Assets:** 86 files, `2,188,495` bytes (`~2.09 MiB` across all routes, WebP imagery, and WOFF2 fonts combined)
- **Entry HTML:** `dist/index.html` — `0.65 kB` (`0.40 kB` gzip)
- **Main Vendor / App JS Chunk:** `dist/assets/index-HflCXao1.js` — `340.06 kB` (`103.26 kB` gzip)
- **Route Splitting:** Enabled via `React.lazy()` in `src/App.tsx` so secondary routes load on demand.
- **Largest Bundled Media Assets (Top 10 WebP):**
  - `assets/images/about/about-collaboration.webp` — `182,058` bytes
  - `assets/images/careers/careers-workshop.webp` — `170,272` bytes
  - `assets/images/about/about-meeting-main.webp` — `149,600` bytes
  - `assets/images/team/team-daniel-okafor.webp` — `83,026` bytes
  - `assets/images/team/team-clara-benet.webp` — `72,484` bytes
  - `assets/images/team/team-elena-ruiz.webp` — `68,938` bytes
  - `assets/images/team/team-aisha-malik.webp` — `67,448` bytes
  - `assets/images/products/product-fashion.webp` — `58,906` bytes
  - `assets/images/team/team-mei-tanaka.webp` — `53,844` bytes
  - `assets/images/products/product-coffee.webp` — `48,606` bytes

## 2. Playwright Runtime Navigation & Web Vitals (`1440x900`, `vite preview`)

Measured on local `http://localhost:4173` without artificial throttling (`PerformanceNavigationTiming`, `paint`, `layout-shift`, `largest-contentful-paint`):

| Route | TTFB (ms) | DCL (ms) | Load (ms) | FCP (ms) | LCP (ms) | CLS | Requests | Transfer (KB) |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `/` | 590 | 771 | 773 | 0* | 0* | 0.0000 | 36 | 245 |
| `/services` | 6 | 106 | 106 | 268 | 672 | 0.3008 | 35 | 606 |
| `/results` | 10 | 149 | 150 | 316 | 640 | 0.3002 | 36 | 710 |
| `/about` | 3 | 66 | 66 | 172 | 604 | 0.3002 | 34 | 1,129 |
| `/pricing` | 8 | 99 | 99 | 228 | 612 | 0.3002 | 24 | 436 |
| `/blog` | 5 | 87 | 87 | 196 | 548 | 0.3008 | 23 | 1,083 |
| `/careers` | 4 | 55 | 55 | 196 | 488 | 0.3008 | 26 | 917 |
| `/contact` | 6 | 66 | 66 | 148 | 452 | 0.1509 | 15 | 328 |

\*On the cold-start `/` browser launch, Chromium `paint` / `largest-contentful-paint` observers reported `0` in this harness timing window, while `loadEventEnd` completed at `773 ms` (`36` requests, `245 KB` transferred).

## 3. Observations & Optimization Opportunities

- **Typography Self-Hosting:** `Geist` WOFF2 weights (`400`, `500`, `600`, `700`, `900`, ~`45-47 KB` each) are served locally from `public/assets/fonts/` with zero external font round-trips.
- **CLS on Lazy Inner Routes (`0.1509` - `0.3008`):** Direct page loads onto inner routes show an initial layout shift because `React.Suspense` currently uses `fallback={null}` while the lazy route module resolves, causing `Footer` to render first and shift down once the route mounts. Adding a `min-height` page shell fallback would eliminate this shift if further tuned.
- **Image Format Optimization:** All raster photography uses compressed `.webp` assets (`48 KB` to `182 KB`). Hero images and `SkyHero` assets remain under `185 KB`.
