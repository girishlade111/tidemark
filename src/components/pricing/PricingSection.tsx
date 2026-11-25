import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import { pricingPlans, comparisonGroups } from '@/data/pricing';
import './PricingSection.css';

interface PricingSectionProps {
  showTable?: boolean;
}

export function PricingSection({ showTable = true }: PricingSectionProps) {
  const [billing, setBilling] = useState<'monthly' | 'quarterly'>('monthly');

  return (
    <section className="surface-page padding-section padding-global">
      <div className="container-large">
        <div className="tm-pricing-top-grid">
          {/* Left Intro Column */}
          <div className="tm-pricing-intro">
            <div className="section-badge">
              <span className="section-badge-dot" aria-hidden="true" />
              <span>Pricing</span>
            </div>
            <h2 className="heading-h2 tm-pricing-title">
              Pricing that
              <br />
              scales with you.
            </h2>
            <p className="tm-pricing-desc">
              Flat monthly fee. Ad spend is billed straight to your own accounts, never marked up.
            </p>

            {/* Billing Toggle */}
            <div className="tm-billing-toggle" role="group" aria-label="Billing interval">
              <button
                type="button"
                className={`tm-billing-btn${billing === 'monthly' ? ' is-active' : ''}`}
                onClick={() => setBilling('monthly')}
                aria-pressed={billing === 'monthly'}
              >
                Monthly
              </button>
              <button
                type="button"
                className={`tm-billing-btn${billing === 'quarterly' ? ' is-active' : ''}`}
                onClick={() => setBilling('quarterly')}
                aria-pressed={billing === 'quarterly'}
              >
                <span>Quarterly</span>
                <span className="tm-save-pill">−10%</span>
              </button>
            </div>

            {/* 90-Day Guarantee Card */}
            <div className="tm-card tm-promise-card">
              <div className="tm-promise-head">
                <span className="tm-promise-icon" aria-hidden="true">
                  <Check size={13} strokeWidth={2.6} />
                </span>
                <strong>90-day growth promise</strong>
              </div>
              <p>Miss the targets we agree together and the next month is on us.</p>
            </div>
          </div>

          {/* 3 Plan Cards */}
          <div className="tm-pricing-cards">
            {pricingPlans.map((plan) => {
              const price =
                billing === 'monthly' ? plan.monthlyPrice : plan.quarterlyPrice;
              const note =
                billing === 'monthly' ? plan.billingNoteMonthly : plan.billingNoteQuarterly;

              return (
                <article
                  key={plan.id}
                  className={`tm-plan-card${plan.featuredSky ? ' is-featured-sky' : ''}`}
                >
                  {plan.featuredSky && (
                    <>
                      <img
                        src="/assets/images/sky/sky-inner-hero.webp"
                        alt=""
                        className="tm-plan-sky-bg"
                        loading="lazy"
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(180deg, rgba(10, 61, 154, 0.42) 0%, rgba(28, 84, 224, 0.28) 100%)',
                          pointerEvents: 'none',
                        }}
                      />
                    </>
                  )}

                  <div className="tm-plan-inner">
                    <div>
                      <div className="tm-plan-head">
                        <h3 className="heading-h5">{plan.name}</h3>
                        {plan.popular && <span className="tm-popular-pill">Popular</span>}
                      </div>
                      <p className="tm-plan-desc">{plan.description}</p>
                    </div>

                    <div className="tm-plan-price-block">
                      <div className="tm-plan-price-row">
                        <span className="tm-plan-price">{price ?? plan.customLabel}</span>
                        {price && <span className="tm-plan-unit">/mo</span>}
                      </div>
                      <div className="tm-plan-note">{note}</div>
                      <Link
                        to={plan.ctaTo}
                        className={`tm-btn tm-btn-md tm-plan-btn ${
                          plan.featuredSky
                            ? 'tm-btn-white'
                            : plan.id === 'launch'
                              ? 'tm-btn-primary'
                              : 'tm-btn-secondary'
                        }`}
                      >
                        {plan.ctaLabel}
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Comparison Table */}
        {showTable && (
          <div className="tm-card tm-compare-wrap">
            <div className="tm-compare-scroll">
              <table className="tm-compare-table">
                <thead>
                  <tr>
                    <th scope="col" className="tm-compare-sr-col">
                      Feature
                    </th>
                    <th scope="col">Launch</th>
                    <th scope="col" className="is-growth">
                      Growth
                    </th>
                    <th scope="col">Scale</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonGroups.map((group) => (
                    <FragmentGroup key={group.heading} group={group} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function FragmentGroup({ group }: { group: (typeof comparisonGroups)[number] }) {
  return (
    <>
      <tr className="tm-compare-group-row">
        <th colSpan={4} scope="colgroup">
          {group.heading}
        </th>
      </tr>
      {group.rows.map((row) => (
        <tr key={row.label} className="tm-compare-row">
          <th scope="row" className="tm-compare-label">
            {row.label}
          </th>
          <td>{renderCell(row.launch)}</td>
          <td className="is-growth">{renderCell(row.growth, true)}</td>
          <td>{renderCell(row.scale)}</td>
        </tr>
      ))}
    </>
  );
}

function renderCell(
  cell: { type: 'text' | 'check' | 'cross'; text?: string },
  highlightCheck = false,
) {
  if (cell.type === 'cross') {
    return (
      <span className="tm-cell-cross" aria-label="Not included">
        <X size={14} strokeWidth={1.8} />
      </span>
    );
  }
  if (cell.type === 'check') {
    return (
      <span className="tm-cell-check-wrap">
        <span className={`tm-cell-check${highlightCheck ? ' is-solid' : ''}`} aria-label="Included">
          <Check size={12} strokeWidth={2.5} />
        </span>
        {cell.text && <span>{cell.text}</span>}
      </span>
    );
  }
  return <span className="tm-cell-text">{cell.text}</span>;
}
