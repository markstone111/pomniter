'use client';

import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="neo-box-static"
            style={{
              backgroundColor: isOpen ? 'var(--bg-surface)' : 'var(--bg-card)',
              transition: 'all 0.15s ease',
              overflow: 'hidden',
            }}
          >
            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                padding: '18px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    color: 'var(--text-dim)',
                  }}
                >
                  {String(index + 1).padStart(2, '0')} //
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                  }}
                >
                  {faq.question}
                </span>
              </div>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  border: 'var(--border-width) solid var(--border-color)',
                  backgroundColor: isOpen ? 'var(--accent-yellow)' : 'var(--bg-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '1px 1px 0px var(--shadow-color)',
                  flexShrink: 0,
                  color: isOpen ? '#121212' : 'var(--text-main)',
                }}
              >
                {isOpen ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
              </div>
            </button>

            {isOpen && (
              <div
                style={{
                  padding: '0 20px 20px 20px',
                  borderTop: '1px dashed var(--border-color)',
                  paddingTop: '16px',
                }}
              >
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: 'var(--text-muted)',
                  }}
                >
                  {faq.answer}
                </p>
                {faq.category && (
                  <div style={{ marginTop: '12px' }}>
                    <span className="neo-badge neo-badge-purple" style={{ fontSize: '0.7rem' }}>
                      {faq.category}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
