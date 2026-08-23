'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { Menu, X, Terminal, Sparkles, Download } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Docs', href: '/docs' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'var(--bg-main)',
        borderBottom: 'var(--border-width) solid var(--border-color)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '14px',
          paddingBottom: '14px',
        }}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              border: 'var(--border-width) solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)',
              backgroundColor: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Image
              src="/logo.png"
              alt="Pomniter Logo"
              width={38}
              height={38}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '1.35rem',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span>POMNITER</span>
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  backgroundColor: 'var(--accent-blue)',
                  borderRadius: '50%',
                  display: 'inline-block',
                }}
              />
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--text-dim)',
                letterSpacing: '0.04em',
                fontWeight: 600,
              }}
            >
              // ПОМНИТЬ • TO REMEMBER
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '8px',
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  padding: '8px 14px',
                  border: isActive
                    ? 'var(--border-width) solid var(--border-color)'
                    : '2px solid transparent',
                  backgroundColor: isActive ? 'var(--accent-yellow)' : 'transparent',
                  boxShadow: isActive ? '2px 2px 0px var(--shadow-color)' : 'none',
                  transition: 'all 0.15s ease',
                  color: isActive ? '#121212' : 'var(--text-main)',
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Actions (CTA + Theme Toggle) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link
            href="/download"
            className="neo-btn"
            style={{
              padding: '8px 16px',
              fontSize: '0.82rem',
              display: 'none',
            }}
            id="nav-download-btn"
          >
            <Download size={15} strokeWidth={2.5} />
            <span>Early Access</span>
          </Link>

          <ThemeToggle />

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Mobile Menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              border: 'var(--border-width) solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)',
              background: 'var(--bg-card)',
              color: 'var(--text-main)',
              cursor: 'pointer',
            }}
            className="mobile-toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            borderTop: 'var(--border-width) solid var(--border-color)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  padding: '10px 14px',
                  border: 'var(--border-width) solid var(--border-color)',
                  backgroundColor: isActive ? 'var(--accent-yellow)' : 'var(--bg-surface)',
                  boxShadow: 'var(--shadow-sm)',
                  color: isActive ? '#121212' : 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{link.name}</span>
                {isActive && <span style={{ fontSize: '0.8rem' }}>●</span>}
              </Link>
            );
          })}
          <Link
            href="/download"
            onClick={() => setMobileOpen(false)}
            className="neo-btn"
            style={{ marginTop: '8px', width: '100%', textAlign: 'center' }}
          >
            <Download size={16} strokeWidth={2.5} />
            <span>Download / Get Beta</span>
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 820px) {
          .desktop-nav {
            display: flex !important;
          }
          #nav-download-btn {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
