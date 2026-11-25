import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import './FeaturedResultCarousel.css';

export function FeaturedResultCarousel() {
  const slides = caseStudies.filter((c) => c.featuredInCarousel);
  const [index, setIndex] = useState(0);
  const current = slides[index] || slides[0];

  const goPrev = () => setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const goNext = () => setIndex((prev) => (prev + 1) % slides.length);

  const stackImages = [
    slides[index % slides.length]?.heroImage,
    slides[(index + 1) % slides.length]?.heroImage,
    slides[(index + 2) % slides.length]?.heroImage,
  ];

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goPrev();
    if (e.key === 'ArrowRight') goNext();
  };

  return (
    <section
      className="surface-page padding-section padding-global"
      aria-roledescription="carousel"
      aria-label="Featured client results"
      onKeyDown={onKeyDown}
    >
      <div className="container-large">
        <div className="tm-carousel-grid">
          {/* Left Copy & Metrics */}
          <div className="tm-carousel-left">
            <div className="section-badge">
              <span className="section-badge-dot" aria-hidden="true" />
              <span>Results</span>
            </div>

            <div className="tm-carousel-client">
              <span className="tm-carousel-avatar">{current.initial}</span>
              <div>
                <strong>{current.client}</strong>
                <span>{current.carouselMeta}</span>
              </div>
            </div>

            <div className="tm-carousel-stat">{current.primaryStat}</div>
            <h2 className="heading-h4 tm-carousel-phrase">{current.primaryStatPhrase}</h2>
            <p className="tm-carousel-desc">{current.carouselDescription}</p>

            <div className="tm-carousel-kpis">
              {current.carouselStats.map((s) => (
                <div key={s.label} className="tm-carousel-kpi">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            <div className="tm-carousel-actions">
              <Link to={`/case-studies/${current.slug}`} className="tm-btn tm-btn-primary tm-btn-sm">
                Read the full story
              </Link>
              <Link to="/results" className="tm-text-link">
                <span>All case studies</span>
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* Right Stacked Visuals + Controls */}
          <div className="tm-carousel-right">
            <div className="tm-carousel-stack-wrap">
              <div className="tm-carousel-float-quote">{current.carouselFloatQuote}</div>

              <div className="tm-carousel-stack">
                <img
                  src={stackImages[2]}
                  alt=""
                  className="tm-stack-card is-back"
                  loading="lazy"
                />
                <img
                  src={stackImages[1]}
                  alt=""
                  className="tm-stack-card is-mid"
                  loading="lazy"
                />
                <img
                  src={stackImages[0]}
                  alt={`${current.client} campaign showcase`}
                  className="tm-stack-card is-front"
                  loading="lazy"
                />
              </div>

              <div className="tm-carousel-float-stat">
                <span className="tm-float-badge-circle">{current.carouselFloatBadge}</span>
                <div>
                  <strong>{current.carouselFloatTitle}</strong>
                  <span>{current.carouselFloatSub}</span>
                </div>
              </div>
            </div>

            <div className="tm-carousel-controls">
              <div className="tm-carousel-progress-wrap">
                <span className="tm-carousel-num">0{index + 1}</span>
                <div className="tm-carousel-track" aria-hidden="true">
                  <div
                    className="tm-carousel-fill"
                    style={{ width: `${((index + 1) / slides.length) * 100}%` }}
                  />
                </div>
                <span className="tm-carousel-num is-muted">0{slides.length}</span>
              </div>

              <div className="tm-carousel-arrows">
                <button
                  type="button"
                  onClick={goPrev}
                  className="tm-carousel-arrow-btn"
                  aria-label="Previous case study"
                >
                  <ArrowLeft size={16} strokeWidth={1.8} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="tm-carousel-arrow-btn is-primary"
                  aria-label="Next case study"
                >
                  <ArrowRight size={16} strokeWidth={1.8} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
