export interface IntegrationCategoryHub {
  id: string;
  label: string;
  x: number;
  y: number;
}

export interface IntegrationPartnerNode {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  hubId: string;
}

export const integrationHubs: IntegrationCategoryHub[] = [
  { id: 'search', label: 'Search ads', x: 50, y: 29 },
  { id: 'social', label: 'Social ads', x: 64, y: 39 },
  { id: 'storefront', label: 'Storefront', x: 64, y: 61 },
  { id: 'analytics', label: 'Analytics', x: 50, y: 71 },
  { id: 'crm', label: 'CRM', x: 36, y: 61 },
  { id: 'email', label: 'Email', x: 36, y: 39 },
];

export const integrationPartners: IntegrationPartnerNode[] = [
  { id: 'mailbloom', name: 'Mailbloom', category: 'Email & SMS', x: 50, y: 12, hubId: 'search' },
  { id: 'cartwell', name: 'Cartwell', category: 'Storefront', x: 43, y: 30, hubId: 'email' },
  { id: 'metrivo', name: 'Metrivo', category: 'Analytics', x: 57, y: 30, hubId: 'search' },
  { id: 'duoloop', name: 'Duoloop', category: 'CRM', x: 29, y: 31, hubId: 'email' },
  { id: 'clipwave', name: 'Clipwave', category: 'Social ads', x: 71, y: 31, hubId: 'social' },
  { id: 'pinora', name: 'Pinora', category: 'Social ads', x: 18, y: 50, hubId: 'email' },
  { id: 'paylane', name: 'Paylane', category: 'Payments', x: 82, y: 50, hubId: 'storefront' },
  { id: 'seekora', name: 'Seekora', category: 'Search ads', x: 29, y: 69, hubId: 'crm' },
  { id: 'linkfold', name: 'Linkfold', category: 'Attribution', x: 71, y: 69, hubId: 'storefront' },
  { id: 'pipehub', name: 'Pipehub', category: 'CRM', x: 43, y: 70, hubId: 'crm' },
  { id: 'relayon', name: 'Relayon', category: 'Workflows', x: 57, y: 70, hubId: 'analytics' },
  { id: 'lenscape', name: 'Lenscape', category: 'Analytics', x: 50, y: 88, hubId: 'analytics' },
];
