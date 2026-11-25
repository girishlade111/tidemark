export interface TeamStat {
  value: string;
  label: string;
}

export interface TeamPrinciple {
  title: string;
  description: string;
}

export interface TeamCareerItem {
  period: string;
  role: string;
  company: string;
  summary: string;
}

export interface TeamOutsideItem {
  verb: string;
  detail: string;
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  firstName: string;
  role: string;
  city: string;
  locationFull: string;
  availabilityPill: string;
  shortBio: string;
  portrait: string;
  stats: TeamStat[];
  aboutParagraphs: string[];
  principles: TeamPrinciple[];
  career: TeamCareerItem[];
  outsideWork: TeamOutsideItem[];
  joined: string;
  languages: string;
  workingHours: string;
  linkedinHandle: string;
  xHandle: string;
  email: string;
  newsletterName: string;
  certifications: string[];
  quote: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'daniel-okafor',
    slug: 'daniel-okafor',
    name: 'Daniel Okafor',
    firstName: 'Daniel',
    role: 'Founder and CEO',
    city: 'London',
    locationFull: 'London, UK',
    availabilityPill: 'Joins every new client kickoff',
    shortBio:
      'Daniel ran paid media at two London agencies before starting Tidemark in 2016. He still reads every client report before it goes out.',
    portrait: '/assets/images/team/team-daniel-okafor.webp',
    stats: [
      { value: '15 yrs', label: 'In paid media' },
      { value: '120+', label: 'Brands grown' },
      { value: '£60M', label: 'Spend managed' },
      { value: '2016', label: 'Founded Tidemark' },
    ],
    aboutParagraphs: [
      'Daniel spent eight years running paid media teams at two London agencies before starting Tidemark in 2016 with one client and a spare desk.',
      'He built the agency around a simple idea: every pound of spend should be traceable to profit, and every client should get senior people on their account.',
      'Clients describe him as direct, patient and allergic to slide decks without numbers.',
    ],
    principles: [
      { title: 'Profit over reach', description: 'Every plan starts from margin and payback, not impressions or clicks.' },
      { title: 'Senior on every account', description: 'Each client gets a lead who has done the work for years, not months.' },
      { title: 'Reports before Monday', description: 'Every report is read and signed off before it reaches a client.' },
      { title: 'Small teams, clear owners', description: 'One owner per channel, one goal per quarter, no handoffs.' },
    ],
    career: [
      { period: '2016 to now', role: 'Founder and CEO', company: 'Tidemark, London', summary: 'Started with one client. Now leads a team of 24 across London and Lisbon.' },
      { period: '2012 to 2016', role: 'Head of Paid Media', company: 'Network agency, London', summary: 'Ran a team of twelve across search, social and display.' },
      { period: '2009 to 2012', role: 'Paid Media Manager', company: 'Performance agency, London', summary: 'Managed search and display for retail and travel brands.' },
    ],
    outsideWork: [
      { verb: 'Runs', detail: 'Early morning river loops' },
      { verb: 'Cooks', detail: 'West African, every Sunday' },
      { verb: 'Reads', detail: 'Business history, mostly' },
    ],
    joined: 'January 2016',
    languages: 'English, Yoruba',
    workingHours: 'Mon to Fri, 8:30 to 17:30 GMT',
    linkedinHandle: 'linkedin.com/in/daniel-okafor',
    xHandle: '@danielokafor',
    email: 'daniel@tidemark.co',
    newsletterName: 'The Monthly Tide',
    certifications: ['Google Ads Search', 'Meta Media Buying', 'GA4', 'LinkedIn Marketing'],
    quote: '“Growth that costs more than it makes is not growth. Every plan we write starts from margin and works backwards.”',
  },
  {
    id: 'clara-benet',
    slug: 'clara-benet',
    name: 'Clara Benet',
    firstName: 'Clara',
    role: 'Head of Paid Search',
    city: 'London',
    locationFull: 'London, UK',
    availabilityPill: 'Taking 1 new account in November',
    shortBio:
      'Clara has run Google Ads for B2B and ecommerce brands for ten years. She leads every search rebuild at Tidemark and still reviews search terms every Monday morning.',
    portrait: '/assets/images/team/team-clara-benet.webp',
    stats: [
      { value: '10 yrs', label: 'Running Google Ads' },
      { value: '46', label: 'Search accounts led' },
      { value: '£18M', label: 'Spend managed a year' },
      { value: '5.2x', label: 'Median client ROAS' },
    ],
    aboutParagraphs: [
      'Clara has spent ten years inside search accounts, first at a large London network agency and since 2019 at Tidemark, where she built the paid search practice from a team of one.',
      'She is known for taking bloated accounts apart and rebuilding them around a handful of campaigns with a clear job each. Her rebuilds have cut cost per lead by a third or more for brands in SaaS, healthcare and ecommerce.',
      'Clients describe her as calm, blunt and very hard to fool with a vanity metric.',
    ],
    principles: [
      { title: 'Margin first', description: 'Bids are set from gross margin, not revenue, so growth never quietly costs money.' },
      { title: 'Fewer, clearer campaigns', description: 'Every campaign has one job and an end date if it is a test.' },
      { title: 'Monday search terms', description: 'She reads the search terms report herself every Monday morning.' },
      { title: 'Plain English reports', description: 'If a number needs a glossary, it does not go in the report.' },
    ],
    career: [
      { period: '2019 to now', role: 'Head of Paid Search', company: 'Tidemark, London', summary: 'Built the search practice. Leads 46 accounts and a team of five.' },
      { period: '2016 to 2019', role: 'Senior PPC Manager', company: 'Network agency, London', summary: 'Ran search for retail and finance brands spending up to £2M a month.' },
      { period: '2014 to 2016', role: 'PPC Executive', company: 'Independent ecommerce brand', summary: 'Learned Google Ads by running it for a single store, every day.' },
    ],
    outsideWork: [
      { verb: 'Runs', detail: 'Half marathons, slowly' },
      { verb: 'Bakes', detail: 'Sourdough, seriously' },
      { verb: 'Reads', detail: 'Anything by Rory Sutherland' },
    ],
    joined: 'March 2019',
    languages: 'English, Spanish, Catalan',
    workingHours: 'Mon to Thu, 9:00 to 18:00 GMT',
    linkedinHandle: 'linkedin.com/in/clarabenet',
    xHandle: '@clarabenet',
    email: 'clara@tidemark.co',
    newsletterName: 'The Search Terms Report',
    certifications: ['Google Ads Search', 'Google Shopping', 'Microsoft Advertising', 'GA4'],
    quote: '“Most accounts do not need more campaigns. They need fewer, with a clear job each, and the patience to let the data build.”',
  },
  {
    id: 'tom-hale',
    slug: 'tom-hale',
    name: 'Tom Hale',
    firstName: 'Tom',
    role: 'Head of Paid Social',
    city: 'London',
    locationFull: 'London, UK',
    availabilityPill: 'Taking 2 new accounts this quarter',
    shortBio:
      'Tom runs creative testing across Meta, TikTok and LinkedIn. Thirty new ads a month is a normal week for his team.',
    portrait: '/assets/images/team/team-tom-hale.webp',
    stats: [
      { value: '9 yrs', label: 'Running paid social' },
      { value: '38', label: 'Social accounts led' },
      { value: '£14M', label: 'Spend managed a year' },
      { value: '30', label: 'New ads a month' },
    ],
    aboutParagraphs: [
      'Tom started in a social agency writing ad copy and moved into buying when he realised the numbers were the interesting part.',
      'At Tidemark he built the creative testing system every social account runs on: small budgets, clear hypotheses and a weekly kill list.',
      'Clients describe him as fast, curious and honest about what did not work.',
    ],
    principles: [
      { title: 'Test, then scale', description: 'New creative gets a small budget and one question to answer.' },
      { title: 'Weekly kill list', description: 'Every Friday the weakest ads are paused, no exceptions.' },
      { title: 'Hooks first', description: 'The first three seconds get more attention than the rest of the ad.' },
      { title: 'Shared learnings', description: 'Every test result is written up and shared across accounts.' },
    ],
    career: [
      { period: '2020 to now', role: 'Head of Paid Social', company: 'Tidemark, London', summary: 'Leads 38 accounts and a team of four across Meta, TikTok and LinkedIn.' },
      { period: '2017 to 2020', role: 'Paid Social Manager', company: 'Social agency, London', summary: 'Ran Meta and Snapchat for fashion and beauty brands.' },
      { period: '2015 to 2017', role: 'Copywriter', company: 'Social agency, London', summary: 'Wrote ad copy until the reporting got more interesting.' },
    ],
    outsideWork: [
      { verb: 'Plays', detail: 'Five a side on Thursdays' },
      { verb: 'Shoots', detail: 'Film photography' },
      { verb: 'Listens', detail: 'Too many marketing podcasts' },
    ],
    joined: 'June 2020',
    languages: 'English, French',
    workingHours: 'Mon to Fri, 9:00 to 17:30 GMT',
    linkedinHandle: 'linkedin.com/in/tomhale',
    xHandle: '@tomhale',
    email: 'tom@tidemark.co',
    newsletterName: 'Creative Notes',
    certifications: ['Meta Media Buying', 'TikTok Ads', 'LinkedIn Marketing', 'GA4'],
    quote: '“The ad that wins is rarely the one the team liked best. That is exactly why we test everything.”',
  },
  {
    id: 'mei-tanaka',
    slug: 'mei-tanaka',
    name: 'Mei Tanaka',
    firstName: 'Mei',
    role: 'Head of SEO',
    city: 'Lisbon',
    locationFull: 'Lisbon, Portugal',
    availabilityPill: 'Taking 1 new account in December',
    shortBio:
      'Mei turns technical audits into rankings and owns every content and link plan Tidemark runs.',
    portrait: '/assets/images/team/team-mei-tanaka.webp',
    stats: [
      { value: '11 yrs', label: 'Working in SEO' },
      { value: '31', label: 'SEO accounts led' },
      { value: '3.4x', label: 'Median organic growth' },
      { value: '400+', label: 'Audits run' },
    ],
    aboutParagraphs: [
      'Mei started as a developer, which is why her audits read like bug reports and get fixed like them.',
      'She joined Tidemark in 2019 to build the SEO practice and now leads technical, content and link work across every organic account.',
      'Clients describe her as precise, patient and very good at saying no to content that will not rank.',
    ],
    principles: [
      { title: 'Fix the site first', description: 'Crawl and speed issues are solved before a single new page is written.' },
      { title: 'Search intent wins', description: 'Every brief starts from what the searcher actually wants.' },
      { title: 'Fewer, better pages', description: 'One strong page beats five thin ones every time.' },
      { title: 'Links you can explain', description: 'Every link earned has a reason to exist beyond SEO.' },
    ],
    career: [
      { period: '2019 to now', role: 'Head of SEO', company: 'Tidemark, Lisbon', summary: 'Built the SEO practice. Leads 31 accounts and a team of four.' },
      { period: '2016 to 2019', role: 'Technical SEO Lead', company: 'SaaS company, Berlin', summary: 'Grew organic signups 4x across eleven markets.' },
      { period: '2014 to 2016', role: 'Web Developer', company: 'Digital studio, Tokyo', summary: 'Built ecommerce sites and learned why most of them never ranked.' },
    ],
    outsideWork: [
      { verb: 'Climbs', detail: 'Bouldering, twice a week' },
      { verb: 'Brews', detail: 'Pour over coffee' },
      { verb: 'Reads', detail: 'Japanese crime fiction' },
    ],
    joined: 'September 2019',
    languages: 'English, Japanese, Portuguese',
    workingHours: 'Mon to Fri, 9:00 to 17:00 WET',
    linkedinHandle: 'linkedin.com/in/meitanaka',
    xHandle: '@meitanaka',
    email: 'mei@tidemark.co',
    newsletterName: 'Crawl Budget',
    certifications: ['Google Search Console', 'GA4', 'Semrush SEO', 'Screaming Frog'],
    quote: '“Most SEO problems are not content problems. Fix the site, answer the question, and the rankings follow.”',
  },
  {
    id: 'priya-shah',
    slug: 'priya-shah',
    name: 'Priya Shah',
    firstName: 'Priya',
    role: 'Lifecycle Lead',
    city: 'London',
    locationFull: 'London, UK',
    availabilityPill: 'Taking 1 new account this quarter',
    shortBio:
      'Priya builds the email and SMS flows that bring buyers back. She measures everything in repeat orders.',
    portrait: '/assets/images/team/team-priya-shah.webp',
    stats: [
      { value: '8 yrs', label: 'In lifecycle marketing' },
      { value: '27', label: 'Lifecycle accounts led' },
      { value: '34%', label: 'Median revenue from email' },
      { value: '120+', label: 'Flows built' },
    ],
    aboutParagraphs: [
      'Priya started in ecommerce customer service, which taught her more about retention than any course.',
      'At Tidemark she runs lifecycle for ecommerce and subscription brands, from welcome flows to win back campaigns.',
      'Clients describe her as organised, warm and ruthless about unsubscribe rates.',
    ],
    principles: [
      { title: 'Flows before campaigns', description: 'Automated flows earn first, one off sends come second.' },
      { title: 'Segment by behaviour', description: 'Who bought what and when beats age and location.' },
      { title: 'Every send has a job', description: 'Each email has one action and one metric.' },
      { title: 'Protect the list', description: 'Deliverability is checked weekly, not when it breaks.' },
    ],
    career: [
      { period: '2021 to now', role: 'Lifecycle Lead', company: 'Tidemark, London', summary: 'Runs lifecycle for 27 brands across email and SMS.' },
      { period: '2018 to 2021', role: 'CRM Manager', company: 'DTC beauty brand', summary: 'Grew repeat revenue from 18% to 41% of sales.' },
      { period: '2016 to 2018', role: 'Customer Experience Lead', company: 'Ecommerce startup', summary: 'Learned what makes customers come back, one ticket at a time.' },
    ],
    outsideWork: [
      { verb: 'Dances', detail: 'Bharatanatyam, since age six' },
      { verb: 'Grows', detail: 'Chillies on a tiny balcony' },
      { verb: 'Reads', detail: 'Every brand email she gets' },
    ],
    joined: 'February 2021',
    languages: 'English, Hindi, Gujarati',
    workingHours: 'Mon to Fri, 9:30 to 18:00 GMT',
    linkedinHandle: 'linkedin.com/in/priyashah',
    xHandle: '@priyashah',
    email: 'priya@tidemark.co',
    newsletterName: 'Back Again',
    certifications: ['Klaviyo Advanced', 'Braze Certified', 'Shopify Partner', 'GA4'],
    quote: '“The cheapest customer you will ever get is the one who already bought from you. Look after them first.”',
  },
  {
    id: 'elena-ruiz',
    slug: 'elena-ruiz',
    name: 'Elena Ruiz',
    firstName: 'Elena',
    role: 'Creative Director',
    city: 'Lisbon',
    locationFull: 'Lisbon, Portugal',
    availabilityPill: 'Booking creative sprints for January',
    shortBio:
      'Elena leads design and video for ads and landing pages. Every asset her team ships comes with a test plan.',
    portrait: '/assets/images/team/team-elena-ruiz.webp',
    stats: [
      { value: '12 yrs', label: 'In design and video' },
      { value: '900+', label: 'Ads shipped a year' },
      { value: '22%', label: 'Median CTR lift' },
      { value: '40+', label: 'Landing pages a year' },
    ],
    aboutParagraphs: [
      'Elena spent a decade in brand studios before deciding she wanted to see how her work actually performed.',
      'At Tidemark she runs the creative team that designs every ad, video and landing page, always paired with a clear test.',
      'Clients describe her as bold, practical and quick to kill her own favourite ideas when the data says so.',
    ],
    principles: [
      { title: 'Brief from data', description: 'Every creative brief starts from what the last test taught us.' },
      { title: 'Make variations', description: 'One idea always ships in at least three versions.' },
      { title: 'Design for the feed', description: 'Assets are built for the phone first and the deck never.' },
      { title: 'Landing pages count', description: 'The ad and the page are designed together, not apart.' },
    ],
    career: [
      { period: '2020 to now', role: 'Creative Director', company: 'Tidemark, Lisbon', summary: 'Leads design and video for every client account.' },
      { period: '2015 to 2020', role: 'Senior Designer', company: 'Brand studio, Madrid', summary: 'Designed campaigns for retail, travel and drinks brands.' },
      { period: '2012 to 2015', role: 'Motion Designer', company: 'Production house, Barcelona', summary: 'Animated ads and learned to tell a story in six seconds.' },
    ],
    outsideWork: [
      { verb: 'Surfs', detail: 'Badly, but often' },
      { verb: 'Paints', detail: 'Watercolour, on weekends' },
      { verb: 'Watches', detail: 'Old Spanish cinema' },
    ],
    joined: 'April 2020',
    languages: 'English, Spanish, Portuguese',
    workingHours: 'Mon to Fri, 9:00 to 17:30 WET',
    linkedinHandle: 'linkedin.com/in/elenaruiz',
    xHandle: '@elenaruiz',
    email: 'elena@tidemark.co',
    newsletterName: 'Frame by Frame',
    certifications: ['Meta Creative', 'Figma Professional', 'Adobe Premiere', 'TikTok Creative'],
    quote: '“Good creative is not the prettiest ad. It is the one that answers a question and makes the next test better.”',
  },
  {
    id: 'aisha-malik',
    slug: 'aisha-malik',
    name: 'Aisha Malik',
    firstName: 'Aisha',
    role: 'Client Partner',
    city: 'London',
    locationFull: 'London, UK',
    availabilityPill: 'Onboarding new clients this month',
    shortBio:
      'Aisha is your day to day contact. She runs the weekly sprint and makes sure the report lands on time.',
    portrait: '/assets/images/team/team-aisha-malik.webp',
    stats: [
      { value: '7 yrs', label: 'In client services' },
      { value: '18', label: 'Clients partnered' },
      { value: '96%', label: 'Client retention' },
      { value: '0', label: 'Late reports' },
    ],
    aboutParagraphs: [
      'Aisha started in account management at a media agency and quickly became the person clients called when something went wrong.',
      'At Tidemark she runs the weekly sprint for her clients, keeps every channel lead on track and makes sure nothing falls between the gaps.',
      'Clients describe her as calm, organised and always one step ahead of the next question.',
    ],
    principles: [
      { title: 'One weekly sprint', description: 'Every client gets one call, one agenda and one list of actions.' },
      { title: 'No surprises', description: 'Bad news is shared the same day it is known.' },
      { title: 'Reports on time', description: 'Every report lands on the agreed day, every month.' },
      { title: 'Plain answers', description: 'Every question gets a clear answer within one working day.' },
    ],
    career: [
      { period: '2021 to now', role: 'Client Partner', company: 'Tidemark, London', summary: 'Partners with 18 clients and runs their weekly sprints.' },
      { period: '2018 to 2021', role: 'Account Director', company: 'Media agency, London', summary: 'Managed retail and finance clients spending up to £5M a year.' },
      { period: '2016 to 2018', role: 'Account Executive', company: 'Media agency, London', summary: 'Learned that a good agenda fixes most problems.' },
    ],
    outsideWork: [
      { verb: 'Runs', detail: 'Parkrun every Saturday' },
      { verb: 'Hosts', detail: 'Supper clubs for friends' },
      { verb: 'Learns', detail: 'Arabic, one word a day' },
    ],
    joined: 'August 2021',
    languages: 'English, Urdu, Arabic',
    workingHours: 'Mon to Fri, 9:00 to 17:30 GMT',
    linkedinHandle: 'linkedin.com/in/aishamalik',
    xHandle: '@aishamalik',
    email: 'aisha@tidemark.co',
    newsletterName: 'The Monthly Tide',
    certifications: ['Google Ads Fundamentals', 'Meta Certified', 'GA4', 'Scrum Master'],
    quote: '“Clients do not leave because of one bad month. They leave because nobody told them what happened and what we are doing next.”',
  },
];
