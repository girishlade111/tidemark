import { useState } from 'react';
import { Star } from 'lucide-react';
import { testimonials, reviewBadges } from '@/data/testimonials';
import './TestimonialSection.css';

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(2); // Ines Moreau default matching screenshot
  const current = testimonials[activeIndex] || testimonials[0];

  return (
    <section className="surface-white padding-section padding-global tm-testimonials-section">
      <div className="container-large tm-testimonials-container">
        {/* Floating Rating Cards */}
        {reviewBadges.map((b) => (
          <div
            key={b.id}
            className={`tm-review-float is-${b.positionClass}`}
            style={{ transform: `rotate(${b.rotation}deg)` }}
            aria-hidden="true"
          >
            <div className="tm-review-top">
              <strong>{b.score}</strong>
              <span className="tm-review-stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={11} fill="#f59e0b" color="#f59e0b" />
                ))}
              </span>
            </div>
            <div className="tm-review-meta">
              {b.platform} · {b.count}
            </div>
          </div>
        ))}

        {/* Dark Result Tag */}
        <div className="tm-testimonial-pill" aria-hidden="true">
          {current.badgeText}
        </div>

        <div className="tm-testimonials-center">
          <div className="section-badge">
            <span className="section-badge-dot" aria-hidden="true" />
            <span>Client voices</span>
          </div>

          {/* Avatar Selector */}
          <div className="tm-avatar-row" role="tablist" aria-label="Select client testimonial">
            {testimonials.map((t, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`${t.author}, ${t.role}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`tm-avatar-btn${isActive ? ' is-active' : ''}`}
                >
                  <img src={t.avatar} alt={t.author} />
                </button>
              );
            })}
          </div>

          <blockquote className="tm-testimonial-quote">
            {current.prefix}
            <span className="text-accent">{current.highlight}</span>
            {current.suffix}
          </blockquote>

          <div className="tm-testimonial-author">
            <strong>{current.author}</strong>
            <span>{current.role}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
