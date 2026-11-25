import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { teamMembers } from '@/data/team';
import { SeoHead } from '@/components/common/SeoHead';
import { Header } from '@/components/layout/Header';
import { FinalCloudCTA } from '@/components/cta/FinalCloudCTA';
import './Pages.css';

export function TeamDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    return <Navigate to="/404" replace />;
  }

  const others = teamMembers.filter((m) => m.slug !== member.slug).slice(0, 4);

  return (
    <>
      <SeoHead title={`${member.name} - Tidemark`} description={member.shortBio} />

      {/* Split Sky Hero */}
      <div className="inset-shell tm-sky-hero-shell">
        <section className="sky-panel tm-detail-sky-hero">
          <img src="/assets/images/sky/sky-inner-hero.webp" alt="" className="sky-panel-bg" />
          <div className="sky-panel-overlay-top" />
          <Header />

          <div className="padding-global tm-detail-hero-body">
            <div className="container-large tm-team-hero-grid">
              <div className="tm-team-hero-portrait-wrap">
                <img src={member.portrait} alt={member.name} className="tm-team-hero-portrait" />
                <div className="tm-team-avail-pill">
                  <span className="tm-cta-green-dot tm-live-dot" aria-hidden="true" />
                  <span>{member.availabilityPill}</span>
                </div>
              </div>

              <div className="tm-team-hero-right">
                <div className="sky-pill-badge">
                  <span className="tm-badge-ring" aria-hidden="true" />
                  <span>
                    <Link to="/about" style={{ textDecoration: 'underline' }}>
                      Team
                    </Link>{' '}
                    / {member.name}
                  </span>
                </div>
                <h1 className="heading-h1 tm-detail-h1">{member.name}</h1>
                <div className="tm-team-hero-role">
                  {member.role} · {member.city}
                </div>
                <p className="tm-detail-sub">{member.shortBio}</p>

                <div className="tm-detail-hero-actions">
                  <Link to="/contact" className="tm-btn tm-btn-white tm-btn-md">
                    <span>Book a call with {member.firstName}</span>
                    <ArrowRight size={15} />
                  </Link>
                  <div className="tm-team-social-pills">
                    <span className="tm-glass-square">in</span>
                    <span className="tm-glass-square">X</span>
                    <a href={`mailto:${member.email}`} className="tm-glass-square" aria-label={`Email ${member.name}`}>
                      @
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 4 Stats */}
      <section className="surface-page padding-global" style={{ paddingBlock: '3.5rem 2.5rem' }}>
        <div className="container-large tm-metrics-grid">
          {member.stats.map((s) => (
            <div key={s.label} className="tm-card tm-metrics-card">
              <div className="tm-metrics-value">{s.value}</div>
              <div className="tm-metrics-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main 2-Col Bio + Sticky Details */}
      <section className="surface-page padding-global" style={{ paddingBottom: '5rem' }}>
        <div className="container-large tm-team-body-grid">
          <div className="tm-team-bio-col">
            <h2 className="heading-h4" style={{ margin: '0 0 1rem' }}>
              About {member.firstName}
            </h2>
            {member.aboutParagraphs.map((p, i) => (
              <p key={i} className="tm-body-p">
                {p}
              </p>
            ))}

            <h2 className="heading-h4" style={{ margin: '2.75rem 0 1.25rem' }}>
              How {member.firstName} works
            </h2>
            <div className="tm-two-col-grid">
              {member.principles.map((pr) => (
                <div key={pr.title} className="tm-card tm-principle-card">
                  <strong>{pr.title}</strong>
                  <p>{pr.description}</p>
                </div>
              ))}
            </div>

            <h2 className="heading-h4" style={{ margin: '2.75rem 0 1.25rem' }}>
              Career
            </h2>
            <div className="tm-career-list">
              {member.career.map((c) => (
                <div key={c.period} className="tm-career-item">
                  <span className="tm-career-period">{c.period}</span>
                  <div>
                    <strong>{c.role}</strong>
                    <div className="tm-career-co">{c.company}</div>
                    <p>{c.summary}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="heading-h4" style={{ margin: '2.75rem 0 1.25rem' }}>
              Outside work
            </h2>
            <div className="tm-three-col-grid">
              {member.outsideWork.map((o) => (
                <div key={o.verb} className="tm-outside-card">
                  <span>{o.verb}</span>
                  <strong>{o.detail}</strong>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sticky Sidebar */}
          <aside className="tm-card tm-team-sidebar">
            <div className="tm-sidebar-section-label">Details</div>
            <dl className="tm-detail-dl">
              <div>
                <dt>Location</dt>
                <dd>{member.locationFull}</dd>
              </div>
              <div>
                <dt>Joined Tidemark</dt>
                <dd>{member.joined}</dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>{member.languages}</dd>
              </div>
              <div>
                <dt>Working hours</dt>
                <dd>{member.workingHours}</dd>
              </div>
            </dl>

            <div className="tm-sidebar-section-label" style={{ marginTop: '1.5rem' }}>
              Find {member.firstName} online
            </div>
            <div className="tm-online-links">
              <div className="tm-online-row">
                <span className="tm-online-ico">in</span>
                <div>
                  <strong>LinkedIn</strong>
                  <span>{member.linkedinHandle}</span>
                </div>
              </div>
              <div className="tm-online-row">
                <span className="tm-online-ico">X</span>
                <div>
                  <strong>X</strong>
                  <span>{member.xHandle}</span>
                </div>
              </div>
              <a href={`mailto:${member.email}`} className="tm-online-row">
                <span className="tm-online-ico">@</span>
                <div>
                  <strong>Email</strong>
                  <span>{member.email}</span>
                </div>
              </a>
              <Link to="/blog" className="tm-online-row">
                <span className="tm-online-ico">+</span>
                <div>
                  <strong>Newsletter</strong>
                  <span>{member.newsletterName}</span>
                </div>
              </Link>
            </div>

            <div className="tm-sidebar-section-label" style={{ marginTop: '1.5rem' }}>
              Certifications
            </div>
            <div className="tm-chip-list">
              {member.certifications.map((cert) => (
                <span key={cert} className="tm-tag-chip is-blue">
                  {cert}
                </span>
              ))}
            </div>

            <Link
              to="/contact"
              className="tm-btn tm-btn-primary tm-btn-md"
              style={{ width: '100%', marginTop: '1.5rem' }}
            >
              Book a call with {member.firstName}
            </Link>
          </aside>
        </div>

        {/* Full-width Blue Quote Card */}
        <div className="container-large" style={{ marginTop: '3.5rem' }}>
          <div className="tm-cs-blue-quote is-large">
            <blockquote>{member.quote}</blockquote>
            <div className="tm-cs-quote-author">
              <strong>{member.name}</strong>
              <span>, {member.role}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the team */}
      <section className="surface-white padding-section padding-global">
        <div className="container-large">
          <div className="tm-split-head" style={{ marginBottom: '2rem' }}>
            <div>
              <div className="section-badge">
                <span className="section-badge-dot" aria-hidden="true" />
                <span>The rest of the team</span>
              </div>
              <h2 className="heading-h2" style={{ margin: 0 }}>
                Meet the team.
              </h2>
            </div>
            <Link to="/about" className="tm-text-link">
              <span>View all</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="tm-four-col-grid">
            {others.map((o) => (
              <Link key={o.id} to={`/team/${o.slug}`} className="tm-card tm-team-card">
                <div className="tm-team-photo-wrap">
                  <img src={o.portrait} alt={o.name} loading="lazy" />
                </div>
                <div className="tm-team-card-foot">
                  <div>
                    <strong>{o.name}</strong>
                    <span>{o.role}</span>
                  </div>
                  <span className="tm-team-in-badge" aria-hidden="true">
                    in
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
