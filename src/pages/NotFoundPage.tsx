import { Link } from 'react-router-dom';
import { SeoHead } from '@/components/common/SeoHead';
import { Header } from '@/components/layout/Header';
import './Pages.css';

export function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="404 - Tidemark"
        description="This page drifted out of reach. Head back to the Tidemark homepage or see our pricing."
      />
      <div className="inset-shell tm-sky-hero-shell" style={{ paddingBottom: '1rem' }}>
        <section className="sky-panel tm-error-hero">
          <img src="/assets/images/sky/sky-home-hero.webp" alt="" className="sky-panel-bg" />
          <div className="sky-panel-overlay-top" />
          <Header />

          <div className="padding-global tm-error-body">
            <div className="container-large tm-error-inner">
              <div className="tm-error-numeral" aria-hidden="true">
                404
              </div>

              <div className="sky-pill-badge" style={{ marginBottom: '1.25rem' }}>
                <span className="tm-badge-ring" aria-hidden="true" />
                <span>Error 404</span>
              </div>

              <h1 className="heading-h1" style={{ margin: 0, color: '#ffffff' }}>
                This page drifted
                <br />
                out of reach.
              </h1>

              <p className="tm-sky-hero-sub" style={{ marginInline: 'auto' }}>
                The link may be old or mistyped. Everything else is still exactly where you left it.
              </p>

              <div className="tm-detail-hero-actions" style={{ justifyContent: 'center', marginTop: '2rem' }}>
                <Link to="/" className="tm-btn tm-btn-white tm-btn-md">
                  Back to home
                </Link>
                <Link to="/pricing" className="tm-btn tm-btn-glass tm-btn-md">
                  See pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
