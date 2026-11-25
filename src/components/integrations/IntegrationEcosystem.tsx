import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Megaphone,
  Store,
  BarChart3,
  Users,
  Mail,
  Zap,
  Layers,
  Globe,
  CreditCard,
  Link2,
  GitBranch,
  LineChart,
  Video,
  Target,
  Send,
} from 'lucide-react';
import { integrationHubs, integrationPartners } from '@/data/integrations';
import { BrandMark } from '@/components/common/BrandMark';
import './IntegrationEcosystem.css';

interface IntegrationEcosystemProps {
  ctaText?: string;
}

const partnerIcons: Record<string, typeof Search> = {
  mailbloom: Mail,
  cartwell: Store,
  metrivo: LineChart,
  duoloop: Layers,
  clipwave: Video,
  pinora: Target,
  paylane: CreditCard,
  seekora: Search,
  linkfold: Link2,
  pipehub: GitBranch,
  relayon: Zap,
  lenscape: BarChart3,
};

const hubIcons: Record<string, typeof Search> = {
  search: Search,
  social: Megaphone,
  storefront: Store,
  analytics: BarChart3,
  crm: Users,
  email: Send,
};

export function IntegrationEcosystem({ ctaText = 'See all integrations' }: IntegrationEcosystemProps) {
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);

  return (
    <div className="inset-shell">
      <section className="sky-panel tm-integrations-section padding-global">
        <img
          src="/assets/images/sky/sky-cta.webp"
          alt=""
          className="sky-panel-bg"
          loading="lazy"
        />
        <div className="sky-panel-overlay-top" />

        <div className="container-large tm-integrations-inner">
          <div className="tm-integrations-head">
            <div>
              <div className="sky-pill-badge tm-int-pill">
                <span className="tm-badge-ring" aria-hidden="true" />
                <span>Integrations</span>
              </div>
              <h2 className="heading-h2 tm-int-title">
                Plugged into your
                <br />
                whole stack.
              </h2>
            </div>

            <p className="tm-int-sub">
              We work inside the tools you already use. Read-only by default, and every account stays yours.
            </p>
          </div>

          {/* Radial Diagram (Desktop & Tablet) */}
          <div className="tm-int-diagram" aria-label="Integration ecosystem radial map">
            <svg viewBox="0 0 100 100" className="tm-int-lines" preserveAspectRatio="none" aria-hidden="true">
              <circle
                cx="50"
                cy="50"
                r="21"
                fill="none"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="0.25"
                strokeDasharray="0.9 0.9"
              />
              <circle
                cx="50"
                cy="50"
                r="36"
                fill="none"
                stroke="rgba(255,255,255,0.16)"
                strokeWidth="0.25"
                strokeDasharray="1 1"
              />
              {integrationHubs.map((hub) => (
                <line
                  key={hub.id}
                  x1="50"
                  y1="50"
                  x2={hub.x}
                  y2={hub.y}
                  stroke="rgba(255,255,255,0.28)"
                  strokeWidth="0.28"
                />
              ))}
              {integrationPartners.map((p) => {
                const hub = integrationHubs.find((h) => h.id === p.hubId);
                if (!hub) return null;
                const active = hoveredPartner === p.id;
                return (
                  <line
                    key={p.id}
                    x1={hub.x}
                    y1={hub.y}
                    x2={p.x}
                    y2={p.y}
                    stroke={active ? '#ffffff' : 'rgba(255,255,255,0.25)'}
                    strokeWidth={active ? '0.45' : '0.25'}
                  />
                );
              })}
            </svg>

            {/* Center Node */}
            <div className="tm-int-center-node">
              <BrandMark size={30} variant="on-light" showText={false} />
              <span>Tidemark</span>
            </div>

            {/* Hub Nodes */}
            {integrationHubs.map((hub) => {
              const Icon = hubIcons[hub.id] || Globe;
              return (
                <div
                  key={hub.id}
                  className="tm-int-hub-node"
                  style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
                >
                  <span className="tm-int-hub-circle">
                    <Icon size={15} strokeWidth={1.7} />
                  </span>
                  <span className="tm-int-node-label">{hub.label}</span>
                </div>
              );
            })}

            {/* Partner Nodes */}
            {integrationPartners.map((p) => {
              const Icon = partnerIcons[p.id] || Globe;
              const isHovered = hoveredPartner === p.id;
              return (
                <div
                  key={p.id}
                  className={`tm-int-partner-node${isHovered ? ' is-hovered' : ''}`}
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  onMouseEnter={() => setHoveredPartner(p.id)}
                  onMouseLeave={() => setHoveredPartner(null)}
                >
                  <span className="tm-int-partner-circle">
                    <Icon size={18} strokeWidth={1.7} />
                  </span>
                  <span className="tm-int-node-label">{p.name}</span>
                </div>
              );
            })}
          </div>

          {/* Mobile clean grid fallback */}
          <div className="tm-int-mobile-grid">
            {integrationPartners.map((p) => {
              const Icon = partnerIcons[p.id] || Globe;
              return (
                <div key={p.id} className="tm-int-mobile-item">
                  <span className="tm-int-partner-circle">
                    <Icon size={17} strokeWidth={1.7} />
                  </span>
                  <div>
                    <strong>{p.name}</strong>
                    <span>{p.category}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Info Pill */}
          <div className="tm-int-bottom-strip">
            <div className="tm-int-stat-item">
              <strong>30+</strong>
              <span>integrations</span>
            </div>
            <span className="tm-int-divider" aria-hidden="true" />
            <div className="tm-int-stat-item">
              <strong>Read-only</strong>
              <span>by default</span>
            </div>
            <span className="tm-int-divider" aria-hidden="true" />
            <div className="tm-int-stat-item">
              <strong>100%</strong>
              <span>data ownership</span>
            </div>
            <Link to="/contact" className="tm-btn tm-btn-primary tm-btn-sm">
              {ctaText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
