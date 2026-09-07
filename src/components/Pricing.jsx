import React from 'react';

export default function Pricing() {
  return (
    <>
      {/* Pricing */}
      
  <section className="pricing" id="pricing" style={{ background: 'var(--gray-50)' }}>
    <div className="section-header centered">
      <div className="section-tag">Paket Harga</div>
      <h2 className="section-title">Pilih Paket Sesuai Kebutuhan</h2>
      <p className="section-sub">Transparan, terjangkau, dan tanpa biaya tersembunyi. Solusi tepat untuk setiap ukuran project.</p>
    </div>

    <div className="pricing-grid">
      
      {/*  Card 1  */}
      <div className="pricing-card reveal reveal-zoom">
        <div className="p-badge">BASIC</div>
        <h3>Paket Mahasiswa</h3>
        <p className="p-sub">Solusi tugas kuliah & skripsi</p>
        <div className="price">Mulai <br /><span>Rp 200rb</span></div>
        <ul className="features">
          <li><span className="check">✔</span> Revisi sampai jalan</li>
          <li><span className="check">✔</span> Bantuan penjelasan source code</li>
          <li><span className="check">✔</span> Setup ke laptop sendiri</li>
        </ul>
        <a href="#contact" className="btn-hero secondary btn-block">Pilih Paket</a>
      </div>

      {/*  Card 2  */}
      <div className="pricing-card popular reveal reveal-zoom">
        <div className="p-badge popular-badge">POPULER</div>
        <h3>Profile / UMKM</h3>
        <p className="p-sub">Untuk bisnis profesional</p>
        <div className="price">Mulai <br /><span>Rp 1 Juta</span></div>
        <ul className="features">
          <li><span className="check">✔</span> Domain & Hosting Gratis (1thn)</li>
          <li><span className="check">✔</span> Desain Responsif & Modern</li>
          <li><span className="check">✔</span> Optimasi SEO Dasar</li>
          <li><span className="check">✔</span> Terintegrasi WhatsApp</li>
        </ul>
        <a href="#contact" className="btn-hero primary btn-block btn-white">Pilih Paket</a>
      </div>

      {/*  Card 3  */}
      <div className="pricing-card reveal reveal-zoom">
        <div className="p-badge">ENTERPRISE</div>
        <h3>Custom App</h3>
        <p className="p-sub">Aplikasi berskala besar</p>
        <div className="price price-custom"><br />Hubungi Kami</div>
        <ul className="features">
          <li><span className="check">✔</span> Fitur Custom (E-Commerce/ERP)</li>
          <li><span className="check">✔</span> Android, iOS & Web</li>
          <li><span className="check">✔</span> Integrasi Database & API</li>
          <li><span className="check">✔</span> NDA & Garansi Maintenance</li>
        </ul>
        <a href="#contact" className="btn-hero secondary btn-block">Konsultasi Gratis</a>
      </div>

    </div>
  </section>

  
    </>
  );
}
