import React from 'react';

export default function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="about-grid">
          <div className="about-visual reveal reveal-left">
            <div className="about-big-text">We Build<br />Your Vision</div>
            <p className="about-big-sub">Dari ide sederhana hingga sistem kompleks, kami siap mengeksekusi dengan presisi dan dedikasi penuh.</p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ color: 'white' }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '2rem', fontWeight: '800' }}>3+</div>
                <div style={{ fontSize: '.82rem', opacity: '.7' }}>Tahun Pengalaman</div>
              </div>
              <div style={{ color: 'white' }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '2rem', fontWeight: '800' }}>50+</div>
                <div style={{ fontSize: '.82rem', opacity: '.7' }}>Teknologi Dikuasai</div>
              </div>
            </div>
          </div>

          <div className="reveal reveal-right">
            <div className="section-tag">Tentang Kami</div>
            <h2 className="section-title">Coding Partner yang Kamu Butuhkan</h2>
            <p style={{ color: 'var(--gray-600)', lineHeight: '1.8', marginBottom: '2rem' }}>
              WeabooCoding adalah tim developer berpengalaman yang berfokus pada jasa coding, tutorial, dan solve code. Kami hadir untuk membantu mahasiswa, startup, dan UMKM mewujudkan proyek digitalnya.
            </p>

            <div className="about-values">
              <div className="value-item" style={{ marginBottom: '20px' }}>
                <div className="value-info" style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '20px' }}>
                  <h4 style={{ color: 'var(--bg-dark)', marginBottom: '5px' }}>Pengerjaan Cepat</h4>
                  <p style={{ color: 'var(--text-light)', margin: 0 }}>Deadline ketat bukan masalah. Kami komit dengan timeline yang disepakati.</p>
                </div>
              </div>
              <div className="value-item" style={{ marginBottom: '20px' }}>
                <div className="value-info" style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '20px' }}>
                  <h4 style={{ color: 'var(--bg-dark)', marginBottom: '5px' }}>Terpercaya & Profesional</h4>
                  <p style={{ color: 'var(--text-light)', margin: 0 }}>Ratusan klien puas membuktikan kualitas dan integritas kami.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-info" style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '20px' }}>
                  <h4 style={{ color: 'var(--bg-dark)', marginBottom: '5px' }}>Solusi Terbaik</h4>
                  <p style={{ color: 'var(--text-light)', margin: 0 }}>Kami tidak hanya coding—kami memberikan solusi yang tepat untuk kebutuhanmu.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
