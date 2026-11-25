export type CaseStudyCategory = 'Ecommerce' | 'B2B SaaS' | 'Health' | 'Finance';

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyApproachStep {
  step: string;
  title: string;
  description: string;
}

export interface CaseStudyMonthlyPoint {
  month: string;
  primary: number;
  secondary: number;
}

export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  initial: string;
  industry: string;
  category: CaseStudyCategory;
  serviceLabel: string;
  timeline: string;
  headline: string;
  primaryStat: string;
  primaryStatPhrase: string;
  shortDesc: string;
  carouselMeta: string;
  carouselDescription: string;
  carouselStats: CaseStudyMetric[];
  carouselFloatQuote: string;
  carouselFloatBadge: string;
  carouselFloatTitle: string;
  carouselFloatSub: string;
  featuredInCarousel: boolean;
  heroImage: string;
  cardImage: string;
  kpis: CaseStudyMetric[];
  servicesUsed: string[];
  challengeParagraphs: string[];
  approachSummary: string;
  approachSteps: CaseStudyApproachStep[];
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
  resultsSummary: string;
  chartLabelPrimary: string;
  chartLabelSecondary: string;
  chartData: CaseStudyMonthlyPoint[];
  relatedSlugs: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'northwind-coffee',
    slug: 'northwind-coffee',
    client: 'Northwind Coffee',
    initial: 'N',
    industry: 'Ecommerce, coffee',
    category: 'Ecommerce',
    serviceLabel: 'SEO and content',
    timeline: '6 months',
    headline: "How organic became Northwind's biggest revenue channel.",
    primaryStat: '+68%',
    primaryStatPhrase: 'organic revenue in six months.',
    shortDesc: 'Rebuilt the site around how people search for coffee.',
    carouselMeta: 'DTC coffee · SEO + Content · 6 months',
    carouselDescription:
      'We rebuilt Northwind’s site around how people actually search for coffee. Organic is now their biggest, cheapest revenue channel.',
    carouselStats: [
      { value: '14', label: 'keywords at #1' },
      { value: '£212k', label: 'added pipeline' },
      { value: '−42%', label: 'blended CAC' },
    ],
    carouselFloatQuote: '“Organic is now our #1 channel.”',
    carouselFloatBadge: '#1',
    carouselFloatTitle: 'specialty coffee subscription',
    carouselFloatSub: 'Ranked #9 → #1 in 11 weeks',
    featuredInCarousel: true,
    heroImage: '/assets/images/products/product-coffee.webp',
    cardImage: '/assets/images/sky/sky-card.webp',
    kpis: [
      { value: '+68%', label: 'Organic revenue' },
      { value: '14', label: 'Keywords ranking first' },
      { value: '£212k', label: 'Added pipeline' },
      { value: '3.1x', label: 'Return on content spend' },
    ],
    servicesUsed: ['Technical SEO', 'Content', 'Digital PR'],
    challengeParagraphs: [
      'Northwind roasts some of the best coffee in the country, but almost nobody searched for it. Paid social was carrying the whole business and every price rise in Meta ate straight into margin.',
      'Their site had 140 product pages, no blog and a technical setup that blocked half of it from Google.',
    ],
    approachSummary:
      'We started with a two week technical audit, then mapped every question a coffee buyer asks before they order. That became a 40 article plan tied to product pages.',
    approachSteps: [
      { step: '1', title: 'Fix the foundations', description: 'Site speed, indexing and structured data on all 140 product pages.' },
      { step: '2', title: 'Own the questions', description: '40 guides on brewing, beans and gear, each linking to the right product.' },
      { step: '3', title: 'Earn the links', description: 'Digital PR with coffee writers and roasters, 62 new referring domains.' },
    ],
    quote: '“They rebuilt our site around how people actually search for coffee. Organic is now our biggest revenue channel.”',
    quoteAuthor: 'Mara Lindqvist',
    quoteRole: 'Founder, Northwind Coffee',
    resultsSummary:
      'Six months in, organic search drives more revenue than paid social for the first time. Meta budget is down 20% and total revenue is up.',
    chartLabelPrimary: 'Organic',
    chartLabelSecondary: 'Paid social',
    chartData: [
      { month: 'Apr', primary: 22, secondary: 62 },
      { month: 'May', primary: 31, secondary: 58 },
      { month: 'Jun', primary: 45, secondary: 55 },
      { month: 'Jul', primary: 58, secondary: 52 },
      { month: 'Aug', primary: 74, secondary: 50 },
      { month: 'Sep', primary: 92, secondary: 48 },
    ],
    relatedSlugs: ['lumi-skin', 'oakline', 'maison-rose'],
  },
  {
    id: 'lumi-skin',
    slug: 'lumi-skin',
    client: 'Lumi Skin',
    initial: 'L',
    industry: 'Ecommerce, skincare',
    category: 'Ecommerce',
    serviceLabel: 'Paid social',
    timeline: '6 months',
    headline: 'How Lumi Skin tripled Meta revenue with weekly creative.',
    primaryStat: '+212%',
    primaryStatPhrase: 'revenue from Meta in six months.',
    shortDesc: 'Creative testing went from 4 to 30 ads a month.',
    carouselMeta: 'DTC skincare · Paid social · 6 months',
    carouselDescription:
      'We built a weekly creative testing system around UGC. Lumi went from 4 new ads a month to 30, and Meta became their best channel.',
    carouselStats: [
      { value: '30', label: 'ads a month' },
      { value: '−27%', label: 'cost per purchase' },
      { value: '£640k', label: 'new revenue' },
    ],
    carouselFloatQuote: '“Meta is now our best channel.”',
    carouselFloatBadge: '4.1×',
    carouselFloatTitle: 'UGC hook, week 6',
    carouselFloatSub: 'ROAS 1.6× → 4.1× in 6 weeks',
    featuredInCarousel: true,
    heroImage: '/assets/images/products/product-skincare.webp',
    cardImage: '/assets/images/sky/sky-card.webp',
    kpis: [
      { value: '+212%', label: 'Revenue from Meta' },
      { value: '30', label: 'New ads every month' },
      { value: '3.4x', label: 'Blended ROAS' },
      { value: '−38%', label: 'Cost per purchase' },
    ],
    servicesUsed: ['Paid social', 'Creative', 'UGC'],
    challengeParagraphs: [
      'Lumi Skin had a loyal community and a product people loved, but their Meta account ran on four ads that had been live for months. Performance was fading and every new launch felt like a guess.',
      'The team had no system for briefing, testing or reading results, so good ideas never got a fair chance.',
    ],
    approachSummary:
      'We built a weekly creative engine around real customers. Every week we briefed, shot and launched new hooks, then let the data decide what earned more budget.',
    approachSteps: [
      { step: '1', title: 'Find the angles', description: 'Mined 2,000 reviews to find the problems customers talk about most.' },
      { step: '2', title: 'Test every week', description: 'Eight new hooks a week from creators, founders and real customers.' },
      { step: '3', title: 'Scale the winners', description: 'Moved budget to proven ads within days, not at the end of the month.' },
    ],
    quote: '“We went from guessing to knowing. Every Monday we see what worked and what gets more budget.”',
    quoteAuthor: 'Sofia Marin',
    quoteRole: 'Head of Growth, Lumi Skin',
    resultsSummary:
      'Six months in, revenue from Meta is up 212% while cost per purchase dropped 38%. The team now launches new creative every week without adding headcount.',
    chartLabelPrimary: 'New creative ROAS',
    chartLabelSecondary: 'Legacy ads ROAS',
    chartData: [
      { month: 'Apr', primary: 26, secondary: 24 },
      { month: 'May', primary: 38, secondary: 22 },
      { month: 'Jun', primary: 52, secondary: 20 },
      { month: 'Jul', primary: 68, secondary: 18 },
      { month: 'Aug', primary: 81, secondary: 16 },
      { month: 'Sep', primary: 95, secondary: 15 },
    ],
    relatedSlugs: ['northwind-coffee', 'oakline', 'maison-rose'],
  },
  {
    id: 'halden-health',
    slug: 'halden-health',
    client: 'Halden Health',
    initial: 'H',
    industry: 'Health, clinics',
    category: 'Health',
    serviceLabel: 'Paid search',
    timeline: '5 months',
    headline: 'How Halden Health filled its clinics for less.',
    primaryStat: '−41%',
    primaryStatPhrase: 'cost per booked appointment.',
    shortDesc: 'Local campaigns and call tracking.',
    carouselMeta: 'Health clinics · Paid search · 5 months',
    carouselDescription:
      'We split one national campaign into twelve local ones and tracked every call. Each clinic now gets the patients it can handle.',
    carouselStats: [
      { value: '−54%', label: 'wasted spend' },
      { value: '2.4×', label: 'more bookings' },
      { value: '12', label: 'clinics' },
    ],
    carouselFloatQuote: '“We know which searches book patients.”',
    carouselFloatBadge: 'CVR',
    carouselFloatTitle: 'clinic landing pages',
    carouselFloatSub: '1.9% → 4.6% in 8 weeks',
    featuredInCarousel: true,
    heroImage: '/assets/images/about/about-meeting-main.webp',
    cardImage: '/assets/images/sky/sky-card.webp',
    kpis: [
      { value: '−41%', label: 'Cost per booking' },
      { value: '+64%', label: 'Booked appointments' },
      { value: '9', label: 'Clinics covered' },
      { value: '72%', label: 'Calls answered in hours' },
    ],
    servicesUsed: ['Local search', 'Call tracking', 'Google Ads'],
    challengeParagraphs: [
      'Halden Health runs nine clinics, but all of them shared one generic campaign. Busy clinics were overbooked while quieter ones had empty slots every week.',
      'Most patients booked by phone, and none of those calls were tracked back to ads.',
    ],
    approachSummary:
      'We split the account by clinic and service, added call tracking to every ad, and moved budget each week to the clinics with open capacity.',
    approachSteps: [
      { step: '1', title: 'One campaign per clinic', description: "Local campaigns with each clinic's own address, hours and services." },
      { step: '2', title: 'Track every call', description: 'Call tracking tied each phone booking back to the ad that drove it.' },
      { step: '3', title: 'Fill the gaps', description: 'Weekly budget shifts towards clinics with free appointment slots.' },
    ],
    quote: '“We finally know which ads fill our diaries. Every clinic is busy and we spend less to get there.”',
    quoteAuthor: 'James Whitlock',
    quoteRole: 'Operations Director, Halden Health',
    resultsSummary:
      'Booked appointments are up 64% while cost per booking fell 41%. Quiet clinics now fill their diaries and the team can see the value of every call.',
    chartLabelPrimary: 'Booked calls',
    chartLabelSecondary: 'Cost per booking',
    chartData: [
      { month: 'Apr', primary: 34, secondary: 82 },
      { month: 'May', primary: 46, secondary: 71 },
      { month: 'Jun', primary: 58, secondary: 62 },
      { month: 'Jul', primary: 71, secondary: 55 },
      { month: 'Aug', primary: 84, secondary: 49 },
      { month: 'Sep', primary: 94, secondary: 44 },
    ],
    relatedSlugs: ['northwind-coffee', 'lumi-skin', 'oakline'],
  },
  {
    id: 'oakline',
    slug: 'oakline',
    client: 'Oakline',
    initial: 'O',
    industry: 'B2B SaaS',
    category: 'B2B SaaS',
    serviceLabel: 'Paid search',
    timeline: '6 months',
    headline: 'How Oakline tripled qualified pipeline from Google Ads.',
    primaryStat: '3×',
    primaryStatPhrase: 'qualified pipeline in six months.',
    shortDesc: 'Rebuilt Google Ads around intent and margin.',
    carouselMeta: 'B2B SaaS · Paid search · 6 months',
    carouselDescription:
      'We rebuilt Oakline’s Google Ads around three intents and cut 64 campaigns to 9. Search spend now lines up with pipeline.',
    carouselStats: [
      { value: '−38%', label: 'cost per demo' },
      { value: '£480k', label: 'new ARR' },
      { value: '9', label: 'campaigns, was 64' },
    ],
    carouselFloatQuote: '“Spend finally lines up with pipeline.”',
    carouselFloatBadge: '#1',
    carouselFloatTitle: 'crm for agencies',
    carouselFloatSub: 'Top ad slot, 9 weeks running',
    featuredInCarousel: true,
    heroImage: '/assets/images/about/about-collaboration.webp',
    cardImage: '/assets/images/sky/sky-card.webp',
    kpis: [
      { value: '3x', label: 'Qualified pipeline' },
      { value: '−38%', label: 'Cost per demo' },
      { value: '£1.8m', label: 'Pipeline created' },
      { value: '9', label: 'Campaigns, down from 64' },
    ],
    servicesUsed: ['Google Ads', 'Landing pages', 'CRM tracking'],
    challengeParagraphs: [
      'Oakline spent heavily on Google Ads but most leads never turned into real sales conversations. The account had 64 campaigns, broad keywords and no link between ad spend and closed revenue.',
      'Sales had stopped trusting marketing leads, and nobody could say which searches actually paid back.',
    ],
    approachSummary:
      'We connected the CRM to Google Ads, then rebuilt the account around three buying intents. Budget now follows pipeline value, not clicks or form fills.',
    approachSteps: [
      { step: '1', title: 'Track real revenue', description: 'Sent opportunity and deal data from the CRM back into Google Ads.' },
      { step: '2', title: 'Cut the noise', description: 'Merged 64 campaigns into 9 built around three buying intents.' },
      { step: '3', title: 'Fix the landing', description: 'New landing pages for each use case with a shorter demo form.' },
    ],
    quote: '“For the first time, sales and marketing look at the same numbers. Pipeline from search has tripled.”',
    quoteAuthor: 'Ines Moreau',
    quoteRole: 'Head of Growth, Oakline',
    resultsSummary:
      'Qualified pipeline from paid search is three times higher on the same budget. Cost per demo is down 38% and sales now asks for more search leads.',
    chartLabelPrimary: 'Qualified pipeline',
    chartLabelSecondary: 'Wasted clicks',
    chartData: [
      { month: 'Apr', primary: 28, secondary: 72 },
      { month: 'May', primary: 42, secondary: 56 },
      { month: 'Jun', primary: 58, secondary: 42 },
      { month: 'Jul', primary: 72, secondary: 32 },
      { month: 'Aug', primary: 86, secondary: 24 },
      { month: 'Sep', primary: 96, secondary: 18 },
    ],
    relatedSlugs: ['northwind-coffee', 'lumi-skin', 'maison-rose'],
  },
  {
    id: 'maison-rose',
    slug: 'maison-rose',
    client: 'Maison Rose',
    initial: 'M',
    industry: 'Ecommerce, fashion',
    category: 'Ecommerce',
    serviceLabel: 'Lifecycle and CRO',
    timeline: '5 months',
    headline: 'How Maison Rose turned first orders into loyal customers.',
    primaryStat: '+22%',
    primaryStatPhrase: 'repeat order rate.',
    shortDesc: 'New flows and a rebuilt checkout.',
    carouselMeta: 'Ecommerce · Lifecycle + CRO · 5 months',
    carouselDescription:
      'We mapped the customer journey after the first order, built 9 automated flows, and rebuilt the mobile checkout.',
    carouselStats: [
      { value: '+22%', label: 'repeat order rate' },
      { value: '+31%', label: 'checkout CVR' },
      { value: '£96k', label: 'added email revenue' },
    ],
    carouselFloatQuote: '“Email became our #2 channel.”',
    carouselFloatBadge: '9',
    carouselFloatTitle: 'automated flows live',
    carouselFloatSub: '£96k added in 5 months',
    featuredInCarousel: false,
    heroImage: '/assets/images/products/product-fashion.webp',
    cardImage: '/assets/images/sky/sky-card.webp',
    kpis: [
      { value: '+22%', label: 'Repeat order rate' },
      { value: '+31%', label: 'Checkout conversion' },
      { value: '£96k', label: 'Added revenue from email' },
      { value: '9', label: 'New automated flows' },
    ],
    servicesUsed: ['Email', 'SMS', 'CRO'],
    challengeParagraphs: [
      'Maison Rose was great at winning first orders and poor at winning second ones. Most customers bought once and never heard from the brand again.',
      'The checkout also lost a third of shoppers on mobile, so paid traffic was leaking before it could pay back.',
    ],
    approachSummary:
      'We mapped the customer journey after the first order, then built flows for every key moment. In parallel we tested and rebuilt the mobile checkout.',
    approachSteps: [
      { step: '1', title: 'Welcome properly', description: 'A new welcome series that tells the brand story and styles each piece.' },
      { step: '2', title: 'Bring them back', description: 'Post purchase, replenish and win back flows timed to real buying cycles.' },
      { step: '3', title: 'Fix the checkout', description: 'Fewer steps, express pay and clearer delivery dates on mobile.' },
    ],
    quote: '“Our customers now come back on their own. Email went from an afterthought to our second biggest channel.”',
    quoteAuthor: 'Theo Laurent',
    quoteRole: 'Founder, Maison Rose',
    resultsSummary:
      'Repeat orders are up 22% and mobile checkout converts 31% better. Email and SMS added £96k in revenue in five months with no extra ad spend.',
    chartLabelPrimary: 'Lifecycle revenue',
    chartLabelSecondary: 'Baseline',
    chartData: [
      { month: 'May', primary: 32, secondary: 28 },
      { month: 'Jun', primary: 46, secondary: 29 },
      { month: 'Jul', primary: 60, secondary: 30 },
      { month: 'Aug', primary: 76, secondary: 31 },
      { month: 'Sep', primary: 88, secondary: 32 },
      { month: 'Oct', primary: 95, secondary: 32 },
    ],
    relatedSlugs: ['northwind-coffee', 'lumi-skin', 'oakline'],
  },
  {
    id: 'fieldbox',
    slug: 'fieldbox',
    client: 'Fieldbox',
    initial: 'F',
    industry: 'B2B SaaS, payroll',
    category: 'Finance',
    serviceLabel: 'SEO and content',
    timeline: '12 months',
    headline: 'How Fieldbox built an organic demo engine in one year.',
    primaryStat: '14',
    primaryStatPhrase: 'keywords ranking first.',
    shortDesc: 'Topic map and 40 articles in a year.',
    carouselMeta: 'B2B SaaS · SEO + Content · 12 months',
    carouselDescription:
      'We mapped 120 payroll buyer questions and published 40 expert guides tied directly to product demo pages.',
    carouselStats: [
      { value: '14', label: 'keywords at #1' },
      { value: '+180%', label: 'organic demos' },
      { value: '−29%', label: 'blended CAC' },
    ],
    carouselFloatQuote: '“Organic is our cheapest demo source.”',
    carouselFloatBadge: '40',
    carouselFloatTitle: 'expert payroll guides',
    carouselFloatSub: '+180% organic demo requests',
    featuredInCarousel: false,
    heroImage: '/assets/images/careers/careers-workshop.webp',
    cardImage: '/assets/images/sky/sky-card.webp',
    kpis: [
      { value: '14', label: 'Keywords ranking first' },
      { value: '+180%', label: 'Organic demo requests' },
      { value: '40', label: 'Articles published' },
      { value: '−29%', label: 'Blended cost per demo' },
    ],
    servicesUsed: ['SEO', 'Content', 'Topic map'],
    challengeParagraphs: [
      'Fieldbox sells payroll software in a crowded market where paid search clicks cost more every quarter. Almost all demos came from ads, and the blog had not been updated in two years.',
      'Finance teams were searching for answers, but Fieldbox was nowhere on page one.',
    ],
    approachSummary:
      'We built a topic map around the questions payroll managers ask, then published two deep articles a month, each linked to the right product page.',
    approachSteps: [
      { step: '1', title: 'Map the topics', description: '120 search topics grouped by buying stage and real search demand.' },
      { step: '2', title: 'Write the best answer', description: "40 expert articles reviewed by Fieldbox's own payroll specialists." },
      { step: '3', title: 'Link to the product', description: 'Every article guides readers to a matching feature or calculator.' },
    ],
    quote: '“Organic is now our cheapest source of demos. The content actually helps our buyers do their jobs.”',
    quoteAuthor: 'Hanna Berg',
    quoteRole: 'Head of Marketing, Fieldbox',
    resultsSummary:
      'A year in, Fieldbox ranks first for 14 core keywords and organic demo requests are up 180%. Blended cost per demo is down 29% because search now carries part of the load.',
    chartLabelPrimary: 'Organic demos',
    chartLabelSecondary: 'Paid demos',
    chartData: [
      { month: 'Apr', primary: 20, secondary: 55 },
      { month: 'May', primary: 33, secondary: 53 },
      { month: 'Jun', primary: 49, secondary: 52 },
      { month: 'Jul', primary: 65, secondary: 50 },
      { month: 'Aug', primary: 80, secondary: 49 },
      { month: 'Sep', primary: 93, secondary: 48 },
    ],
    relatedSlugs: ['northwind-coffee', 'lumi-skin', 'oakline'],
  },
  {
    id: 'northrun',
    slug: 'northrun',
    client: 'Northrun',
    initial: 'N',
    industry: 'Ecommerce, sport',
    category: 'Ecommerce',
    serviceLabel: 'Content and creative',
    timeline: '4 months',
    headline: 'How Northrun made TikTok its best performing channel.',
    primaryStat: '5.2x',
    primaryStatPhrase: 'ROAS on TikTok.',
    shortDesc: 'Creator led ads tested every week.',
    carouselMeta: 'Ecommerce · Content + Creative · 4 months',
    carouselDescription:
      'We recruited 24 real runners to create weekly TikTok videos and scaled top organic posts as Spark Ads.',
    carouselStats: [
      { value: '5.2x', label: 'ROAS on TikTok' },
      { value: '24', label: 'creators' },
      { value: '+140%', label: 'new customers' },
    ],
    carouselFloatQuote: '“TikTok went from a test to our #1.”',
    carouselFloatBadge: '5.2×',
    carouselFloatTitle: 'creator Spark Ads',
    carouselFloatSub: '2.1m organic views',
    featuredInCarousel: false,
    heroImage: '/assets/images/products/product-fashion.webp',
    cardImage: '/assets/images/sky/sky-card.webp',
    kpis: [
      { value: '5.2x', label: 'ROAS on TikTok' },
      { value: '24', label: 'Creators on the roster' },
      { value: '+140%', label: 'New customers' },
      { value: '2.1m', label: 'Organic views' },
    ],
    servicesUsed: ['TikTok', 'Creators', 'Spark Ads'],
    challengeParagraphs: [
      'Northrun makes running gear for everyday runners, but its ads looked like glossy catalogues. On TikTok they were skipped in under a second.',
      'The team knew their customers lived on the platform but had no way to make enough content to keep up.',
    ],
    approachSummary:
      'We built a roster of real runners who create for Northrun every month. Their best posts become paid ads, tested and scaled every week.',
    approachSteps: [
      { step: '1', title: 'Recruit real runners', description: '24 creators from parkrun regulars to coaches, all genuine customers.' },
      { step: '2', title: 'Test every week', description: 'New hooks and formats every Monday, judged on watch time and sales.' },
      { step: '3', title: 'Boost the best', description: 'Top organic posts run as Spark Ads with budget that follows results.' },
    ],
    quote: '“Our ads finally look like the people who wear our kit. TikTok went from a test to our best channel.”',
    quoteAuthor: 'Chloe Adams',
    quoteRole: 'Brand Lead, Northrun',
    resultsSummary:
      'TikTok now returns 5.2x on ad spend and new customers are up 140%. Creator posts also earned 2.1 million organic views on top of paid reach.',
    chartLabelPrimary: 'TikTok revenue',
    chartLabelSecondary: 'Other paid',
    chartData: [
      { month: 'Jun', primary: 25, secondary: 42 },
      { month: 'Jul', primary: 44, secondary: 45 },
      { month: 'Aug', primary: 70, secondary: 47 },
      { month: 'Sep', primary: 92, secondary: 48 },
    ],
    relatedSlugs: ['northwind-coffee', 'lumi-skin', 'oakline'],
  },
];
