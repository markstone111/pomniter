import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Search,
  Brain,
  Code2,
  Lock,
  Layers,
  Zap,
  ArrowRight,
  Sparkles,
  Calendar,
  Layers3,
  Bot,
  ShieldCheck,
  FileCode,
  Terminal,
} from 'lucide-react';
import { getBreadcrumbSchema, SITE_URL } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Features Matrix & AI Capabilities',
  description:
    'Explore Pomniter’s multimodal architecture, semantic vector search, code recognition, and privacy-first visual memory features.',
  alternates: {
    canonical: `${SITE_URL}/features`,
  },
};

export default function FeaturesPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Features', url: '/features' },
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
          backgroundColor: 'var(--accent-yellow)',
          padding: '64px 0 48px 0',
          color: '#121212',
        }}
      >
        <div className="container">
          <div className="neo-badge neo-badge-pink" style={{ marginBottom: '14px' }}>
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            The Pomniter Engine //
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              maxWidth: '740px',
              lineHeight: 1.6,
              color: '#222',
            }}
          >
            A deep dive into the multimodal vision pipeline, dense vector embeddings, and zero-effort retrieval system powering Pomniter.
          </p>
        </div>
      </section>

      {/* Deep Dive Features Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Feature 1: Semantic Search */}
            <div
              className="neo-box-static"
              style={{
                padding: '36px 32px',
                borderLeft: '10px solid var(--accent-green)',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span className="neo-badge neo-badge-green">01 // CORE SEARCH</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--text-dim)',
                  }}
                >
                  COSINE SIMILARITY & HYBRID RETRIEVAL
                </span>
              </div>
              <h2 style={{ fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: '12px' }}>
                Fuzzy Human Memory Retrieval
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--text-muted)',
                  marginBottom: '16px',
                }}
              >
                Human memory doesn&apos;t store image file paths; it stores concepts, topics, visual feelings, and purposes. Pomniter maps your unstructured thoughts into a high-dimensional vector space, matching queries against synthesized contextual summaries rather than literal string matches.
              </p>
              <div
                style={{
                  backgroundColor: 'var(--bg-main)',
                  padding: '14px 18px',
                  border: '1.5px solid var(--border-color)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                }}
              >
                <strong>Example Query:</strong> &quot;Find that graph traversal queue note I saved last semester&quot; → <strong>Matches:</strong> BFS level-order snapshot with 98.4% confidence score.
              </div>
            </div>

            {/* Feature 2: Code & LeetCode Recognition */}
            <div
              className="neo-box-static"
              style={{
                padding: '36px 32px',
                borderLeft: '10px solid var(--accent-purple)',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span className="neo-badge neo-badge-purple">02 // DEVELOPER INTELLIGENCE</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--text-dim)',
                  }}
                >
                  ALGORITHM & SYNTAX PARSER
                </span>
              </div>
              <h2 style={{ fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: '12px' }}>
                LeetCode & Code Snippet Recognition
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--text-muted)',
                  marginBottom: '16px',
                }}
              >
                Engineers frequently screenshot code snippets, terminal errors, or LeetCode solutions. Pomniter detects programming language (Python, C++, Java, Rust, TypeScript), algorithmic paradigm (Dynamic Programming, Graph Theory, Binary Search), and problem context.
              </p>
              <div
                style={{
                  backgroundColor: 'var(--bg-main)',
                  padding: '14px 18px',
                  border: '1.5px solid var(--border-color)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                }}
              >
                <strong>Understands:</strong> <code>mid = left + (right - left) / 2</code> is not just math; it is an arithmetic overflow prevention technique for binary search.
              </div>
            </div>

            {/* Feature 3: Transient vs Long-Term Classification */}
            <div
              className="neo-box-static"
              style={{
                padding: '36px 32px',
                borderLeft: '10px solid var(--accent-pink)',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span className="neo-badge neo-badge-pink">03 // INTENT FILTER</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--text-dim)',
                  }}
                >
                  AUTOMATIC LIFECYCLE CLASSIFICATION
                </span>
              </div>
              <h2 style={{ fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: '12px' }}>
                Transient vs. Long-Term Memory
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--text-muted)',
                  marginBottom: '16px',
                }}
              >
                Not every screenshot deserves forever in your brain. A payment OTP or a temporary parking spot number is only useful for 15 minutes. A recipe or an architecture diagram is useful for years. Pomniter automatically tags screenshot volatility to keep your knowledge base clean.
              </p>
              <div
                style={{
                  backgroundColor: 'var(--bg-main)',
                  padding: '14px 18px',
                  border: '1.5px solid var(--border-color)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                }}
              >
                <strong>Auto-Triage:</strong> Identifies OTPs, bus passes, and temporary confirmations for archival or automatic expiration reminders.
              </div>
            </div>

            {/* Feature 4: Privacy-First Local Vectors */}
            <div
              className="neo-box-static"
              style={{
                padding: '36px 32px',
                borderLeft: '10px solid var(--accent-blue)',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span className="neo-badge neo-badge-blue">04 // PRIVACY & SECURITY</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--text-dim)',
                  }}
                >
                  LOCAL-FIRST ENCRYPTION
                </span>
              </div>
              <h2 style={{ fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: '12px' }}>
                Privacy-First Architecture
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--text-muted)',
                  marginBottom: '16px',
                }}
              >
                Your screenshots contain bank statements, personal chats, and proprietary code. Pomniter is designed with strict data isolation. Embeddings and index files can reside directly on your local device without training external models on your private data.
              </p>
              <div
                style={{
                  backgroundColor: 'var(--bg-main)',
                  padding: '14px 18px',
                  border: '1.5px solid var(--border-color)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                }}
              >
                <strong>Local Isolation:</strong> Encrypted vector store with on-device cache and optional offline inference capabilities.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP SECTION */}
      <section
        className="section"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderTop: 'var(--border-thick) solid var(--border-color)',
          borderBottom: 'var(--border-thick) solid var(--border-color)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px auto' }}>
            <div className="neo-badge neo-badge-yellow" style={{ margin: '0 auto 12px auto' }}>
              <span>FUTURE DEVELOPMENT</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              Upcoming Milestones //
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
              Exciting features slated for upcoming Pomniter releases.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            <div className="neo-box" style={{ padding: '24px', backgroundColor: 'var(--bg-card)' }}>
              <div className="neo-badge neo-badge-purple" style={{ marginBottom: '12px' }}>
                <span>PHASE 2</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', textTransform: 'uppercase' }}>
                AI Flashcards Generator
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Turn your saved DBMS, Operating Systems, and LeetCode screenshots into interactive spaced repetition flashcards.
              </p>
            </div>

            <div className="neo-box" style={{ padding: '24px', backgroundColor: 'var(--bg-card)' }}>
              <div className="neo-badge neo-badge-green" style={{ marginBottom: '12px' }}>
                <span>PHASE 2</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', textTransform: 'uppercase' }}>
                Proactive Reminders
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Detects exam dates, flight boarding times, and concert schedules automatically to push calendar reminders.
              </p>
            </div>

            <div className="neo-box" style={{ padding: '24px', backgroundColor: 'var(--bg-card)' }}>
              <div className="neo-badge neo-badge-pink" style={{ marginBottom: '12px' }}>
                <span>PHASE 3</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', textTransform: 'uppercase' }}>
                Conversational Assistant
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Ask complex synthesis questions: &quot;Summarize all the database indexing notes I saved over the last 3 months.&quot;
              </p>
            </div>

            <div className="neo-box" style={{ padding: '24px', backgroundColor: 'var(--bg-card)' }}>
              <div className="neo-badge neo-badge-blue" style={{ marginBottom: '12px' }}>
                <span>PHASE 3</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', textTransform: 'uppercase' }}>
                Smart Duplicate Cleaner
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Identifies burst captures and near-duplicate screenshots to free up gigabytes of local storage automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '2.2rem', textTransform: 'uppercase', marginBottom: '16px' }}>
            Experience the Future of Visual Memory
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '28px' }}>
            Join the early access test group and test Pomniter on your screenshot collection.
          </p>
          <Link href="/download" className="neo-btn" style={{ fontSize: '1rem', padding: '14px 28px' }}>
            <span>Download Early Access Beta</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
