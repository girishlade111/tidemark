export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const sharedFaqs: FAQItem[] = [
  {
    id: 'results-speed',
    question: 'How quickly will we see results?',
    answer:
      'Paid media usually moves within the first 30 days. SEO and content take 3 to 6 months, then keep compounding. Your audit sets clear targets for both.',
  },
  {
    id: 'contract-lock-in',
    question: 'Do you lock us into a long contract?',
    answer:
      'No. Every plan starts with a 90-day period so we have time to show results, then rolls monthly. You can leave with 30 days notice.',
  },
  {
    id: 'account-ownership',
    question: 'Who owns the ad accounts and data?',
    answer:
      'You do. We work inside accounts you own with read-only access by default, so every campaign, audience and report stays yours if we part ways.',
  },
  {
    id: 'ad-spend-billing',
    question: 'How is ad spend billed?',
    answer:
      'Ad spend is billed by the platforms straight to your card or invoice. We never mark it up. Our fee is a flat monthly retainer.',
  },
  {
    id: 'in-house-team',
    question: 'Can you work with our in-house team?',
    answer:
      'Yes. Most clients have a marketer or two in-house. We share a Slack channel, plan together each month and fill the gaps they cannot cover.',
  },
  {
    id: 'free-audit',
    question: 'What happens in the free audit?',
    answer:
      'We review your ad accounts, site, tracking and content, then send a written plan with wasted spend, quick wins and 90-day targets within 48 hours.',
  },
];
