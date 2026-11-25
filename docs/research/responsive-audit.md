# Responsive Audit

Breakpoints aligned with Tidemark Style Guide:
- **Desktop (`>= 992px`)**: Measured at `1440x900`. `72px` horizontal outer margins, `120px` section padding, 3-to-4 column grids, side-by-side split sections, floating testimonial rating cards & CTA side badges visible.
- **Tablet (`768px - 991px`)**: Measured at `1024x768`. Mobile burger menu button active (`<= 991px`), `40px` horizontal margins, `80px` section padding, 2-column metric/rule/team grids, split sections stack cleanly.
- **Mobile (`<= 767px`)**: Measured at `390x844`. `20px` horizontal margins, `64px` section padding, `44px` minimum button/touch target height, floating decorative cards hidden to prevent overlap, integration radial diagram transitions to 2-column readable cards, pricing comparison table scrolls horizontally without breaking layout.

Playwright horizontal overflow check (`document.documentElement.scrollWidth > window.innerWidth`) verified across `1440x900`, `1024x768`, and `390x844`.
