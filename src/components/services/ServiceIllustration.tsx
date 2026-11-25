import { CheckCircle2, Mail, ShoppingCart, Package } from 'lucide-react';
import './Services.css';

interface ServiceIllustrationProps {
  variant: 'seo' | 'search' | 'social' | 'creative' | 'lifecycle';
  compact?: boolean;
}

export function ServiceIllustration({ variant, compact = false }: ServiceIllustrationProps) {
  return (
    <div className={`tm-svc-visual${compact ? ' is-compact' : ''}`}>
      <img
        src="/assets/images/sky/sky-card.webp"
        alt=""
        className="tm-svc-visual-bg"
        loading="lazy"
      />

      {variant === 'seo' && (
        <div className="tm-svc-overlay tm-svc-seo">
          <div className="tm-svc-ui-card tm-svc-seo-table">
            <div className="tm-svc-ui-head">
              <span>Keyword rankings</span>
              <span className="tm-svc-ui-tag">Top 3</span>
            </div>
            <div className="tm-svc-kw-row">
              <span>specialty coffee subscription</span>
              <span className="tm-rank-pill">#1</span>
            </div>
            <div className="tm-svc-kw-row">
              <span>cold brew concentrate</span>
              <span className="tm-rank-pill">#2</span>
            </div>
            <div className="tm-svc-kw-row">
              <span>best espresso beans uk</span>
              <span className="tm-rank-pill">#1</span>
            </div>
          </div>
          <div className="tm-svc-ui-card tm-svc-seo-stat">
            <span className="tm-svc-stat-label">Organic traffic</span>
            <div className="tm-svc-stat-num">
              <strong>48,210</strong>
              <span className="tm-delta-green">+68%</span>
            </div>
          </div>
        </div>
      )}

      {variant === 'search' && (
        <div className="tm-svc-overlay tm-svc-search">
          <div className="tm-svc-ui-card tm-svc-roas-card">
            <div className="tm-svc-stat-label">Blended ROAS</div>
            <div className="tm-svc-roas-big">
              <strong>5.2×</strong>
              <span className="tm-delta-green">↗ 1.6</span>
            </div>
            <div className="tm-svc-bars" aria-hidden="true">
              {[34, 42, 48, 56, 62, 74, 86, 98].map((h, i) => (
                <div
                  key={i}
                  className="tm-svc-bar"
                  style={{ height: `${h}%`, opacity: 0.45 + i * 0.075 }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {variant === 'social' && (
        <div className="tm-svc-overlay tm-svc-social">
          <div className="tm-svc-social-fan">
            <img
              src="/assets/images/products/product-fashion.webp"
              alt=""
              className="tm-fan-photo is-left"
              loading="lazy"
            />
            <img
              src="/assets/images/products/product-skincare.webp"
              alt=""
              className="tm-fan-photo is-center"
              loading="lazy"
            />
            <img
              src="/assets/images/products/product-coffee.webp"
              alt=""
              className="tm-fan-photo is-right"
              loading="lazy"
            />
          </div>
          <div className="tm-svc-social-pill">5.2× ROAS on TikTok</div>
        </div>
      )}

      {variant === 'creative' && (
        <div className="tm-svc-overlay tm-svc-creative">
          <div className="tm-svc-feed-stack">
            <div className="tm-svc-feed-item">
              <img src="/assets/images/products/product-coffee.webp" alt="" loading="lazy" />
              <div>
                <strong>How to brew cold coffee at home</strong>
                <span>24k reads · ranking #1</span>
              </div>
            </div>
            <div className="tm-svc-feed-item">
              <img src="/assets/images/products/product-skincare.webp" alt="" loading="lazy" />
              <div>
                <strong>The 2026 skincare routine guide</strong>
                <span>18k reads · ranking #3</span>
              </div>
            </div>
            <div className="tm-svc-feed-item">
              <img src="/assets/images/products/product-fashion.webp" alt="" loading="lazy" />
              <div>
                <strong>Best espresso beans in the UK</strong>
                <span>31k reads · ranking #2</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {variant === 'lifecycle' && (
        <div className="tm-svc-overlay tm-svc-lifecycle">
          <div className="tm-svc-flow-node">
            <span className="tm-flow-icon">
              <ShoppingCart size={14} />
            </span>
            <div>
              <strong>Cart abandoned</strong>
              <span>Trigger</span>
            </div>
          </div>
          <div className="tm-svc-flow-line" aria-hidden="true" />
          <div className="tm-svc-flow-node">
            <span className="tm-flow-icon">
              <Mail size={14} />
            </span>
            <div>
              <strong>Reminder email</strong>
              <span>+1 hour</span>
            </div>
          </div>
          <div className="tm-svc-flow-line" aria-hidden="true" />
          <div className="tm-svc-flow-node is-accent">
            <span className="tm-flow-icon">
              <Package size={14} />
            </span>
            <div>
              <strong>Order placed</strong>
              <span>£124 avg</span>
            </div>
            <CheckCircle2 size={15} className="tm-flow-check" />
          </div>
        </div>
      )}
    </div>
  );
}
