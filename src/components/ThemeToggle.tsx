'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('pomniter-theme') as 'light' | 'dark' | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('pomniter-theme', nextTheme);
  };

  if (!mounted) {
    return (
      <button
        aria-label="Toggle Dark Mode"
        className="theme-toggle-btn"
        style={{
          width: '42px',
          height: '42px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--bg-card)',
          border: 'var(--border-width) solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)',
          cursor: 'pointer',
        }}
      >
        <span style={{ width: '18px', height: '18px' }} />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      style={{
        width: '42px',
        height: '42px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme === 'light' ? '#ffffff' : '#1e1e24',
        border: 'var(--border-width) solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)',
        color: 'var(--text-main)',
        cursor: 'pointer',
        transition: 'transform 0.1s ease, box-shadow 0.1s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translate(-2px, -2px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate(0, 0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      {theme === 'light' ? (
        <Moon size={19} strokeWidth={2.5} />
      ) : (
        <Sun size={19} strokeWidth={2.5} color="#ffe600" />
      )}
    </button>
  );
}
