import React from 'react';

function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: 'Konsultasi & Diskusi',
      desc: 'Diskusikan kebutuhan fitur, alur sistem, target deadline, dan referensi desain website atau aplikasi yang Anda impikan.',
      icon: '/images/6916ef876682eed2b2fd5911_Vector_20_34_.svg',
    },
    {
      id: 2,
      title: 'Penawaran & Kesepakatan',
      desc: 'Kami menyusun estimasi waktu pengerjaan dan rincian biaya yang transparan. Proyek dimulai setelah pembayaran DP disepakati.',
      icon: '/images/6916f00db3051e5aed09bd3f_Group_202085663576.svg',
    },
    {
      id: 3,
      title: 'Proses Pengerjaan & Coding',
      desc: 'Developer kami mengeksekusi kode berstandar industri dengan arsitektur bersih. Anda menerima laporan progres berkala.',
      icon: '/images/6916ec635353353be914aafc_Vector_20_32_.svg',
    },
    {
      id: 4,
      title: 'Testing & Garansi Revisi',
      desc: 'Kami mendemokan sistem untuk diuji bersama. Kami perbaiki dan sempurnakan setiap detail sesuai kesepakatan awal.',
      icon: '/images/6916ec6339f890a80905a69b_Vector_20_33_.svg',
    },
    {
      id: 5,
      title: 'Serah Terima & Panduan',
      desc: 'Source code lengkap diserahkan, sistem langsung di-deploy online, lengkap dengan sesi panduan dan dokumentasi.',
      icon: '/images/6916ed30605dc4748f8c24c3_specialiti-icon-2_20_1_.svg',
    },
  ];

  return (
    <section id="how-it-works" className="rt-process rt-overflow-hidden" style={{ backgroundColor: '#faf9fc', padding: '95px 0' }}>
      <div className="w-layout-blockcontainer rt-container-main w-container">
        {/* Header Section */}
        <div className="rt-tools-iconheading rt-heading-bottom-gap" data-aos="fade-up" data-aos-duration="700">
          <div className="rt-sub-gap">
            <div className="rt-sub-text rt-sub-gredient">Alur Kerja Sama</div>
          </div>
          <h2 className="rt-gap-off rt-desktop-text-center">
            Cara Kerja Mudah, Transparan, <span className="rt-color-periwinkle-gray">&amp; Terstruktur</span>
          </h2>
          <p className="rt-hero-v1-top-padding rt-gap-off rt-desktop-text-center" style={{ maxWidth: '640px', margin: '15px auto 0' }}>
            Dari awal konsultasi hingga peluncuran sistem, kami memastikan setiap tahapan pengerjaan berjalan jelas dan terukur.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '1.25rem',
            marginTop: '3.5rem',
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className="rt-step-card"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={idx * 90}
              style={{
                backgroundColor: '#ffffff',
                padding: '2rem 1.4rem',
                borderRadius: '16px',
                border: '1px solid rgba(26, 11, 84, 0.08)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                height: '100%',
                position: 'relative',
              }}
            >
              {/* Top Row: Icon + Step Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.4rem',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: '#f5f3ff',
                    border: '1px solid rgba(26, 11, 84, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src={step.icon} loading="lazy" width="24" height="24" alt={step.title} />
                </div>
                <span className="rt-step-badge">
                  Step 0{step.id}
                </span>
              </div>

              {/* Title */}
              <div
                className="rt-text-style-h6"
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#1a0b54',
                  marginBottom: '0.65rem',
                  lineHeight: 1.35,
                }}
              >
                {step.title}
              </div>

              {/* Description */}
              <p
                className="rt-gap-off"
                style={{
                  fontSize: '0.9rem',
                  color: '#554d74',
                  lineHeight: 1.6,
                  marginTop: 'auto',
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <a href="#contact" className="rt-button-body w-inline-block" style={{ textDecoration: 'none' }}>
            <div className="rt-button-text">Konsultasikan Proyekmu Sekarang</div>
            <div className="rt-button-body-overlay"></div>
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default HowItWorks;
