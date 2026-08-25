import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  SITE_URL,
  CREATOR_NAME,
  getSoftwareAppSchema,
  getWebsiteSchema,
  getPersonSchema,
  getServiceSchema,
  getAggregateRatingSchema,
} from '@/lib/schema';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Pomniter — Search Screenshots The Way You Remember Them | AI Visual Memory',
    template: '%s | Pomniter AI',
  },
  description:
    'Pomniter is an AI-powered screenshot search and visual memory engine. Search saved code snippets, study notes, travel tickets, and diagrams using fuzzy natural language memory queries.',
  keywords: [
    'Pomniter',
    'помнить',
    'screenshot search',
    'AI visual memory',
    'semantic screenshot search',
    'multimodal OCR',
    'vector search screenshots',
    'Nikunj Maheshwari',
    'developer tools',
    'LeetCode screenshot manager',
    'study notes retriever',
    'second brain for screenshots',
  ],
  authors: [{ name: CREATOR_NAME, url: 'https://www.nikunjmaheshwari.in' }],
  creator: CREATOR_NAME,
  publisher: 'Nikunj Maheshwari',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Pomniter — AI Screenshot Memory & Semantic Search',
    description:
      'Search screenshots the way you remember them. Powered by multimodal understanding and dense vector retrieval. Built by Nikunj Maheshwari.',
    url: SITE_URL,
    siteName: 'Pomniter',
    images: [
      {
        url: '/part2_cover_image.png',
        width: 1200,
        height: 630,
        alt: 'Pomniter: A second brain for your screenshots diagram',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pomniter — AI Screenshot Memory & Semantic Search',
    description:
      'Find any saved screenshot using natural language memory queries. Inspired by the Russian word помнить (to remember).',
    images: ['/part2_cover_image.png'],
    creator: '@nikunjmaheshwari',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const softwareSchema = getSoftwareAppSchema();
  const websiteSchema = getWebsiteSchema();
  const personSchema = getPersonSchema();
  const serviceSchema = getServiceSchema();
  const aggregateRatingSchema = getAggregateRatingSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme Initializer script to prevent theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('pomniter-theme');
                  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />

        {/* Google Analytics Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BZM0NPMZ97"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BZM0NPMZ97');
          `}
        </Script>

        {/* JSON-LD Schemas for Traditional SEO & GEO Entities */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
        />
      </head>
      <body>
        <noscript>
          <div style={{ padding: '20px', background: '#000', color: '#fff' }}>
            <h1>Pomniter - AI Screenshot Memory Search</h1>
            <p>Pomniter is an AI-powered visual memory engine that uses multimodal vector embeddings to make your screenshots semantically searchable without exact keyword matching.</p>
            <ul>
              <li><a href="/features">Features</a></li>
              <li><a href="/docs">Architecture Docs</a></li>
              <li><a href="/developers">Developers</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
        </noscript>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
