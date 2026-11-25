import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { SeoHead } from '@/components/common/SeoHead';
import { SkyHero } from '@/components/heroes/SkyHero';
import { ServiceIllustration } from '@/components/services/ServiceIllustration';
import { CaseStudyCard } from '@/components/results/CaseStudyCard';
import { caseStudies } from '@/data/caseStudies';
import './Pages.css';

const SWATCHES = [
  { group: 'Primary', items: [
    { name: 'Cobalt', hex: '#2463EB', usage: 'Links, accents, active states' },
    { name: 'Royal', hex: '#1C54E0', usage: 'Gradient end, hover and pressed' },
    { name: 'Sky Blue', hex: '#3B7BFF', usage: 'Gradient start, glows' },
    { name: 'Deep Blue', hex: '#0A3D9A', usage: 'Shadows, overlays on photos' },
  ]},
  { group: 'Neutrals', items: [
    { name: 'Ink', hex: '#0A1630', usage: 'Headings, body text, dark buttons' },
    { name: 'Background', hex: '#F3F5F8', usage: 'Page and alternate sections' },
    { name: 'Surface', hex: '#F6F8FB', usage: 'Inputs, table headers, chips' },
    { name: 'White', hex: '#FFFFFF', usage: 'Cards, panels, text on blue' },
  ]},
  { group: 'Sky tints', items: [
    { name: 'Tint', hex: '#EAF1FF', usage: 'Icon chips, selected states' },
    { name: 'Sky', hex: '#CFE2FF', usage: 'Accent words on blue' },
    { name: 'Mist', hex: '#A9CBFF', usage: 'Charts, secondary data' },
    { name: 'Air', hex: '#5B9DFA', usage: 'Charts, gradient end' },
  ]},
  { group: 'Status', items: [
    { name: 'Success', hex: '#16A34A', usage: 'Positive change, live dots' },
    { name: 'Warning', hex: '#F59E0B', usage: 'Ratings, testing status' },
    { name: 'Error', hex: '#EF4444', usage: 'Notification dots, errors' },
  ]},
];

const TYPE_SPECIMENS = [
  { label: 'Display XL', cls: 'heading-display-xl', sample: 'Let’s go higher.', spec: '132px · Bold · -0.06em' },
  { label: 'Display', cls: 'heading-display', sample: 'Market Smarter.', spec: '84px · Bold · -0.04em' },
  { label: 'Heading 1', cls: 'heading-h1', sample: 'Four ways we move.', spec: '64px · Bold · -0.045em' },
  { label: 'Heading 2', cls: 'heading-h2', sample: 'Simple pricing.', spec: '56px · Bold · -0.04em' },
  { label: 'Heading 3', cls: 'heading-h3', sample: 'One growth engine.', spec: '48px · Bold · -0.035em' },
  { label: 'Heading 4', cls: 'heading-h4', sample: 'Tidemark talks revenue.', spec: '32px · SemiBold · -0.025em' },
  { label: 'Heading 5', cls: 'heading-h5', sample: 'Growth plan', spec: '24px · Bold · -0.02em' },
  { label: 'Heading 6', cls: 'heading-h6', sample: 'Revenue by channel', spec: '18px · SemiBold · -0.01em' },
];

export function StyleGuidePage() {
  return (
    <>
      <SeoHead
        title="Style Guide - Tidemark"
        description="Every font, colour, component and rule behind the Tidemark design system."
        noIndex
      />

      <SkyHero
        badge="Design system · v1.0"
        title="Style Guide"
        subtitle="Every font, colour, component and rule behind the Tidemark design system. Edit tokens in src/styles/tokens.css and the whole site follows."
      >
        <div className="tm-chip-list" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
          <a href="#sg-type" className="sky-pill-badge">01 Typography</a>
          <a href="#sg-colors" className="sky-pill-badge">02 Colour</a>
          <a href="#sg-buttons" className="sky-pill-badge">03 Buttons</a>
          <a href="#sg-spacing" className="sky-pill-badge">04 Spacing &amp; Radius</a>
          <a href="#sg-components" className="sky-pill-badge">05 Components</a>
          <a href="#sg-responsive" className="sky-pill-badge">06 Responsive</a>
        </div>
      </SkyHero>

      <section id="sg-type" className="surface-page padding-section padding-global">
        <div className="container-large">
          <div className="section-badge">
            <span className="section-badge-dot" aria-hidden="true" />
            <span>01 · Typography</span>
          </div>
          <h2 className="heading-h2" style={{ margin: '0 0 2.5rem' }}>
            Geist Sans · 4 weights
          </h2>

          <div className="tm-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {TYPE_SPECIMENS.map((t) => (
              <div
                key={t.label}
                style={{
                  borderBottom: '1px solid var(--border-default)',
                  paddingBottom: '1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: '1.5rem',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-cobalt)', fontWeight: 700, marginBottom: '0.35rem' }}>
                    {t.label} · {t.spec}
                  </div>
                  <div className={t.cls}>{t.sample}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sg-colors" className="surface-white padding-section padding-global">
        <div className="container-large">
          <div className="section-badge">
            <span className="section-badge-dot" aria-hidden="true" />
            <span>02 · Colour</span>
          </div>
          <h2 className="heading-h2" style={{ margin: '0 0 2.5rem' }}>
            Cobalt &amp; Sky on crisp neutrals
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {SWATCHES.map((group) => (
              <div key={group.group}>
                <h3 className="heading-h6" style={{ margin: '0 0 1rem' }}>
                  {group.group}
                </h3>
                <div className="tm-four-col-grid">
                  {group.items.map((c) => (
                    <div key={c.name} className="tm-card" style={{ padding: '0.75rem' }}>
                      <div
                        style={{
                          height: 84,
                          borderRadius: 12,
                          backgroundColor: c.hex,
                          border: '1px solid var(--border-default)',
                          marginBottom: '0.75rem',
                        }}
                      />
                      <strong style={{ display: 'block', fontSize: '0.9375rem' }}>{c.name}</strong>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-cobalt)' }}>
                        {c.hex}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                        {c.usage}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sg-buttons" className="surface-page padding-section padding-global">
        <div className="container-large">
          <div className="section-badge">
            <span className="section-badge-dot" aria-hidden="true" />
            <span>03 · Buttons &amp; Controls</span>
          </div>
          <h2 className="heading-h2" style={{ margin: '0 0 2rem' }}>
            Button variants &amp; states
          </h2>

          <div className="tm-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="tm-chip-list">
              <button type="button" className="tm-btn tm-btn-primary tm-btn-lg">Primary Large</button>
              <button type="button" className="tm-btn tm-btn-primary tm-btn-md">Primary Medium</button>
              <button type="button" className="tm-btn tm-btn-primary tm-btn-sm">Primary Small</button>
              <button type="button" className="tm-btn tm-btn-primary tm-btn-md" disabled>Disabled</button>
            </div>
            <div className="tm-chip-list">
              <button type="button" className="tm-btn tm-btn-secondary tm-btn-md">Secondary</button>
              <button type="button" className="tm-btn tm-btn-dark tm-btn-md">Dark</button>
              <button type="button" className="tm-btn tm-btn-ghost tm-btn-md">Ghost</button>
              <Link to="/results" className="tm-text-link">
                <span>Text link underline</span>
                <ArrowRight size={14} />
              </Link>
            </div>
            <div
              style={{
                padding: '1.5rem',
                borderRadius: 16,
                background: 'var(--gradient-panel)',
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <button type="button" className="tm-btn tm-btn-white tm-btn-md">White on sky</button>
              <button type="button" className="tm-btn tm-btn-glass tm-btn-md">Glass on sky</button>
            </div>
          </div>
        </div>
      </section>

      <section id="sg-spacing" className="surface-white padding-section padding-global">
        <div className="container-large">
          <div className="section-badge">
            <span className="section-badge-dot" aria-hidden="true" />
            <span>04 · Spacing, Radius &amp; Elevation</span>
          </div>
          <h2 className="heading-h2" style={{ margin: '0 0 2rem' }}>
            1296px container · 72px margins
          </h2>

          <div className="tm-four-col-grid">
            {[
              { label: 'Tag radius', val: '6px' },
              { label: 'Button radius', val: '10px' },
              { label: 'Card radius', val: '20px' },
              { label: 'Section radius', val: '28px' },
            ].map((item) => (
              <div key={item.label} className="tm-card" style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary-cobalt)' }}>
                  {item.val}
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, marginTop: '0.25rem' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sg-components" className="surface-page padding-section padding-global">
        <div className="container-large">
          <div className="section-badge">
            <span className="section-badge-dot" aria-hidden="true" />
            <span>05 · Live Reusable Components</span>
          </div>
          <h2 className="heading-h2" style={{ margin: '0 0 2rem' }}>
            Service cards, case studies &amp; chips
          </h2>

          <div className="tm-two-col-grid" style={{ alignItems: 'start' }}>
            <div className="tm-card" style={{ padding: '1rem' }}>
              <ServiceIllustration variant="search" />
              <div style={{ padding: '1rem 0.5rem 0.25rem' }}>
                <h3 className="heading-h5" style={{ margin: '0 0 0.25rem' }}>Paid search card</h3>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  Live HTML/SVG overlay on sky-card.webp
                </p>
              </div>
            </div>
            <CaseStudyCard study={caseStudies[0]} />
          </div>
        </div>
      </section>

      <section id="sg-responsive" className="surface-white padding-section padding-global">
        <div className="container-large">
          <div className="section-badge">
            <span className="section-badge-dot" aria-hidden="true" />
            <span>06 · Responsive Breakpoints</span>
          </div>
          <h2 className="heading-h2" style={{ margin: '0 0 2rem' }}>
            Desktop · Tablet (≤991px) · Mobile (≤767px)
          </h2>

          <div className="tm-three-col-grid">
            {[
              { bp: 'Desktop (≥992px)', margin: '72px page margin', padding: '120px section padding', cols: '3 to 4 columns' },
              { bp: 'Tablet (768–991px)', margin: '40px page margin', padding: '80px section padding', cols: '2 columns, menu button' },
              { bp: 'Mobile (≤767px)', margin: '20px page margin', padding: '64px section padding', cols: 'Stacked, 44px touch targets' },
            ].map((b) => (
              <div key={b.bp} className="tm-card" style={{ padding: '1.5rem' }}>
                <span className="tm-deliverable-check" style={{ marginBottom: '0.75rem' }}>
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <h3 className="heading-h6" style={{ margin: '0 0 0.5rem' }}>{b.bp}</h3>
                <p style={{ margin: '0 0 0.25rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{b.margin}</p>
                <p style={{ margin: '0 0 0.25rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{b.padding}</p>
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{b.cols}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
