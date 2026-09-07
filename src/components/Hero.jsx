import React from 'react';

export default function Hero() {
  return (
    <>
      {/* Hero */}
      
  <section className="hero" id="home">
    <div className="hero-content">
      <div className="hero-badge"><span className="dot"></span> #1 Jasa Coding Terpercaya</div>
      <h1 className="hero-title">WeabooCoding – Jasa Coding &amp;<br /><span className="accent">Pembuatan Website Profesional</span></h1>
      <p className="hero-sub">WeabooCoding menyediakan jasa coding dan pembuatan website untuk pelanggan di Tangerang Selatan dan sekitarnya. Solusi tepat untuk mahasiswa, UMKM, dan perusahaan.</p>
      <div className="hero-actions">
        <a href="#contact" className="btn-hero primary">Mulai Sekarang</a>
        <a href="#services" className="btn-hero secondary">Lihat Layanan </a>
      </div>
      <div className="hero-stats">
        <div className="stat">
          <div className="stat-num">200+</div>
          <div className="stat-label">Project Selesai</div>
        </div>
        <div className="stat">
          <div className="stat-num">150+</div>
          <div className="stat-label">Klien Puas</div>
        </div>
        <div className="stat">
          <div className="stat-num">4.9★</div>
          <div className="stat-label">Rating</div>
        </div>
      </div>
    </div>

    <div className="hero-visual">
      <div className="hero-visual-wrap">
        <div className="floating-card card-1"><span className="icon">✅</span> Project Delivered!</div>
        <div className="code-window">
          <div className="code-titlebar">
            <span className="dot-r"></span><span className="dot-y"></span><span className="dot-g"></span>
            <span className="code-file">weaboocoding.js</span>
          </div>
          <div className="code-body">
            <span className="cm">// WeabooCoding – Build Dreams</span><br />
            <span className="cl">const</span> <span className="cv">project</span> = {"{"}<br />
            &nbsp;&nbsp;<span className="cv">client</span>: <span className="cs">"You"</span>,<br />
            &nbsp;&nbsp;<span className="cv">quality</span>: <span className="cs">"Premium"</span>,<br />
            &nbsp;&nbsp;<span className="cv">delivery</span>: <span className="cs">"Fast"</span>,<br />
            &nbsp;&nbsp;<span className="cv">price</span>: <span className="cs">"Affordable"</span><br />
            {"};"}<br /><br />
            <span className="cl">async function</span> <span className="cf">buildProject</span>() {"{"}<br />
            &nbsp;&nbsp;<span className="cl">await</span> <span className="cf">consult</span>(project);<br />
            &nbsp;&nbsp;<span className="cl">await</span> <span className="cf">develop</span>(project);<br />
            &nbsp;&nbsp;<span className="cl">return</span> <span className="cf">deliver</span>(project);<br />
            {"}"}<br /><br />
            <span className="cf">buildProject</span>(); <span className="cm">// ✨ Done!</span>
          </div>
        </div>
        <div className="floating-card card-2"><span className="icon">⚡</span> Fast Delivery</div>
      </div>
    </div>
  </section>

  
    </>
  );
}
