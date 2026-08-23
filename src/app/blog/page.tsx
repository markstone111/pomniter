import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Clock, Calendar, ExternalLink } from 'lucide-react';
import { getBreadcrumbSchema, SITE_URL } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Engineering Blog & Research // The Memory Lab',
  description:
    'Deep dives, design rationales, and architecture notes from building Pomniter — an AI visual memory search system by Nikunj Maheshwari.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

const ARTICLES = [
  {
    slug: 'designing-pomniter-from-screenshots-to-searchable-memories',
    number: '02',
    seriesTag: 'PART 2 // ARCHITECTURE',
    title: 'Designing Pomniter: From Screenshots to Searchable Memories',
    description:
      'Why OCR alone is not enough, how human memory naturally queries images, and how Pomniter bridges multimodal embeddings with vector retrieval.',
    date: 'August 2026',
    readTime: '5 min read',
    image: '/part2_cover_image.png',
    badge: 'FEATURED ESSAY',
    badgeColor: 'neo-badge-pink',
  },
];

export default function BlogListPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Header Banner - Matching "THE LAB" Aesthetic */}
      <section
        style={{
          borderBottom: 'var(--border-thick) solid var(--border-color)',
          backgroundColor: 'var(--bg-surface)',
          padding: '64px 0 48px 0',
        }}
      >
        <div className="container">
          <div className="neo-badge neo-badge-pink" style={{ marginBottom: '14px' }}>
            <span>DOCUMENTATION & ESSAYS</span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              textTransform: 'uppercase',
              lineHeight: 1.05,
              marginBottom: '16px',
            }}
          >
            THE LAB //
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              maxWidth: '740px',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
            }}
          >
            Research logs, design philosophy, and technical deep dives into computer vision, vector retrieval, and human memory augmentation.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '36px',
            }}
          >
            {ARTICLES.map((article) => (
              <article
                key={article.slug}
                className="neo-box"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                }}
              >
                {/* Cover Image Container */}
                <Link
                  href={`/blog/${article.slug}`}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '240px',
                    borderBottom: 'var(--border-width) solid var(--border-color)',
                    display: 'block',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      display: 'flex',
                      gap: '6px',
                    }}
                  >
                    <span className="neo-badge neo-badge-yellow" style={{ fontSize: '0.72rem' }}>
                      {article.seriesTag}
                    </span>
                  </div>
                </Link>

                {/* Card Content */}
                <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-dim)',
                      marginBottom: '10px',
                    }}
                  >
                    <span style={{ fontWeight: 800, color: 'var(--text-main)' }}>
                      {article.number} //
                    </span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h2
                    style={{
                      fontSize: '1.4rem',
                      textTransform: 'uppercase',
                      lineHeight: 1.25,
                      marginBottom: '12px',
                    }}
                  >
                    <Link
                      href={`/blog/${article.slug}`}
                      style={{ textDecoration: 'none', color: 'var(--text-main)' }}
                    >
                      {article.title}
                    </Link>
                  </h2>

                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                      marginBottom: '20px',
                      flex: 1,
                    }}
                  >
                    {article.description}
                  </p>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="neo-btn"
                    style={{ width: '100%', justifyContent: 'space-between' }}
                  >
                    <span>Read Full Essay</span>
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
