import Link from 'next/link';
import { Terminal, Database, Shield, Zap, FileJson, Key, Bot } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pomniter Developer Portal',
  description: 'Access the Pomniter API, OpenAPI specification, and webhooks for building semantic visual memory into your own applications.',
};

export default function DevelopersPage() {
  return (
    <div className="section" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="neo-badge neo-badge-purple" style={{ margin: '0 auto 16px auto' }}>
            <span>POMNITER DEVELOPER PORTAL</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', textTransform: 'uppercase', marginBottom: '20px' }}>
            Build With Memory
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            Integrate Pomniter&apos;s multimodal vector search into your own applications. Access our REST API, explore the OpenAPI specification, and manage authentication.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {/* Card 1 */}
          <div className="neo-box-static" style={{ padding: '32px', backgroundColor: 'var(--bg-card)' }}>
            <FileJson size={32} color="var(--accent-yellow)" style={{ marginBottom: '20px' }} />
            <h2 style={{ fontSize: '1.4rem', textTransform: 'uppercase', marginBottom: '12px' }}>OpenAPI Spec</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.5 }}>
              Download our self-describing OpenAPI 3.0 specification. Agents can use this to understand the API surface programmatically.
            </p>
            <a href="/openapi.json" target="_blank" className="neo-btn neo-btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
              View openapi.json
            </a>
          </div>

          {/* Card 2 */}
          <div className="neo-box-static" style={{ padding: '32px', backgroundColor: 'var(--bg-card)' }}>
            <Key size={32} color="var(--accent-pink)" style={{ marginBottom: '20px' }} />
            <h2 style={{ fontSize: '1.4rem', textTransform: 'uppercase', marginBottom: '12px' }}>Authentication</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.5 }}>
              Generate API keys to authenticate your requests. Pomniter uses Bearer token authentication for all endpoint access.
            </p>
            <button className="neo-btn neo-btn-outline" style={{ width: '100%', justifyContent: 'center' }} disabled>
              Generate Key (Coming Soon)
            </button>
          </div>

          {/* Card 3 */}
          <div className="neo-box-static" style={{ padding: '32px', backgroundColor: 'var(--bg-card)' }}>
            <Zap size={32} color="var(--accent-green)" style={{ marginBottom: '20px' }} />
            <h2 style={{ fontSize: '1.4rem', textTransform: 'uppercase', marginBottom: '12px' }}>API Health</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.5 }}>
              Check the status of the Pomniter inference engine and vector database using our standard health check endpoint.
            </p>
            <a href="/api/health" className="neo-btn neo-btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
              Check Status
            </a>
          </div>
        </div>

        {/* Integration Instructions */}
        <div className="neo-box-static" style={{ padding: '40px', backgroundColor: 'var(--bg-surface)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Terminal size={24} color="var(--accent-blue)" />
            <h2 style={{ fontSize: '1.6rem', textTransform: 'uppercase' }}>Quickstart: Vector Search</h2>
          </div>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
            Here is a sample cURL request to query your indexed memory for screenshots related to a specific topic.
          </p>
          <pre style={{ backgroundColor: '#121212', color: '#00e575', padding: '20px', fontSize: '0.9rem', overflowX: 'auto', border: 'var(--border-width) solid var(--border-color)', marginBottom: '24px' }}>
{`curl -X POST https://pomniter.nikunjmaheshwari.in/api/search \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "binary search mid point bug",
    "limit": 5
  }'`}
          </pre>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link href="/docs" className="neo-btn">
              Read Architecture Docs
            </Link>
            <a href="/llms.txt" className="neo-btn neo-btn-outline">
              <Bot size={18} />
              Agent Instructions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
