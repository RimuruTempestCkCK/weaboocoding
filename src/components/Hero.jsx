import React from 'react';

export default function Hero() {
  return (
    <>
      <div className="rt-hero-v1-wrapper" id="home" style={{ display: 'block', paddingBottom: '0' }}>
        <section className="rt-hero-v1" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
          <div className="w-layout-blockcontainer rt-container-main w-container">
            <div className="rt-hero-v1-top rt-position-relative" style={{ maxWidth: '850px', paddingBottom: '3rem' }}>
              {/* Badge & Avatars */}
              <div className="rt-hero-v1-top-sub" style={{ justifyContent: 'center' }} data-aos="fade-down" data-aos-duration="600">
                <div className="rt-overflow-hidden">
                  <div className="w-layout-hflex rt-hero-v2-client-img-wrap">
                    <div className="rt-hero-v2-client-image rt-overflow-hidden rt-sub-image">
                      <img width="62" height="47" alt="Client" src="/images/690499e17ce0c344a20ecda1_kloudera-home-two-hero-image.webp" loading="lazy" />
                    </div>
                    <div className="rt-hero-v2-client-image rt-overflow-hidden rt-margin-left rt-sub-image">
                      <img width="59.5" height="79" alt="Client" src="/images/690499e17ce0c344a20ecda2_kloudera-home-two-hero-image.webp" loading="lazy" />
                    </div>
                    <div className="rt-hero-v2-client-image rt-overflow-hidden rt-margin-left rt-sub-image">
                      <img width="59.5" height="79" alt="Client" src="/images/690499e17ce0c344a20ecda3_kloudera-home-two-hero-image.webp" loading="lazy" />
                    </div>
                  </div>
                </div>
                <div className="rt-overflow-hidden">
                  <div className="rt-sub-text rt-sub-gredient">#1 Jasa Coding &amp; Pembuatan Website Terpercaya</div>
                </div>
              </div>

              {/* Main Heading */}
              <div className="rt-hero-heading-gap" style={{ paddingBottom: '1rem' }} data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
                <div className="rt-overflow-hidden">
                  <h1 className="rt-gap-off" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)', lineHeight: 1.2 }}>
                    WeabooCoding – Jasa Coding &amp; <span className="rt-color-periwinkle-gray">Pembuatan Website Profesional</span>
                  </h1>
                </div>
              </div>

              {/* Subheading */}
              <div className="rt-overflow-hidden" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
                <p className="rt-hero-v1-top-padding rt-gap-off" style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
                  Solusi digital handal untuk mahasiswa, UMKM, dan perusahaan. Pengerjaan cepat, harga transparan, bergaransi revisi, dan didukung developer berpengalaman.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="rt-button-para-gap rt-overflow-hidden" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: '1.5rem', paddingTop: '0.5rem' }} data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
                <a href="#contact" className="rt-button-body w-inline-block" style={{ textDecoration: 'none' }}>
                  <div className="rt-button-text">Mulai Sekarang</div>
                  <div className="rt-button-body-overlay"></div>
                </a>
                <a
                  href="#services"
                  className="rt-button-body rt-bg-color w-inline-block"
                  style={{ textDecoration: 'none', border: '1px solid rgba(26, 11, 84, 0.15)' }}
                >
                  <div className="rt-button-text rt-btn-color">Lihat Layanan</div>
                  <div className="rt-button-body-overlay rt-color-blue"></div>
                </a>
              </div>

              {/* Key Stats Counter */}
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center', marginTop: '2.5rem', flexWrap: 'wrap' }} data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
                <div className="rt-hero-stat-card" style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '2.2rem', fontWeight: 800, color: '#1a0b54', lineHeight: 1.1 }}>200+</div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', color: '#554d74', marginTop: '0.3rem', fontWeight: 500 }}>Project Selesai</div>
                </div>
                <div style={{ width: '1px', height: '36px', backgroundColor: 'rgba(26,11,84,0.12)' }}></div>
                <div className="rt-hero-stat-card" style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '2.2rem', fontWeight: 800, color: '#1a0b54', lineHeight: 1.1 }}>150+</div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', color: '#554d74', marginTop: '0.3rem', fontWeight: 500 }}>Klien Puas</div>
                </div>
                <div style={{ width: '1px', height: '36px', backgroundColor: 'rgba(26,11,84,0.12)' }}></div>
                <div className="rt-hero-stat-card" style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '2.2rem', fontWeight: 800, color: '#2b4bee', lineHeight: 1.1 }}>4.9★</div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', color: '#554d74', marginTop: '0.3rem', fontWeight: 500 }}>Rating Klien</div>
                </div>
              </div>
            </div>

            {/* Hero Video Visual (Replaces static dashboard photo) */}
            <div className="rt-hero-v1-bottom" style={{ marginBottom: '0', marginTop: '1.5rem' }} data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
              <div
                className="rt-hero-v1-image rt-overflow-hidden"
                style={{
                  borderRadius: '20px',
                  boxShadow: '0 20px 50px rgba(43, 75, 238, 0.15)',
                  border: '1px solid rgba(26, 11, 84, 0.08)',
                  backgroundColor: '#0a0520',
                  overflow: 'hidden',
                  maxWidth: '1000px',
                  margin: '0 auto',
                }}
              >
                <video
                  src="/hero-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
