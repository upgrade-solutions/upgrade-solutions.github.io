export const SITE = 'https://www.upgradesolutions.io';
export const UPDATED = '2026-11-10';

export const faqs = [
  {
    question: 'What is Jupyter Notebook Viewer for Confluence?',
    answer:
      'Jupyter Notebook Viewer for Confluence is a Forge app from Upgrade Solutions. It renders one .ipynb file that is already attached to the current Confluence page or blog post. Readers see the markdown, the code, text output, and plots saved as PNG or JPEG.',
  },
  {
    question: 'How do I show a Jupyter notebook on a Confluence page?',
    answer:
      'Attach the .ipynb file to the page, edit the page, and type /Jupyter Notebook. Choose the file and insert the macro. If the page has one notebook, that file is already selected. Publish the page.',
  },
  {
    question: 'Does the Confluence page run the notebook?',
    answer:
      'No. The page shows the outputs saved in the file. It does not start a kernel. To refresh a number or a chart, run the notebook in Jupyter, save, and attach the new file.',
  },
  {
    question: 'Can I hide the code and show only the results?',
    answer:
      'Yes. Results hides code and keeps the outputs. Code hides outputs and keeps the cells. In/Out shows execution numbers. Each reader’s choice stays in their browser.',
  },
  {
    question: 'Which notebook outputs appear on the page?',
    answer:
      'Markdown, code, printed text, and PNG or JPEG images stored in the notebook are shown. HTML, JavaScript widgets, error tracebacks, and SVG are left out. A notebook has to be nbformat 4 and 2 MB or smaller.',
  },
  {
    question: 'Does Jupyter Notebook Viewer send the file outside Atlassian?',
    answer:
      'No. The app runs on Atlassian. It lists attachments on the page, then downloads the one notebook the editor selected. It does not store the notebook and it does not call another service.',
  },
  {
    question: 'What does Jupyter Notebook Viewer for Confluence cost?',
    answer:
      'Cloud pricing starts at $5 per month for up to 10 users, about $50 a year. Atlassian bills annually at ten times the monthly price. A 25-user site is about $125 a year, a 100-user site about $500 a year, and a 1,000-user site about $2,450 a year.',
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
    name: 'Jupyter Notebook Viewer for Confluence',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Confluence Cloud',
    url: `${SITE}/jupyter-notebook-viewer/`,
    image: `${SITE}/jupyter-notebook-viewer/icon.png`,
    description:
      'Render one Jupyter notebook attached to a Confluence page: the write-up, the code, text output, and PNG or JPEG plots saved in the file.',
    dateModified: UPDATED,
    provider: {
      '@type': 'Organization',
      name: 'Upgrade Solutions LLC',
      url: `${SITE}/`,
      email: 'tim@upgradesolutions.io',
    },
    offers: {
      '@type': 'Offer',
      price: '5.00',
      priceCurrency: 'USD',
      description:
        'From $5 per month for up to 10 users, about $50 a year. Larger sites pay the Marketplace user tiers. Atlassian bills annually at ten times the monthly price.',
    },
  };
}
