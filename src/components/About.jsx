import React from 'react';

export default function About() {
  const values = [
    {
      title: 'Pengerjaan Cepat & Tepat Waktu',
      desc: 'Deadline ketat bukan masalah. Kami berkomitmen penuh menyelesaikan setiap proyek sesuai timeline yang disepakati.',
    },
    {
      title: 'Terpercaya & Bergaransi',
      desc: 'Ratusan klien puas membuktikan kualitas dan integritas kami. Setiap pengerjaan dilengkapi garansi revisi sampai tuntas.',
    },
    {
      title: 'Solusi Teknologi Tepat Sasaran',
      desc: 'Kami tidak sekadar menulis kode—kami mendengarkan kebutuhanmu dan merancang arsitektur sistem yang scalable dan efisien.',
    },
  ];

  return (
    <section className="rt-about-v1" id="about" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
      <div className="w-layout-blockcontainer rt-container-main w-container">
        <div className="rt-about-v1-wrapper" style={{ alignItems: 'center', gap: '3.5rem' }}>
          {/* Left Visual Graphics */}
          <div
            className="rt-about-v1-left"
            data-aos="fade-right"
            data-aos-duration="800"
            style={{
              padding: '2.5rem',
              borderRadius: '24px',
              backgroundColor: '#1a0b54',
              boxShadow: '0 20px 40px rgba(26, 11, 84, 0.12)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
              <img
                src="/images/68ef7bedcf795a787addad8c_Group_202085663562.webp"
                loading="lazy"
                alt=""
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
              <img
                src="/images/68ef7bed775c847e27d93569_Group_202085663563.webp"
                loading="lazy"
                alt=""
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="rt-about-v1-right" style={{ flex: 1 }} data-aos="fade-left" data-aos-duration="800">
            <div className="rt-sub-gap" style={{ marginBottom: '0.8rem' }}>
              <div className="rt-sub-text rt-sub-gredient">Tentang WeabooCoding</div>
            </div>

            <div className="rt-heading-para-gap" style={{ marginBottom: '1rem' }}>
              <h2 className="rt-gap-off" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', lineHeight: 1.25 }}>
                Coding Partner Terpercaya <span className="rt-color-periwinkle-gray">untuk Solusi Digitalmu</span>
              </h2>
            </div>

            <p className="rt-gap-off" style={{ color: '#554d74', fontSize: '0.98rem', lineHeight: 1.7 }}>
              WeabooCoding adalah tim developer berpengalaman yang berfokus pada jasa pembuatan website, aplikasi Android &amp; Web, penyelesaian tugas kuliah/skripsi IT, dan konsultasi error coding. Kami siap membantu mahasiswa, startup, dan UMKM dengan hasil presisi dan harga bersahabat.
            </p>

            {/* Experience & Stack Badges */}
            <div style={{ display: 'flex', gap: '1.25rem', marginTop: '1.5rem', marginBottom: '1.8rem', flexWrap: 'wrap' }}>
              <div
                style={{
                  background: '#f5f3ff',
                  padding: '1rem 1.4rem',
                  borderRadius: '14px',
                  borderLeft: '4px solid #2b4bee',
                  flex: 1,
                  minWidth: '150px',
                }}
              >
                <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: '#1a0b54', lineHeight: 1.1 }}>3+ Tahun</div>
                <div style={{ fontSize: '0.85rem', color: '#554d74', marginTop: '4px', fontWeight: 500 }}>Pengalaman Industri</div>
              </div>
              <div
                style={{
                  background: '#f5f3ff',
                  padding: '1rem 1.4rem',
                  borderRadius: '14px',
                  borderLeft: '4px solid #2b4bee',
                  flex: 1,
                  minWidth: '150px',
                }}
              >
                <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: '#1a0b54', lineHeight: 1.1 }}>50+ Stack</div>
                <div style={{ fontSize: '0.85rem', color: '#554d74', marginTop: '4px', fontWeight: 500 }}>Teknologi &amp; Framework</div>
              </div>
            </div>

            {/* Values / Checklist Items */}
            <div className="rt-about-v1-right-inner">
              {values.map((v, i) => (
                <React.Fragment key={i}>
                  <div
                    className="rt-about-v1-right-item"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.9rem',
                      padding: '1rem 0',
                    }}
                  >
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: '#edf2fe',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2b4bee" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p className="rt-gap-off" style={{ fontSize: '0.92rem', lineHeight: 1.6, color: '#554d74' }}>
                        <strong style={{ color: '#1a0b54', fontWeight: 700 }}>{v.title}:</strong> {v.desc}
                      </p>
                    </div>
                  </div>
                  {i < values.length - 1 && <div style={{ height: '1px', backgroundColor: 'rgba(26, 11, 84, 0.08)' }}></div>}
                </React.Fragment>
              ))}
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a href="#contact" className="rt-button-body w-inline-block" style={{ textDecoration: 'none', display: 'inline-block' }}>
                <div className="rt-button-text">Hubungi Tim Kami</div>
                <div className="rt-button-body-overlay"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
