export interface TestimonialItem {
  id: string;
  prefix: string;
  highlight: string;
  suffix: string;
  author: string;
  role: string;
  avatar: string;
  badgeText: string;
}

export interface ReviewBadge {
  id: string;
  score: string;
  platform: string;
  count: string;
  rotation: number;
  positionClass: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const testimonials: TestimonialItem[] = [
  {
    id: 'priya-nair',
    prefix: '“Our cost per lead dropped by a third in one quarter. ',
    highlight: 'Every pound now has a job',
    suffix: ', and we can finally see it.”',
    author: 'Priya Nair',
    role: 'CMO, Lumen Skin',
    avatar: '/assets/images/testimonials/avatar-1.webp',
    badgeText: '−33% CPL',
  },
  {
    id: 'marcus-hale',
    prefix: '“They rebuilt our paid search around margin, not clicks. ',
    highlight: 'ROAS went from 1.8 to 4.2',
    suffix: ' in four months.”',
    author: 'Marcus Hale',
    role: 'Founder, Halden Outdoor',
    avatar: '/assets/images/testimonials/avatar-2.webp',
    badgeText: '4.2× ROAS',
  },
  {
    id: 'ines-moreau',
    prefix: '“Tidemark is the first agency that ',
    highlight: 'talks to us in revenue',
    suffix: ', not impressions. Six months in, our pipeline has tripled.”',
    author: 'Ines Moreau',
    role: 'Head of Growth, Oakline',
    avatar: '/assets/images/testimonials/avatar-3.webp',
    badgeText: '3× pipeline',
  },
  {
    id: 'sofia-lind',
    prefix: '“Their monthly revenue report is the first marketing doc ',
    highlight: 'our CFO actually reads',
    suffix: '. That says it all.”',
    author: 'Sofia Lind',
    role: 'Marketing Lead, Fieldnote',
    avatar: '/assets/images/testimonials/avatar-4.webp',
    badgeText: '1-page report',
  },
  {
    id: 'rafael-costa',
    prefix: '“Tidemark feels like part of our own team. ',
    highlight: 'Weekly sprints, clear owners',
    suffix: ' and zero vanity metrics.”',
    author: 'Rafael Costa',
    role: 'VP Growth, Northwind Coffee',
    avatar: '/assets/images/testimonials/avatar-5.webp',
    badgeText: '+68% organic',
  },
];

export const reviewBadges: ReviewBadge[] = [
  { id: 'rateboard', score: '4.9', platform: 'Rateboard', count: '64 reviews', rotation: -3, positionClass: 'top-left' },
  { id: 'peerstack', score: '4.9', platform: 'Peerstack', count: '27 reviews', rotation: 3, positionClass: 'top-right' },
  { id: 'mapline', score: '5.0', platform: 'Mapline', count: '38 reviews', rotation: -2, positionClass: 'bottom-left' },
  { id: 'reviewnest', score: '4.8', platform: 'Reviewnest', count: '52 reviews', rotation: 2.5, positionClass: 'bottom-right' },
];
