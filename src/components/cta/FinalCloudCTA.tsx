import { useEffect, useState } from 'react';
import { ArrowUp, Check } from 'lucide-react';
import { z } from 'zod';
import { siteConfig } from '@/data/siteConfig';
import { submitDevelopmentForm } from '@/components/common/DevSubmissionAdapter';
import './FinalCloudCTA.css';

const auditSchema = z.object({
  goal: z.string().trim().min(3, 'Tell us your goal.'),
  domain: z.string().trim().min(3, 'Enter your website domain (e.g. yourbrand.com).'),
  budget: z.string().trim().min(2, 'Enter an approximate monthly spend.'),
});

export function FinalCloudCTA() {
  const [promptIdx, setPromptIdx] = useState(0);
  const [goal, setGoal] = useState('');
  const [domain, setDomain] = useState('');
  const [budget, setBudget] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (goal) return;
    const id = window.setInterval(() => {
      setPromptIdx((i) => (i + 1) % siteConfig.ctaAuditPrompts.length);
    }, 3600);
    return () => window.clearInterval(id);
  }, [goal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const resolvedGoal = goal.trim() || siteConfig.ctaAuditPrompts[promptIdx];
    const parsed = auditSchema.safeParse({
      goal: resolvedGoal,
      domain,
      budget: budget || '£50k/mo',
    });
    if (!parsed.success) {
      setStatus('error');
      setMessage(parsed.error.issues[0]?.message || 'Check your details and try again.');
      return;
    }

    setStatus('submitting');
    const res = await submitDevelopmentForm('FinalCloudCTA Audit', parsed.data);
    if (res.ok) {
      setStatus('success');
      setMessage(`Audit brief captured for ${parsed.data.domain}. (${res.message})`);
      setDomain('');
      setBudget('');
    }
  };

  return (
    <div className="inset-shell tm-cta-shell">
      <section className="sky-panel tm-final-cta padding-global">
        <img
          src="/assets/images/sky/sky-cta.webp"
          alt=""
          className="sky-panel-bg"
          loading="lazy"
        />
        <div className="sky-panel-overlay-top" />

        <div className="container-large tm-final-cta-inner">
          <div className="sky-pill-badge tm-cta-badge">
            <span className="tm-cta-green-dot tm-live-dot" aria-hidden="true" />
            <span>{siteConfig.ctaBadge}</span>
          </div>

          <h2 className="heading-display-xl tm-cta-title">
            Let’s go <span className="text-sky">higher.</span>
          </h2>
          <p className="tm-cta-sub">
            Tell us where you want to grow. We’ll send a free audit and a 90-day plan within 48 hours.
          </p>

          <div className="tm-cta-stage">
            {/* Left Rotated Benefits Card */}
            <div className="tm-cta-float-left" aria-hidden="true">
              <div className="tm-cta-float-heading">Your audit includes</div>
              <ul>
                <li>
                  <span className="tm-cta-check">
                    <Check size={11} strokeWidth={2.6} />
                  </span>
                  <span>Channel-by-channel review</span>
                </li>
                <li>
                  <span className="tm-cta-check">
                    <Check size={11} strokeWidth={2.6} />
                  </span>
                  <span>Wasted spend, in £</span>
                </li>
                <li>
                  <span className="tm-cta-check">
                    <Check size={11} strokeWidth={2.6} />
                  </span>
                  <span>90-day growth plan</span>
                </li>
              </ul>
            </div>

            {/* Center Interactive Form Card */}
            <form className="tm-cta-form-card" onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder={siteConfig.ctaAuditPrompts[promptIdx]}
                aria-label="Your growth goal"
                className="tm-cta-goal-input"
              />

              <div className="tm-cta-form-row">
                <div className="tm-cta-mini-inputs">
                  <input
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="yourbrand.com"
                    aria-label="Company website domain"
                    className="tm-cta-chip-input"
                  />
                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="£50k/mo"
                    aria-label="Monthly ad spend"
                    className="tm-cta-chip-input is-narrow"
                  />
                </div>

                <button
                  type="submit"
                  className="tm-btn tm-btn-primary tm-btn-sm"
                  disabled={status === 'submitting'}
                >
                  <span>{status === 'submitting' ? 'Sending...' : 'Get my audit'}</span>
                  <ArrowUp size={14} strokeWidth={2.2} />
                </button>
              </div>

              {status === 'success' && (
                <p className="tm-cta-status is-success" role="status">
                  {message}
                </p>
              )}
              {status === 'error' && (
                <p className="tm-cta-status is-error" role="alert">
                  {message}
                </p>
              )}
            </form>

            {/* Right Rotated Metric Card */}
            <div className="tm-cta-float-right" aria-hidden="true">
              <span className="tm-cta-pound">£</span>
              <div>
                <strong>£40k waste found</strong>
                <span>Average first audit</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
