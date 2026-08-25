import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '@/components/Icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the creator of Pomniter for support, feedback, or collaboration.',
};

export default function ContactPage() {
  return (
    <div className="section" style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: '40px' }}>
          <div className="neo-badge neo-badge-blue" style={{ marginBottom: '16px' }}>
            <span>COMMUNICATION CHANNEL</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', textTransform: 'uppercase', marginBottom: '16px' }}>
            Contact //
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Pomniter is an independent project actively developed by Nikunj Maheshwari. Whether you have found a bug, want to suggest a feature, or are interested in integrating Pomniter into your own workflow, I would love to hear from you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {/* Email Card */}
          <div className="neo-box-static" style={{ padding: '32px', backgroundColor: 'var(--bg-card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--accent-yellow)', border: '2px solid #121212', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={24} color="#121212" />
              </div>
              <h2 style={{ fontSize: '1.3rem', textTransform: 'uppercase' }}>Email</h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.5 }}>
              For support inquiries, beta access requests, or general questions about the Pomniter architecture.
            </p>
            <a href="mailto:nikunjnehu@gmail.com" className="neo-btn" style={{ width: '100%', justifyContent: 'center' }}>
              nikunjnehu@gmail.com
            </a>
          </div>

          {/* Social Links Card */}
          <div className="neo-box-static" style={{ padding: '32px', backgroundColor: 'var(--bg-card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--accent-purple)', border: '2px solid #121212', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Github size={24} color="#121212" />
              </div>
              <h2 style={{ fontSize: '1.3rem', textTransform: 'uppercase' }}>Connect</h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.5 }}>
              Follow development updates, report issues on GitHub, or connect with me professionally on LinkedIn.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="https://github.com/markstone111" target="_blank" rel="noopener noreferrer" className="neo-btn neo-btn-outline" style={{ justifyContent: 'space-between' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Github size={16} /> GitHub</span>
                <ExternalLink size={14} />
              </a>
              <a href="https://www.linkedin.com/in/nikunjmaheshwari" target="_blank" rel="noopener noreferrer" className="neo-btn neo-btn-outline" style={{ justifyContent: 'space-between' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Linkedin size={16} /> LinkedIn</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="neo-box-static" style={{ marginTop: '32px', padding: '24px', backgroundColor: 'var(--bg-main)', border: '1.5px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <MapPin size={18} color="var(--accent-green)" />
            <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase' }}>Location</h3>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
            Pomniter is designed and engineered in India. The infrastructure is global, utilizing edge computing for fast retrieval, but the core development happens locally.
          </p>
        </div>
      </div>
    </div>
  );
}
