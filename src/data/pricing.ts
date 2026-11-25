export interface PricingPlan {
  id: 'launch' | 'growth' | 'scale';
  name: string;
  description: string;
  monthlyPrice: string | null;
  quarterlyPrice: string | null;
  customLabel?: string;
  billingNoteMonthly: string;
  billingNoteQuarterly: string;
  ctaLabel: string;
  ctaTo: string;
  popular?: boolean;
  featuredSky?: boolean;
}

export interface ComparisonRow {
  label: string;
  launch: { type: 'text' | 'check' | 'cross'; text?: string };
  growth: { type: 'text' | 'check' | 'cross'; text?: string };
  scale: { type: 'text' | 'check' | 'cross'; text?: string };
}

export interface ComparisonGroup {
  heading: string;
  rows: ComparisonRow[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'launch',
    name: 'Launch',
    description: '1 to 2 channels for brands getting started.',
    monthlyPrice: '£2,900',
    quarterlyPrice: '£2,610',
    billingNoteMonthly: 'Billed monthly, cancel anytime',
    billingNoteQuarterly: 'Billed quarterly, save 10%',
    ctaLabel: 'Start with an audit',
    ctaTo: '/contact',
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'Every channel, one team, built to scale.',
    monthlyPrice: '£5,900',
    quarterlyPrice: '£5,310',
    billingNoteMonthly: 'Billed monthly, cancel anytime',
    billingNoteQuarterly: 'Billed quarterly, save 10%',
    ctaLabel: 'Start with an audit',
    ctaTo: '/contact',
    popular: true,
    featuredSky: true,
  },
  {
    id: 'scale',
    name: 'Scale',
    description: 'Multi-market brands and big budgets.',
    monthlyPrice: null,
    quarterlyPrice: null,
    customLabel: 'Custom',
    billingNoteMonthly: 'Tailored to your markets',
    billingNoteQuarterly: 'Tailored to your markets',
    ctaLabel: 'Talk to sales',
    ctaTo: '/contact',
  },
];

export const comparisonGroups: ComparisonGroup[] = [
  {
    heading: 'CHANNELS & SPEND',
    rows: [
      {
        label: 'Channels',
        launch: { type: 'text', text: '2' },
        growth: { type: 'text', text: '4' },
        scale: { type: 'text', text: 'Unlimited' },
      },
      {
        label: 'Ad spend managed',
        launch: { type: 'text', text: 'Up to £20k' },
        growth: { type: 'text', text: 'Up to £100k' },
        scale: { type: 'text', text: 'Any' },
      },
      {
        label: 'Creative & landing pages',
        launch: { type: 'cross' },
        growth: { type: 'check' },
        scale: { type: 'check', text: 'In-house team' },
      },
    ],
  },
  {
    heading: 'REPORTING',
    rows: [
      {
        label: 'Revenue report',
        launch: { type: 'text', text: 'Monthly' },
        growth: { type: 'text', text: 'Monthly' },
        scale: { type: 'text', text: 'Weekly' },
      },
      {
        label: 'Live dashboard',
        launch: { type: 'cross' },
        growth: { type: 'check' },
        scale: { type: 'check' },
      },
      {
        label: 'Strategy reviews',
        launch: { type: 'text', text: 'Quarterly' },
        growth: { type: 'text', text: 'Monthly' },
        scale: { type: 'text', text: 'Weekly' },
      },
    ],
  },
  {
    heading: 'TEAM & TERMS',
    rows: [
      {
        label: 'Dedicated growth lead',
        launch: { type: 'cross' },
        growth: { type: 'check' },
        scale: { type: 'check', text: 'Senior partner' },
      },
      {
        label: 'Slack channel',
        launch: { type: 'check' },
        growth: { type: 'check' },
        scale: { type: 'check' },
      },
      {
        label: 'Contract',
        launch: { type: 'text', text: 'Rolling after 90 days' },
        growth: { type: 'text', text: 'Rolling after 90 days' },
        scale: { type: 'text', text: 'Rolling after 90 days' },
      },
    ],
  },
];
