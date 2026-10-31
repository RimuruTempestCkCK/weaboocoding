import React from 'react';
import { track } from '@vercel/analytics';

export default function ServicesSection() {
  const services = [
    {
      title: 'Pembuatan Website Profesional',
      desc: 'Landing page berkonversi tinggi, company profile elegan, toko online (e-commerce), hingga web portal custom responsif.',
      icon: '/images/6904af5ad9ca1a4322df6d9e_databaseicon-1.svg',
      tag: 'Web Dev',
    },
    {
      title: 'Aplikasi Android & PWA',
      desc: 'Pengembangan aplikasi mobile Android (Flutter/React Native) dan Progressive Web App (PWA) modern, cepat, dan terintegrasi API.',
      icon: '/images/6916ef876682eed2b2fd5911_Vector_20_34_.svg',
      tag: 'Mobile App',
    },
    {
      title: 'Joki Tugas Coding & Skripsi IT',
      desc: 'Bantuan pengerjaan tugas kuliah, sistem informasi, prototipe skripsi, hingga bimbingan kode untuk sidang tugas akhir IT.',
      icon: '/images/6916f00db3051e5aed09bd3f_Group_202085663576.svg',
      tag: 'Akademik IT',
    },
    {
      title: 'UI/UX Design Modern',
      desc: 'Desain antarmuka pengguna (Figma) yang intuitif, estetis, dan user-friendly, siap di-slice oleh tim developer Anda.',
      icon: '/images/6916ec635353353be914aafc_Vector_20_32_.svg',
      tag: 'Figma UI/UX',
    },
    {
      title: 'Solve Code & Debugging Error',
      desc: 'Mengatasi bug membandel, database error, perbaikan syntax logic, hingga optimasi kecepatan website dalam hitungan jam.',
      icon: '/images/6916ec6339f890a80905a69b_Vector_20_33_.svg',
      tag: 'Bug Fixing',
    },
    {
      title: 'Database & Backend Development',
      desc: 'Arsitektur database MySQL/PostgreSQL/MongoDB yang optimal, RESTful API andal, serta server authentication yang aman.',
      icon: '/images/68ee3ab607d07e6601123425_Group_202085663558_20_1_.svg',
      tag: 'Backend & API',
    },
    {
      title: 'Integrasi AI & Automasi Bot',
      desc: 'Penerapan OpenAI / ChatGPT API, WhatsApp Chatbot pintar, dan automasi proses bisnis untuk efisiensi operasional.',
      icon: '/images/69142f6f3f26d48453053172_taskopia-home-one-integration-icone.svg',
      tag: 'AI & Bot',
    },
    {
      title: 'Mentoring Coding 1-on-1',
      desc: 'Bimbingan privat intensif seputar frontend, backend, fullstack framework, atau bedah source code tugas akhir Anda.',
      icon: '/images/6916ed30605dc4748f8c24c3_specialiti-icon-2_20_1_.svg',
      tag: 'Mentoring',
    },
  ];

  return (
    <section id="services" className="rt-feaures-v3" style={{ padding: '95px 0', backgroundColor: '#ffffff' }}>
      <div className="w-layout-blockcontainer rt-container-main w-container">
        {/* Section Header */}
        <div className="rt-tools-iconheading rt-heading-bottom-gap" data-aos="fade-up" data-aos-duration="700">
          <div className="rt-sub-gap">
            <div className="rt-sub-text rt-sub-gredient">Layanan Kami</div>
          </div>
          <h2 className="rt-gap-off rt-desktop-text-center">
            Solusi Coding Terlengkap <span className="rt-color-periwinkle-gray">untuk Kebutuhan Digitalmu</span>
          </h2>
          <p className="rt-hero-v1-top-padding rt-gap-off rt-desktop-text-center" style={{ maxWidth: '640px', margin: '15px auto 0' }}>
            Berbagai jasa coding profesional dan pengembangan perangkat lunak siap membantu keberhasilan proyek Anda.
          </p>
        </div>

        {/* Services Grid with Taskopia Card Styles */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.75rem',
            marginTop: '3.5rem',
          }}
        >
          {services.map((s, idx) => (
            <div
              key={idx}
              className="rt-card-hover"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={(idx % 4) * 90}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(26, 11, 84, 0.08)',
                borderRadius: '18px',
                padding: '2.2rem 1.8rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Header card: Icon + Pill */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.4rem' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      backgroundColor: '#eff2ff',
                      border: '1px solid rgba(24, 51, 254, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img src={s.icon} loading="lazy" width="26" height="26" alt={s.title} />
                  </div>
                  <span className="rt-service-pill">
                    {s.tag}
                  </span>
                </div>

                {/* Service Title */}
                <div
                  className="rt-text-style-h6"
                  style={{
                    fontSize: '1.18rem',
                    fontWeight: 600,
                    color: '#1a0b54',
                    marginBottom: '0.75rem',
                    lineHeight: 1.35,
                  }}
                >
                  {s.title}
                </div>

                {/* Description */}
                <p className="rt-gap-off" style={{ fontSize: '0.92rem', color: '#554d74', lineHeight: 1.65 }}>
                  {s.desc}
                </p>
              </div>

              {/* Bottom CTA Action Button */}
              <div style={{ marginTop: '1.8rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(26, 11, 84, 0.06)' }}>
                <a
                  href={`https://wa.me/6285157558469?text=${encodeURIComponent(`Halo WeabooCoding! Saya tertarik dengan layanan ${s.title}. Boleh tanya detailnya?`)}`}
                  onClick={() => track('Klik_WA')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rt-service-cta"
                >
                  <span>Pesan Layanan Ini</span>
                  <span aria-hidden="true" style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1 }}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
