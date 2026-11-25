import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Instagram, Linkedin, Facebook } from 'lucide-react';
import { z } from 'zod';
import { siteConfig } from '@/data/siteConfig';
import { BrandMark } from '@/components/common/BrandMark';
import './Footer.css';

const emailSchema = z.string().trim().email('Please enter a valid work email.');

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setStatus('error');
      setErrorMsg(parsed.error.issues[0]?.message || 'Check your email address and try again.');
      return;
    }
    setStatus('submitting');
    setErrorMsg('');
    await new Promise((r) => setTimeout(r, 320));
    setStatus('success');
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="inset-shell tm-footer-shell">
      <footer className="tm-footer">
        {/* Decorative Night Sky Stars & Crescent Moon */}
        <svg
          className="tm-footer-stars"
          viewBox="0 0 1200 500"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {[
            [90, 60, 1.4], [180, 120, 1], [270, 45, 1.6], [380, 95, 1.1],
            [490, 55, 1.4], [610, 110, 1], [720, 40, 1.5], [840, 90, 1.2],
            [950, 55, 1.7], [1040, 130, 1], [1130, 65, 1.4], [140, 210, 1.2],
            [330, 190, 1.5], [560, 175, 1.1], [770, 195, 1.4], [910, 220, 1.2],
            [1080, 215, 1.3], [220, 310, 1], [460, 285, 1.3], [670, 320, 1],
            [860, 295, 1.2], [1010, 340, 1.4],
          ].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="#ffffff" fillOpacity={0.35 + (i % 4) * 0.14} />
          ))}
        </svg>

        <div className="tm-footer-moon" aria-hidden="true">
          <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
            <defs>
              <filter id="tmMoonGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d="M54.5 14C41.8 18.7 33 30.8 33 45c0 17.7 14.3 32 32 32 4.3 0 8.4-.9 12.1-2.4C71.5 80.5 63.3 84 54.3 84 36.5 84 22 69.5 22 51.7 22 33.4 36.8 18.2 54.5 14Z"
              fill="#ffffff"
              filter="url(#tmMoonGlow)"
            />
          </svg>
        </div>

        <div className="tm-footer-inner">
          <div className="tm-footer-top">
            <div className="tm-footer-brand-col">
              <Link to="/" className="tm-footer-logo">
                <BrandMark size={22} variant="on-dark" />
              </Link>
              <p className="tm-footer-prompt">Still thinking it over? Say hello.</p>
              <a href={`mailto:${siteConfig.email}`} className="tm-footer-email">
                {siteConfig.email}
              </a>
            </div>

            <div className="tm-footer-clocks">
              {siteConfig.footerClocks.map((clock) => (
                <div key={clock.city} className="tm-footer-clock-block">
                  <span className="tm-footer-clock-city">{clock.city}</span>
                  <div className="tm-footer-clock-row">
                    <span className="tm-footer-clock-time">{clock.time}</span>
                    <span className="tm-footer-clock-hours">{clock.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <nav className="tm-footer-mid-nav" aria-label="Footer primary links">
            {siteConfig.footerPrimaryLinks.map((item, idx) => (
              <span key={item.to} className="tm-footer-mid-item">
                {idx > 0 && (
                  <span className="tm-footer-slash" aria-hidden="true">
                    /
                  </span>
                )}
                <Link to={item.to} className="tm-footer-mid-link">
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>

          <div className="tm-footer-lower">
            <div className="tm-footer-lower-left">
              <form className="tm-footer-newsletter" onSubmit={handleSubscribe} noValidate>
                <label htmlFor="footer-newsletter-email" className="tm-footer-newsletter-label">
                  Get The Monthly Tide:
                </label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@brand.com"
                  className="tm-footer-newsletter-input"
                  aria-label="Email address for The Monthly Tide newsletter"
                />
                <button
                  type="submit"
                  className="tm-footer-newsletter-btn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Saving...' : 'Subscribe'}
                </button>
              </form>

              <div className="tm-footer-socials" aria-label="Social links">
                <a
                  href={siteConfig.socialLinks[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="tm-footer-social-btn"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} strokeWidth={1.7} />
                </a>
                <a
                  href={siteConfig.socialLinks[1].href}
                  target="_blank"
                  rel="noreferrer"
                  className="tm-footer-social-btn"
                  aria-label="Facebook"
                >
                  <Facebook size={16} strokeWidth={1.7} />
                </a>
                <a
                  href={siteConfig.socialLinks[2].href}
                  target="_blank"
                  rel="noreferrer"
                  className="tm-footer-social-btn"
                  aria-label="Instagram"
                >
                  <Instagram size={16} strokeWidth={1.7} />
                </a>
                <a
                  href={siteConfig.socialLinks[3].href}
                  target="_blank"
                  rel="noreferrer"
                  className="tm-footer-social-btn"
                  aria-label="X"
                >
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, lineHeight: 1 }}>X</span>
                </a>
              </div>
            </div>

            <button type="button" className="tm-footer-top-btn" onClick={scrollToTop}>
              <span className="tm-footer-top-circle">
                <ArrowUp size={18} strokeWidth={1.8} />
              </span>
              <span className="tm-footer-top-label">Back to top</span>
            </button>
          </div>

          {status === 'success' && (
            <p className="tm-footer-form-msg is-success" role="status">
              Thanks! You are on the demo list for The Monthly Tide (development adapter, no email sent).
            </p>
          )}
          {status === 'error' && (
            <p className="tm-footer-form-msg is-error" role="alert">
              {errorMsg}
            </p>
          )}

          <div className="tm-footer-bottom">
            <p className="tm-footer-copyright">{siteConfig.copyright}</p>
            <nav className="tm-footer-utility" aria-label="Utility and legal links">
              {siteConfig.footerUtilityLinks.map((item) => (
                <Link key={item.to} to={item.to} className="tm-footer-utility-link">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
