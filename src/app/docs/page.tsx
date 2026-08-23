import type { Metadata } from 'next';
import Link from 'next/link';
import { Terminal, Code2, Database, Cpu, Shield, FileText, Bot, Sparkles } from 'lucide-react';
import { getBreadcrumbSchema, SITE_URL } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Architecture Docs & Technical Specification',
  description:
    'Complete technical whitepaper and architecture specification for the Pomniter multimodal screenshot retrieval engine.',
  alternates: {
    canonical: `${SITE_URL}/docs`,
  },
};

export default function DocsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Docs', url: '/docs' },
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
          backgroundColor: 'var(--bg-surface)',
          padding: '64px 0 48px 0',
        }}
      >
        <div className="container">
          <div className="neo-badge neo-badge-green" style={{ marginBottom: '14px' }}>
            <span>TECHNICAL SPECIFICATION V1.0</span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            ARCHITECTURE & SPECS //
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              maxWidth: '740px',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
            }}
          >
            System architecture, vector indexing schemas, and machine-readable agent protocol surfaces.
          </p>
        </div>
      </section>

      {/* Docs Content */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
            }}
          >
            {/* Left Column: Technical Architecture */}
            <div>
              {/* Section 1: Ingestion & Vision */}
              <div className="neo-box-static" style={{ padding: '32px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <Terminal size={20} color="var(--accent-green)" />
                  <h2 style={{ fontSize: '1.4rem', textTransform: 'uppercase' }}>
                    1. Multimodal Vision Pipeline
                  </h2>
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '16px' }}>
                  When an image is ingested, Pomniter runs a two-stage parsing pass:
                </p>
                <ul
                  style={{
                    paddingLeft: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.86rem',
                    color: 'var(--text-main)',
                  }}
                >
                  <li>
                    <strong>Layer A (OCR Extract):</strong> High-precision text localization for exact tokens (code keywords, flight numbers, dates).
                  </li>
                  <li>
                    <strong>Layer B (Multimodal Reasoning):</strong> Vision model analyzes layout, syntax indentation, diagram flow, and conceptual domain to generate a rich natural language summary.
                  </li>
                </ul>
              </div>

              {/* Section 2: Vector Embeddings */}
              <div className="neo-box-static" style={{ padding: '32px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <Database size={20} color="var(--accent-purple)" />
                  <h2 style={{ fontSize: '1.4rem', textTransform: 'uppercase' }}>
                    2. Hybrid Vector Indexing
                  </h2>
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '16px' }}>
                  Pomniter utilizes a hybrid retrieval mechanism:
                </p>
                <div
                  style={{
                    backgroundColor: 'var(--bg-main)',
                    padding: '16px',
                    border: '1.5px solid var(--border-color)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    lineHeight: 1.6,
                  }}
                >
                  <code>
                    Score = (α · CosineSimilarity(q_vec, d_vec)) + ((1 - α) · BM25(q_tokens, d_text))
                  </code>
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-muted)', marginTop: '12px' }}>
                  This guarantees that fuzzy concept queries match via vector semantics while exact keywords (like ticket numbers or variable names) are preserved via BM25 lexical search.
                </p>
              </div>

              {/* Section 3: Schema Structure */}
              <div className="neo-box-static" style={{ padding: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <Code2 size={20} color="var(--accent-yellow)" />
                  <h2 style={{ fontSize: '1.4rem', textTransform: 'uppercase' }}>
                    3. Metadata JSON Schema
                  </h2>
                </div>
                <pre
                  style={{
                    backgroundColor: '#121212',
                    color: '#00e575',
                    padding: '16px',
                    border: 'var(--border-width) solid var(--border-color)',
                    fontSize: '0.8rem',
                    overflowX: 'auto',
                    lineHeight: 1.5,
                  }}
                >
{`{
  "id": "mem_8941fba0",
  "created_at": 1756080000,
  "category": "programming",
  "topic": "binary_search",
  "summary": "Midpoint overflow bug fix",
  "entities": ["mid", "left", "right"],
  "tags": ["#LeetCode", "#DSA"],
  "volatility": "persistent",
  "vector_dim": 1536
}`}
                </pre>
              </div>
            </div>

            {/* Right Column: GEO & Machine Readability Surfaces */}
            <div>
              <div
                className="neo-box-static"
                style={{
                  padding: '32px',
                  backgroundColor: 'var(--accent-lavender)',
                  color: '#121212',
                  marginBottom: '32px',
                }}
              >
                <div className="neo-badge neo-badge-purple" style={{ marginBottom: '14px' }}>
                  <span>IS-AGENTIC.COM COMPLIANCE</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Agent Discovery Surfaces
                </h3>
                <p style={{ fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  Pomniter exposes standardized machine-readable endpoints so that AI agents and search engines can discover, query, and cite content with zero friction.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a
                    href="/llms.txt"
                    target="_blank"
                    className="neo-btn"
                    style={{ backgroundColor: '#ffffff', color: '#121212', justifyContent: 'space-between' }}
                  >
                    <span>Inspect /llms.txt</span>
                    <FileText size={16} />
                  </a>
                  <a
                    href="/llms-full.txt"
                    target="_blank"
                    className="neo-btn"
                    style={{ backgroundColor: '#ffffff', color: '#121212', justifyContent: 'space-between' }}
                  >
                    <span>Inspect /llms-full.txt</span>
                    <Bot size={16} />
                  </a>
                  <a
                    href="/.well-known/agent.json"
                    target="_blank"
                    className="neo-btn"
                    style={{ backgroundColor: '#ffffff', color: '#121212', justifyContent: 'space-between' }}
                  >
                    <span>Inspect /.well-known/agent.json</span>
                    <Sparkles size={16} />
                  </a>
                </div>
              </div>

              {/* Security Card */}
              <div
                className="neo-box-static"
                style={{
                  padding: '28px',
                  backgroundColor: 'var(--bg-card)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <Shield size={20} color="var(--accent-green)" />
                  <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase' }}>
                    Local-First Privacy
                  </h3>
                </div>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                  All vector embeddings can be generated and queried locally on device (Android/Desktop) with AES-256 encrypted database vaults. No personal screenshots are ever used for public model training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
