import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { z } from 'zod';
import { siteConfig } from '@/data/siteConfig';
import { SeoHead } from '@/components/common/SeoHead';
import { SkyHero } from '@/components/heroes/SkyHero';
import { submitDevelopmentForm } from '@/components/common/DevSubmissionAdapter';
import './Pages.css';

const SPEND_OPTIONS = ['Under £10k', '£10k to £50k', '£50k to £150k', '£150k+'];
const CHANNEL_OPTIONS = ['Google Ads', 'Meta', 'TikTok', 'LinkedIn', 'Email'];

const contactSchema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your full name.'),
  email: z.string().trim().email('Please enter a valid work email.'),
  website: z.string().trim().min(3, 'Please enter your company website.'),
  role: z.string().trim().optional(),
  spend: z.string().min(1),
  channels: z.array(z.string()),
  message: z.string().trim().min(5, 'Tell us what you want to fix first.'),
});

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [role, setRole] = useState('');
  const [spend, setSpend] = useState(SPEND_OPTIONS[1]);
  const [channels, setChannels] = useState<string[]>(['Google Ads', 'Meta']);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  useEffect(() => {
    const goal = searchParams.get('goal');
    if (goal && !message) {
      setMessage(goal);
    }
  }, [searchParams, message]);

  const toggleChannel = (ch: string) => {
    setChannels((prev) =>
      prev.includes(ch) ? prev.filter((item) => item !== ch) : [...prev, ch],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse({
      fullName,
      email,
      website,
      role,
      spend,
      channels,
      message,
    });
    if (!parsed.success) {
      setStatus('error');
      setStatusMsg(parsed.error.issues[0]?.message || 'Please check your details and try again.');
      return;
    }

    setStatus('submitting');
    const res = await submitDevelopmentForm('Contact Growth Audit', parsed.data);
    if (res.ok) {
      setStatus('success');
      setStatusMsg(
        `Thanks, your audit request is captured for ${parsed.data.website}. (${res.message})`,
      );
      setFullName('');
      setEmail('');
      setWebsite('');
      setRole('');
      setMessage('');
    }
  };

  return (
    <>
      <SeoHead
        title="Contact - Tidemark"
        description="Tell us where you are and where you want to be. We reply with a short audit plan, not a sales deck."
      />

      <SkyHero
        badge="Replies within one business day"
        title="Let's talk growth."
        subtitle="Tell us where you are and where you want to be. We reply with a short audit plan, not a sales deck."
      />

      <section className="surface-page padding-section padding-global">
        <div className="container-large tm-contact-grid">
          {/* Left Column */}
          <div className="tm-contact-left">
            <h2 className="heading-h4" style={{ margin: '0 0 0.75rem' }}>
              Talk to a growth lead
            </h2>
            <p className="tm-service-row-desc" style={{ marginBottom: '2rem' }}>
              Every enquiry goes straight to a senior strategist. No SDRs, no handoffs, no automated sequences.
            </p>

            <div className="tm-contact-methods">
              <div>
                <span>Email</span>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
              <div>
                <span>Phone</span>
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>{siteConfig.phone}</a>
              </div>
              <div>
                <span>Book a call</span>
                <strong>30 minute audit, free</strong>
              </div>
            </div>

            <div className="tm-two-col-grid" style={{ marginTop: '2rem' }}>
              {siteConfig.offices.map((o) => (
                <div key={o.city} className="tm-card tm-office-card">
                  <strong>{o.city}</strong>
                  <div className="tm-office-addr">{o.address}</div>
                  <div className="tm-office-hours">
                    <span className="tm-office-dot" aria-hidden="true" />
                    <span>{o.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form Card */}
          <div className="tm-card tm-form-card">
            <h2 className="heading-h4" style={{ margin: '0 0 0.375rem' }}>
              Request your free growth audit
            </h2>
            <p className="tm-service-row-desc">
              Takes two minutes. We send the audit and a 90 day plan within 48 hours.
            </p>

            <form onSubmit={handleSubmit} noValidate className="tm-form-stack">
              <div className="tm-two-col-grid">
                <div className="tm-field">
                  <label htmlFor="c-name">Full name</label>
                  <input
                    id="c-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Jane Cooper"
                  />
                </div>
                <div className="tm-field">
                  <label htmlFor="c-email">Work email</label>
                  <input
                    id="c-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div className="tm-two-col-grid">
                <div className="tm-field">
                  <label htmlFor="c-website">Company website</label>
                  <input
                    id="c-website"
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="company.com"
                  />
                </div>
                <div className="tm-field">
                  <label htmlFor="c-role">Role</label>
                  <input
                    id="c-role"
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Head of Growth"
                  />
                </div>
              </div>

              <div className="tm-field">
                <span className="tm-field-label">Monthly ad spend</span>
                <div className="tm-choice-row" role="radiogroup" aria-label="Monthly ad spend">
                  {SPEND_OPTIONS.map((opt) => {
                    const active = spend === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => setSpend(opt)}
                        className={`tm-radio-chip${active ? ' is-active' : ''}`}
                      >
                        <span className="tm-radio-dot" />
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="tm-field">
                <span className="tm-field-label">Channels you run today</span>
                <div className="tm-choice-row">
                  {CHANNEL_OPTIONS.map((ch) => {
                    const checked = channels.includes(ch);
                    return (
                      <button
                        key={ch}
                        type="button"
                        role="checkbox"
                        aria-checked={checked}
                        onClick={() => toggleChannel(ch)}
                        className={`tm-check-choice${checked ? ' is-active' : ''}`}
                      >
                        <span className="tm-checkbox-box">
                          {checked && <Check size={11} strokeWidth={2.6} />}
                        </span>
                        <span>{ch}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="tm-field">
                <label htmlFor="c-msg">What do you want to fix first?</label>
                <textarea
                  id="c-msg"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="We spend a lot on Meta but cannot tell what is working."
                />
              </div>

              <div className="tm-contact-submit-row">
                <button
                  type="submit"
                  className="tm-btn tm-btn-primary tm-btn-md"
                  disabled={status === 'submitting'}
                >
                  <span>{status === 'submitting' ? 'Sending...' : 'Send my audit request'}</span>
                  <ArrowRight size={15} />
                </button>
                <span className="tm-file-hint">No spam. We never share your data.</span>
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
      </section>
    </>
  );
}
