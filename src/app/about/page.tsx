import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, ExternalLink, Mail, Heart, Terminal, Compass, Shield } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { getBreadcrumbSchema, getPersonSchema, CREATOR_NAME, CREATOR_URL, SITE_URL } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Pomniter & Creator Nikunj Maheshwari',
  description:
    'Learn why Pomniter was created, how the project evolved from Breadcrumb to Pomniter (Russian: помнить = to remember), and our philosophy on visual memory.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Header Banner */}
      <section
        style={{
          borderBottom: 'var(--border-thick) solid var(--border-color)',
          backgroundColor: 'var(--accent-lavender)',
          padding: '64px 0 48px 0',
          color: '#121212',
        }}
      >
        <div className="container">
          <div className="neo-badge neo-badge-pink" style={{ marginBottom: '14px' }}>
            <span>THE ORIGIN & PHILOSOPHY</span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            Why I&apos;m Building Pomniter //
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              maxWidth: '740px',
              lineHeight: 1.6,
              color: '#222',
            }}
          >
            The story behind transforming accidental phone clutter into an intelligent, searchable memory bank.
          </p>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
            }}
          >
            {/* Story & Philosophy Column */}
            <div>
              {/* Block 1: The Problem */}
              <div className="neo-box-static" style={{ padding: '32px', marginBottom: '32px' }}>
                <div className="neo-badge neo-badge-yellow" style={{ marginBottom: '14px' }}>
                  <span>THE PROBLEM</span>
                </div>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '14px', textTransform: 'uppercase' }}>
                  Screenshots Are Unindexed Thoughts
                </h2>
                <p style={{ fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '14px', color: 'var(--text-muted)' }}>
                  Think about how you use screenshots today. You see a clever code optimization on Twitter, an important slide during a lecture, a flight confirmation, or a LeetCode pattern you want to review before job interviews.
                </p>
                <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                  You hit snapshot because you think, <em>&quot;I&apos;ll need this later.&quot;</em> But weeks later, when you actually need it, that screenshot is buried under hundreds of receipts, memes, and random captures. The memory exists in your head, but the machine can&apos;t connect your thought to the image.
                </p>
              </div>

              {/* Block 2: The Name Evolution (POMNITER) */}
              <div
                className="neo-box-static"
                style={{
                  padding: '32px',
                  marginBottom: '32px',
                  borderLeft: '8px solid var(--accent-purple)',
                  backgroundColor: 'var(--bg-surface)',
                }}
              >
                <div className="neo-badge neo-badge-purple" style={{ marginBottom: '14px' }}>
                  <span>NAME EVOLUTION</span>
                </div>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '14px', textTransform: 'uppercase' }}>
                  From Breadcrumb to Pomniter
                </h2>
                <div
                  style={{
                    backgroundColor: 'var(--accent-lavender)',
                    color: '#121212',
                    padding: '16px 20px',
                    border: 'var(--border-width) solid var(--border-color)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    marginBottom: '16px',
                  }}
                >
                  &quot;The project has a new name: <strong>Pomniter</strong>. It is inspired by the Russian word <strong>помнить (pomnit)</strong>, meaning &apos;to remember&apos;—which captures exactly what I want this project to help with.&quot;
                </div>
                <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                  While &quot;Breadcrumb&quot; conveyed the idea of following a trail, <strong>Pomniter</strong> speaks directly to the cognitive core of the app: human memory augmentation. We don&apos;t just leave crumbs behind; we want the system to truly <em>remember</em> and comprehend our visual discoveries.
                </p>
              </div>

              {/* Block 3: What We Refuse to Build */}
              <div className="neo-box-static" style={{ padding: '32px' }}>
                <div className="neo-badge neo-badge-pink" style={{ marginBottom: '14px' }}>
                  <span>CORE PRINCIPLES</span>
                </div>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '14px', textTransform: 'uppercase' }}>
                  What We Refuse to Build
                </h2>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.88rem',
                    color: 'var(--text-main)',
                  }}
                >
                  <li style={{ display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#ef4444' }}>✕</span>
                    <span>No complex folder hierarchies that you have to manually organize every Sunday.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#ef4444' }}>✕</span>
                    <span>No strict exact-keyword search boxes that fail if you spell one word differently.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#ef4444' }}>✕</span>
                    <span>No invasive cloud telemetry that sells or trains public models on private notes.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Creator Profile & Tech Stack Column */}
            <div>
              {/* Creator Card */}
              <div
                className="neo-box-static"
                style={{
                  padding: '32px',
                  backgroundColor: 'var(--bg-card)',
                  marginBottom: '32px',
                }}
              >
                <div className="neo-badge neo-badge-green" style={{ marginBottom: '16px' }}>
                  <span>MEET THE CREATOR</span>
                </div>

                <h2
                  style={{
                    fontSize: '1.8rem',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                  }}
                >
                  Nikunj Maheshwari
                </h2>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--text-dim)',
                    marginBottom: '18px',
                  }}
                >
                  SOFTWARE ENGINEER // MOBILE & AI INTEGRATION
                </div>

                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.65,
                    color: 'var(--text-muted)',
                    marginBottom: '20px',
                  }}
                >
                  I&apos;m a software developer with a deep interest in machine learning, mobile systems, and full-stack web applications. I build tools that solve daily friction in how engineers and learners interact with technology.
                </p>

                {/* Social & Portfolio Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a
                    href="https://www.nikunjmaheshwari.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn neo-btn-yellow"
                    style={{ justifyContent: 'space-between', width: '100%' }}
                  >
                    <span>Visit Portfolio Site</span>
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href="https://github.com/markstone111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn neo-btn-outline"
                    style={{ justifyContent: 'space-between', width: '100%' }}
                  >
                    <span>GitHub @markstone111</span>
                    <GithubIcon size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nikunjmaheshwari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn neo-btn-outline"
                    style={{ justifyContent: 'space-between', width: '100%' }}
                  >
                    <span>LinkedIn Profile</span>
                    <LinkedinIcon size={16} />
                  </a>
                </div>
              </div>

              {/* Project Tech Specs */}
              <div
                className="neo-box-static"
                style={{
                  padding: '28px',
                  backgroundColor: 'var(--accent-peach)',
                  color: '#121212',
                }}
              >
                <div className="neo-badge neo-badge-purple" style={{ marginBottom: '14px' }}>
                  <span>STACK OVERVIEW</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', textTransform: 'uppercase' }}>
                  Engineering Foundation
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                  }}
                >
                  <li>• <strong>Front-end Web:</strong> Next.js 16 + Vanilla CSS Modules</li>
                  <li>• <strong>Mobile Companion:</strong> Android & Flutter</li>
                  <li>• <strong>AI Processing:</strong> Multimodal Vision + Embeddings</li>
                  <li>• <strong>Vector Search:</strong> HNSW / Cosine Similarity Index</li>
                  <li>• <strong>Domain:</strong> pomniter.nikunjmaheshwari.in</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
