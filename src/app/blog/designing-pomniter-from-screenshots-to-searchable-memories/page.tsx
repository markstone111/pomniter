import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import {
  getArticleSchema,
  getBreadcrumbSchema,
  CREATOR_NAME,
  CREATOR_URL,
  SITE_URL,
} from '@/lib/schema';

const ARTICLE_TITLE =
  'Designing Pomniter: From Screenshots to Searchable Memories';
const ARTICLE_DESC =
  'Why OCR alone is not enough for screenshot retrieval, how human memory recalls visual concepts, and how Pomniter bridges multimodal embeddings with semantic search.';
const ARTICLE_URL = `${SITE_URL}/blog/designing-pomniter-from-screenshots-to-searchable-memories`;
const PUBLISHED_DATE = '2026-08-05T23:07:00Z';

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESC,
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: ARTICLE_TITLE,
    description: ARTICLE_DESC,
    url: ARTICLE_URL,
    type: 'article',
    publishedTime: PUBLISHED_DATE,
    authors: [CREATOR_NAME],
    images: [
      {
        url: '/part2_cover_image.png',
        width: 1200,
        height: 630,
        alt: ARTICLE_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ARTICLE_TITLE,
    description: ARTICLE_DESC,
    images: ['/part2_cover_image.png'],
  },
};

export default function ArticlePage() {
  const articleSchema = getArticleSchema({
    title: ARTICLE_TITLE,
    description: ARTICLE_DESC,
    url: ARTICLE_URL,
    datePublished: PUBLISHED_DATE,
    image: '/part2_cover_image.png',
  });

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Designing Pomniter', url: '/blog/designing-pomniter-from-screenshots-to-searchable-memories' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Article Header Container */}
      <div style={{ backgroundColor: 'var(--bg-main)', borderBottom: 'var(--border-thick) solid var(--border-color)' }}>
        <div className="container" style={{ padding: '40px 24px' }}>
          {/* Back Navigation */}
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              fontWeight: 700,
              marginBottom: '24px',
              textDecoration: 'none',
              color: 'var(--text-main)',
            }}
          >
            <ArrowLeft size={16} />
            <span>← Back to Memory Lab</span>
          </Link>

          {/* Badges */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span className="neo-badge neo-badge-pink">PART 2 // SYSTEM DESIGN</span>
            <span className="neo-badge neo-badge-purple">ESTIMATED READING TIME: 5 MIN</span>
            <span className="neo-badge neo-badge-yellow">помнить • TO REMEMBER</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              lineHeight: 1.1,
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            {ARTICLE_TITLE}
          </h1>

          {/* Author Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              paddingTop: '16px',
              borderTop: '2px solid var(--border-color)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  border: 'var(--border-width) solid var(--border-color)',
                  backgroundColor: 'var(--accent-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 900,
                  fontSize: '1rem',
                  color: '#121212',
                }}
              >
                NM
              </div>
              <div>
                <a
                  href="https://www.nikunjmaheshwari.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1rem',
                    color: 'var(--text-main)',
                    textDecoration: 'underline',
                  }}
                >
                  Nikunj Maheshwari
                </a>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--text-dim)',
                  }}
                >
                  Published on Wed, Aug 5 • Software Engineer
                </div>
              </div>
            </div>

            {/* External Platform Links */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a
                href="https://medium.com/@nikunjmaheshwari"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn neo-btn-outline"
                style={{ padding: '6px 12px', fontSize: '0.75rem' }}
              >
                <span>Medium</span>
                <ExternalLink size={12} />
              </a>
              <a
                href="https://dev.to/nikunjmaheshwari"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn neo-btn-outline"
                style={{ padding: '6px 12px', fontSize: '0.75rem' }}
              >
                <span>Dev.to</span>
                <ExternalLink size={12} />
              </a>
              <a
                href="https://www.linkedin.com/in/nikunjmaheshwari"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn neo-btn-yellow"
                style={{ padding: '6px 12px', fontSize: '0.75rem' }}
              >
                <span>LinkedIn</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="section" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          {/* Cover Image */}
          <div
            className="neo-box-static"
            style={{
              overflow: 'hidden',
              marginBottom: '40px',
              backgroundColor: '#000',
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '440px' }}>
              <Image
                src="/part2_cover_image.png"
                alt="Designing Pomniter cover notebook sketch: Screenshot -> Understand -> Connect -> Find -> Remember"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div
              style={{
                padding: '10px 16px',
                backgroundColor: 'var(--bg-card)',
                borderTop: 'var(--border-width) solid var(--border-color)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--text-dim)',
                textAlign: 'center',
              }}
            >
              Fig 1.0 // Authentic notebook sketch: &quot;A second brain for your screenshots&quot;
            </div>
          </div>

          {/* Essay Body */}
          <div
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'var(--text-main)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* Lead Paragraph */}
            <p>
              In the first part of this series, I talked about a problem I kept noticing with screenshots.
            </p>
            <p>
              We save them because we think they&apos;ll be useful later, but when we actually need them, we often have no idea where they are.
            </p>
            <p style={{ fontWeight: 700, fontSize: '1.25rem' }}>
              That led me to Pomniter.
            </p>

            {/* Renaming Announcement Box */}
            <div
              className="neo-box-static"
              style={{
                backgroundColor: 'var(--accent-lavender)',
                color: '#121212',
                padding: '20px 24px',
                borderLeft: '8px solid var(--accent-purple)',
                margin: '12px 0',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: '#4c1d95',
                  marginBottom: '6px',
                }}
              >
                // BRAND & IDENTITY EVOLUTION
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                  color: '#121212',
                }}
              >
                The project has a new name: <strong>Pomniter</strong>. It is inspired by the Russian word <strong>помнить (pomnit)</strong>, meaning &quot;to remember&quot;—which captures exactly what I want this project to help with.
              </p>
            </div>

            <p>
              Identifying the problem is the easy part. The harder question is: <em>how do I actually build something that solves it?</em>
            </p>
            <p>
              I don&apos;t want Pomniter to be another gallery with a slightly better search bar. The idea is to make screenshots understandable enough that I can search for them the same way I remember them.
            </p>
            <p>
              So before writing any code, I wanted to figure out what Pomniter actually needs to do.
            </p>

            {/* Section: What Should Happen */}
            <h2
              style={{
                fontSize: '1.8rem',
                textTransform: 'uppercase',
                marginTop: '28px',
                paddingTop: '20px',
                borderTop: '2px solid var(--border-color)',
              }}
            >
              What Should Happen When I Take a Screenshot?
            </h2>

            <p>At the simplest level, the flow should look something like this:</p>

            {/* Monospace Flow */}
            <div
              className="neo-box-static"
              style={{
                padding: '18px 24px',
                backgroundColor: 'var(--bg-card)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.95rem',
                fontWeight: 700,
                lineHeight: 1.8,
              }}
            >
              Screenshot<br />
              &nbsp;&nbsp;&nbsp;&nbsp;↓<br />
              Understand it<br />
              &nbsp;&nbsp;&nbsp;&nbsp;↓<br />
              Extract useful information<br />
              &nbsp;&nbsp;&nbsp;&nbsp;↓<br />
              Organize it<br />
              &nbsp;&nbsp;&nbsp;&nbsp;↓<br />
              Make it searchable<br />
              &nbsp;&nbsp;&nbsp;&nbsp;↓<br />
              Retrieve it when needed
            </div>

            <p>
              The important part here is <strong>understand</strong>.
            </p>
            <p>
              If I take a screenshot of a LeetCode problem, I don&apos;t just want the system to know that the image contains the words &quot;Binary Search.&quot; I&apos;d want it to understand that it&apos;s probably:
            </p>

            <ul
              style={{
                paddingLeft: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.95rem',
              }}
            >
              <li>• related to programming,</li>
              <li>• related to DSA,</li>
              <li>• specifically about binary search,</li>
              <li>• potentially useful for interview preparation,</li>
              <li>• and probably something I saved for future reference.</li>
            </ul>

            <p>That&apos;s a very different problem from simply storing an image.</p>

            {/* Section: A Screenshot Contains More Than Text */}
            <h2
              style={{
                fontSize: '1.8rem',
                textTransform: 'uppercase',
                marginTop: '28px',
                paddingTop: '20px',
                borderTop: '2px solid var(--border-color)',
              }}
            >
              A Screenshot Contains More Than Text
            </h2>

            <p>
              One of the first things I realized while thinking about this project is that <strong>OCR alone isn&apos;t enough</strong>.
            </p>
            <p>Consider a screenshot containing:</p>

            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                padding: '14px 20px',
                border: 'var(--border-width) solid var(--border-color)',
                fontFamily: 'var(--font-mono)',
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-main)',
              }}
            >
              <code>mid = left + (right - left) / 2</code>
            </div>

            <p>
              OCR can extract that text. But the useful information isn&apos;t just the text. It&apos;s the context around it.
            </p>
            <p>
              It&apos;s a programming concept. It&apos;s related to binary search. It might be part of a coding interview note. It might be something I wanted to remember because I kept making overflow mistakes with the usual midpoint formula.
            </p>
            <p>
              That context is what makes the screenshot useful later. So Pomniter needs to look beyond the text and understand what the screenshot actually represents.
            </p>

            {/* Section: How Should I Search */}
            <h2
              style={{
                fontSize: '1.8rem',
                textTransform: 'uppercase',
                marginTop: '28px',
                paddingTop: '20px',
                borderTop: '2px solid var(--border-color)',
              }}
            >
              How Should I Search for Something I Saved?
            </h2>

            <p>This is probably the most important part of the project.</p>
            <p>
              Let&apos;s say I saved a screenshot about BFS two months ago. A traditional search might require me to type:
            </p>

            <div
              style={{
                backgroundColor: 'var(--accent-yellow)',
                padding: '8px 16px',
                border: 'var(--border-width) solid var(--border-color)',
                fontFamily: 'var(--font-mono)',
                fontWeight: 800,
                color: '#121212',
                display: 'inline-block',
                width: 'fit-content',
              }}
            >
              BFS
            </div>

            <p>But that&apos;s not necessarily how I remember it. I might remember:</p>

            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                padding: '16px 20px',
                border: 'var(--border-width) solid var(--border-color)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.92rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div>&quot;There was a screenshot with that BFS trick I wanted to revise before interviews.&quot;</div>
              <div>&quot;Find the graph algorithm note I saved a few weeks ago.&quot;</div>
              <div>&quot;Show me the screenshot related to shortest path that I saved while studying graphs.&quot;</div>
            </div>

            <p>
              The system should be able to work with that kind of query. That&apos;s why I&apos;m interested in <strong>semantic search</strong> rather than relying only on filenames or exact keywords.
            </p>
            <p style={{ fontWeight: 700 }}>
              The goal isn&apos;t just to search for a word. The goal is to search for what I remember.
            </p>

            {/* Section: The First Version */}
            <h2
              style={{
                fontSize: '1.8rem',
                textTransform: 'uppercase',
                marginTop: '28px',
                paddingTop: '20px',
                borderTop: '2px solid var(--border-color)',
              }}
            >
              The First Version of Pomniter
            </h2>

            <p>
              There are a lot of things I could try to build here: automatic reminders, duplicate detection, related screenshots, AI-generated summaries, flashcards, actions from screenshots, or a conversational assistant.
            </p>
            <p>
              All of these are interesting, but trying to build everything at once would probably be a mistake. So I&apos;m narrowing down the first version.
            </p>

            <div
              className="neo-box-static"
              style={{
                padding: '18px 24px',
                backgroundColor: 'var(--accent-green)',
                color: '#121212',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.95rem',
                fontWeight: 700,
                lineHeight: 1.8,
              }}
            >
              Save a screenshot<br />
              &nbsp;&nbsp;&nbsp;&nbsp;↓<br />
              Pomniter understands it<br />
              &nbsp;&nbsp;&nbsp;&nbsp;↓<br />
              Pomniter stores what it learned<br />
              &nbsp;&nbsp;&nbsp;&nbsp;↓<br />
              I search using natural language<br />
              &nbsp;&nbsp;&nbsp;&nbsp;↓<br />
              Pomniter finds the relevant screenshot
            </div>

            <p>
              If that basic loop doesn&apos;t work well, none of the other features really matter.
            </p>

            {/* Section: Where AI Comes In */}
            <h2
              style={{
                fontSize: '1.8rem',
                textTransform: 'uppercase',
                marginTop: '28px',
                paddingTop: '20px',
                borderTop: '2px solid var(--border-color)',
              }}
            >
              Where AI Comes In
            </h2>

            <p>
              This is where the project starts getting interesting technically. My current idea is to use a combination of image understanding, OCR, embeddings, and retrieval-augmented generation.
            </p>
            <p>At a high level, I&apos;m thinking about something like:</p>

            {/* High Level ASCII Flow */}
            <div
              className="neo-box-static"
              style={{
                padding: '20px 24px',
                backgroundColor: 'var(--bg-card)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.88rem',
                fontWeight: 700,
                lineHeight: 1.7,
                textAlign: 'center',
              }}
            >
              Screenshot<br />
              ↓<br />
              Image Understanding<br />
              ↓<br />
              Text + Context<br />
              ↓<br />
              Structured Metadata<br />
              ↓<br />
              Embeddings<br />
              ↓<br />
              Semantic Search<br />
              ↓<br />
              Relevant Results<br />
              ↓<br />
              RAG<br />
              ↓<br />
              Natural Language Response
            </div>

            <p>
              This isn&apos;t the final architecture. I expect this diagram to change once I start implementing and testing things.
            </p>
            <p>
              There will probably be cases where OCR works better than I expected, cases where vision models are unnecessarily expensive, and cases where semantic search returns results that look relevant but aren&apos;t actually useful.
            </p>
            <p>
              I want to discover those problems while building instead of assuming I already know the perfect solution.
            </p>

            {/* Section: What About All The Other Features */}
            <h2
              style={{
                fontSize: '1.8rem',
                textTransform: 'uppercase',
                marginTop: '28px',
                paddingTop: '20px',
                borderTop: '2px solid var(--border-color)',
              }}
            >
              But What About All the Other Features?
            </h2>

            <p>
              Once the core retrieval system works, Pomniter can become much more interesting. For example:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
              <div style={{ padding: '10px 14px', backgroundColor: 'var(--bg-card)', border: '1.5px solid var(--border-color)' }}>
                <strong>Identify important info:</strong> &quot;This looks like a flight ticket.&quot;
              </div>
              <div style={{ padding: '10px 14px', backgroundColor: 'var(--bg-card)', border: '1.5px solid var(--border-color)' }}>
                <strong>Recognize temporary info:</strong> &quot;This looks like an OTP screenshot from three days ago.&quot;
              </div>
              <div style={{ padding: '10px 14px', backgroundColor: 'var(--bg-card)', border: '1.5px solid var(--border-color)' }}>
                <strong>Create reminders:</strong> &quot;This screenshot contains an exam date.&quot;
              </div>
              <div style={{ padding: '10px 14px', backgroundColor: 'var(--bg-card)', border: '1.5px solid var(--border-color)' }}>
                <strong>Find related screenshots:</strong> &quot;You have 6 other screenshots related to operating systems.&quot;
              </div>
              <div style={{ padding: '10px 14px', backgroundColor: 'var(--bg-card)', border: '1.5px solid var(--border-color)' }}>
                <strong>Summarize information:</strong> &quot;This screenshot contains notes about TCP&apos;s three-way handshake.&quot;
              </div>
              <div style={{ padding: '10px 14px', backgroundColor: 'var(--bg-card)', border: '1.5px solid var(--border-color)' }}>
                <strong>Turn saved info into something useful:</strong> &quot;Create flashcards from my screenshots about DBMS.&quot;
              </div>
            </div>

            <p>
              These are ideas for later. For now, I want to get one thing right: <em>Can Pomniter actually help me find something I saved months ago?</em>
            </p>

            {/* Section: What I Don't Want to Build */}
            <h2
              style={{
                fontSize: '1.8rem',
                textTransform: 'uppercase',
                marginTop: '28px',
                paddingTop: '20px',
                borderTop: '2px solid var(--border-color)',
              }}
            >
              What I Don&apos;t Want to Build
            </h2>

            <p>
              This is also something I need to be clear about.
            </p>
            <p>
              I don&apos;t want Pomniter to become an app that tries to automatically organize every image on my device into hundreds of categories.
            </p>
            <p>
              I don&apos;t want users to spend time maintaining folders, tags, and collections.
            </p>
            <p>
              And I don&apos;t want another search box where users have to remember exactly what they typed when they saved something.
            </p>
            <p style={{ fontWeight: 700 }}>
              The whole point is to reduce the amount of remembering required from the user. The system should do more of that work.
            </p>

            {/* Section: What's Next */}
            <h2
              style={{
                fontSize: '1.8rem',
                textTransform: 'uppercase',
                marginTop: '28px',
                paddingTop: '20px',
                borderTop: '2px solid var(--border-color)',
              }}
            >
              What&apos;s Next?
            </h2>

            <p>
              At this point, Pomniter is still just an idea backed by a rough technical direction. I haven&apos;t tested the retrieval quality yet. I don&apos;t know which models will work best. I don&apos;t know how much processing should happen locally and how much on a server.
            </p>
            <p>
              And I expect the architecture to change once I start building. That&apos;s actually what I&apos;m looking forward to.
            </p>
            <p>
              The next step is no longer about defining the idea. It&apos;s about building the first working version and finding out where the idea breaks.
            </p>
            <p style={{ fontWeight: 800, fontSize: '1.25rem' }}>
              Part 3 will be where I start building Pomniter.
            </p>

            {/* Share / Author Footer Card */}
            <div
              className="neo-box-static"
              style={{
                marginTop: '40px',
                padding: '28px',
                backgroundColor: 'var(--bg-card)',
                borderTop: '6px solid var(--accent-green)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Written by Nikunj Maheshwari
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Building innovative mobile and web AI apps. Follow along for Part 3.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <a
                    href="https://medium.com/@nikunjmaheshwari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn neo-btn-yellow"
                    style={{ padding: '8px 14px', fontSize: '0.82rem' }}
                  >
                    <span>Read on Medium</span>
                    <ExternalLink size={14} />
                  </a>
                  <Link
                    href="/download"
                    className="neo-btn"
                    style={{ padding: '8px 14px', fontSize: '0.82rem' }}
                  >
                    <span>Early Access</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
