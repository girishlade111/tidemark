# Interaction Inventory

| Component | Interaction | Implementation | Verification Status |
|---|---|---|---|
| Desktop Navigation | Active route state, hover contrast | `Header.tsx` + `Header.css` | Verified via Playwright |
| Mobile Drawer Menu | Burger toggle, Escape key close, body scroll lock | `Header.tsx` | Verified at 390x844 |
| Home Hero Audit Prompt | Auto-rotating goal prompts, submits to `/contact?goal=...` | `HomeHero.tsx` | Verified |
| Hero Dashboard | Interactive `7D / 30D / 90D / 12M` timeframe & sidebar selection | `DashboardShowcase.tsx` | Verified (`90D` -> `£486,420`) |
| Integrations Diagram | Hover node highlights hub connection line | `IntegrationEcosystem.tsx` | Verified |
| Featured Results Carousel | Prev/Next buttons, keyboard Left/Right arrows, progress bar | `FeaturedResultCarousel.tsx` | Verified (`01` -> `02`) |
| Results Industry Filter | Filter pills (`All`, `Ecommerce`, `B2B SaaS`, `Health`, `Finance`) | `ResultsPage.tsx` | Verified |
| Testimonial Switcher | 5 avatar tabs swap quote, highlight, author, and pill | `TestimonialSection.tsx` | Verified |
| Pricing Billing Toggle | `Monthly` vs `Quarterly -10%` price & note switch | `PricingSection.tsx` | Verified (`£2,900` -> `£2,610`) |
| FAQ Accordion | Smooth grid-row expand/collapse with plus/minus icon swap | `FAQSection.tsx` | Verified |
| Team Card Bio Overlay | Hover reveals bio & link overlay on About grid | `AboutPage.tsx` | Verified |
| Blog Category Filter | Topic pills filter latest articles grid | `BlogPage.tsx` | Verified |
| Careers Team Filter | Department pills filter open roles list | `CareersPage.tsx` | Verified |
| Legal Page TOC | IntersectionObserver active section highlight + smooth scroll | `LegalLayout.tsx` | Verified |
| Forms & Newsletter | Zod validation + loading/error/success via `DevSubmissionAdapter` | `FinalCloudCTA`, `ContactPage`, `JobDetailPage`, `Footer`, `BlogPage` | Verified |
| Back to Top | Smooth scroll to top | `Footer.tsx` | Verified |
