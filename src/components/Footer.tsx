import Link from 'next/link';
import Image from 'next/image';
import { Mail, ExternalLink, Sparkles, Bot, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 'auto',
        borderTop: 'var(--border-thick) solid var(--border-color)',
        backgroundColor: 'var(--bg-surface)',
        paddingTop: '64px',
        paddingBottom: '40px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Column 1: Brand & Origin */}
          <div style={{ maxWidth: '340px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  border: 'var(--border-width) solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Pomniter Logo"
                  width={30}
                  height={30}
                />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '1.4rem',
                  letterSpacing: '-0.02em',
                }}
              >
                POMNITER
              </span>
            </div>
            <p
              style={{
                fontSize: '0.92rem',
                lineHeight: 1.6,
                marginBottom: '16px',
                color: 'var(--text-muted)',
              }}
            >
              AI-powered visual memory engine that lets you search screenshots using natural human memory queries instead of exact keywords.
            </p>
            <div className="neo-badge neo-badge-purple">
              <span>ROOT: ПОМНИТЬ // TO REMEMBER</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.92rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '16px',
                color: 'var(--text-main)',
              }}
            >
              Navigation //
            </h2>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.88rem',
                fontWeight: 600,
              }}
            >
              <li>
                <Link href="/" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>
                  → Home
                </Link>
              </li>
              <li>
                <Link href="/features" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>
                  → Features Matrix
                </Link>
              </li>
              <li>
                <Link href="/about" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>
                  → About & Story
                </Link>
              </li>
              <li>
                <Link href="/blog" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>
                  → Research Blog
                </Link>
              </li>
              <li>
                <Link href="/docs" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>
                  → Technical Specs
                </Link>
              </li>
              <li>
                <Link href="/download" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>
                  → Download Beta
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: AI & Machine Surfaces (GEO Essential) */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.92rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '16px',
                color: 'var(--text-main)',
              }}
            >
              Agent Surfaces // GEO
            </h2>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
              }}
            >
              <li>
                <a
                  href="/llms.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--text-muted)',
                  }}
                >
                  <FileText size={14} />
                  <span>/llms.txt (AI Index)</span>
                </a>
              </li>
              <li>
                <a
                  href="/llms-full.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--text-muted)',
                  }}
                >
                  <Bot size={14} />
                  <span>/llms-full.txt (Context Digest)</span>
                </a>
              </li>
              <li>
                <a
                  href="/.well-known/agent.json"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--text-muted)',
                  }}
                >
                  <Sparkles size={14} />
                  <span>/.well-known/agent.json</span>
                </a>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--text-muted)',
                  }}
                >
                  <span>/sitemap.xml</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Creator & Connect */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.92rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '16px',
                color: 'var(--text-main)',
              }}
            >
              Creator //
            </h2>
            <p
              style={{
                fontSize: '0.88rem',
                lineHeight: 1.6,
                marginBottom: '14px',
                color: 'var(--text-muted)',
              }}
            >
              Built by <strong>Nikunj Maheshwari</strong> — Software Engineer, Mobile & AI Specialist.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a
                href="https://www.nikunjmaheshwari.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nikunj's Portfolio"
                className="neo-box-static"
                style={{
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  background: 'var(--accent-green)',
                  color: '#121212',
                }}
              >
                <span>Portfolio</span>
                <ExternalLink size={13} />
              </a>
              <a
                href="https://github.com/markstone111"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="neo-box-static"
                style={{
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--bg-card)',
                  color: 'var(--text-main)',
                }}
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/nikunjmaheshwari"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="neo-box-static"
                style={{
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--bg-card)',
                  color: 'var(--text-main)',
                }}
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="mailto:nikunjnehu@gmail.com"
                aria-label="Send Email"
                className="neo-box-static"
                style={{
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--bg-card)',
                  color: 'var(--text-main)',
                }}
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '2px solid var(--border-color)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--text-dim)',
          }}
        >
          <div>
            © {new Date().getFullYear()} POMNITER by Nikunj Maheshwari. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>Subdomain of nikunjmaheshwari.in</span>
            <span>•</span>
            <span style={{ color: 'var(--accent-green)' }}>● GEO Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
