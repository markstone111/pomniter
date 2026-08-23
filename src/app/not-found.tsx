import Link from 'next/link';
import { Terminal, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      className="section"
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div className="container" style={{ maxWidth: '600px' }}>
        <div
          className="neo-box"
          style={{
            padding: '48px 32px',
            backgroundColor: 'var(--bg-card)',
          }}
        >
          <div className="neo-badge neo-badge-pink" style={{ margin: '0 auto 16px auto' }}>
            <span>ERROR 404 // VECTOR MISS</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(3rem, 7vw, 5rem)',
              lineHeight: 1,
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            404
          </h1>

          <h2
            style={{
              fontSize: '1.4rem',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            Memory Not Found //
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              marginBottom: '28px',
            }}
          >
            The screenshot or page you requested could not be retrieved from the memory index. It may have been relocated or purged.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="neo-btn" style={{ padding: '12px 24px' }}>
              <Home size={16} strokeWidth={2.5} />
              <span>Return Home</span>
            </Link>
            <Link href="/blog" className="neo-btn neo-btn-outline" style={{ padding: '12px 24px' }}>
              <Terminal size={16} />
              <span>Read The Lab</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
