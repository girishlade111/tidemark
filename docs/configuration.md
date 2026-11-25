# Configuration Guide

## 1. Brand & Contact Configuration
Edit `src/data/siteConfig.ts`:
- `brandName`, `tagline`, `email`, `careersEmail`, `legalEmail`, `privacyEmail`, `phone`
- `navLinks`, `footerPrimaryLinks`, `footerUtilityLinks`, `socialLinks`
- `offices`, `footerClocks`, `headlineMetrics`

## 2. Design Tokens
Edit `src/styles/tokens.css`:
- Brand colors (`--primary-cobalt`, `--primary-royal`, `--primary-sky-blue`, `--primary-deep-blue`)
- Neutrals (`--neutral-ink`, `--neutral-background`, `--neutral-surface`, `--neutral-night`)
- Typography scale & responsive overrides (`@media screen and (max-width: 991px)` and `(max-width: 767px)`)
- Border radii & elevation shadows

## 3. CMS Content Collections
All dynamic routes resolve automatically from `src/data/`:
- `src/data/services.ts` -> `/services/:slug`
- `src/data/caseStudies.ts` -> `/case-studies/:slug`
- `src/data/team.ts` -> `/team/:slug`
- `src/data/articles.ts` -> `/blog/:slug`
- `src/data/jobs.ts` -> `/careers/:slug`

## 4. Form Submission Adapter
`src/components/common/DevSubmissionAdapter.ts` provides validated client-side feedback in development. Replace `submitDevelopmentForm` with your production API `fetch` call and server-side validation before deploying.
