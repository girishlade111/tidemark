import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { teamMembers } from '@/data/team';
import { SeoHead } from '@/components/common/SeoHead';
import { SkyHero } from '@/components/heroes/SkyHero';
import { TestimonialSection } from '@/components/testimonials/TestimonialSection';
import { FinalCloudCTA } from '@/components/cta/FinalCloudCTA';
import './Pages.css';

const RULES = [
  { num: '01', title: 'Revenue over reach', desc: 'We report what made money, not what looked busy.' },
  { num: '02', title: 'Senior people only', desc: 'The person who pitches you is the person who runs your account.' },
  { num: '03', title: 'No markup on spend', desc: 'Media is billed to your accounts. Our fee is flat and public.' },
  { num: '04', title: 'Kill what fails fast', desc: 'Every campaign has a job and an end date. If it misses, it goes.' },
];

const COMPANY_NUMBERS = [
  { value: '2016', label: 'Founded in London' },
  { value: '34', label: 'People in two offices' },
  { value: '£40M+', label: 'Ad spend managed a year' },
  { value: '92%', label: 'Clients still with us after a year' },
];

export function AboutPage() {
  return (
    <>
      <SeoHead
        title="About - Tidemark"
        description="Founded in London in 2016. Now 34 people across London and Lisbon, running £40M a year in ad spend for 120 brands."
      />

      <SkyHero
        badge="About Tidemark"
        title={
          <>
            A growth team that
            <br />
            reports in revenue.
          </>
        }
        subtitle="Founded in London in 2016. Now 34 people across London and Lisbon, running £40M a year in ad spend for 120 brands."
      />

      {/* Section 1: Editorial Bento Composition */}
      <section className="surface-page padding-section padding-global" style={{ paddingBottom: '4rem' }}>
        <div className="container-large tm-about-bento">
          <div className="tm-about-bento-left">
            <img
              src="/assets/images/about/about-meeting-main.webp"
              alt="Tidemark team collaborating around an oak conference table"
            />
          </div>

          <div className="tm-about-bento-right">
            <div className="tm-about-bento-photo">
              <img
                src="/assets/images/about/about-collaboration.webp"
                alt="Tidemark strategists reviewing analytics"
              />
            </div>
            <div className="tm-about-mission-card">
              <div className="tm-about-mission-eyebrow">Our mission</div>
              <h2 className="heading-h4" style={{ margin: '0.5rem 0 2rem', color: '#ffffff' }}>
                Make every pound of marketing spend easy to read, defend and grow.
              </h2>
              <div className="tm-about-mission-foot">Since 2016</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Company Story */}
      <section className="surface-white padding-section padding-global">
        <div className="container-large">
          <div className="section-badge">
            <span className="section-badge-dot" aria-hidden="true" />
            <span>Our story</span>
          </div>
          <h2 className="heading-h2" style={{ margin: '0 0 2.5rem', maxWidth: '22ch' }}>
            We started Tidemark because agency reports made no sense.
          </h2>
          <div className="tm-two-col-grid" style={{ gap: '3rem' }}>
            <p className="tm-story-p">
              Our founders spent years inside big agencies sending 30 page decks full of impressions and click through rates. Clients nodded along and still could not tell if marketing was working.
            </p>
            <p className="tm-story-p">
              So we built the opposite. One team running every channel, one weekly report written in revenue, and a promise: if we miss the targets we agree, the next month is on us.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Four Rules */}
      <section className="surface-page padding-section padding-global">
        <div className="container-large">
          <div className="tm-split-head">
            <div>
              <div className="section-badge">
                <span className="section-badge-dot" aria-hidden="true" />
                <span>How we work</span>
              </div>
              <h2 className="heading-h2" style={{ margin: 0 }}>
                Four rules we never break.
              </h2>
            </div>
            <p className="tm-split-sub">
              These shape every hire, every proposal and every report we send.
            </p>
          </div>

          <div className="tm-four-col-grid">
            {RULES.map((r) => (
              <div key={r.num} className="tm-card tm-rule-card">
                <span className="tm-step-pill">{r.num}</span>
                <h3 className="heading-h6" style={{ margin: '0.75rem 0 0.5rem' }}>
                  {r.title}
                </h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Company Metrics Sky Banner */}
      <section className="surface-page padding-global" style={{ paddingBottom: '5rem' }}>
        <div className="container-large">
          <div className="sky-panel tm-about-stats-banner">
            <img
              src="/assets/images/sky/sky-cta.webp"
              alt=""
              className="sky-panel-bg"
              loading="lazy"
            />
            <div className="tm-about-stats-inner">
              <div className="tm-about-stats-eyebrow">Tidemark in numbers</div>
              <div className="tm-four-col-grid">
                {COMPANY_NUMBERS.map((n) => (
                  <div key={n.label} className="tm-about-glass-stat">
                    <strong>{n.value}</strong>
                    <span>{n.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Team Grid (7 portraits + 1 blue hiring card) */}
      <section className="surface-white padding-section padding-global">
        <div className="container-large">
          <div className="tm-split-head">
            <div>
              <div className="section-badge">
                <span className="section-badge-dot" aria-hidden="true" />
                <span>The team</span>
              </div>
              <h2 className="heading-h2" style={{ margin: 0 }}>
                The people running
                <br />
                your accounts.
              </h2>
            </div>
            <p className="tm-split-sub">
              No juniors hiding behind a senior pitch. Every client gets a named growth lead.
            </p>
          </div>

          <div className="tm-four-col-grid">
            {teamMembers.map((member) => (
              <Link
                key={member.id}
                to={`/team/${member.slug}`}
                className="tm-card tm-team-card"
              >
                <div className="tm-team-photo-wrap">
                  <img src={member.portrait} alt={member.name} loading="lazy" />
                  <div className="tm-team-hover-bio">
                    <span className="tm-team-hover-role">{member.role}</span>
                    <strong>{member.name}</strong>
                    <p>{member.shortBio}</p>
                    <span className="tm-team-hover-link">
                      View profile <ArrowRight size={13} />
                    </span>
                  </div>
                </div>

                <div className="tm-team-card-foot">
                  <div>
                    <strong>{member.name}</strong>
                    <span>{member.role}</span>
                  </div>
                  <span className="tm-team-in-badge" aria-hidden="true">
                    in
                  </span>
                </div>
              </Link>
            ))}

            {/* 8th Card: Blue Hiring Card */}
            <div className="tm-team-hiring-card">
              <div>
                <div className="tm-team-hiring-eyebrow">Your seat</div>
                <h3 className="heading-h5" style={{ margin: '0.5rem 0 0.75rem', color: '#ffffff' }}>
                  We are hiring three more people this year.
                </h3>
                <p>Paid social, SEO and analytics roles in London, Lisbon and remote.</p>
              </div>
              <Link to="/careers" className="tm-btn tm-btn-white tm-btn-sm">
                See open roles
              </Link>
            </div>
          </div>

          {/* Section 6: Careers CTA Card */}
          <div className="tm-card tm-about-careers-banner">
            <img
              src="/assets/images/careers/careers-workshop.webp"
              alt="Tidemark team in workshop"
              className="tm-about-careers-img"
              loading="lazy"
            />
            <div className="tm-about-careers-copy">
              <div className="tm-about-careers-eyebrow">We are hiring</div>
              <h3 className="heading-h3" style={{ margin: '0.375rem 0 1.25rem' }}>
                Join a team that gets to see the results.
              </h3>
              <div className="tm-chip-list" style={{ marginBottom: '1.5rem' }}>
                <span className="tm-tag-chip">Paid Social Lead, London</span>
                <span className="tm-tag-chip">SEO Strategist, Lisbon</span>
                <span className="tm-tag-chip">Growth Analyst, Remote</span>
              </div>
              <Link to="/careers" className="tm-btn tm-btn-primary tm-btn-md">
                <span>See open roles</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />
      <FinalCloudCTA />
    </>
  );
}
