import { Link } from 'react-router-dom';
import { services } from '@/data/services';
import { ServiceIllustration } from '@/components/services/ServiceIllustration';
import './Services.css';

export function ServiceBentoGrid() {
  const topRow = services.slice(0, 2);
  const bottomRow = services.slice(2, 5);

  return (
    <section className="surface-white padding-section padding-global">
      <div className="container-large">
        <div className="tm-svc-bento-head">
          <div>
            <div className="section-badge">
              <span className="section-badge-dot" aria-hidden="true" />
              <span>Services</span>
            </div>
            <h2 className="heading-h2 tm-svc-bento-title">
              Everything you need
              <br />
              to grow, in one team.
            </h2>
          </div>

          <div className="tm-svc-bento-right">
            <p className="tm-svc-bento-desc">
              Four channels planned as one system and reported against revenue. No silos, no vanity metrics.
            </p>
            <Link to="/services" className="tm-btn tm-btn-primary tm-btn-sm">
              Explore services
            </Link>
          </div>
        </div>

        <div className="tm-svc-bento-top">
          {topRow.map((svc) => (
            <Link
              key={svc.id}
              to={`/services/${svc.slug}`}
              className="tm-card tm-card-interactive tm-svc-bento-card"
            >
              <ServiceIllustration variant={svc.illustrationVariant} />
              <div className="tm-svc-bento-copy">
                <h3 className="heading-h5">{svc.homeTitle}</h3>
                <p>{svc.shortDesc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="tm-svc-bento-bottom">
          {bottomRow.map((svc) => (
            <Link
              key={svc.id}
              to={`/services/${svc.slug}`}
              className="tm-card tm-card-interactive tm-svc-bento-card"
            >
              <ServiceIllustration variant={svc.illustrationVariant} compact />
              <div className="tm-svc-bento-copy">
                <h3 className="heading-h5">{svc.homeTitle}</h3>
                <p>{svc.shortDesc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
