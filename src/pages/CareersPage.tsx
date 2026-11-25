import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Globe, Heart, Sun, TrendingUp } from 'lucide-react';
import { careerBenefits, jobs, JobTeamFilter } from '@/data/jobs';
import { teamMembers } from '@/data/team';
import { SeoHead } from '@/components/common/SeoHead';
import { SkyHero } from '@/components/heroes/SkyHero';
import { FinalCloudCTA } from '@/components/cta/FinalCloudCTA';
import './Pages.css';

const TEAM_FILTERS: ('All roles' | JobTeamFilter)[] = [
  'All roles',
  'Paid media',
  'SEO and content',
  'Data',
  'Client services',
];

const BENEFIT_ICONS = {
  trending: TrendingUp,
  clock: Clock,
  globe: Globe,
  book: BookOpen,
  heart: Heart,
  sun: Sun,
};

export function CareersPage() {
  const [filter, setFilter] = useState<'All roles' | JobTeamFilter>('All roles');
  const tom = teamMembers.find((m) => m.slug === 'tom-hale');
  const visibleJobs = filter === 'All roles' ? jobs : jobs.filter((j) => j.team === filter);

  return (
    <>
      <SeoHead
        title="Careers - Tidemark"
        description="Small senior team, real budgets and clients who actually read the report. London, Lisbon or remote."
      />

      <SkyHero
        badge="6 open roles"
        title={
          <>
            Do the best work
            <br />
            of your career.
          </>
        }
        subtitle="Small senior team, real budgets and clients who actually read the report. London, Lisbon or remote."
      >
        <div className="tm-detail-hero-actions" style={{ justifyContent: 'center', marginTop: '1.75rem' }}>
          <a href="#open-roles" className="tm-btn tm-btn-white tm-btn-md">
            <span>See open roles</span>
            <ArrowRight size={15} />
          </a>
          <Link to="/about" className="tm-btn tm-btn-glass tm-btn-md">
            <span>Meet the team</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </SkyHero>

      {/* Life at Tidemark 3-col Bento */}
      <section className="surface-page padding-section padding-global" style={{ paddingBottom: '4rem' }}>
        <div className="container-large tm-careers-bento">
          <div className="tm-careers-photo-tall">
            <img src="/assets/images/about/about-meeting-main.webp" alt="Tidemark office meeting" />
          </div>
          <div className="tm-careers-photo-stack">
            <img src="/assets/images/about/about-collaboration.webp" alt="Tidemark analytics session" />
            <img src="/assets/images/careers/careers-workshop.webp" alt="Tidemark studio workshop" />
          </div>
          <div className="tm-careers-quote-card">
            <div>
              <div className="tm-about-mission-eyebrow">Life at Tidemark</div>
              <h2 className="heading-h5" style={{ margin: '0.75rem 0', color: '#ffffff' }}>
                “You get real ownership from week one. My first account was spending £80k a month.”
              </h2>
            </div>
            <div className="tm-careers-quote-author">
              {tom && <img src={tom.portrait} alt={tom.name} />}
              <div>
                <strong>Tom Hale</strong>
                <span>Joined 2021 as Paid Social Manager</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="surface-white padding-section padding-global">
        <div className="container-large">
          <div className="tm-split-head">
            <div>
              <div className="section-badge">
                <span className="section-badge-dot" aria-hidden="true" />
                <span>Why people stay</span>
              </div>
              <h2 className="heading-h2" style={{ margin: 0 }}>
                Benefits that
                <br />
                actually matter.
              </h2>
            </div>
            <p className="tm-split-sub">
              92% of the team who joined in 2023 are still here. These are a big part of why.
            </p>
          </div>

          <div className="tm-three-col-grid">
            {careerBenefits.map((b) => {
              const Icon = BENEFIT_ICONS[b.icon];
              return (
                <div key={b.id} className="tm-card tm-benefit-card">
                  <span className="tm-benefit-icon" aria-hidden="true">
                    <Icon size={17} strokeWidth={1.8} />
                  </span>
                  <h3 className="heading-h6" style={{ margin: '0.875rem 0 0.375rem' }}>
                    {b.title}
                  </h3>
                  <p>{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="surface-page padding-section padding-global">
        <div className="container-large">
          <div className="tm-split-head">
            <div>
              <div className="section-badge">
                <span className="section-badge-dot" aria-hidden="true" />
                <span>Open roles</span>
              </div>
              <h2 className="heading-h2" style={{ margin: 0 }}>
                Find your seat.
              </h2>
            </div>

            <div className="tm-filter-bar" role="tablist" aria-label="Filter open roles by team">
              {TEAM_FILTERS.map((cat) => {
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

          <div className="tm-job-list">
            {visibleJobs.map((job) => (
              <Link key={job.id} to={`/careers/${job.slug}`} className="tm-card tm-job-row">
                <div className="tm-job-row-title">
                  <strong>{job.title}</strong>
                  <span>{job.team}</span>
                </div>
                <div className="tm-job-row-meta">
                  <span className="tm-tag-chip">{job.locationShort}</span>
                  <span className="tm-tag-chip">{job.type}</span>
                  <span className="tm-tag-chip is-blue">{job.salary}</span>
                </div>
                <span className="tm-btn tm-btn-primary tm-btn-sm">
                  <span>Apply</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>

          {/* 4-Step Hiring Process */}
          <div className="tm-split-head" style={{ marginTop: '5.5rem' }}>
            <div>
              <div className="section-badge">
                <span className="section-badge-dot" aria-hidden="true" />
                <span>How we hire</span>
              </div>
              <h2 className="heading-h2" style={{ margin: 0 }}>
                Four steps,
                <br />
                three weeks.
              </h2>
            </div>
            <p className="tm-split-sub">
              We reply to every application within five working days, yes or no.
            </p>
          </div>

          <div className="tm-four-col-grid">
            {[
              { num: '01', title: 'Apply', desc: 'Send your CV and one line on why Tidemark.' },
              { num: '02', title: 'Intro call', desc: '30 minutes with the hiring lead.' },
              { num: '03', title: 'Practical task', desc: 'A real account problem, paid at £200.' },
              { num: '04', title: 'Meet the team', desc: 'Lunch with the people you will work with.' },
            ].map((s) => (
              <div key={s.num} className="tm-card tm-rule-card">
                <span className="tm-step-pill">{s.num}</span>
                <h3 className="heading-h6" style={{ margin: '0.75rem 0 0.375rem' }}>
                  {s.title}
                </h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Open Application Sky Card */}
          <div className="sky-panel tm-careers-open-banner">
            <img src="/assets/images/sky/sky-inner-hero.webp" alt="" className="sky-panel-bg" loading="lazy" />
            <div className="tm-careers-open-inner">
              <div className="tm-svc-strip-eyebrow">No role that fits?</div>
              <h3 className="heading-h3" style={{ margin: '0.35rem 0 0.75rem', color: '#ffffff' }}>
                Send us a note anyway.
              </h3>
              <p style={{ margin: '0 0 1.5rem', color: 'rgba(255,255,255,0.88)', maxWidth: 440 }}>
                Tell us what you do best. Some of our best hires came from open applications.
              </p>
              <Link to="/contact" className="tm-btn tm-btn-white tm-btn-md">
                <span>Email careers@tidemark.co</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCloudCTA />
    </>
  );
}
