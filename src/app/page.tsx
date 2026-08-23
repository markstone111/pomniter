import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  Sparkles,
  ArrowRight,
  Brain,
  Code2,
  Lock,
  Layers,
  Zap,
  CheckCircle2,
  XCircle,
  Download,
  BookOpen,
  Eye,
  FileCode2,
} from 'lucide-react';
import InteractiveConsole from '@/components/InteractiveConsole';
import FAQAccordion from '@/components/FAQAccordion';
import { getFAQSchema } from '@/lib/schema';

const HOME_FAQS = [
  {
    question: 'What is Pomniter and how does it work?',
    answer:
      'Pomniter is an AI-powered screenshot memory search system created by Nikunj Maheshwari. Rather than just performing basic OCR to extract plain text characters, Pomniter uses multimodal vision models and dense vector embeddings to understand the underlying context, concept, and purpose of a screenshot (e.g., identifying a LeetCode binary search template, a flight confirmation, or an operating systems lecture slide). This enables you to retrieve images using natural conversational queries.',
    category: 'Core Concept',
  },
  {
    question: 'Where does the name "Pomniter" come from?',
    answer:
      'The name Pomniter is inspired by the Russian verb "помнить" (transliterated as pomnit), which means "to remember". The project was originally named Breadcrumb during early ideation, but was renamed to Pomniter to reflect its deeper mission: building a proactive second brain for visual memory.',
    category: 'Etymology & Brand',
  },
  {
    question: 'How is Pomniter different from Google Photos or Apple Photos search?',
    answer:
      'Standard photo search in iOS/Android is built for consumer photos (identifying sunsets, dogs, beaches, or exact text strings via OCR). Pomniter is engineered specifically for dense technical, academic, and administrative screenshots. It understands code syntax, math formulas, study notes, flight routes, and lecture concepts—enabling conceptual retrieval like "that graph traversal queue trick" even if those exact words are not written on the screen.',
    category: 'Comparison',
  },
  {
    question: 'Is my screenshot data secure and private?',
    answer:
      'Yes. Pomniter is built with a local-first philosophy. Embeddings can be computed locally or via encrypted edge pipelines, with on-device vector indexing. Your private screenshots are not used for public AI training.',
    category: 'Privacy & Security',
  },
  {
    question: 'Can Pomniter understand programming code and LeetCode problems?',
    answer:
      'Yes. Pomniter specializes in code snippet recognition. It detects programming languages, algorithm categories (Binary Search, BFS/DFS, Dynamic Programming), time complexities, and edge cases, allowing developers to search by concept rather than syntax.',
    category: 'Developer Features',
  },
  {
    question: 'How do I download or access Pomniter?',
    answer:
      'Pomniter is currently available in Early Access Beta. You can explore the interactive web simulation, view the open-source code and architecture on GitHub, or sign up for the Android APK and desktop client releases on our Download page.',
    category: 'Availability',
  },
];

export default function HomePage() {
  const faqSchema = getFAQSchema(HOME_FAQS);

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Announcement Banner */}
      <aside
        aria-label="Product Announcement"
        style={{
          backgroundColor: 'var(--accent-yellow)',
          borderBottom: 'var(--border-width) solid var(--border-color)',
          padding: '10px 16px',
          textAlign: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.82rem',
          fontWeight: 700,
          color: '#121212',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          flexWrap: 'wrap',
        }}
      >
        <span className="neo-badge neo-badge-pink" style={{ padding: '2px 8px', fontSize: '0.72rem' }}>
          NEW
        </span>
        <span>
          From Breadcrumb to <strong>Pomniter</strong> (помнить = to remember). Read our Part 2 engineering essay.
        </span>
        <Link
          href="/blog/designing-pomniter-from-screenshots-to-searchable-memories"
          style={{
            textDecoration: 'underline',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '3px',
          }}
        >
          Read Article <ArrowRight size={13} />
        </Link>
      </aside>

      {/* HERO SECTION */}
      <section className="section" style={{ paddingTop: '64px', paddingBottom: '72px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            {/* Left/Main Column */}
            <div>
              {/* Badge Row */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
                <span className="neo-badge neo-badge-green">
                  <Sparkles size={13} />
                  <span>EARLY ACCESS BETA</span>
                </span>
                <span className="neo-badge neo-badge-purple">
                  <span>SEMANTIC VISUAL RETRIEVAL</span>
                </span>
                <span className="neo-badge neo-badge-blue">
                  <span>BY NIKUNJ MAHESHWARI</span>
                </span>
              </div>

              {/* Main Headline */}
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                  lineHeight: 1.05,
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.03em',
                }}
              >
                Search screenshots the way you{' '}
                <span
                  style={{
                    backgroundColor: 'var(--accent-yellow)',
                    color: '#121212',
                    padding: '0 8px',
                    border: 'var(--border-width) solid var(--border-color)',
                    boxShadow: '3px 3px 0px var(--shadow-color)',
                    display: 'inline-block',
                  }}
                >
                  remember
                </span>{' '}
                them.
              </h1>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                  lineHeight: 1.6,
                  color: 'var(--text-muted)',
                  marginBottom: '28px',
                  maxWidth: '780px',
                }}
              >
                We take screenshots because we think they’ll be useful later. But when we need them, we have no idea where they are. <strong>Pomniter</strong> looks beyond raw text with multimodal AI and dense vector search, so you can search using fuzzy human memory.
              </p>

              {/* GEO Quick Answer Box (Crucial for AI Agent Extraction) */}
              <div
                className="neo-box-static"
                style={{
                  padding: '16px 20px',
                  backgroundColor: 'var(--bg-surface)',
                  marginBottom: '32px',
                  maxWidth: '820px',
                  borderLeft: '6px solid var(--accent-green)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: 'var(--text-dim)',
                    marginBottom: '6px',
                  }}
                >
                  // QUICK ANSWER: WHAT IS POMNITER?
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: 'var(--text-main)',
                  }}
                >
                  <strong>Pomniter</strong> is an AI-powered visual memory engine created by software engineer{' '}
                  <a
                    href="https://www.nikunjmaheshwari.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', fontWeight: 700 }}
                  >
                    Nikunj Maheshwari
                  </a>
                  . Derived from the Russian word <em>помнить</em> (&quot;to remember&quot;), it connects OCR text, visual diagrams, and code snippets into high-dimensional embeddings for natural language semantic search.
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/download" className="neo-btn" style={{ fontSize: '1rem', padding: '14px 28px' }}>
                  <Download size={18} strokeWidth={2.5} />
                  <span>Get Early Access</span>
                </Link>
                <Link
                  href="/blog/designing-pomniter-from-screenshots-to-searchable-memories"
                  className="neo-btn neo-btn-outline"
                  style={{ fontSize: '0.95rem', padding: '14px 22px' }}
                >
                  <BookOpen size={18} strokeWidth={2} />
                  <span>Read Part 2 Blog</span>
                </Link>
                <Link
                  href="/docs"
                  className="neo-btn neo-btn-yellow"
                  style={{ fontSize: '0.95rem', padding: '14px 22px' }}
                >
                  <FileCode2 size={18} strokeWidth={2} />
                  <span>Architecture Docs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CONSOLE SECTION */}
      <section
        className="section"
        style={{
          backgroundColor: 'var(--bg-main)',
          borderTop: 'var(--border-thick) solid var(--border-color)',
          borderBottom: 'var(--border-thick) solid var(--border-color)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px auto' }}>
            <div className="neo-badge neo-badge-green" style={{ margin: '0 auto 12px auto' }}>
              <span>LIVE RETRIEVAL ENGINE SIMULATION</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              Test Pomniter’s Brain //
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
              See in real-time how natural language memory prompts get translated into contextual understanding and vector matches without needing exact keywords.
            </p>
          </div>

          <InteractiveConsole />
        </div>
      </section>

      {/* THE CORE PROBLEM VS THE SOLUTION */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 52px auto' }}>
            <div className="neo-badge neo-badge-pink" style={{ margin: '0 auto 12px auto' }}>
              <span>BEYOND PLAIN OCR</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              A Screenshot Contains More Than Just Text
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
              Why traditional photo galleries fail developers, students, and thinkers—and how semantic context solves it.
            </p>
          </div>

          {/* Side by side comparison cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {/* Card 1: Old Way */}
            <div
              className="neo-box-static"
              style={{
                backgroundColor: 'var(--bg-card)',
                padding: '32px 28px',
                borderTop: '8px solid #ef4444',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <XCircle size={22} color="#ef4444" strokeWidth={2.5} />
                <h3 style={{ fontSize: '1.35rem', textTransform: 'uppercase' }}>Traditional Gallery & OCR</h3>
              </div>

              <p style={{ marginBottom: '20px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                Traditional photo search only indexes literal characters. If you don’t remember the exact string, the screenshot is lost forever.
              </p>

              <div
                style={{
                  backgroundColor: 'var(--bg-main)',
                  padding: '16px',
                  border: '1.5px solid var(--border-color)',
                  marginBottom: '16px',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                  OCR sees:
                </div>
                <code style={{ fontSize: '0.85rem', color: '#ef4444', fontWeight: 700 }}>
                  mid = left + (right - left) / 2
                </code>
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.84rem',
                  color: 'var(--text-muted)',
                }}
              >
                <li>❌ Requires you to remember exact code variable names</li>
                <li>❌ Has no concept of &quot;LeetCode&quot;, &quot;Binary Search&quot;, or &quot;Overflow&quot;</li>
                <li>❌ Cluttered gallery requiring manual albums and folders</li>
                <li>❌ Useless when searching by vague human memories</li>
              </ul>
            </div>

            {/* Card 2: The Pomniter Way */}
            <div
              className="neo-box-static"
              style={{
                backgroundColor: 'var(--bg-card)',
                padding: '32px 28px',
                borderTop: '8px solid var(--accent-green)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <CheckCircle2 size={22} color="var(--accent-green)" strokeWidth={2.5} />
                <h3 style={{ fontSize: '1.35rem', textTransform: 'uppercase' }}>The Pomniter Way</h3>
              </div>

              <p style={{ marginBottom: '20px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                Pomniter analyzes visual context, programming paradigms, dates, and domain concepts to build a rich semantic profile.
              </p>

              <div
                style={{
                  backgroundColor: 'var(--bg-main)',
                  padding: '16px',
                  border: '1.5px solid var(--border-color)',
                  marginBottom: '16px',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                  Pomniter understands:
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-main)' }}>
                  • <strong>Topic:</strong> Binary Search midpoint calculation<br />
                  • <strong>Purpose:</strong> Overflow prevention in Java/C++<br />
                  • <strong>Utility:</strong> DSA Interview Prep Note
                </div>
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.84rem',
                  color: 'var(--text-main)',
                }}
              >
                <li>✅ Search with queries like &quot;binary search overflow trick&quot;</li>
                <li>✅ Zero manual tagging or album maintenance required</li>
                <li>✅ Instant semantic ranking using dense vector embeddings</li>
                <li>✅ Proactive second brain that organizes thoughts for you</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4-STEP MEMORY PIPELINE */}
      <section
        className="section"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderTop: 'var(--border-thick) solid var(--border-color)',
          borderBottom: 'var(--border-thick) solid var(--border-color)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 52px auto' }}>
            <div className="neo-badge neo-badge-purple" style={{ margin: '0 auto 12px auto' }}>
              <span>SYSTEM ARCHITECTURE</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              How Pomniter Works //
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
              From the instant you hit snapshot to natural language recall in milliseconds.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Step 1 */}
            <div
              className="neo-box"
              style={{
                padding: '28px 22px',
                backgroundColor: 'var(--accent-yellow)',
                color: '#121212',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.8rem',
                  fontWeight: 900,
                  marginBottom: '8px',
                }}
              >
                01 //
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', textTransform: 'uppercase' }}>
                Capture & Ingest
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.55, color: '#222' }}>
                Screenshot saved via mobile shortcut, Android companion, or desktop tool. Auto-ingested with zero manual tagging.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="neo-box"
              style={{
                padding: '28px 22px',
                backgroundColor: 'var(--accent-lavender)',
                color: '#121212',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.8rem',
                  fontWeight: 900,
                  marginBottom: '8px',
                }}
              >
                02 //
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', textTransform: 'uppercase' }}>
                Multimodal Context
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.55, color: '#222' }}>
                Vision model examines visual hierarchy, diagrams, syntax, and layout to extract deep semantic purpose beyond text.
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="neo-box"
              style={{
                padding: '28px 22px',
                backgroundColor: 'var(--accent-peach)',
                color: '#121212',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.8rem',
                  fontWeight: 900,
                  marginBottom: '8px',
                }}
              >
                03 //
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', textTransform: 'uppercase' }}>
                Vector Indexing
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.55, color: '#222' }}>
                Converts contextual descriptions, code entities, and visual signals into high-dimensional vector embeddings.
              </p>
            </div>

            {/* Step 4 */}
            <div
              className="neo-box"
              style={{
                padding: '28px 22px',
                backgroundColor: 'var(--accent-green)',
                color: '#121212',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.8rem',
                  fontWeight: 900,
                  marginBottom: '8px',
                }}
              >
                04 //
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', textTransform: 'uppercase' }}>
                Natural Recall
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.55, color: '#222' }}>
                Type whatever vague snippet you recall. Pomniter computes similarity distance and surfaces the exact image instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES MATRIX */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 52px auto' }}>
            <div className="neo-badge neo-badge-yellow" style={{ margin: '0 auto 12px auto' }}>
              <span>KEY CAPABILITIES</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              Built for Thinkers, Builders & Students
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
              Everything needed to turn random phone clutter into an organized visual database.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Feature 1 */}
            <div
              className="neo-box"
              style={{
                padding: '28px',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  border: 'var(--border-width) solid var(--border-color)',
                  backgroundColor: 'var(--accent-green)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                }}
              >
                <Search size={24} color="#121212" strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', textTransform: 'uppercase' }}>
                Fuzzy Memory Search
              </h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Search like you talk to a friend: &quot;Find the graph note from 2 weeks ago with the BFS queue optimization.&quot;
              </p>
            </div>

            {/* Feature 2 */}
            <div
              className="neo-box"
              style={{
                padding: '28px',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  border: 'var(--border-width) solid var(--border-color)',
                  backgroundColor: 'var(--accent-pink)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                }}
              >
                <Code2 size={24} color="#121212" strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', textTransform: 'uppercase' }}>
                LeetCode & Code Recognition
              </h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Detects algorithms, programming languages, time complexity notes, and formula tricks directly from terminal or IDE snapshots.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              className="neo-box"
              style={{
                padding: '28px',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  border: 'var(--border-width) solid var(--border-color)',
                  backgroundColor: 'var(--accent-purple)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                }}
              >
                <Brain size={24} color="#121212" strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', textTransform: 'uppercase' }}>
                Contextual Synthesis
              </h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Understands the difference between temporary trash (OTPs, flight seats) and long-term knowledge (cheat sheets, formulas).
              </p>
            </div>

            {/* Feature 4 */}
            <div
              className="neo-box"
              style={{
                padding: '28px',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  border: 'var(--border-width) solid var(--border-color)',
                  backgroundColor: 'var(--accent-yellow)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                }}
              >
                <Layers size={24} color="#121212" strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', textTransform: 'uppercase' }}>
                Zero-Tagging Organization
              </h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Never waste time dragging screenshots into folders or manually typing tags. The embedding index organizes everything automatically.
              </p>
            </div>

            {/* Feature 5 */}
            <div
              className="neo-box"
              style={{
                padding: '28px',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  border: 'var(--border-width) solid var(--border-color)',
                  backgroundColor: 'var(--accent-blue)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                }}
              >
                <Lock size={24} color="#121212" strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', textTransform: 'uppercase' }}>
                Privacy-First Architecture
              </h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Your personal captures remain strictly yours. Local vector caching and on-device storage options ensure confidential notes stay secure.
              </p>
            </div>

            {/* Feature 6 */}
            <div
              className="neo-box"
              style={{
                padding: '28px',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  border: 'var(--border-width) solid var(--border-color)',
                  backgroundColor: 'var(--accent-peach)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                }}
              >
                <Zap size={24} color="#121212" strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', textTransform: 'uppercase' }}>
                Instant Action Extraction
              </h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Copy clean code directly, grab WiFi passwords, verify flight times, or generate flashcards in a single click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE SECTION */}
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
            <div className="neo-badge neo-badge-green" style={{ margin: '0 auto 12px auto' }}>
              <span>FEATURE BREAKDOWN</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              How Pomniter Compares //
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
              Why a dedicated screenshot intelligence engine beats general gallery apps.
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table
              className="neo-box-static"
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                backgroundColor: 'var(--bg-card)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.88rem',
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: '#121212',
                    color: '#ffffff',
                    borderBottom: 'var(--border-width) solid var(--border-color)',
                  }}
                >
                  <th style={{ padding: '16px 20px', fontWeight: 800 }}>CAPABILITY</th>
                  <th style={{ padding: '16px 20px', fontWeight: 800, color: 'var(--accent-green)' }}>
                    POMNITER AI
                  </th>
                  <th style={{ padding: '16px 20px', fontWeight: 800 }}>NATIVE GALLERY</th>
                  <th style={{ padding: '16px 20px', fontWeight: 800 }}>BASIC OCR NOTE APPS</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 700 }}>Fuzzy Memory Search</td>
                  <td style={{ padding: '16px 20px', color: 'var(--accent-green)', fontWeight: 800 }}>
                    ✅ Full Semantic
                  </td>
                  <td style={{ padding: '16px 20px', color: '#ef4444' }}>❌ Exact Keyword Only</td>
                  <td style={{ padding: '16px 20px', color: '#ef4444' }}>❌ Substring Match Only</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 700 }}>LeetCode / Code Understanding</td>
                  <td style={{ padding: '16px 20px', color: 'var(--accent-green)', fontWeight: 800 }}>
                    ✅ Specialized Model
                  </td>
                  <td style={{ padding: '16px 20px', color: '#ef4444' }}>❌ None</td>
                  <td style={{ padding: '16px 20px', color: '#eab308' }}>⚠️ Raw OCR Text Only</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 700 }}>Zero-Effort Organization</td>
                  <td style={{ padding: '16px 20px', color: 'var(--accent-green)', fontWeight: 800 }}>
                    ✅ Automatic Embedding
                  </td>
                  <td style={{ padding: '16px 20px', color: '#ef4444' }}>❌ Manual Folders</td>
                  <td style={{ padding: '16px 20px', color: '#ef4444' }}>❌ Manual Notebooks</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 700 }}>Temporary vs Long-Term Filter</td>
                  <td style={{ padding: '16px 20px', color: 'var(--accent-green)', fontWeight: 800 }}>
                    ✅ Intent Classification
                  </td>
                  <td style={{ padding: '16px 20px', color: '#ef4444' }}>❌ No Separation</td>
                  <td style={{ padding: '16px 20px', color: '#ef4444' }}>❌ No Separation</td>
                </tr>
                <tr>
                  <td style={{ padding: '16px 20px', fontWeight: 700 }}>AI Agent & GEO Ready</td>
                  <td style={{ padding: '16px 20px', color: 'var(--accent-green)', fontWeight: 800 }}>
                    ✅ llms.txt & Manifests
                  </td>
                  <td style={{ padding: '16px 20px', color: '#ef4444' }}>❌ Closed Ecosystem</td>
                  <td style={{ padding: '16px 20px', color: '#ef4444' }}>❌ Proprietary Lock-in</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px auto' }}>
            <div className="neo-badge neo-badge-blue" style={{ margin: '0 auto 12px auto' }}>
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              Got Questions? //
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
              Everything you need to know about Pomniter, its naming origin, and technical underpinnings.
            </p>
          </div>

          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <FAQAccordion faqs={HOME_FAQS} />
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section
        className="section"
        style={{
          backgroundColor: 'var(--accent-yellow)',
          borderTop: 'var(--border-thick) solid var(--border-color)',
          color: '#121212',
          padding: '80px 0',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="neo-badge neo-badge-pink" style={{ marginBottom: '16px' }}>
            JOIN THE MEMORY REVOLUTION
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.75rem)',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              marginBottom: '20px',
              color: '#121212',
            }}
          >
            Stop scrolling through thousands of screenshots.
          </h2>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#222222',
              lineHeight: 1.6,
              marginBottom: '32px',
              fontWeight: 500,
            }}
          >
            Turn random screenshots into a proactive, searchable knowledge bank. Download early access or read the engineering journey.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/download"
              className="neo-btn"
              style={{
                backgroundColor: '#121212',
                color: '#ffffff',
                fontSize: '1.05rem',
                padding: '16px 32px',
              }}
            >
              <Download size={20} strokeWidth={2.5} />
              <span>Get Early Access (Beta)</span>
            </Link>
            <a
              href="https://github.com/markstone111"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn"
              style={{
                backgroundColor: '#ffffff',
                color: '#121212',
                fontSize: '1.05rem',
                padding: '16px 28px',
              }}
            >
              <span>GitHub Repository</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
