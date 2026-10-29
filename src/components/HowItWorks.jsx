import React from 'react';

function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: 'Konsultasi & Diskusi',
      desc: 'Diskusikan kebutuhan fitur, flow sistem, target deadline, dan referensi desain website atau aplikasi yang Anda inginkan.',
      icon: '/images/6916ef876682eed2b2fd5911_Vector_20_34_.svg',
    },
    {
      id: 2,
      title: 'Penawaran & Kesepakatan',
      desc: 'Kami menyusun estimasi waktu pengerjaan dan rincian harga yang transparan. Proyek dimulai setelah pembayaran DP disepakati.',
      icon: '/images/6916f00db3051e5aed09bd3f_Group_202085663576.svg',
    },
    {
      id: 3,
      title: 'Proses Pengerjaan & Coding',
      desc: 'Developer kami mengeksekusi kode dengan standar industri. Anda akan menerima laporan update progress secara berkala.',
      icon: '/images/6916ec635353353be914aafc_Vector_20_32_.svg',
    },
    {
      id: 4,
      title: 'Testing & Garansi Revisi',
      desc: 'Kami mendemokan hasil kerja untuk diuji bersama. Kami perbaiki dan sempurnakan setiap detail sesuai kesepakatan awal.',
      icon: '/images/6916ec6339f890a80905a69b_Vector_20_33_.svg',
    },
    {
      id: 5,
      title: 'Serah Terima & Panduan',
      desc: 'Source code lengkap diserahkan, website/aplikasi di-deploy ke domain hosting, lengkap dengan panduan penggunaan.',
      icon: '/images/6916ed30605dc4748f8c24c3_specialiti-icon-2_20_1_.svg',
    },
  ];

  return (
    <section id="how-it-works" className="rt-process rt-overflow-hidden" style={{ backgroundColor: '#faf9fc', padding: '90px 0' }}>
      <div className="w-layout-blockcontainer rt-container-main w-container">
        {/* Header */}
        <div className="rt-tools-iconheading rt-features-v1-top rt-heading-bottom-gap" data-aos="fade-up" data-aos-duration="700">
          <div className="rt-sub-gap">
            <div className="rt-sub-text rt-sub-gredient">Alur Kerja Sama</div>
          </div>
          <h2 className="rt-gap-off rt-desktop-text-center">
            Cara Kerja Mudah, Transparan, <span className="rt-color-periwinkle-gray">&amp; Terstruktur</span>
          </h2>
          <p className="rt-hero-v1-top-padding rt-gap-off rt-desktop-text-center" style={{ maxWidth: '650px', margin: '15px auto 0' }}>
            Dari awal konsultasi hingga peluncuran sistem, kami memastikan setiap tahapan berjalan jelas dan terukur.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            marginTop: '3.5rem',
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className="rt-why-choose-v1-left-item rt-step-card"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={idx * 100}
              style={{
                backgroundColor: '#ffffff',
                padding: '2.2rem 1.6rem',
                borderRadius: '16px',
                border: '1px solid rgba(26,11,84,0.07)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '1.2rem',
                  right: '1.4rem',
                  fontFamily: 'Geist, sans-serif',
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: 'rgba(43,75,238,0.18)',
                  userSelect: 'none',
                }}
              >
                0{step.id}
              </div>

              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  backgroundColor: '#f5f3ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.3rem',
                }}
              >
                <img src={step.icon} loading="lazy" width="26" height="26" alt={step.title} />
              </div>

              <div className="rt-text-style-h6 rt-small-heading-para-gap" style={{ fontSize: '1.15rem', color: '#1a0b54', marginBottom: '0.6rem' }}>
                {step.title}
              </div>

              <p className="rt-gap-off" style={{ fontSize: '0.92rem', color: '#554d74', lineHeight: 1.65 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#contact" className="rt-button-body w-inline-block" style={{ textDecoration: 'none' }}>
            <div className="rt-button-text">Konsultasikan Proyekmu Sekarang</div>
            <div className="rt-button-body-overlay"></div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
