import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { SkyHero } from '@/components/heroes/SkyHero';
import { DashboardShowcase } from '@/components/dashboard/DashboardShowcase';
import './HomeHero.css';

export function HomeHero() {
  const [promptIdx, setPromptIdx] = useState(0);
  const [userQuery, setUserQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (userQuery) return;
    const id = window.setInterval(() => {
      setPromptIdx((i) => (i + 1) % siteConfig.heroAuditPrompts.length);
    }, 3400);
    return () => window.clearInterval(id);
  }, [userQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = userQuery.trim() || siteConfig.heroAuditPrompts[promptIdx];
    navigate(`/contact?goal=${encodeURIComponent(q)}`);
  };

  return (
    <SkyHero
      skyVariant="home"
      badge={siteConfig.heroBadge}
      title={
        <>
          Market Smarter.
          <br />
          Grow Faster. <span className="text-sky">Every Month.</span>
        </>
      }
    >
      <form className="tm-hero-audit-card" onSubmit={handleSubmit}>
        <input
          type="text"
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
          placeholder={siteConfig.heroAuditPrompts[promptIdx]}
          aria-label="Describe your growth goal for a free audit"
          className="tm-hero-audit-input"
        />
        <div className="tm-hero-audit-bottom">
          <span className="tm-hero-audit-tag">Tidemark Audit</span>
          <button
            type="submit"
            className="tm-hero-audit-submit"
            aria-label="Start free growth audit"
          >
            <ArrowUp size={16} strokeWidth={2.2} />
          </button>
        </div>
      </form>

      <div className="tm-hero-cta-wrap">
        <Link to="/contact" className="tm-btn tm-btn-primary tm-btn-lg tm-hero-main-btn">
          <span>Get Your Free Growth Audit (48h)</span>
          <ArrowRight size={17} strokeWidth={2} />
        </Link>
      </div>

      <DashboardShowcase />
    </SkyHero>
  );
}
