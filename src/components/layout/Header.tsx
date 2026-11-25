import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { BrandMark } from '@/components/common/BrandMark';
import './Header.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="tm-header">
      <div className="tm-header-inner">
        <Link to="/" className="tm-header-logo" aria-label="Tidemark home">
          <BrandMark size={22} variant="on-dark" />
        </Link>

        <nav className="tm-header-nav" aria-label="Primary navigation">
          {siteConfig.navLinks.map((item) => {
            const active =
              item.to === '/'
                ? pathname === '/'
                : pathname === item.to || pathname.startsWith(item.to + '/');
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`tm-header-link${active ? ' is-active' : ''}`}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="tm-header-actions">
          <Link to="/contact" className="tm-btn tm-btn-white tm-btn-sm tm-header-cta">
            Contact us
          </Link>
          <button
            type="button"
            className="tm-header-burger"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="tm-mobile-drawer" role="dialog" aria-label="Mobile navigation">
          <div className="tm-mobile-drawer-head">
            <Link to="/" className="tm-header-logo" onClick={() => setMenuOpen(false)}>
              <BrandMark size={22} variant="on-dark" />
            </Link>
            <button
              type="button"
              className="tm-header-burger"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
            >
              <X size={20} strokeWidth={1.8} />
            </button>
          </div>
          <nav className="tm-mobile-drawer-links" aria-label="Mobile primary navigation">
            {siteConfig.navLinks.map((item) => {
              const active =
                item.to === '/'
                  ? pathname === '/'
                  : pathname === item.to || pathname.startsWith(item.to + '/');
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`tm-mobile-link${active ? ' is-active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="tm-mobile-drawer-footer">
            <Link
              to="/contact"
              className="tm-btn tm-btn-white tm-btn-md"
              style={{ width: '100%' }}
              onClick={() => setMenuOpen(false)}
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
