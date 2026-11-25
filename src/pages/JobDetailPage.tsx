import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, Check, Upload } from 'lucide-react';
import { z } from 'zod';
import { jobs, jobBenefitChips } from '@/data/jobs';
import { teamMembers } from '@/data/team';
import { SeoHead } from '@/components/common/SeoHead';
import { SkyHero } from '@/components/heroes/SkyHero';
import { submitDevelopmentForm } from '@/components/common/DevSubmissionAdapter';
import './Pages.css';

const appSchema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your full name.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  linkedin: z.string().trim().optional(),
  portfolio: z.string().trim().optional(),
  note: z.string().trim().min(5, 'Add one line on why Tidemark.'),
});

const ALLOWED_CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const MAX_CV_BYTES = 10 * 1024 * 1024;

export function JobDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const job = jobs.find((j) => j.slug === slug);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [note, setNote] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileError, setFileError] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  if (!job) {
    return <Navigate to="/404" replace />;
  }

  const manager = teamMembers.find((m) => m.slug === job.hiringManagerSlug);
  const otherRoles = jobs.filter((j) => j.slug !== job.slug).slice(0, 3);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError('');
    const file = e.target.files?.[0];
    if (!file) {
      setFileName('');
      return;
    }
    if (file.size > MAX_CV_BYTES) {
      setFileError('Upload failed. Max size for files is 10 MB.');
      setFileName('');
      return;
    }
    if (!ALLOWED_CV_TYPES.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
      setFileError('Please upload a PDF, DOC, or DOCX file.');
      setFileName('');
      return;
    }
    setFileName(file.name);
  };

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (fileError) return;
    const parsed = appSchema.safeParse({ fullName, email, linkedin, portfolio, note });
    if (!parsed.success) {
      setStatus('error');
      setStatusMsg(parsed.error.issues[0]?.message || 'Please check your application details.');
      return;
    }
    setStatus('submitting');
    const res = await submitDevelopmentForm(`Job Application (${job.title})`, {
      ...parsed.data,
      cvFileName: fileName || 'none',
    });
    if (res.ok) {
      setStatus('success');
      setStatusMsg(`Thank you! Demo application recorded for ${job.title}. (${res.message})`);
      setFullName('');
      setEmail('');
      setLinkedin('');
      setPortfolio('');
      setNote('');
      setFileName('');
    }
  };

  return (
    <>
      <SeoHead title={`${job.title} - Tidemark`} description={job.aboutParagraphs[0]} />

      <SkyHero badge={`Careers / ${job.team}`} title={job.title}>
        <div className="tm-chip-list" style={{ justifyContent: 'center', marginTop: '1.25rem' }}>
          <span className="sky-pill-badge">{job.locationHero}</span>
          <span className="sky-pill-badge">{job.type}</span>
          <span className="sky-pill-badge">{job.salary}</span>
          <span className="sky-pill-badge">Posted {job.posted}</span>
        </div>

        <div className="tm-detail-hero-actions" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
          <a href="#apply-form" className="tm-btn tm-btn-white tm-btn-md">
            <span>Apply for this role</span>
            <ArrowRight size={15} />
          </a>
          <button
            type="button"
            className="tm-btn tm-btn-glass tm-btn-md"
            onClick={() => navigator.clipboard?.writeText(window.location.href)}
          >
            <span>Share role</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </SkyHero>

      <section className="surface-page padding-section padding-global">
        <div className="container-large tm-team-body-grid">
          {/* Left Main Content */}
          <div className="tm-team-bio-col">
            <h2 className="heading-h4" style={{ margin: '0 0 1rem' }}>
              About the role
            </h2>
            {job.aboutParagraphs.map((p, i) => (
              <p key={i} className="tm-body-p">
                {p}
              </p>
            ))}

            <h2 className="heading-h4" style={{ margin: '2.5rem 0 1rem' }}>
              What you will do
            </h2>
            <ul className="tm-job-check-list">
              {job.responsibilities.map((item) => (
                <li key={item}>
                  <Check size={14} strokeWidth={2.4} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="heading-h4" style={{ margin: '2.5rem 0 1rem' }}>
              What you will bring
            </h2>
            <ul className="tm-job-check-list">
              {job.requirements.map((item) => (
                <li key={item}>
                  <Check size={14} strokeWidth={2.4} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="heading-h4" style={{ margin: '2.5rem 0 1rem' }}>
              Nice to have
            </h2>
            <ul className="tm-job-check-list">
              {job.niceToHave.map((item) => (
                <li key={item}>
                  <Check size={14} strokeWidth={2.4} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="heading-h4" style={{ margin: '2.5rem 0 1rem' }}>
              What you get
            </h2>
            <div className="tm-chip-list">
              {jobBenefitChips.map((chip) => (
                <span key={chip} className="tm-card tm-job-benefit-pill">
                  <span className="section-badge-dot" aria-hidden="true" />
                  <span>{chip}</span>
                </span>
              ))}
            </div>

            <h2 className="heading-h4" style={{ margin: '2.5rem 0 1rem' }}>
              Hiring process
            </h2>
            <div className="tm-job-steps">
              {job.hiringProcess.map((s) => (
                <div key={s.number} className="tm-card tm-job-step-row">
                  <span className="tm-job-step-badge">{s.number}</span>
                  <strong>{s.title}</strong>
                  <span>{s.description}</span>
                </div>
              ))}
            </div>

            {/* Application Form */}
            <div id="apply-form" className="tm-card tm-form-card" style={{ marginTop: '3rem' }}>
              <h2 className="heading-h4" style={{ margin: '0 0 0.375rem' }}>
                Apply for this role
              </h2>
              <p className="tm-service-row-desc">
                We reply to every application within five working days.
              </p>

              <form onSubmit={handleApply} noValidate className="tm-form-stack">
                <div className="tm-two-col-grid">
                  <div className="tm-field">
                    <label htmlFor="app-name">Full name</label>
                    <input
                      id="app-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Jane Cooper"
                    />
                  </div>
                  <div className="tm-field">
                    <label htmlFor="app-email">Email</label>
                    <input
                      id="app-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@email.com"
                    />
                  </div>
                </div>

                <div className="tm-two-col-grid">
                  <div className="tm-field">
                    <label htmlFor="app-linkedin">LinkedIn</label>
                    <input
                      id="app-linkedin"
                      type="text"
                      value={linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                      placeholder="linkedin.com/in/jane"
                    />
                  </div>
                  <div className="tm-field">
                    <label htmlFor="app-portfolio">Portfolio or website</label>
                    <input
                      id="app-portfolio"
                      type="text"
                      value={portfolio}
                      onChange={(e) => setPortfolio(e.target.value)}
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div className="tm-field">
                  <label htmlFor="app-cv">CV</label>
                  <div className="tm-file-row">
                    <label htmlFor="app-cv" className="tm-file-btn">
                      <Upload size={14} />
                      <span>{fileName || 'Upload File'}</span>
                    </label>
                    <input
                      id="app-cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                    />
                    <span className="tm-file-hint">Max file size 10MB.</span>
                  </div>
                  {fileError && (
                    <span className="tm-field-error" role="alert">
                      {fileError}
                    </span>
                  )}
                </div>

                <div className="tm-field">
                  <label htmlFor="app-note">Why Tidemark, in one line?</label>
                  <textarea
                    id="app-note"
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Tell us what you would change in our own ads."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="tm-btn tm-btn-primary tm-btn-md"
                    disabled={status === 'submitting'}
                  >
                    <span>{status === 'submitting' ? 'Sending...' : 'Send application'}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

                {status === 'success' && (
                  <p className="tm-form-status is-success" role="status">
                    {statusMsg}
                  </p>
                )}
                {status === 'error' && (
                  <p className="tm-form-status is-error" role="alert">
                    {statusMsg}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Right Sticky Role Summary */}
          <aside className="tm-card tm-team-sidebar">
            <div className="tm-sidebar-section-label">Role summary</div>
            <dl className="tm-detail-dl">
              <div>
                <dt>Team</dt>
                <dd>{job.team}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{job.locationSummary}</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>{job.typeSummary}</dd>
              </div>
              <div>
                <dt>Salary</dt>
                <dd>{job.salarySummary}</dd>
              </div>
              <div>
                <dt>Reports to</dt>
                <dd>{job.reportsTo}</dd>
              </div>
              <div>
                <dt>Start date</dt>
                <dd>{job.startDate}</dd>
              </div>
            </dl>

            <a
              href="#apply-form"
              className="tm-btn tm-btn-primary tm-btn-md"
              style={{ width: '100%', marginTop: '1.25rem' }}
            >
              Apply for this role
            </a>

            {manager && (
              <div className="tm-hiring-manager-box">
                <div className="tm-sidebar-section-label">Your hiring manager</div>
                <div className="tm-blog-author-row" style={{ marginBlock: '0.75rem' }}>
                  <img src={manager.portrait} alt={manager.name} className="tm-blog-author-avatar" />
                  <div>
                    <strong>{manager.name}</strong>
                    <span>{job.hiringManagerTitle}</span>
                  </div>
                </div>
                <p>{job.hiringManagerQuote}</p>
              </div>
            )}
          </aside>
        </div>
      </section>

      <section className="surface-white padding-section padding-global">
        <div className="container-large">
          <div className="tm-split-head" style={{ marginBottom: '2rem' }}>
            <h2 className="heading-h3" style={{ margin: 0 }}>
              Other open roles
            </h2>
            <Link to="/careers" className="tm-text-link">
              <span>All roles</span>
              <ArrowRight size={15} />
            </Link>
          </div>
          <div className="tm-three-col-grid">
            {otherRoles.map((r) => (
              <Link key={r.id} to={`/careers/${r.slug}`} className="tm-card tm-card-interactive tm-other-role-card">
                <span className="tm-tag-chip is-blue">{r.team}</span>
                <h3 className="heading-h6" style={{ margin: '0.875rem 0 0.25rem' }}>
                  {r.title}
                </h3>
                <p style={{ margin: '0 0 1.25rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                  {r.locationShort} · {r.type}
                </p>
                <span className="tm-cs-link-row">
                  <span>View role</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
