# Tidemark Website Recreation

Independent multi-page React + TypeScript + Vite reconstruction of the Tidemark growth marketing agency website (`https://tidemark-template.webflow.io/`).

## Stack

- React 19 + TypeScript 5.8
- Vite 6 + React Router v7
- Geist Sans (`@vercel/geist`, SIL OFL 1.1) bundled as local WOFF2
- Lucide React icons (ISC License)
- GSAP + ScrollTrigger (with `prefers-reduced-motion` support)
- Zod form validation + local development submission adapter

## Commands

```bash
npm install        # install dependencies
npm run dev        # start Vite dev server
npm run build      # type-check (tsc -b) and build dist/
npm run preview    # preview production build on port 4173
```

## Structure

- `src/styles/`: Design tokens (`tokens.css`), font declarations (`fonts.css`), typography (`typography.css`), global layout primitives (`global.css`), and animations (`animations.css`).
- `src/data/`: Typed CMS collections (`services.ts`, `caseStudies.ts`, `team.ts`, `articles.ts`, `jobs.ts`) plus `siteConfig.ts`, `pricing.ts`, `faqs.ts`, `testimonials.ts`, and `integrations.ts`.
- `src/components/`: Reusable layout, hero, dashboard, services, results carousel, pricing, FAQ, CTA, and legal components.
- `src/pages/`: 15 static pages and 5 CMS detail templates covering 47 total routes.
- `public/assets/`: Local WebP photography, sky/cloud backdrops, brand mark SVG, and WOFF2 fonts.
- `docs/`: Reference audit, manifests, design tokens, interaction/responsive audits, and verification reports.

## Limitations

- Form submissions (`Hero`, `FinalCloudCTA`, `Contact`, `Newsletter`, `Job Application`) use `src/components/common/DevSubmissionAdapter.ts` and do not transmit data to any external email or backend service.
- Photographic assets are newly generated replacements stored under `public/assets/images/` rather than paid Webflow template image exports.
- Marketing metrics, client quotes, case study figures, team profiles, and job openings are demonstration content.
