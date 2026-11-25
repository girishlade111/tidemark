import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '@/data/services';
import { caseStudies } from '@/data/caseStudies';
import { SeoHead } from '@/components/common/SeoHead';
import { Header } from '@/components/layout/Header';
import { ServiceIllustration } from '@/components/services/ServiceIllustration';
import { FinalCloudCTA } from '@/components/cta/FinalCloudCTA';
import './Pages.css';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState<string>('');

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const featuredStudy = caseStudies.find((c) => c.slug === service.caseStudySlug) || caseStudies[0];
  const relatedServices = services.filter((s) => service.relatedSlugs.includes(s.slug));

  return (
    <>
      <SeoHead title={`${service.title} - Tidemark`} description={service.heroSubtitle} />

      {/* Split Sky Hero */}
      <div className="inset-shell tm-sky-hero-shell">
        <section className="sky-panel tm-detail-sky-hero">
          <img src="/assets/images/sky/sky-inner-hero.webp" alt="" className="sky-panel-bg" />
          <div className="sky-panel-overlay-top" />
          <Header />

          <div className="padding-global tm-detail-hero-body">
            <div className="container-large tm-svc-detail-hero-grid">
              <div className="tm-svc-detail-hero-left">
                <div className="sky-pill-badge">
                  <span className="tm-badge-ring" aria-hidden="true" />
                  <span>
                    <Link to="/services" style={{ textDecoration: 'underline' }}>
                      Services
                    </Link>{' '}
                    / {service.title}
                  </span>
                </div>
                <h1 className="heading-h1 tm-detail-h1">{service.heroTitle}</h1>
                <p className="tm-detail-sub">{service.heroSubtitle}</p>

                <div className="tm-detail-hero-actions">
                  <Link to="/contact" className="tm-btn tm-btn-white tm-btn-md">
                    <span>{service.ctaLabel}</span>
                    <ArrowRight size={15} strokeWidth={2} />
                  </Link>
                  <Link to="/pricing" className="tm-btn tm-btn-glass tm-btn-md">
                    See pricing
                  </Link>
                </div>

                <div className="tm-detail-hero-checks">
                  {service.heroBadges.map((b) => (
                    <span key={b}>
                      <Check size={13} strokeWidth={2.5} />
                      <span>{b}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="tm-svc-detail-hero-right">
                <ServiceIllustration variant={service.illustrationVariant} />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 4 Metrics */}
      <section className="surface-page padding-global" style={{ paddingBlock: '3.5rem' }}>
        <div className="container-large tm-metrics-grid">
          {service.metrics.map((m) => (
            <div key={m.label} className="tm-card tm-metrics-card">
              <div className="tm-metrics-value">{m.value}</div>
              <div className="tm-metrics-label">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What is included */}
      <section className="surface-white padding-section padding-global">
        <div className="container-large">
          <div className="tm-split-head">
            <div>
              <div className="section-badge">
                <span className="section-badge-dot" aria-hidden="true" />
                <span>What is included</span>
              </div>
              <h2 className="heading-h2" style={{ margin: 0 }}>
                {service.deliverablesHeading}
              </h2>
            </div>
            <p className="tm-split-sub">
              One flat retainer covers strategy, build, management and reporting. No setup fee and no markup on spend.
            </p>
          </div>

          <div className="tm-three-col-grid">
            {service.deliverables.map((d) => (
              <div key={d.title} className="tm-card tm-deliverable-card">
                <span className="tm-deliverable-check" aria-hidden="true">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <h3 className="heading-h6">{d.title}</h3>
                <p>{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we run it (90-day timeline) */}
      <section className="surface-page padding-section padding-global">
        <div className="container-large">
          <div className="section-badge">
            <span className="section-badge-dot" aria-hidden="true" />
            <span>How we run it</span>
          </div>
          <h2 className="heading-h2" style={{ margin: '0 0 3rem' }}>
            From audit to
            <br />
            scale in 90 days.
          </h2>

          <div className="tm-timeline-grid">
            {service.process.map((step) => (
              <div key={step.phase} className="tm-timeline-step">
                <span className="tm-timeline-dot" aria-hidden="true" />
                <span className="tm-step-pill">{step.phase}</span>
                <h3 className="heading-h5" style={{ margin: '0.5rem 0 0.375rem' }}>
                  {step.title}
                </h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>

          {/* Highlighted Case Study Card */}
          <div className="tm-card tm-svc-case-banner">
            <img
              src={featuredStudy.heroImage}
              alt={featuredStudy.client}
              className="tm-svc-case-img"
              loading="lazy"
            />
            <div className="tm-svc-case-copy">
              <span className="tm-step-pill">
                Case study · {featuredStudy.client} · {featuredStudy.industry}
              </span>
              <h3 className="heading-h4" style={{ margin: '0.875rem 0' }}>
                {service.caseStudyQuote}
              </h3>
              <p className="tm-service-row-desc">{service.caseStudySummary}</p>

              <div className="tm-svc-case-kpis">
                {service.caseStudyMetrics.map((m) => (
                  <div key={m.label} className="tm-svc-case-kpi">
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>

              <Link to={`/case-studies/${featuredStudy.slug}`} className="tm-btn tm-btn-primary tm-btn-sm">
                <span>Read the case study</span>
                <ArrowRight size={14} strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* Pricing Callout Sky Strip */}
          <div className="sky-panel tm-svc-pricing-strip">
            <img src="/assets/images/sky/sky-inner-hero.webp" alt="" className="sky-panel-bg" loading="lazy" />
            <div className="tm-svc-pricing-strip-inner">
              <div>
                <div className="tm-svc-strip-eyebrow">Included in every plan</div>
                <h3 className="heading-h4" style={{ margin: '0.35rem 0', color: '#ffffff' }}>
                  {service.pricingPlanTitle}
                </h3>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem' }}>
                  {service.pricingCallout}
                </p>
              </div>
              <Link to="/pricing" className="tm-btn tm-btn-white tm-btn-md">
                <span>Compare plans</span>
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service-specific 2x2 FAQ */}
      <section className="surface-white padding-section padding-global">
        <div className="container-large">
          <div className="section-badge">
            <span className="section-badge-dot" aria-hidden="true" />
            <span>FAQ</span>
          </div>
          <h2 className="heading-h2" style={{ margin: '0 0 2.5rem' }}>
            {service.faqHeading}
          </h2>

          <div className="tm-two-col-grid">
            {service.faqs.map((faq) => {
              const isOpen = openFaq === faq.question || true;
              return (
                <div key={faq.question} className="tm-card tm-faq-box">
                  <button
                    type="button"
                    className="tm-faq-box-btn"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq((p) => (p === faq.question ? '' : faq.question))}
                  >
                    <h3 className="heading-h6" style={{ margin: 0 }}>
                      {faq.question}
                    </h3>
                  </button>
                  <p style={{ margin: '0.625rem 0 0', color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                    {faq.answer}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="surface-page padding-section padding-global">
        <div className="container-large">
          <div className="section-badge">
            <span className="section-badge-dot" aria-hidden="true" />
            <span>Other services</span>
          </div>
          <h2 className="heading-h2" style={{ margin: '0 0 2.5rem' }}>
            Works better with.
          </h2>

          <div className="tm-three-col-grid">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                to={`/services/${rel.slug}`}
                className="tm-card tm-card-interactive tm-svc-bento-card"
              >
                <ServiceIllustration variant={rel.illustrationVariant} compact />
                <div className="tm-svc-bento-copy">
                  <h3 className="heading-h5">{rel.title}</h3>
                  <p>{rel.shortDesc}</p>
                  <span className="tm-cs-link-row" style={{ marginTop: '0.75rem' }}>
                    <span>Learn more</span>
                    <ArrowRight size={14} strokeWidth={2} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCloudCTA />
    </>
  );
}
