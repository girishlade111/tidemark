import { AlertCircle, CheckCircle2 } from 'lucide-react';
import './GrowthProcess.css';

export function GrowthProcess() {
  return (
    <section className="surface-page padding-section padding-global">
      <div className="container-large">
        <div className="tm-process-head">
          <div className="section-badge">
            <span className="section-badge-dot" aria-hidden="true" />
            <span>How it works</span>
          </div>
          <h2 className="heading-h2 tm-process-title">
            From audit to growth
            <br />
            in 90 days.
          </h2>
          <p className="tm-process-sub">
            A clear plan, weekly sprints and one monthly report. You always know what we are doing and what it returned.
          </p>
        </div>

        <div className="tm-process-grid">
          {/* Step 01 */}
          <article className="tm-card tm-process-card">
            <div className="tm-process-well">
              <div className="tm-process-ui">
                <div className="tm-process-ui-title">Audit findings</div>
                <ul className="tm-audit-list">
                  <li>
                    <AlertCircle size={14} color="#dc2626" />
                    <span>£40k wasted spend found</span>
                  </li>
                  <li>
                    <AlertCircle size={14} color="#f59e0b" />
                    <span>12 broken landing pages</span>
                  </li>
                  <li>
                    <CheckCircle2 size={14} color="#2463eb" />
                    <span>Tracking fixed</span>
                  </li>
                  <li>
                    <CheckCircle2 size={14} color="#2463eb" />
                    <span>42 quick wins listed</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tm-process-copy">
              <span className="tm-step-pill">Step 01</span>
              <h3 className="heading-h5">Free audit</h3>
              <p>We dig through every account, page and campaign to find waste and quick wins.</p>
            </div>
          </article>

          {/* Step 02 */}
          <article className="tm-card tm-process-card">
            <div className="tm-process-well">
              <div className="tm-process-ui">
                <div className="tm-process-ui-row">
                  <span>Monthly budget</span>
                  <strong>£60k</strong>
                </div>
                <div className="tm-budget-bars">
                  {[
                    { label: 'Google Ads', pct: '42%' },
                    { label: 'Meta Ads', pct: '30%' },
                    { label: 'SEO & content', pct: '18%' },
                    { label: 'Email', pct: '10%' },
                  ].map((item) => (
                    <div key={item.label} className="tm-budget-item">
                      <div className="tm-budget-meta">
                        <span>{item.label}</span>
                        <span>{item.pct}</span>
                      </div>
                      <div className="tm-budget-track">
                        <div className="tm-budget-fill" style={{ width: item.pct }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="tm-process-copy">
              <span className="tm-step-pill">Step 02</span>
              <h3 className="heading-h5">Growth plan</h3>
              <p>One channel plan with budgets, targets and the first tests we will run.</p>
            </div>
          </article>

          {/* Step 03 */}
          <article className="tm-card tm-process-card">
            <div className="tm-process-well">
              <div className="tm-process-ui">
                <div className="tm-process-ui-row">
                  <span>Revenue</span>
                  <span className="tm-delta-green">↗ 21.6%</span>
                </div>
                <div className="tm-process-rev">£164,906</div>
                <svg viewBox="0 0 220 72" className="tm-process-chart" aria-hidden="true">
                  <defs>
                    <linearGradient id="procGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2463eb" stopOpacity="0.24" />
                      <stop offset="100%" stopColor="#2463eb" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,62 C40,56 80,46 120,34 C160,22 190,14 220,6 L220,72 L0,72 Z"
                    fill="url(#procGrad)"
                  />
                  <path
                    d="M0,62 C40,56 80,46 120,34 C160,22 190,14 220,6"
                    fill="none"
                    stroke="#2463eb"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="tm-process-copy">
              <span className="tm-step-pill">Step 03</span>
              <h3 className="heading-h5">Launch &amp; scale</h3>
              <p>Weekly sprints, then we move budget to what works and keep scaling it.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
