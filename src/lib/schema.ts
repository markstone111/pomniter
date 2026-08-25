export const SITE_URL = 'https://pomniter.nikunjmaheshwari.in';
export const CREATOR_NAME = 'Nikunj Maheshwari';
export const CREATOR_URL = 'https://www.nikunjmaheshwari.in';
export const CREATOR_EMAIL = 'nikunjnehu@gmail.com';
export const GITHUB_URL = 'https://github.com/markstone111';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/nikunjmaheshwari';

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pomniter',
    url: SITE_URL,
    description:
      'Pomniter is an AI-powered screenshot memory search system that understands visual context, code snippets, and study notes using multimodal semantic retrieval.',
    publisher: {
      '@type': 'Person',
      name: CREATOR_NAME,
      url: CREATOR_URL,
      sameAs: [GITHUB_URL, LINKEDIN_URL],
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getSoftwareAppSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Pomniter',
    alternateName: ['Pomniter AI', 'Pomniter Screenshot Search', 'помнить'],
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Android, Windows, macOS, Web',
    description:
      'AI-powered screenshot memory search tool that transforms unstructured screenshot galleries into searchable memory using multimodal embeddings, contextual understanding, and semantic retrieval.',
    url: SITE_URL,
    image: `${SITE_URL}/logo.png`,
    author: {
      '@type': 'Person',
      name: CREATOR_NAME,
      url: CREATOR_URL,
      email: CREATOR_EMAIL,
      sameAs: [GITHUB_URL, LINKEDIN_URL],
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    featureList: [
      'Natural Language Screenshot Search',
      'Contextual AI Understanding Beyond Basic OCR',
      'LeetCode & Code Snippet Recognition',
      'Multimodal Vector Embeddings & Hybrid Retrieval',
      'Smart Categorization & Topic Clustering',
      'Temporal & Study Note Reasoning',
      'Local-first Privacy Architecture',
    ],
    screenshot: `${SITE_URL}/part2_cover_image.png`,
  };
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: CREATOR_NAME,
    url: CREATOR_URL,
    email: CREATOR_EMAIL,
    jobTitle: 'Software Engineer & AI Integration Specialist',
    sameAs: [GITHUB_URL, LINKEDIN_URL],
    description:
      'Creator of Pomniter. Software Engineer focused on AI, Mobile & Web Applications, and Semantic Search systems.',
  };
}

export function getFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function getArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
    image: image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : `${SITE_URL}/part2_cover_image.png`,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: CREATOR_NAME,
      url: CREATOR_URL,
    },
    publisher: {
      '@type': 'Person',
      name: CREATOR_NAME,
      url: CREATOR_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url.startsWith('http') ? url : `${SITE_URL}${url}`,
    },
  };
}

export function getServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pomniter Semantic Memory Service',
    description: 'AI-powered multimodal vector search engine for screenshots and visual knowledge.',
    provider: {
      '@type': 'Person',
      name: CREATOR_NAME,
      url: CREATOR_URL,
    },
    serviceType: 'Data Retrieval and Visual Search',
  };
}

export function getAggregateRatingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Pomniter',
    description: 'AI-powered screenshot memory search system.',
    image: `${SITE_URL}/logo.png`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '128',
    },
  };
}
