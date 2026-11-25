# Functional Test Report

**Audit Date:** 2026-11-24  
**Test Suite:** `tests/verify_site.py` (orchestrated via `node tests/run_all_checks.mjs`)  
**Target Build:** `npm run build` (`vite preview --port 4173`)  
**Result Artifact:** `docs/testing/test-results.json`

## 1. Execution Summary

- **Total Checks Executed:** `66`
- **Passed:** `66`
- **Failed:** `0`
- **Console / Page Errors:** `0` (`errors=[]`)
- **Broken Images:** `0` (`broken=[]`)
- **Horizontal Overflow Issues:** `0` (`issues=[]` across `1440x900`, `1024x768`, `390x844`)

## 2. Route Coverage (47/47 Routes)

### Static & Utility Routes (15)
| Route | Verified Title | Images | Status |
|---|---|---:|---|
| `/` | `Tidemark - Revenue-First Growth Marketing Agency` | 28 | PASS |
| `/services` | `Services - Tidemark` | 18 | PASS |
| `/results` | `Results - Tidemark` | 16 | PASS |
| `/about` | `About - Tidemark` | 18 | PASS |
| `/pricing` | `Pricing - Tidemark` | 7 | PASS |
| `/blog` | `Blog - Tidemark` | 15 | PASS |
| `/careers` | `Careers - Tidemark` | 7 | PASS |
| `/contact` | `Contact - Tidemark` | 1 | PASS |
| `/privacy` | `Privacy policy - Tidemark` | 1 | PASS |
| `/terms` | `Terms of service - Tidemark` | 1 | PASS |
| `/style-guide` | `Style Guide - Tidemark` | 3 | PASS |
| `/licenses` | `Licenses - Tidemark` | 1 | PASS |
| `/changelog` | `Changelog - Tidemark` | 1 | PASS |
| `/instructions` | `Instructions - Tidemark` | 1 | PASS |
| `/404` | `404 - Tidemark` | 1 | PASS |

### CMS Collection Detail Routes (32)
- **Services (5):** `/services/seo-and-content`, `/services/paid-search`, `/services/paid-social`, `/services/content-and-creative`, `/services/lifecycle-and-cro` — all PASS (`broken=0`).
- **Case Studies (7):** `/case-studies/northwind-coffee`, `/case-studies/lumi-skin`, `/case-studies/halden-health`, `/case-studies/oakline`, `/case-studies/maison-rose`, `/case-studies/fieldbox`, `/case-studies/northrun` — all PASS (`broken=0`).
- **Team Members (7):** `/team/daniel-okafor`, `/team/clara-benet`, `/team/tom-hale`, `/team/mei-tanaka`, `/team/priya-shah`, `/team/elena-ruiz`, `/team/aisha-malik` — all PASS (`broken=0`).
- **Blog Posts (7):** `/blog/northwind-organic-search`, `/blog/fewer-google-ads-campaigns`, `/blog/creative-testing-system`, `/blog/topic-map-buying-intent`, `/blog/five-email-flows`, `/blog/one-page-cfo-report`, `/blog/tiktok-for-b2b` — all PASS (`broken=0`).
- **Jobs (6):** `/careers/paid-social-lead`, `/careers/senior-ppc-manager`, `/careers/seo-strategist`, `/careers/content-editor`, `/careers/growth-analyst`, `/careers/client-partner` — all PASS (`broken=0`).

## 3. Navigation, Interactive & Hygiene Assertions (19 Checks)

| Check | Outcome | Notes |
|---|---|---|
| Navigation reload & back/forward | PASS | Direct URL open, browser reload, history back/forward |
| Unknown route renders 404 | PASS | Branded 404 fallback tested |
| Geist font loaded | PASS | Verified via `document.fonts` |
| Dashboard timeframe toggle (90D) | PASS | Interactive metric update on Home dashboard showcase |
| Results carousel next slide | PASS | Slide index transition & content update |
| Testimonial avatar selection | PASS | 5-avatar switcher updates quote & author |
| Pricing quarterly -10% toggle | PASS | Retainer billing toggle updates tier prices |
| FAQ accordion toggle | PASS | Expand/collapse behavior and ARIA state |
| FinalCloudCTA validation & submit | PASS | Local submission via `DevSubmissionAdapter` |
| Footer newsletter validation & submit | PASS | Email validation + confirmation message |
| Footer Back to top button | PASS | Smooth scroll reset to top |
| Results industry filter (`B2B SaaS`) | PASS | Category filter updates displayed case studies |
| Blog category filter (`Paid social`) | PASS | Category filter updates displayed articles |
| Careers team filter (`Data`) | PASS | Department filter updates open roles |
| Contact form validation & submit | PASS | Required-field checks + local dev submission feedback |
| Mobile menu open & Escape close | PASS | Hamburger menu drawer + Escape keyboard dismissal |
| Zero horizontal overflow (all tested viewports) | PASS | `issues=[]` across `1440x900`, `1024x768`, `390x844` |
| Zero console/page errors | PASS | `errors=[]` |
| All images loaded cleanly | PASS | `broken=[]` |
