import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Download, Smartphone, Laptop, Globe, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { getBreadcrumbSchema, SITE_URL } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Download Pomniter // Early Access Beta',
  description:
    'Get early access to Pomniter for Android and Web. Download APK releases or view open-source architecture on GitHub.',
  alternates: {
    canonical: `${SITE_URL}/download`,
  },
};

export default function DownloadPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Download', url: '/download' },
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
          backgroundColor: 'var(--accent-green)',
          padding: '64px 0 48px 0',
          color: '#121212',
        }}
      >
        <div className="container">
          <div className="neo-badge neo-badge-yellow" style={{ marginBottom: '14px' }}>
            <span>EARLY ACCESS // BETA PORTAL</span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            Get Pomniter //
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              maxWidth: '740px',
              lineHeight: 1.6,
              color: '#121212',
            }}
          >
            Start transforming your chaotic screenshot collection into a searchable, second brain.
          </p>
        </div>
      </section>

      {/* Download Cards Section */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              marginBottom: '48px',
            }}
          >
            {/* Option 1: Android Client */}
            <div
              className="neo-box-static"
              style={{
                padding: '36px 28px',
                backgroundColor: 'var(--bg-card)',
                display: 'flex',
                flexDirection: 'column',
                borderTop: '8px solid var(--accent-green)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'var(--accent-green)',
                    border: 'var(--border-width) solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Smartphone size={24} color="#121212" />
                </div>
                <span className="neo-badge neo-badge-yellow">ACTIVE BETA</span>
              </div>

              <h2 style={{ fontSize: '1.6rem', textTransform: 'uppercase', marginBottom: '10px' }}>
                Android Client
              </h2>

              <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                Direct background screenshot watcher. Ingests captures as you take them, analyzes them with on-device vectors, and gives you instant search via widget.
              </p>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  backgroundColor: 'var(--bg-main)',
                  padding: '12px',
                  border: '1px solid var(--border-color)',
                  marginBottom: '20px',
                }}
              >
                <div>• Version: 0.1.4-beta</div>
                <div>• Requires: Android 11.0+</div>
                <div>• Distribution: GitHub Releases</div>
              </div>

              <a
                href="https://github.com/markstone111"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn"
                style={{ width: '100%', justifyContent: 'space-between' }}
              >
                <span>Download APK via GitHub</span>
                <Download size={16} strokeWidth={2.5} />
              </a>
            </div>

            {/* Option 2: Web Application Simulation */}
            <div
              className="neo-box-static"
              style={{
                padding: '36px 28px',
                backgroundColor: 'var(--bg-card)',
                display: 'flex',
                flexDirection: 'column',
                borderTop: '8px solid var(--accent-purple)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'var(--accent-purple)',
                    border: 'var(--border-width) solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Globe size={24} color="#121212" />
                </div>
                <span className="neo-badge neo-badge-green">INSTANT ACCESS</span>
              </div>

              <h2 style={{ fontSize: '1.6rem', textTransform: 'uppercase', marginBottom: '10px' }}>
                Interactive Web Demo
              </h2>

              <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                Test the semantic memory engine directly inside your browser. Try example LeetCode code snippets, flight passes, and study notes.
              </p>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  backgroundColor: 'var(--bg-main)',
                  padding: '12px',
                  border: '1px solid var(--border-color)',
                  marginBottom: '20px',
                }}
              >
                <div>• Platform: Any Modern Browser</div>
                <div>• Zero Installation Required</div>
                <div>• Live Reasoning Breakdown</div>
              </div>

              <Link
                href="/#console"
                className="neo-btn neo-btn-yellow"
                style={{ width: '100%', justifyContent: 'space-between' }}
              >
                <span>Launch Web Engine</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>

            {/* Option 3: Desktop CLI / Companion */}
            <div
              className="neo-box-static"
              style={{
                padding: '36px 28px',
                backgroundColor: 'var(--bg-card)',
                display: 'flex',
                flexDirection: 'column',
                borderTop: '8px solid var(--accent-blue)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'var(--accent-blue)',
                    border: 'var(--border-width) solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Laptop size={24} color="#121212" />
                </div>
                <span className="neo-badge neo-badge-pink">COMING SOON</span>
              </div>

              <h2 style={{ fontSize: '1.6rem', textTransform: 'uppercase', marginBottom: '10px' }}>
                Desktop CLI Watcher
              </h2>

              <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                Lightweight daemon that monitors your macOS / Windows / Linux screenshot folder and indexes images into local sqlite vector tables.
              </p>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  backgroundColor: 'var(--bg-main)',
                  padding: '12px',
                  border: '1px solid var(--border-color)',
                  marginBottom: '20px',
                }}
              >
                <div>• Platforms: macOS, Linux, Windows</div>
                <div>• CLI Tool & Raycast Extension</div>
                <div>• Open Source Python / Rust</div>
              </div>

              <a
                href="https://github.com/markstone111"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn neo-btn-outline"
                style={{ width: '100%', justifyContent: 'space-between' }}
              >
                <span>Star on GitHub</span>
                <GithubIcon size={16} />
              </a>
            </div>
          </div>

          {/* Privacy Guarantee Box */}
          <div
            className="neo-box-static"
            style={{
              padding: '24px 28px',
              backgroundColor: 'var(--bg-surface)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <ShieldCheck size={32} color="var(--accent-green)" />
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', marginBottom: '4px' }}>
                Open-Source & Privacy Guarantee
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Pomniter is built by Nikunj Maheshwari with a local-first philosophy. Code and APK builds are published transparently on GitHub under permissive licensing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
