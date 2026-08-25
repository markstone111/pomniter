import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy and data handling practices for Pomniter.',
};

export default function PrivacyPage() {
  return (
    <div className="section" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="neo-badge neo-badge-purple" style={{ marginBottom: '16px' }}>
          <span>SECURITY & DATA</span>
        </div>
        
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', textTransform: 'uppercase', marginBottom: '32px' }}>
          Privacy Policy
        </h1>
        
        <div className="neo-box-static" style={{ padding: '32px', backgroundColor: 'var(--bg-card)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '24px' }}>
            LAST UPDATED: August 26, 2026
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <section>
              <h2 style={{ fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '12px', color: 'var(--text-main)' }}>
                1. Local-First Philosophy
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Pomniter is built from the ground up with privacy as its core architectural principle. We understand that screenshots often contain highly sensitive personal information—passwords, private messages, financial records, and proprietary code. For this reason, Pomniter operates primarily on a local-first basis. The vector indexing, image embeddings, and OCR parsing can be configured to run entirely on your local device. 
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '12px', color: 'var(--text-main)' }}>
                2. Data Collection and Usage
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                The core application does not automatically upload your screenshot gallery to any cloud server for model training. We do not sell, rent, or trade your personal information. If you choose to use the cloud-sync features (for cross-device synchronization), your data is encrypted in transit and at rest using AES-256 encryption. You retain full ownership of your data and can delete your vector index at any time.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '12px', color: 'var(--text-main)' }}>
                3. Third-Party API Providers
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Certain advanced reasoning features may optionally utilize third-party vision-language models (e.g., OpenAI or Anthropic). If you enable these cloud models, Pomniter acts strictly as a pass-through client. Data sent to these APIs is bound by their respective zero-retention policies for API users, meaning they are not permitted to use your image payloads to train their foundation models. You can also bypass these completely by using local open-source models (like LLaVA).
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '12px', color: 'var(--text-main)' }}>
                4. Analytics and Telemetry
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                We use anonymous, aggregated telemetry (such as Google Analytics on the website) to understand how the application is used and to identify bugs. This telemetry does not contain the contents of your screenshots, the queries you make, or the embeddings generated. It strictly records crash logs, feature utilization rates, and performance metrics.
              </p>
            </section>
            
            <section>
              <h2 style={{ fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '12px', color: 'var(--text-main)' }}>
                5. Contact Us
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                If you have any questions or concerns about this Privacy Policy, or if you would like to exercise your data rights, please contact us at <a href="mailto:nikunjnehu@gmail.com" style={{ textDecoration: 'underline', color: 'var(--text-main)', fontWeight: 'bold' }}>nikunjnehu@gmail.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
