export type JobTeamFilter = 'Paid media' | 'SEO and content' | 'Data' | 'Client services';

export interface JobProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface JobListing {
  id: string;
  slug: string;
  title: string;
  team: JobTeamFilter;
  locationShort: string;
  locationHero: string;
  locationSummary: string;
  type: string;
  typeSummary: string;
  salary: string;
  salarySummary: string;
  posted: string;
  startDate: string;
  reportsTo: string;
  hiringManagerSlug: string;
  hiringManagerTitle: string;
  hiringManagerQuote: string;
  aboutParagraphs: string[];
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  hiringProcess: JobProcessStep[];
}

export const careerBenefits = [
  { id: 'profit', title: 'Profit share', description: '10% of profit shared with the whole team every year.', icon: 'trending' as const },
  { id: 'august', title: 'Four day weeks in August', description: 'Same pay, Fridays off for the whole summer.', icon: 'clock' as const },
  { id: 'remote', title: 'Work from anywhere', description: 'Up to eight weeks a year from anywhere you like.', icon: 'globe' as const },
  { id: 'learning', title: '£2,000 learning budget', description: 'Courses, books, conferences, your call.', icon: 'book' as const },
  { id: 'health', title: 'Private health cover', description: 'Full cover for you and your family from day one.', icon: 'heart' as const },
  { id: 'holiday', title: '30 days holiday', description: 'Plus bank holidays and your birthday off.', icon: 'sun' as const },
];

export const jobBenefitChips = [
  '10% profit share',
  '30 days holiday',
  'Four day weeks in August',
  '£2,000 learning budget',
  'Private health cover',
  '8 weeks work from anywhere',
];

export const jobs: JobListing[] = [
  {
    id: 'paid-social-lead',
    slug: 'paid-social-lead',
    title: 'Paid Social Lead',
    team: 'Paid media',
    locationShort: 'London',
    locationHero: 'London, hybrid',
    locationSummary: 'London, 3 days in office',
    type: 'Full time',
    typeSummary: 'Full time, permanent',
    salary: '£65k to £80k',
    salarySummary: '£65k to £80k plus profit share',
    posted: '14 Oct 2026',
    startDate: 'January 2027',
    reportsTo: 'Tom Hale, Head of Paid Social',
    hiringManagerSlug: 'tom-hale',
    hiringManagerTitle: 'Head of Paid Social',
    hiringManagerQuote: '“You will own real budgets from week one, and I will be in your corner for every client call.”',
    aboutParagraphs: [
      'We are looking for a Paid Social Lead to own Meta, TikTok and LinkedIn across 12 client accounts, with combined spend of around £600k a month.',
      'You will lead two paid social managers, work daily with our creative team and report straight to Tom Hale, Head of Paid Social.',
    ],
    responsibilities: [
      'Own strategy, budgets and results for 12 paid social accounts.',
      'Run a weekly creative testing programme with our in house studio.',
      "Write the paid social section of every client's Monday report.",
      'Coach two managers and help hire a third in 2027.',
      'Present results to client leadership teams once a quarter.',
    ],
    requirements: [
      'Four or more years running Meta Ads, with at least £100k a month in spend.',
      'A clear point of view on creative testing and how to measure it.',
      'Comfort with GA4, server side tracking and attribution trade offs.',
      'Experience leading or mentoring at least one other marketer.',
    ],
    niceToHave: [
      'TikTok or LinkedIn Ads at scale.',
      'Agency experience across several industries.',
      'Basic SQL or Looker Studio.',
    ],
    hiringProcess: [
      { number: '01', title: 'Apply', description: 'CV and one line on why Tidemark.' },
      { number: '02', title: 'Intro call', description: '30 minutes with Tom.' },
      { number: '03', title: 'Practical task', description: 'A real Meta account problem, paid at £200.' },
      { number: '04', title: 'Meet the team', description: 'Lunch in our London office.' },
    ],
  },
  {
    id: 'senior-ppc-manager',
    slug: 'senior-ppc-manager',
    title: 'Senior PPC Manager',
    team: 'Paid media',
    locationShort: 'London or remote',
    locationHero: 'London or remote',
    locationSummary: 'London office or remote in the UK',
    type: 'Full time',
    typeSummary: 'Full time, permanent',
    salary: '£55k to £68k',
    salarySummary: '£55k to £68k plus profit share',
    posted: '09 Oct 2026',
    startDate: 'January 2027',
    reportsTo: 'Clara Benet, Head of Paid Search',
    hiringManagerSlug: 'clara-benet',
    hiringManagerTitle: 'Head of Paid Search',
    hiringManagerQuote: '“Every account you touch gets a real plan, a clean structure and a weekly number we both care about.”',
    aboutParagraphs: [
      'We are hiring a Senior PPC Manager to run Google and Microsoft Ads for eight growth brands, with combined spend of around £400k a month.',
      'You will work closely with our data and creative teams and report straight to Clara Benet, Head of Paid Search.',
    ],
    responsibilities: [
      'Own search, shopping and Performance Max for eight client accounts.',
      'Rebuild account structures around margin, not just revenue.',
      'Run a monthly testing plan for bids, feeds and landing pages.',
      "Write the search section of every client's Monday report.",
      'Mentor one PPC executive as they grow into their first accounts.',
    ],
    requirements: [
      'Three or more years running Google Ads, with at least £50k a month in spend.',
      'Hands on experience with Performance Max and shopping feeds.',
      'Strong spreadsheet skills and a habit of checking the numbers twice.',
      'Clear, calm communication with clients when results dip.',
    ],
    niceToHave: [
      'Microsoft Ads or Amazon Ads experience.',
      'Scripts or basic Python for automation.',
      'Ecommerce or B2B SaaS agency background.',
    ],
    hiringProcess: [
      { number: '01', title: 'Apply', description: 'CV and one line on why Tidemark.' },
      { number: '02', title: 'Intro call', description: '30 minutes with Clara.' },
      { number: '03', title: 'Practical task', description: 'A real search account audit, paid at £200.' },
      { number: '04', title: 'Meet the team', description: 'Lunch with the paid media team.' },
    ],
  },
  {
    id: 'seo-strategist',
    slug: 'seo-strategist',
    title: 'SEO Strategist',
    team: 'SEO and content',
    locationShort: 'Lisbon',
    locationHero: 'Lisbon, hybrid',
    locationSummary: 'Lisbon, 2 days in office',
    type: 'Full time',
    typeSummary: 'Full time, permanent',
    salary: '€45k to €55k',
    salarySummary: '€45k to €55k plus profit share',
    posted: '06 Oct 2026',
    startDate: 'January 2027',
    reportsTo: 'Mei Tanaka, Head of SEO',
    hiringManagerSlug: 'mei-tanaka',
    hiringManagerTitle: 'Head of SEO',
    hiringManagerQuote: '“I want strategists who can explain a ranking drop to a founder in two sentences and fix it in two weeks.”',
    aboutParagraphs: [
      'We are looking for an SEO Strategist to lead organic growth for six clients across ecommerce and B2B SaaS.',
      'You will work with our content editors and developers in Lisbon and report straight to Mei Tanaka, Head of SEO.',
    ],
    responsibilities: [
      'Own the SEO roadmap and monthly targets for six client sites.',
      'Run technical audits and turn them into a short, ranked fix list.',
      'Brief our content team on topics, intent and internal links.',
      'Track rankings, traffic and revenue from organic in every Monday report.',
      'Share one test or learning with the whole team each month.',
    ],
    requirements: [
      'Three or more years working on SEO for brands or an agency.',
      'Confidence with Search Console, GA4 and one crawler such as Screaming Frog.',
      'A good grasp of site architecture, schema and page speed.',
      'Clear writing in English, Portuguese is a plus.',
    ],
    niceToHave: [
      'Experience with headless or Shopify sites.',
      'Digital PR or link building wins you can show.',
      'Basic SQL or Looker Studio.',
    ],
    hiringProcess: [
      { number: '01', title: 'Apply', description: 'CV and one line on why Tidemark.' },
      { number: '02', title: 'Intro call', description: '30 minutes with Mei.' },
      { number: '03', title: 'Practical task', description: 'A real site audit task, paid at €200.' },
      { number: '04', title: 'Meet the team', description: 'Lunch in our Lisbon office.' },
    ],
  },
  {
    id: 'content-editor',
    slug: 'content-editor',
    title: 'Content Editor',
    team: 'SEO and content',
    locationShort: 'Remote, UK or EU',
    locationHero: 'Remote, UK or EU',
    locationSummary: 'Remote within UK or EU time zones',
    type: 'Full time',
    typeSummary: 'Full time, permanent',
    salary: '£42k to £50k',
    salarySummary: '£42k to £50k plus profit share',
    posted: '02 Oct 2026',
    startDate: 'January 2027',
    reportsTo: 'Elena Ruiz, Creative Director',
    hiringManagerSlug: 'elena-ruiz',
    hiringManagerTitle: 'Creative Director',
    hiringManagerQuote: '“Great content here is useful first and pretty second. If that sounds right to you, we should talk.”',
    aboutParagraphs: [
      'We are hiring a Content Editor to shape articles, guides and landing pages that rank and convert for our clients.',
      'You will work with SEO strategists and freelance writers and report straight to Elena Ruiz, Creative Director.',
    ],
    responsibilities: [
      'Edit and publish around 20 client articles a month.',
      'Turn SEO briefs into clear outlines for our writers.',
      "Keep each client's voice, style guide and claims in check.",
      'Refresh older content that is slipping in rankings.',
      'Help build our own Tidemark playbooks and journal.',
    ],
    requirements: [
      'Three or more years editing web content, ideally for brands or an agency.',
      'A sharp eye for structure, clarity and tone.',
      'Comfort with a CMS such as Webflow or WordPress.',
      'Basic understanding of search intent and on page SEO.',
    ],
    niceToHave: [
      'Experience managing freelance writers.',
      'Interest in ecommerce, health or finance topics.',
      'Light design skills in Figma or Canva.',
    ],
    hiringProcess: [
      { number: '01', title: 'Apply', description: 'CV, portfolio and one line on why Tidemark.' },
      { number: '02', title: 'Intro call', description: '30 minutes with Elena.' },
      { number: '03', title: 'Practical task', description: 'A real editing task, paid at £200.' },
      { number: '04', title: 'Meet the team', description: 'A video call with the content team.' },
    ],
  },
  {
    id: 'growth-analyst',
    slug: 'growth-analyst',
    title: 'Growth Analyst',
    team: 'Data',
    locationShort: 'Remote, UK or EU',
    locationHero: 'Remote, UK or EU',
    locationSummary: 'Remote within UK or EU time zones',
    type: 'Full time',
    typeSummary: 'Full time, permanent',
    salary: '£48k to £58k',
    salarySummary: '£48k to £58k plus profit share',
    posted: '28 Sep 2026',
    startDate: 'January 2027',
    reportsTo: 'Daniel Okafor, Founder and CEO',
    hiringManagerSlug: 'daniel-okafor',
    hiringManagerTitle: 'Founder and CEO',
    hiringManagerQuote: '“You will be the person who tells us what is really working, even when the answer is not the one we hoped for.”',
    aboutParagraphs: [
      'We are looking for a Growth Analyst to own tracking, dashboards and attribution for our client accounts.',
      'You will work with every channel team and report straight to Daniel Okafor, Founder and CEO.',
    ],
    responsibilities: [
      'Set up and maintain GA4, tag manager and server side tracking for clients.',
      "Build the dashboards behind every client's Monday report.",
      'Run incrementality and holdout tests with the paid media team.',
      'Spot drops and spikes early and explain them in plain words.',
      'Improve our internal reporting templates and data models.',
    ],
    requirements: [
      'Two or more years in analytics, ideally in marketing or ecommerce.',
      'Strong SQL and experience with BigQuery or a similar warehouse.',
      'Hands on GA4 and Google Tag Manager skills.',
      'The ability to explain a chart to someone who hates charts.',
    ],
    niceToHave: [
      'Python or R for analysis.',
      'Experience with marketing mix models.',
      'Looker Studio or Looker dashboards.',
    ],
    hiringProcess: [
      { number: '01', title: 'Apply', description: 'CV and one line on why Tidemark.' },
      { number: '02', title: 'Intro call', description: '30 minutes with Daniel.' },
      { number: '03', title: 'Practical task', description: 'A real tracking and reporting task, paid at £200.' },
      { number: '04', title: 'Meet the team', description: 'A video call with the data team.' },
    ],
  },
  {
    id: 'client-partner',
    slug: 'client-partner',
    title: 'Client Partner',
    team: 'Client services',
    locationShort: 'London',
    locationHero: 'London, hybrid',
    locationSummary: 'London, 3 days in office',
    type: 'Full time',
    typeSummary: 'Full time, permanent',
    salary: '£60k to £75k',
    salarySummary: '£60k to £75k plus profit share',
    posted: '24 Sep 2026',
    startDate: 'January 2027',
    reportsTo: 'Aisha Malik, Lead Client Partner',
    hiringManagerSlug: 'aisha-malik',
    hiringManagerTitle: 'Lead Client Partner',
    hiringManagerQuote: '“Our clients stay for years because someone owns the relationship. That someone could be you.”',
    aboutParagraphs: [
      'We are hiring a Client Partner to look after a group of our largest accounts and help them grow with us.',
      'You will work with every channel lead and report straight to Aisha Malik, our lead Client Partner.',
    ],
    responsibilities: [
      'Own the relationship and growth plan for six to eight client accounts.',
      'Run quarterly business reviews with client leadership teams.',
      'Turn client goals into clear briefs for our channel teams.',
      'Spot new opportunities and shape proposals with Daniel.',
      'Keep scope, budgets and timelines honest on every account.',
    ],
    requirements: [
      'Five or more years in client services at a marketing or digital agency.',
      'A solid grasp of paid media, SEO and how they report results.',
      'Confidence presenting numbers to founders and CMOs.',
      'A calm, direct way of handling hard conversations.',
    ],
    niceToHave: [
      'Experience with ecommerce or B2B SaaS clients.',
      'Commercial or new business experience.',
      'Basic knowledge of GA4 and attribution.',
    ],
    hiringProcess: [
      { number: '01', title: 'Apply', description: 'CV and one line on why Tidemark.' },
      { number: '02', title: 'Intro call', description: '30 minutes with Aisha.' },
      { number: '03', title: 'Practical task', description: 'A real client scenario task, paid at £200.' },
      { number: '04', title: 'Meet the team', description: 'Lunch in our London office.' },
    ],
  },
];
