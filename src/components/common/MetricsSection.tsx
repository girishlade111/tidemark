import { siteConfig } from '@/data/siteConfig';
import './MetricsSection.css';

export function MetricsSection() {
  return (
    <section className="surface-page padding-section padding-global">
      <div className="container-large">
        <div className="tm-metrics-header">
          <h2 className="heading-h3 tm-metrics-title">
            Tidemark turns ad spend, search and content into{' '}
            <span className="text-accent">one growth engine</span> you can actually measure.
          </h2>
        </div>

        <div className="tm-metrics-grid">
          {siteConfig.headlineMetrics.map((m) => (
            <div key={m.label} className="tm-card tm-metrics-card">
              <div className="tm-metrics-value">{m.value}</div>
              <div className="tm-metrics-label">{m.label}</div>
              <div className="tm-metrics-sub">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
