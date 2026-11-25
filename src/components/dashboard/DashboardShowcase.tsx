import { useState } from 'react';
import {
  LayoutDashboard,
  BarChart2,
  Megaphone,
  Target,
  Users,
  Search,
  Image as ImageIcon,
  FileText,
  Plug,
  Settings,
  HelpCircle,
  Bell,
  Sparkles,
  Download,
  TrendingUp,
  TrendingDown,
  Star,
} from 'lucide-react';
import './DashboardShowcase.css';

const RANGE_DATA = {
  '7D': {
    revenue: '£42,180',
    revDelta: '+14.2%',
    revPrev: 'vs £36.9k last week',
    roas: '4.6×',
    roasDelta: '+0.4',
    cpl: '£17.90',
    cplDelta: '−28%',
    goal: '81.2%',
    tooltipDate: 'Sun, 21 Sep',
    tooltipValue: '£6,240',
    donutTotal: '£42.2k',
  },
  '30D': {
    revenue: '£164,906',
    revDelta: '+21.6%',
    revPrev: 'vs £135.6k last period',
    roas: '4.8×',
    roasDelta: '+0.6',
    cpl: '£18.40',
    cplDelta: '−31%',
    goal: '74.9%',
    tooltipDate: 'Sun, 21 Sep',
    tooltipValue: '£6,240',
    donutTotal: '£164.9k',
  },
  '90D': {
    revenue: '£486,420',
    revDelta: '+34.8%',
    revPrev: 'vs £360.8k prior 90d',
    roas: '5.1×',
    roasDelta: '+0.9',
    cpl: '£16.80',
    cplDelta: '−36%',
    goal: '91.4%',
    tooltipDate: 'Aug Peak',
    tooltipValue: '£18,900',
    donutTotal: '£486.4k',
  },
  '12M': {
    revenue: '£1,840,200',
    revDelta: '+68.0%',
    revPrev: 'vs £1.09M prior year',
    roas: '5.2×',
    roasDelta: '+1.4',
    cpl: '£16.10',
    cplDelta: '−42%',
    goal: '96.2%',
    tooltipDate: 'Q3 Avg',
    tooltipValue: '£164.9k',
    donutTotal: '£1.84M',
  },
} as const;

type RangeKey = keyof typeof RANGE_DATA;

const sidebarIcons = [
  LayoutDashboard,
  BarChart2,
  Megaphone,
  Target,
  Users,
  Search,
  ImageIcon,
  FileText,
  Plug,
  Settings,
  HelpCircle,
];

export function DashboardShowcase() {
  const [range, setRange] = useState<RangeKey>('30D');
  const [activeNav, setActiveNav] = useState(0);
  const d = RANGE_DATA[range];

  return (
    <div className="tm-dash-wrapper">
      <div className="tm-dash-frame">
        <div className="tm-dash-surface" role="region" aria-label="Example client revenue dashboard">
          {/* Left Icon Sidebar */}
          <aside className="tm-dash-sidebar" aria-label="Dashboard navigation">
            <div className="tm-dash-brand-icon" aria-hidden="true">
              <div className="tm-dash-brand-sq" />
            </div>
            <div className="tm-dash-side-list">
              {sidebarIcons.map((Icon, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveNav(idx)}
                  className={`tm-dash-side-btn${activeNav === idx ? ' is-active' : ''}`}
                  aria-label={`Dashboard section ${idx + 1}`}
                >
                  <Icon size={16} strokeWidth={1.7} />
                </button>
              ))}
            </div>
          </aside>

          {/* Main Dashboard Area */}
          <div className="tm-dash-main">
            {/* Top Bar */}
            <div className="tm-dash-topbar">
              <div className="tm-dash-breadcrumb">
                <span className="tm-dash-workspace-dot">N</span>
                <span className="tm-dash-workspace-name">Northwind Coffee</span>
                <span className="tm-dash-sep">/</span>
                <span className="tm-dash-crumb-muted">Reports</span>
                <span className="tm-dash-sep">/</span>
                <span className="tm-dash-crumb-active">Overview</span>
              </div>
              <div className="tm-dash-topbar-right">
                <div className="tm-dash-search">
                  <Search size={13} strokeWidth={1.8} />
                  <span>Search campaigns, reports...</span>
                  <kbd>⌘K</kbd>
                </div>
                <span className="tm-dash-bell" aria-hidden="true">
                  <Bell size={14} strokeWidth={1.8} />
                  <span className="tm-dash-bell-dot" />
                </span>
                <img
                  src="/assets/images/testimonials/avatar-1.webp"
                  alt=""
                  className="tm-dash-avatar"
                />
              </div>
            </div>

            {/* Title + Controls */}
            <div className="tm-dash-header-row">
              <div className="tm-dash-title-group">
                <span className="tm-dash-title">Overview</span>
                <span className="tm-dash-live-pill">
                  <span className="tm-dash-live-dot tm-live-dot" />
                  Live · updated 2 min ago
                </span>
              </div>

              <div className="tm-dash-controls">
                <div className="tm-dash-range-group" role="group" aria-label="Timeframe">
                  {(['7D', '30D', '90D', '12M'] as RangeKey[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setRange(key)}
                      className={`tm-dash-range-btn${range === key ? ' is-active' : ''}`}
                    >
                      {key}
                    </button>
                  ))}
                </div>
                <span className="tm-dash-action-chip">
                  <Sparkles size={12} strokeWidth={1.8} />
                  Ask Tidemark
                </span>
                <span className="tm-dash-action-chip is-primary">
                  <Download size={12} strokeWidth={1.8} />
                  Export
                </span>
              </div>
            </div>

            {/* 4 KPI Cards */}
            <div className="tm-dash-kpi-grid">
              <div className="tm-dash-kpi-card">
                <div className="tm-dash-kpi-top">
                  <span>Revenue</span>
                  <span className="tm-dash-delta is-up">
                    <TrendingUp size={11} /> {d.revDelta}
                  </span>
                </div>
                <div className="tm-dash-kpi-val">{d.revenue}</div>
                <div className="tm-dash-kpi-sub">{d.revPrev}</div>
              </div>

              <div className="tm-dash-kpi-card">
                <div className="tm-dash-kpi-top">
                  <span>Blended ROAS</span>
                  <span className="tm-dash-delta is-up">
                    <TrendingUp size={11} /> {d.roasDelta}
                  </span>
                </div>
                <div className="tm-dash-kpi-val">{d.roas}</div>
                <div className="tm-dash-kpi-sub">across 4 paid channels</div>
              </div>

              <div className="tm-dash-kpi-card">
                <div className="tm-dash-kpi-top">
                  <span>Cost per lead</span>
                  <span className="tm-dash-delta is-up">
                    <TrendingDown size={11} /> {d.cplDelta}
                  </span>
                </div>
                <div className="tm-dash-kpi-val">{d.cpl}</div>
                <div className="tm-dash-kpi-sub">target under £24.00</div>
              </div>

              <div className="tm-dash-kpi-card">
                <div className="tm-dash-kpi-top">
                  <span>Monthly goal</span>
                  <span className="tm-dash-delta is-neutral">On track</span>
                </div>
                <div className="tm-dash-kpi-val">{d.goal}</div>
                <div className="tm-dash-goal-bar">
                  <div className="tm-dash-goal-fill" style={{ width: d.goal }} />
                </div>
              </div>
            </div>

            {/* Charts Row */}
            <div className="tm-dash-charts-grid">
              {/* Revenue Trend Chart */}
              <div className="tm-dash-panel">
                <div className="tm-dash-panel-head">
                  <div>
                    <div className="tm-dash-panel-title">Revenue trend</div>
                    <div className="tm-dash-panel-sub">Daily revenue vs 30-day target</div>
                  </div>
                  <div className="tm-dash-panel-tabs">
                    <span className="is-active">Revenue</span>
                    <span>Orders</span>
                    <span>ROAS</span>
                  </div>
                </div>

                <div className="tm-dash-chart-metric">
                  <strong>£5,497</strong>
                  <span className="tm-dash-delta is-up">+18.4%</span>
                  <span className="tm-dash-kpi-sub">daily average</span>
                </div>

                <div className="tm-dash-line-wrap">
                  <svg viewBox="0 0 460 130" className="tm-dash-line-svg" aria-hidden="true">
                    <defs>
                      <linearGradient id="dashAreaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2463eb" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#2463eb" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="35" x2="460" y2="35" stroke="#eef2f6" strokeWidth="1" />
                    <line x1="0" y1="70" x2="460" y2="70" stroke="#eef2f6" strokeWidth="1" />
                    <line x1="0" y1="105" x2="460" y2="105" stroke="#eef2f6" strokeWidth="1" />
                    <path
                      d="M0,108 L45,100 L90,94 L135,88 L180,92 L225,74 L270,68 L315,52 L360,44 L405,34 L460,18 L460,130 L0,130 Z"
                      fill="url(#dashAreaGrad)"
                    />
                    <path
                      d="M0,108 L45,100 L90,94 L135,88 L180,92 L225,74 L270,68 L315,52 L360,44 L405,34 L460,18"
                      fill="none"
                      stroke="#2463eb"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="315" cy="52" r="5" fill="#2463eb" stroke="#ffffff" strokeWidth="2.5" />
                  </svg>

                  <div className="tm-dash-tooltip">
                    <div className="tm-dash-tooltip-date">{d.tooltipDate}</div>
                    <div className="tm-dash-tooltip-val">
                      {d.tooltipValue} <span>+9% vs target</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Channel Donut Card */}
              <div className="tm-dash-panel">
                <div className="tm-dash-panel-head">
                  <div>
                    <div className="tm-dash-panel-title">Revenue by channel</div>
                    <div className="tm-dash-panel-sub">Attributed revenue share</div>
                  </div>
                </div>

                <div className="tm-dash-donut-row">
                  <div className="tm-dash-donut-wrap">
                    <svg viewBox="0 0 110 110" className="tm-dash-donut-svg" aria-hidden="true">
                      <circle cx="55" cy="55" r="40" fill="none" stroke="#eaf1ff" strokeWidth="12" />
                      <circle
                        cx="55"
                        cy="55"
                        r="40"
                        fill="none"
                        stroke="#2463eb"
                        strokeWidth="12"
                        strokeDasharray="115 251"
                        strokeDashoffset="0"
                        transform="rotate(-90 55 55)"
                      />
                      <circle
                        cx="55"
                        cy="55"
                        r="40"
                        fill="none"
                        stroke="#5b9dfa"
                        strokeWidth="12"
                        strokeDasharray="65 251"
                        strokeDashoffset="-115"
                        transform="rotate(-90 55 55)"
                      />
                      <circle
                        cx="55"
                        cy="55"
                        r="40"
                        fill="none"
                        stroke="#a9cbff"
                        strokeWidth="12"
                        strokeDasharray="45 251"
                        strokeDashoffset="-180"
                        transform="rotate(-90 55 55)"
                      />
                    </svg>
                    <div className="tm-dash-donut-center">
                      <span>Total</span>
                      <strong>{d.donutTotal}</strong>
                    </div>
                  </div>

                  <div className="tm-dash-legend">
                    <div className="tm-dash-legend-item">
                      <span className="tm-dot" style={{ background: '#2463eb' }} />
                      <span>Google Ads</span>
                      <strong>£64.2k</strong>
                    </div>
                    <div className="tm-dash-legend-item">
                      <span className="tm-dot" style={{ background: '#5b9dfa' }} />
                      <span>Organic</span>
                      <strong>£48.1k</strong>
                    </div>
                    <div className="tm-dash-legend-item">
                      <span className="tm-dot" style={{ background: '#a9cbff' }} />
                      <span>Paid Social</span>
                      <strong>£34.8k</strong>
                    </div>
                    <div className="tm-dash-legend-item">
                      <span className="tm-dot" style={{ background: '#dce7fa' }} />
                      <span>Email</span>
                      <strong>£17.8k</strong>
                    </div>
                  </div>
                </div>

                <div className="tm-dash-spare-pill">
                  <span>Organic revenue share this month</span>
                  <span className="tm-dash-delta is-up">+24%</span>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="tm-dash-bottom-row">
              <div className="tm-dash-table-card">
                <div className="tm-dash-table-head">
                  <span>Top campaigns</span>
                  <span className="tm-dash-view-all">View all</span>
                </div>
                <div className="tm-dash-table-row">
                  <span className="tm-dash-camp-name">Search · Coffee subscriptions</span>
                  <span className="tm-dash-status is-scaling">Scaling</span>
                  <span className="tm-dash-camp-val">5.4× ROAS</span>
                </div>
                <div className="tm-dash-table-row">
                  <span className="tm-dash-camp-name">Meta · Founder story UGC</span>
                  <span className="tm-dash-status is-testing">Testing</span>
                  <span className="tm-dash-camp-val">3.9× ROAS</span>
                </div>
              </div>

              <div className="tm-dash-ai-card">
                <div className="tm-dash-ai-head">
                  <Sparkles size={13} strokeWidth={2} />
                  <span>Tidemark AI</span>
                </div>
                <p>Shift £4k from Meta prospecting to Google Search.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trust Pill */}
      <div className="tm-dash-trust-pill">
        <span className="tm-dash-stars" aria-hidden="true">
          {[1, 2, 3, 4, 5].map((n) => (
            <Star key={n} size={13} fill="#f59e0b" color="#f59e0b" />
          ))}
        </span>
        <span>Rated 4.9 by 120+ growth brands</span>
      </div>
    </div>
  );
}
