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

  const renderCardList = () => (
    <div className="rt-testimonials-v1-content">
      {testimonials.map((t, idx) => (
        <div key={idx} className="rt-testimonials-item-wrapper">
          <div className="rt-testimonials-v1-item">
            <div className="rt-testimonials-v1-item-top">
              <div className="rt-testimonials-author">
                <img
                  src={t.avatar}
                  loading="lazy"
                  alt={t.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="rt-testimonials-v1-item-top-right">
                <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
                  {[...Array(5)].map((_, si) => (
                    <img
                      key={si}
                      src="/images/68f1ff9d3485bfaf19e14f3e_star_20_2_.svg"
                      loading="lazy"
                      alt="★"
                      className="rt-star-test-v1"
                      style={{ width: '15px', height: '15px' }}
                    />
                  ))}
                </div>
                <div>
                  <div className="rt-small-name rt-text-color-white" style={{ fontWeight: 700, fontSize: '0.98rem' }}>
                    {t.name}
                  </div>
                  <div style={{ color: '#9fa8da', fontSize: '0.8rem', marginTop: '1px' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>

            <div className="rt-testimonials-v1-item-inner">
              <div
                className="rt-small-name rt-text-color-white rt-small-heading-para-gap"
                style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.35 }}
              >
                "{t.headline}"
              </div>
              <p className="rt-color-pale-periwinkle rt-gap-off" style={{ fontSize: '0.9rem', lineHeight: 1.65 }}>
                {t.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="rt-testimonials-v1" id="testimoni" style={{ padding: '80px 0' }}>
      <div className="w-layout-blockcontainer rt-container-extra-large w-container">
        <div className="rt-testimonials-v1-contanner rt-overflow-hidden">
          <div className="rt-testimonials-v1-container rt-position-relative">
            {/* Heading Sesuai Template Taskopia home-one.html */}
            <div
              className="rt-testimonials-v1-top rt-heading-bottom-gap"
              style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <div className="rt-sub-gap" style={{ justifyContent: 'center', display: 'flex' }}>
                <div className="rt-sub-text">Testimoni Klien</div>
              </div>
              <div className="rt-overflow-hidden">
                <h2 className="rt-gap-off rt-text-color-white" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', marginTop: '0.6rem', lineHeight: 1.25 }}>
                  Pengalaman Nyata Klien yang <span className="rt-color-periwinkle-gray">Bekerja Sama Bersama Kami</span>
                </h2>
              </div>
            </div>

            {/* Continuous Running Marquee Animation Sesuai Struktur Asli Template Taskopia */}
            <div className="rt-marquee-v1-animation rt-overflow-hidden" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
              {renderCardList()}
              {renderCardList()}
              <div className="rt-testimonials-overlay"></div>
            </div>
          </div>
          <div className="rt-testimonials-v1-overlay"></div>
        </div>
      </div>
    </section>
  );
}
