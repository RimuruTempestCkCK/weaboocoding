import React from 'react';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: 'Rendi Ilham',
      role: 'Mahasiswa Sistem Informasi',
      headline: 'Solusi Skripsi Cepat & Tuntas',
      avatar: '/images/68f20568d8c28959fddbf700_taskopia-testimonials-author-v1.webp',
      content:
        'Sempet panik parah karena deadline skripsi tinggal 2 minggu tapi web Laravel saya masih banyak error database. Untung ketemu WeabooCoding, 3 hari doang beres semua bug-nya + diajarin cara jelasin kodenya ke dosen penguji! 🙏',
    },
    {
      name: 'Bintang Kurniawan',
      role: 'Founder Fashion Brand',
      headline: 'Next.js & Midtrans Loading Cepat',
      avatar: '/images/68f20568de5d5f47117e47e5_taskopia-testimonials-author-v2.webp',
      content:
        'Request custom e-commerce pakai Next.js dan payment gateway Midtrans. Timnya asik diajak diskusi, harganya masuk akal buat ukuran startup lokal, dan hasilnya beneran ngacir loadingnya.',
    },
    {
      name: 'Citra Ayu',
      role: 'Product Manager POS App',
      headline: 'Desain UI/UX Figma Sangat Rapi',
      avatar: '/images/68f2056835f743b2678916ad_taskopia-testimonials-author-v3.webp',
      content:
        'Desain UI/UX Figma untuk aplikasi kasir dari mereka bener-bener clean dan modern banget. Tim programmer internal saya juga bilang slice-nya gampang karena desainnya rapi dan terstruktur.',
    },
    {
      name: 'Dika Saputra',
      role: 'HRD Perusahaan Kontraktor',
      headline: 'App Absensi Flutter & GPS Radius',
      avatar: '/images/68f20568d8c28959fddbf700_taskopia-testimonials-author-v1.webp',
      content:
        'Bikin aplikasi absensi pakai Flutter + fitur radius GPS buat pegawai lapangan. Awalnya sempet ragu karena harganya miring, tapi ternyata supportnya luar biasa banget. Sampe dibantuin upload ke Playstore juga.',
    },
    {
      name: 'Eko Febriansyah',
      role: 'Junior Frontend Dev',
      headline: 'Mentoring State Management Jelas',
      avatar: '/images/68f20568de5d5f47117e47e5_taskopia-testimonials-author-v2.webp',
      content:
        'Mentok di logic React JS buat state management udah berhari-hari nggak nemu solusinya. Sewa jasa Solve Code WeabooCoding sejam via Zoom, langsung ketahuan masalahnya dimana. Mantap banget mentornya jelasinnya gampang dimengerti.',
    },
    {
      name: 'Fani Anindya',
      role: 'Direktur Properti & Real Estate',
      headline: 'Halaman 1 Google & ROI Terbukti',
      avatar: '/images/68f2056835f743b2678916ad_taskopia-testimonials-author-v3.webp',
      content:
        'Pesen website company profile buat perusahaan properti saya. Tampilannya elegan, SEO-nya jalan banget, dan bulan lalu masuk halaman 1 Google buat keyword pencarian daerah saya. ROI-nya dapet banget!',
    },
  ];

  return (
    <section className="rt-testimonials-v1" id="testimoni" style={{ padding: '80px 0', backgroundColor: '#0d0728' }}>
      <div className="w-layout-blockcontainer rt-container-extra-large w-container">
        <div className="rt-testimonials-v1-contanner rt-overflow-hidden" style={{ padding: '3.5rem 2rem', backgroundColor: 'transparent' }}>
          <div className="rt-testimonials-v1-container rt-position-relative" style={{ maxWidth: '1100px', margin: '0 auto', padding: 0 }}>
            {/* Heading */}
            <div className="rt-heading-bottom-gap" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }} data-aos="fade-up" data-aos-duration="700">
              <div className="rt-sub-gap" style={{ justifyContent: 'center', display: 'flex' }}>
                <div className="rt-sub-text rt-text-color-white" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  Testimoni Klien
                </div>
              </div>
              <div className="rt-overflow-hidden">
                <h2 className="rt-gap-off rt-text-color-white" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', marginTop: '0.6rem', lineHeight: 1.25 }}>
                  Pengalaman Nyata Klien yang <span className="rt-color-periwinkle-gray">Bekerja Sama Bersama Kami</span>
                </h2>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="rt-card-hover"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={(idx % 3) * 120}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {/* Author & Rating */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.1rem' }}>
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          overflow: 'hidden',
                          flexShrink: 0,
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                        }}
                      >
                        <img src={t.avatar} loading="lazy" alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{ display: 'flex', gap: '3px', marginBottom: '4px' }}>
                          {[...Array(5)].map((_, si) => (
                            <span key={si} style={{ color: '#ffb800', fontSize: '0.9rem', lineHeight: 1 }}>★</span>
                          ))}
                        </div>
                        <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#ffffff', lineHeight: 1.2 }}>
                          {t.name}
                        </div>
                        <div style={{ color: '#9fa8da', fontSize: '0.8rem', marginTop: '2px' }}>{t.role}</div>
                      </div>
                    </div>

                    {/* Headline and Quote */}
                    <div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                        "{t.headline}"
                      </div>
                      <p className="rt-gap-off" style={{ fontSize: '0.9rem', lineHeight: 1.65, color: '#c5cae9' }}>
                        {t.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
