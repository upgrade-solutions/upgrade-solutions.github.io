export const SITE = 'https://www.upgradesolutions.io';
export const UPDATED = '2026-11-10';

export const faqs = [
  {
    question: 'What is CQL Search for Confluence?',
    answer:
      'CQL Search for Confluence is a Forge app from Upgrade Solutions. It runs one Confluence Query Language query as the person viewing the page and shows the matches in a table. You can embed that table on a page or open the same search from Apps.',
  },
  {
    question: 'How do I put CQL results on a Confluence page?',
    answer:
      'Edit the page, type /CQL Search, and insert the macro. Enter a CQL query, choose the columns, and choose a page size of 10, 25, or 50. Save the macro, then publish the page. The table loads for each viewer.',
  },
  {
    question: 'Does CQL Search send Confluence content outside Atlassian?',
    answer:
      'No. The app runs on Forge and calls Confluence search with the search:confluence scope. It has no external servers. The query, the columns, and the page size stay in the macro configuration on the page. The app does not keep a copy of the results.',
  },
  {
    question: 'Who can see the results?',
    answer:
      'Each person sees only the content Confluence already allows them to open. A search runs as the viewer, not as an app account. Two people opening the same page can see different rows.',
  },
  {
    question: 'What is the difference between the macro and the Apps page?',
    answer:
      'The macro saves a query on a page and can use that page for spaceKey(), currentSpace(), pageId(), and currentContent(). The Apps page is for a one-off search. Those four tokens are not available there. currentUser() is left for Confluence in both places.',
  },
  {
    question: 'Can I export every match?',
    answer:
      'Download CSV saves the rows on the current page of results, not the whole result set. Page through with Next and download again for the next set. The file includes the columns you selected, plus a url column.',
  },
  {
    question: 'What does CQL Search for Confluence cost?',
    answer:
      'Cloud pricing starts at $1 per month for up to 10 users, about $10 a year. After that the price is per user per month and steps down as the site grows: $0.10 through 100 users, $0.08 through 250, $0.06 through 1,000, $0.05 through 2,500, $0.04 through 5,000, $0.03 through 7,500, and $0.02 above that. Atlassian bills Cloud apps annually at ten times the monthly price. A 100-user site is about $100 a year. Multi-instance pricing uses the same rates.',
  },
  {
    question: 'Will it convert an older CQL Search macro for me?',
    answer:
      'No. Version 1 does not read another app’s macro configuration. Edit the page, insert CQL Search, and paste the query. An inactive license shows an upgrade message instead of results.',
  },
];

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function appSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CQL Search for Confluence',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Confluence Cloud',
    url: `${SITE}/cql-search/`,
    image: `${SITE}/cql-search/icon.png`,
    description:
      'Run a Confluence Query Language query as the viewer and show the matches in a table, on a page or from Apps.',
    dateModified: UPDATED,
    provider: {
      '@type': 'Organization',
      name: 'Upgrade Solutions LLC',
      url: `${SITE}/`,
      email: 'tim@upgradesolutions.io',
    },
    offers: {
      '@type': 'Offer',
      price: '1.00',
      priceCurrency: 'USD',
      description:
        'From $1 per month for up to 10 users. Larger sites pay a per-user monthly price that steps down as the site grows. Atlassian bills annually at ten times the monthly price.',
    },
  };
}
