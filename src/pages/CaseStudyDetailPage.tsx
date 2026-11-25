import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import { SeoHead } from '@/components/common/SeoHead';
import { SkyHero } from '@/components/heroes/SkyHero';
import { CaseStudyCard } from '@/components/results/CaseStudyCard';
import { FinalCloudCTA } from '@/components/cta/FinalCloudCTA';
import './Pages.css';

export function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) {
    return <Navigate to="/404" replace />;
  }

  const related = caseStudies.filter((c) => study.relatedSlugs.includes(c.slug)).slice(0, 3);

  return (
    <>
      <SeoHead title={`${study.client} - Tidemark`} description={study.headline} />

      <SkyHero badge={`Results / ${study.client}`} title={study.headline}>
        <div className="tm-cs-hero-meta-grid">
          <div className="tm-cs-hero-meta-pill">
            <span>Client</span>
            <strong>{study.client}</strong>
          </div>
          <div className="tm-cs-hero-meta-pill">
            <span>Industry</span>
            <strong>{study.industry}</strong>
          </div>
          <div className="tm-cs-hero-meta-pill">
            <span>Services</span>
            <strong>{study.serviceLabel}</strong>
          </div>
          <div className="tm-cs-hero-meta-pill">
            <span>Timeline</span>
            <strong>{study.timeline}</strong>
          </div>
        </div>
      </SkyHero>

      <section className="surface-page padding-global" style={{ paddingTop: '2.5rem' }}>
        <div className="container-large">
          <div className="tm-cs-cover-frame">
            <img src={study.heroImage} alt={study.client} className="tm-cs-cover-img" />
          </div>

          <div className="tm-metrics-grid" style={{ marginTop: '2rem' }}>
            {study.kpis.map((k) => (
              <div key={k.label} className="tm-card tm-metrics-card">
                <div className="tm-metrics-value">{k.value}</div>
                <div className="tm-metrics-label">{k.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-page padding-section padding-global">
        <div className="container-large tm-legal-grid">
          <aside className="tm-card tm-legal-toc">
            <div className="tm-legal-toc-title">At a glance</div>
            <nav aria-label="Case study sections">
              <ul>
                <li>
                  <a href="#challenge" className="tm-legal-toc-link">
                    <span className="tm-legal-toc-num">01</span>
                    <span>The challenge</span>
                  </a>
                </li>
                <li>
                  <a href="#approach" className="tm-legal-toc-link">
                    <span className="tm-legal-toc-num">02</span>
                    <span>Our approach</span>
                  </a>
                </li>
                <li>
                  <a href="#results" className="tm-legal-toc-link">
                    <span className="tm-legal-toc-num">03</span>
                    <span>The results</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div className="tm-cs-toc-services">
              <div className="tm-legal-toc-title">Services used</div>
              <div className="tm-chip-list">
                {study.servicesUsed.map((s) => (
                  <span key={s} className="tm-tag-chip">
                    {s}
                  </span>
                ))}
              </div>
              <Link
                to="/contact"
                className="tm-btn tm-btn-primary tm-btn-sm"
                style={{ width: '100%', marginTop: '1rem' }}
              >
                <span>Book a similar audit</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </aside>

          <div className="tm-legal-content">
            <article id="challenge" className="tm-cs-section">
              <div className="tm-legal-sec-head">
                <span className="tm-legal-sec-num">01</span>
                <h2 className="heading-h4">The challenge</h2>
              </div>
              {study.challengeParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </article>

            <article id="approach" className="tm-cs-section">
              <div className="tm-legal-sec-head">
                <span className="tm-legal-sec-num">02</span>
                <h2 className="heading-h4">Our approach</h2>
              </div>
              <p>{study.approachSummary}</p>

              <div className="tm-cs-steps">
                {study.approachSteps.map((s) => (
                  <div key={s.step} className="tm-card tm-cs-step-card">
                    <span className="tm-cs-step-num">{s.step}</span>
                    <div>
                      <strong>{s.title}</strong>
                      <p>{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="tm-cs-blue-quote">
                <blockquote>{study.quote}</blockquote>
                <div className="tm-cs-quote-author">
                  <strong>{study.quoteAuthor}</strong>
                  <span>{study.quoteRole}</span>
                </div>
              </div>
            </article>

            <article id="results" className="tm-cs-section">
              <div className="tm-legal-sec-head">
                <span className="tm-legal-sec-num">03</span>
                <h2 className="heading-h4">The results</h2>
              </div>
              <p>{study.resultsSummary}</p>

              {/* Grouped Monthly Comparison Chart */}
              <div className="tm-card tm-cs-chart-card">
                <div className="tm-cs-chart-head">
                  <strong>Monthly revenue by channel</strong>
                  <div className="tm-cs-chart-legend">
                    <span>
                      <i style={{ background: '#2463eb' }} />
                      {study.chartLabelPrimary}
                    </span>
                    <span>
                      <i style={{ background: '#a9cbff' }} />
                      {study.chartLabelSecondary}
                    </span>
                  </div>
                </div>
                <div className="tm-cs-chart-bars" role="img" aria-label="Monthly performance comparison chart">
                  {study.chartData.map((pt) => (
                    <div key={pt.month} className="tm-cs-chart-col">
                      <div className="tm-cs-bar-pair">
                        <div className="tm-cs-bar-sec" style={{ height: `${pt.secondary}%` }} />
                        <div className="tm-cs-bar-pri" style={{ height: `${pt.primary}%` }} />
                      </div>
                      <span>{pt.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tm-two-col-grid" style={{ marginTop: '1.5rem' }}>
                <img
                  src="/assets/images/about/about-meeting-main.webp"
                  alt="Tidemark strategy review"
                  className="tm-cs-inline-photo"
                  loading="lazy"
                />
                <img
                  src="/assets/images/about/about-collaboration.webp"
                  alt="Tidemark reporting session"
                  className="tm-cs-inline-photo"
                  loading="lazy"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="surface-white padding-section padding-global">
        <div className="container-large">
          <h2 className="heading-h3" style={{ margin: '0 0 2rem' }}>
            More case studies
          </h2>
          <div className="tm-three-col-grid">
            {related.map((r) => (
              <CaseStudyCard key={r.id} study={r} />
            ))}
          </div>
        </div>
      </section>

      <FinalCloudCTA />
    </>
  );
}
