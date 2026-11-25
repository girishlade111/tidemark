import { ReactNode } from 'react';
import { Header } from '@/components/layout/Header';
import './SkyHero.css';

interface SkyHeroProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  skyVariant?: 'home' | 'inner' | '404';
  align?: 'center' | 'left';
  children?: ReactNode;
  compact?: boolean;
}

export function SkyHero({
  badge,
  title,
  subtitle,
  skyVariant = 'inner',
  align = 'center',
  children,
  compact = false,
}: SkyHeroProps) {
  const skySrc =
    skyVariant === 'home'
      ? '/assets/images/sky/sky-home-hero.webp'
      : '/assets/images/sky/sky-inner-hero.webp';

  return (
    <div className="inset-shell tm-sky-hero-shell">
      <section className={`sky-panel tm-sky-hero ${skyVariant === 'home' ? 'is-home' : ''} ${compact ? 'is-compact' : ''}`}>
        <img
          src={skySrc}
          alt=""
          className="sky-panel-bg"
          fetchPriority="high"
        />
        <div className="sky-panel-overlay-top" />
        <Header />

        <div className={`tm-sky-hero-body padding-global ${align === 'left' ? 'is-left' : 'is-center'}`}>
          <div className="container-large">
            <div className={`tm-sky-hero-content ${align === 'left' ? 'is-left' : 'is-center'}`}>
              {badge && (
                <div className="sky-pill-badge tm-sky-hero-badge">
                  <span className="tm-badge-ring" aria-hidden="true" />
                  <span>{badge}</span>
                </div>
              )}
              <h1 className={skyVariant === 'home' ? 'heading-display tm-sky-hero-h1' : 'heading-h1 tm-sky-hero-h1'}>
                {title}
              </h1>
              {subtitle && <p className="tm-sky-hero-sub">{subtitle}</p>}
              {children}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
