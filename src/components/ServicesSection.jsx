import React from 'react';

export default function ServicesSection() {
  return (
    <>
      {/* ServicesSection */}
      
  <section id="services">
    <div className="section-header centered">
      <div className="section-tag">Layanan Kami</div>
      <h2 className="section-title">Apa yang Bisa Kami Bantu?</h2>
      <p className="section-sub">Berbagai jasa coding profesional siap membantu proyek dan kebutuhan digitalmu.</p>
    </div>

    <div className="services-grid">
      <div className="service-card reveal reveal-zoom" style={{ borderTop: '3px solid var(--primary)' }}>
        <div className="s-title" style={{ marginTop: '10px' }}>Pembuatan Website</div>
        <p className="s-desc">Landing page, company profile, e-commerce, hingga web app custom sesuai kebutuhanmu.</p>
        <a href="#contact" className="s-link">Pesan Sekarang →</a>
      </div>
      <div className="service-card reveal reveal-zoom" style={{ borderTop: '3px solid var(--primary)' }}>
        <div className="s-title" style={{ marginTop: '10px' }}>Aplikasi Android/Web</div>
        <p className="s-desc">Pengembangan aplikasi mobile Android dan Progressive Web App (PWA) modern.</p>
        <a href="#contact" className="s-link">Pesan Sekarang →</a>
      </div>
      <div className="service-card reveal reveal-zoom" style={{ borderTop: '3px solid var(--primary)' }}>
        <div className="s-title" style={{ marginTop: '10px' }}>Joki Tugas Coding</div>
        <p className="s-desc">Bantu tugas kuliah, skripsi, atau proyek kampus dengan berbagai bahasa pemrograman.</p>
        <a href="#contact" className="s-link">Pesan Sekarang →</a>
      </div>
      <div className="service-card reveal reveal-zoom" style={{ borderTop: '3px solid var(--primary)' }}>
        <div className="s-title" style={{ marginTop: '10px' }}>UI/UX Design</div>
        <p className="s-desc">Desain antarmuka yang menarik, intuitif, dan user-friendly menggunakan Figma.</p>
        <a href="#contact" className="s-link">Pesan Sekarang →</a>
      </div>
      <div className="service-card reveal reveal-zoom" style={{ borderTop: '3px solid var(--primary)' }}>
        <div className="s-title" style={{ marginTop: '10px' }}>Solve Code / Debug</div>
        <p className="s-desc">Error atau bug susah dipecahkan? Kami siap bantu debug dan perbaiki kodenya.</p>
        <a href="#contact" className="s-link">Pesan Sekarang →</a>
      </div>
      <div className="service-card reveal reveal-zoom" style={{ borderTop: '3px solid var(--primary)' }}>
        <div className="s-title" style={{ marginTop: '10px' }}>Database & Backend</div>
        <p className="s-desc">Perancangan database, REST API, dan backend system yang scalable dan aman.</p>
        <a href="#contact" className="s-link">Pesan Sekarang →</a>
      </div>
      <div className="service-card reveal reveal-zoom" style={{ borderTop: '3px solid var(--primary)' }}>
        <div className="s-title" style={{ marginTop: '10px' }}>Integrasi AI/Chatbot</div>
        <p className="s-desc">Integrasi AI, chatbot otomatis, dan fitur machine learning ke dalam proyekmu.</p>
        <a href="#contact" className="s-link">Pesan Sekarang →</a>
      </div>
      <div className="service-card reveal reveal-zoom" style={{ borderTop: '3px solid var(--primary)' }}>
        <div className="s-title" style={{ marginTop: '10px' }}>Tutorial & Mentoring</div>
        <p className="s-desc">Sesi mentoring 1-on-1 dan tutorial coding dari dasar hingga level advanced.</p>
        <a href="#contact" className="s-link">Pesan Sekarang →</a>
      </div>
    </div>
  </section>

  
    </>
  );
}
