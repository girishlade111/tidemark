import { useState } from 'react';
import { caseStudies, CaseStudyCategory } from '@/data/caseStudies';
import { SeoHead } from '@/components/common/SeoHead';
import { SkyHero } from '@/components/heroes/SkyHero';
import { MetricsSection } from '@/components/common/MetricsSection';
import { FeaturedResultCarousel } from '@/components/results/FeaturedResultCarousel';
import { CaseStudyCard } from '@/components/results/CaseStudyCard';
import { TestimonialSection } from '@/components/testimonials/TestimonialSection';
import { FinalCloudCTA } from '@/components/cta/FinalCloudCTA';
import './Pages.css';

const CATEGORIES: ('All' | CaseStudyCategory)[] = [
  'All',
  'Ecommerce',
  'B2B SaaS',
  'Health',
  'Finance',
];

export function ResultsPage() {
  const [filter, setFilter] = useState<'All' | CaseStudyCategory>('All');
  const gridItems = caseStudies.filter((c) => c.slug !== 'northwind-coffee');
  const visible =
    filter === 'All' ? gridItems : gridItems.filter((c) => c.category === filter);

  return (
    <>
      <SeoHead
        title="Results - Tidemark"
        description="Real accounts, real spend, real results. Every number here comes straight from client dashboards."
      />

      <SkyHero
        badge="£212M revenue influenced since 2016"
        title={
          <>
            Proof, not
            <br />
            promises.
          </>
        }
        subtitle="Real accounts, real spend, real results. Every number here comes straight from client dashboards."
      />

      <MetricsSection />
      <FeaturedResultCarousel />

      <section className="surface-white padding-section padding-global">
        <div className="container-large">
          <div className="tm-split-head">
            <div>
              <div className="section-badge">
                <span className="section-badge-dot" aria-hidden="true" />
                <span>More case studies</span>
              </div>
              <h2 className="heading-h2" style={{ margin: 0 }}>
                Six brands, six
                <br />
                different problems.
              </h2>
            </div>

            <div className="tm-filter-bar" role="tablist" aria-label="Filter case studies by industry">
              {CATEGORIES.map((cat) => {
                const active = filter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(cat)}
                    className={`tm-filter-pill${active ? ' is-active' : ''}`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="tm-three-col-grid">
            {visible.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />
      <FinalCloudCTA />
    </>
  );
}
