import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '@/data/services';
import { SeoHead } from '@/components/common/SeoHead';
import { SkyHero } from '@/components/heroes/SkyHero';
import { MetricsSection } from '@/components/common/MetricsSection';
import { ServiceIllustration } from '@/components/services/ServiceIllustration';
import { GrowthProcess } from '@/components/process/GrowthProcess';
import { IntegrationEcosystem } from '@/components/integrations/IntegrationEcosystem';
import { FAQSection } from '@/components/faq/FAQSection';
import { FinalCloudCTA } from '@/components/cta/FinalCloudCTA';
import './Pages.css';

export function ServicesPage() {
  return (
    <>
      <SeoHead
        title="Services - Tidemark"
        description="Search, social, content and lifecycle, planned as one system and reported against revenue every week."
      />

      <SkyHero
        badge="Five channels, one team"
        title={
          <>
            Everything that
            <br />
            moves revenue.
          </>
        }
        subtitle="Search, social, content and lifecycle, planned as one system and reported against revenue every week."
      />

      <MetricsSection />

      <section className="surface-white padding-section padding-global">
        <div className="container-large">
          <div className="tm-split-head">
            <div>
              <div className="section-badge">
                <span className="section-badge-dot" aria-hidden="true" />
                <span>What we do</span>
              </div>
              <h2 className="heading-h2" style={{ margin: 0 }}>
                Five services,
                <br />
                built to work together.
              </h2>
            </div>
            <p className="tm-split-sub">
              Pick one channel or all five. Every service shares the same data, the same report and the same growth lead.
            </p>
          </div>

          <div className="tm-service-rows">
            {services.map((svc, idx) => {
              const reversed = idx % 2 === 1;
              return (
                <article
                  key={svc.id}
                  className={`tm-card tm-service-row${reversed ? ' is-reversed' : ''}`}
                >
                  <div className="tm-service-row-media">
                    <ServiceIllustration variant={svc.illustrationVariant} />
                  </div>

                  <div className="tm-service-row-copy">
                    <span className="tm-service-row-idx">{svc.index}</span>
                    <h3 className="heading-h4" style={{ margin: '0.375rem 0 0.5rem' }}>
                      {svc.title}
                    </h3>
                    <p className="tm-service-row-desc">{svc.shortDesc}</p>

                    <ul className="tm-service-feature-grid">
                      {svc.deliverables.map((d) => (
                        <li key={d.title}>
                          <span className="tm-check-chip" aria-hidden="true">
                            <Check size={11} strokeWidth={2.6} />
                          </span>
                          <span>{d.title}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="tm-service-stat-chip">
                      <span className="section-badge-dot" aria-hidden="true" />
                      <span>{svc.highlightPill}</span>
                    </div>

                    <div className="tm-service-row-actions">
                      <Link to="/contact" className="tm-btn tm-btn-primary tm-btn-sm">
                        <span>{svc.ctaLabel}</span>
                        <ArrowRight size={14} strokeWidth={2} />
                      </Link>
                      <Link to={`/services/${svc.slug}`} className="tm-text-link">
                        <span>{svc.exploreLabel}</span>
                        <ArrowRight size={14} strokeWidth={2} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <GrowthProcess />
      <IntegrationEcosystem ctaText="Ask about your stack" />
      <FAQSection />
      <FinalCloudCTA />
    </>
  );
}
