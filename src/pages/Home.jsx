import React from 'react';
import '../style.css';
import useSEO from '../hooks/useSEO';

function Home() {
  useSEO({
    title: `WeabooCoding – Jasa Coding & Pembuatan Website Profesional`,
    description: `WeabooCoding menyediakan jasa coding profesional, pembuatan website, dan aplikasi untuk bisnis dan mahasiswa di Tangerang Selatan dan sekitarnya.`,
    schema: `{
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    "name": "WeabooCoding",
    "image": "https://weaboocoding.vercel.app/images/logo.png",
    "@id": "https://weaboocoding.vercel.app/",
    "url": "https://weaboocoding.vercel.app/",
    "telephone": "+6285157558469",
    "priceRange": "Rp 200.000 - Rp 10.000.000",
    "description": "WeabooCoding menyediakan jasa coding dan pembuatan website profesional untuk pelanggan di Tangerang Selatan dan sekitarnya.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tangerang Selatan",
      "addressCountry": "ID"
    },
    "sameAs": [
      "https://instagram.com/weaboocoding"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Tangerang Selatan"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://weaboocoding.vercel.app/#services",
      "priceCurrency": "IDR",
      "price": "200000",
      "itemOffered": {
        "@type": "Service",
        "name": "Jasa Pembuatan Website & Coding"
      }
    }
  }`
  });

  return (
    <>
      

  {/*  NAVBAR  */}
  <nav id="navbar">
    <a href="#" className="nav-logo">
      {/*  <div className="nav-logo-icon">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C8.5 2 7 4 7 6v1.5C5.3 8 4 9.3 4 11v8c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-8c0-1.7-1.3-3-3-3V6c0-2-1.5-4-5-4zm0 2c2.5 0 3 1.5 3 2v1.5H9V6c0-.5.5-2 3-2zm0 7c1.1 0 2 .9 2 2v1c0 .55-.45 1-1 1h-.5l.5 2H11l.5-2H11c-.55 0-1-.45-1-1v-1c0-1.1.9-2 2-2z" />
        </svg>
      </div>  */}
      <div className="nav-logo-text">Weaboo<span>Coding</span></div>
    </a>

    <ul className="nav-links" id="navLinks">
      <li><a href="/#home">Home</a></li>
      <li><a href="/#about">About</a></li>
      <li><a href="/#services">Services</a></li>
      <li><a href="/#pricing">Pricing</a></li>
      <li><a href="/#portfolio">Portfolio</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/#contact">Contact</a></li>
      <li className="nav-cta"><a href="https://wa.me/6285157558469" className="btn-cta">💬 Konsultasi Gratis</a></li>
    </ul>

    <button className="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  {/*  HERO  */}
  <section className="hero" id="home">
    <div className="hero-content">
      <div className="hero-badge"><span className="dot"></span> #1 Jasa Coding Terpercaya</div>
      <h1 className="hero-title">WeabooCoding – Jasa Coding &amp;<br /><span className="accent">Pembuatan Website Profesional</span></h1>
      <p className="hero-sub">WeabooCoding menyediakan jasa coding dan pembuatan website untuk pelanggan di Tangerang Selatan dan sekitarnya. Solusi tepat untuk mahasiswa, UMKM, dan perusahaan.</p>
      <div className="hero-actions">
        <a href="#contact" className="btn-hero primary">🚀 Mulai Sekarang</a>
        <a href="#services" className="btn-hero secondary">Lihat Layanan →</a>
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

  {/*  ABOUT  */}
  <section className="about" id="about">
    <div className="about-grid">
      <div className="about-visual reveal reveal-left">
        <div className="about-big-text">We Build<br />Your Vision</div>
        <p className="about-big-sub">Dari ide sederhana hingga sistem kompleks, kami siap mengeksekusi dengan presisi dan
          dedikasi penuh.</p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ color: 'white' }}>
            <div style={{ fontFamily: '\'Syne\',sans-serif', fontSize: '2rem', fontWeight: '800' }}>3+</div>
            <div style={{ fontSize: '.82rem', opacity: '.7' }}>Tahun Pengalaman</div>
          </div>
          <div style={{ color: 'white' }}>
            <div style={{ fontFamily: '\'Syne\',sans-serif', fontSize: '2rem', fontWeight: '800' }}>50+</div>
            <div style={{ fontSize: '.82rem', opacity: '.7' }}>Teknologi Dikuasai</div>
          </div>
        </div>
      </div>

      <div className="reveal reveal-right">
        <div className="section-tag">Tentang Kami</div>
        <h2 className="section-title">Coding Partner yang Kamu Butuhkan</h2>
        <p style={{ color: 'var(--gray-600)', lineHeight: '1.8', marginBottom: '2rem' }}>WeabooCoding adalah tim developer
          berpengalaman yang berfokus pada jasa coding, tutorial, dan solve code. Kami hadir untuk membantu mahasiswa,
          startup, dan UMKM mewujudkan proyek digitalnya.</p>

        <div className="about-values">
          <div className="value-item">
            <div className="value-icon">⚡</div>
            <div className="value-info">
              <h4>Pengerjaan Cepat</h4>
              <p>Deadline ketat bukan masalah. Kami komit dengan timeline yang disepakati.</p>
            </div>
          </div>
          <div className="value-item">
            <div className="value-icon">🔒</div>
            <div className="value-info">
              <h4>Terpercaya &amp; Profesional</h4>
              <p>Ratusan klien puas membuktikan kualitas dan integritas kami.</p>
            </div>
          </div>
          <div className="value-item">
            <div className="value-icon">💡</div>
            <div className="value-info">
              <h4>Solusi Terbaik</h4>
              <p>Kami tidak hanya coding—kami memberikan solusi yang tepat untuk kebutuhanmu.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  SERVICES  */}
  <section id="services">
    <div className="section-header centered">
      <div className="section-tag">Layanan Kami</div>
      <h2 className="section-title">Apa yang Bisa Kami Bantu?</h2>
      <p className="section-sub">Berbagai jasa coding profesional siap membantu proyek dan kebutuhan digitalmu.</p>
    </div>

    <div className="services-grid">
      <div className="service-card reveal reveal-zoom">
        <div className="s-icon">🌐</div>
        <div className="s-title">Pembuatan Website</div>
        <p className="s-desc">Landing page, company profile, e-commerce, hingga web app custom sesuai kebutuhanmu.</p>
        <a href="#contact" className="s-link">Pesan Sekarang →</a>
      </div>
      <div className="service-card reveal reveal-zoom">
        <div className="s-icon">📱</div>
        <div className="s-title">Aplikasi Android/Web</div>
        <p className="s-desc">Pengembangan aplikasi mobile Android dan Progressive Web App (PWA) modern.</p>
        <a href="#contact" className="s-link">Pesan Sekarang →</a>
      </div>
      <div className="service-card reveal reveal-zoom">
        <div className="s-icon">🎓</div>
        <div className="s-title">Joki Tugas Coding</div>
        <p className="s-desc">Bantu tugas kuliah, skripsi, atau proyek kampus dengan berbagai bahasa pemrograman.</p>
        <a href="#contact" className="s-link">Pesan Sekarang →</a>
      </div>
      <div className="service-card reveal reveal-zoom">
        <div className="s-icon">🎨</div>
        <div className="s-title">UI/UX Design</div>
        <p className="s-desc">Desain antarmuka yang menarik, intuitif, dan user-friendly menggunakan Figma.</p>
        <a href="#contact" className="s-link">Pesan Sekarang →</a>
      </div>
      <div className="service-card reveal reveal-zoom">
        <div className="s-icon">🔧</div>
        <div className="s-title">Solve Code / Debug</div>
        <p className="s-desc">Error atau bug susah dipecahkan? Kami siap bantu debug dan perbaiki kodenya.</p>
        <a href="#contact" className="s-link">Pesan Sekarang →</a>
      </div>
      <div className="service-card reveal reveal-zoom">
        <div className="s-icon">📊</div>
        <div className="s-title">Database & Backend</div>
        <p className="s-desc">Perancangan database, REST API, dan backend system yang scalable dan aman.</p>
        <a href="#contact" className="s-link">Pesan Sekarang →</a>
      </div>
      <div className="service-card reveal reveal-zoom">
        <div className="s-icon">🤖</div>
        <div className="s-title">Integrasi AI/Chatbot</div>
        <p className="s-desc">Integrasi AI, chatbot otomatis, dan fitur machine learning ke dalam proyekmu.</p>
        <a href="#contact" className="s-link">Pesan Sekarang →</a>
      </div>
      <div className="service-card reveal reveal-zoom">
        <div className="s-icon">📚</div>
        <div className="s-title">Tutorial & Mentoring</div>
        <p className="s-desc">Sesi mentoring 1-on-1 dan tutorial coding dari dasar hingga level advanced.</p>
        <a href="#contact" className="s-link">Pesan Sekarang →</a>
      </div>
    </div>
  </section>

  {/*  PRICING  */}
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

  {/*  PORTFOLIO  */}
  <section className="portfolio" id="portfolio">
    <div className="section-header centered">
      <div className="section-tag">Portfolio</div>
      <h2 className="section-title">Project Terbaru Kami</h2>
      <p className="section-sub">Beberapa contoh project yang telah kami kerjakan dengan kualitas terbaik.</p>
    </div>

    <div className="portfolio-grid">
      <div className="portfolio-card reveal reveal-zoom">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">E-Commerce</div>
          <div className="p-name">FashionHub Online</div>
          <p className="p-desc">Platform toko online (Next.js & Node.js) lengkap dengan payment gateway Midtrans & dashboard admin canggih.</p>
        </div>
      </div>
      <div className="portfolio-card reveal reveal-zoom">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">Sistem Informasi</div>
          <div className="p-name">KlinikCare Digital</div>
          <p className="p-desc">Manajemen rekam medis (Laravel), antrean pasien real-time, dan integrasi WhatsApp API untuk notifikasi.</p>
        </div>
      </div>
      <div className="portfolio-card reveal reveal-zoom">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">Android App</div>
          <div className="p-name">Absensi GeoTrack</div>
          <p className="p-desc">Aplikasi absensi pegawai (Flutter) berbasis lokasi GPS, radius kantor, dan face recognition sederhana.</p>
        </div>
      </div>
      <div className="portfolio-card reveal reveal-zoom">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">Joki Skripsi</div>
          <div className="p-name">Sistem Pakar AI</div>
          <p className="p-desc">Pembuatan sistem pakar diagnosa penyakit berbasis Python (Flask) untuk tugas akhir mahasiswa IT.</p>
        </div>
      </div>
      <div className="portfolio-card reveal reveal-zoom">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">Web Company Profile</div>
          <div className="p-name">Cafe & Resto "Bite"</div>
          <p className="p-desc">Website modern (React) dengan animasi GSAP, fitur reservasi meja otomatis, dan menu digital interaktif.</p>
        </div>
      </div>
      <div className="portfolio-card reveal reveal-zoom">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">Dashboard Admin</div>
          <div className="p-name">SalesPro Analytics</div>
          <p className="p-desc">Dashboard monitoring penjualan ERP (Vue.js + Tailwind) dengan visualisasi grafik (Chart.js).</p>
        </div>
      </div>
      <div className="portfolio-card hidden">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">Web Portal</div>
          <div className="p-name">Portal Sekolah Terpadu</div>
          <p className="p-desc">Portal akademik untuk SMA lengkap dengan sistem e-learning, jadwal, dan nilai (PHP Native / CodeIgniter).</p>
        </div>
      </div>
      <div className="portfolio-card hidden">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">Logistik App</div>
          <div className="p-name">KurirKu Tracking</div>
          <p className="p-desc">Sistem resi dan tracking pengiriman barang real-time terintegrasi dengan Google Maps API (MERN Stack).</p>
        </div>
      </div>
      <div className="portfolio-card hidden">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">Web Booking</div>
          <div className="p-name">Staycation Villa</div>
          <p className="p-desc">Website pemesanan villa dengan kalender ketersediaan, filter fasilitas, dan checkout instan.</p>
        </div>
      </div>
      <div className="portfolio-card hidden">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">Solve Code / Debug</div>
          <div className="p-name">Fix Bug Aplikasi POS</div>
          <p className="p-desc">Memperbaiki memory leak dan error kalkulasi pajak pada aplikasi kasir (React Native) klien dalam 24 jam.</p>
        </div>
      </div>
      <div className="portfolio-card hidden">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">UI/UX Design</div>
          <div className="p-name">Redesign App Bank</div>
          <p className="p-desc">Proyek desain ulang antarmuka (Figma) untuk aplikasi perbankan agar lebih intuitif dan ramah pengguna.</p>
        </div>
      </div>
      <div className="portfolio-card hidden">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">Backend API</div>
          <div className="p-name">Smart Home Controller</div>
          <p className="p-desc">Pengembangan RESTful API (Express.js) untuk menghubungkan perangkat IoT dengan aplikasi mobile kontrol rumah.</p>
        </div>
      </div>
    </div>
    <div className="portfolio-actions">
      <button id="btn-load-more" className="btn-outline-light">Selengkapnya →</button>
    </div>
  </section>

  {/*  WHY US  */}
  <section id="why">
    <div className="section-header centered">
      <div className="section-tag">Keunggulan</div>
      <h2 className="section-title">Kenapa Pilih WeabooCoding?</h2>
      <p className="section-sub">Kami memberikan nilai lebih dari sekadar kode—kami memberikan solusi terbaik untuk
        bisnismu.</p>
    </div>

    <div className="why-grid">
      <div className="why-card reveal reveal-zoom">
        <div className="why-icon">📱</div>
        <div className="why-title">Responsive Design</div>
        <p className="why-desc">Semua project kami dioptimalkan untuk tampilan terbaik di semua perangkat.</p>
      </div>
      <div className="why-card reveal reveal-zoom">
        <div className="why-icon">⚡</div>
        <div className="why-title">Fast Delivery</div>
        <p className="why-desc">Kami menghargai waktu klien. Pengerjaan cepat tanpa mengorbankan kualitas.</p>
      </div>
      <div className="why-card reveal reveal-zoom">
        <div className="why-icon">💰</div>
        <div className="why-title">Harga Terjangkau</div>
        <p className="why-desc">Kualitas premium dengan harga yang ramah di kantong mahasiswa maupun UMKM.</p>
      </div>
      <div className="why-card reveal reveal-zoom">
        <div className="why-icon">🆓</div>
        <div className="why-title">Free Consultation</div>
        <p className="why-desc">Konsultasi gratis sebelum project dimulai untuk memastikan kebutuhan terpenuhi.</p>
      </div>
      <div className="why-card reveal reveal-zoom">
        <div className="why-icon">🛡️</div>
        <div className="why-title">Garansi Revisi</div>
        <p className="why-desc">Kami memberikan garansi revisi sesuai kesepakatan hingga kamu puas.</p>
      </div>
      <div className="why-card reveal reveal-zoom">
        <div className="why-icon">🤝</div>
        <div className="why-title">Support After-Sales</div>
        <p className="why-desc">Dukungan purna jual tersedia untuk memastikan projectmu berjalan lancar.</p>
      </div>
      <div className="why-card reveal reveal-zoom">
        <div className="why-icon">🔐</div>
        <div className="why-title">Keamanan Data</div>
        <p className="why-desc">Data dan kebutuhan proyekmu aman bersama kami dengan NDA jika diperlukan.</p>
      </div>
      <div className="why-card reveal reveal-zoom">
        <div className="why-icon">🌟</div>
        <div className="why-title">Tim Berpengalaman</div>
        <p className="why-desc">Developer berpengalaman 3+ tahun siap menghandle berbagai jenis project.</p>
      </div>
    </div>
  </section>

  {/*  TESTIMONIALS  */}
  <section className="testimonials" id="testimoni">
    <div className="section-header centered">
      <div className="section-tag">Testimoni</div>
      <h2 className="section-title">Kata Klien Kami</h2>
      <div className="testi-slider-container reveal reveal-zoom">
      <div className="testi-track">
        <div className="testi-group">
          {/*  Card 1  */}
          <div className="testi-card">
            <div className="stars">★★★★★</div>
            <p className="testi-text">"Sempet panik parah karena deadline skripsi tinggal 2 minggu tapi web Laravel saya masih banyak error database. Untung ketemu WeabooCoding, 3 hari doang beres semua bug-nya + diajarin cara jelasin kodenya ke dosen penguji! 🙏"</p>
            <div className="testi-author">
              <div className="avatar av1">RI</div>
              <div>
                <div className="author-name">Rendi Ilham</div>
                <div className="author-role">Mahasiswa Sistem Informasi</div>
              </div>
            </div>
          </div>
          {/*  Card 2  */}
          <div className="testi-card">
            <div className="stars">★★★★★</div>
            <p className="testi-text">"Request custom e-commerce pakai Next.js dan payment gateway Midtrans. Timnya asik diajak diskusi, harganya masuk akal buat ukuran startup lokal, dan hasilnya beneran ngacir loadingnya."</p>
            <div className="testi-author">
              <div className="avatar av2">BK</div>
              <div>
                <div className="author-name">Bintang Kurniawan</div>
                <div className="author-role">Founder Fashion Brand</div>
              </div>
            </div>
          </div>
          {/*  Card 3  */}
          <div className="testi-card">
            <div className="stars">★★★★★</div>
            <p className="testi-text">"Desain UI/UX Figma untuk aplikasi kasir dari mereka bener-bener clean dan modern banget. Tim programmer internal saya juga bilang slice-nya gampang karena desainnya rapi dan terstruktur."</p>
            <div className="testi-author">
              <div className="avatar av3">CA</div>
              <div>
                <div className="author-name">Citra Ayu</div>
                <div className="author-role">Product Manager POS App</div>
              </div>
            </div>
          </div>
          {/*  Card 4  */}
          <div className="testi-card">
            <div className="stars">★★★★★</div>
            <p className="testi-text">"Bikin aplikasi absensi pakai Flutter + fitur radius GPS buat pegawai lapangan. Awalnya sempet ragu karena harganya miring, tapi ternyata supportnya luar biasa banget. Sampe dibantuin upload ke Playstore juga."</p>
            <div className="testi-author">
              <div className="avatar av4">DS</div>
              <div>
                <div className="author-name">Dika Saputra</div>
                <div className="author-role">HRD Perusahaan Kontraktor</div>
              </div>
            </div>
          </div>
          {/*  Card 5  */}
          <div className="testi-card">
            <div className="stars">★★★★★</div>
            <p className="testi-text">"Mentok di logic React JS buat state management udah berhari-hari nggak nemu solusinya. Sewa jasa Solve Code WeabooCoding sejam via Zoom, langsung ketahuan masalahnya dimana. Mantap banget mentornya jelasinnya gampang dimengerti."</p>
            <div className="testi-author">
              <div className="avatar av5">EF</div>
              <div>
                <div className="author-name">Eko Febriansyah</div>
                <div className="author-role">Junior Frontend Dev</div>
              </div>
            </div>
          </div>
          {/*  Card 6  */}
          <div className="testi-card">
            <div className="stars">★★★★★</div>
            <p className="testi-text">"Pesen website company profile buat perusahaan properti saya. Tampilannya elegan, SEO-nya jalan banget, dan bulan lalu masuk halaman 1 Google buat keyword pencarian daerah saya. ROI-nya dapet banget!"</p>
            <div className="testi-author">
              <div className="avatar av6">FA</div>
              <div>
                <div className="author-name">Fani Anindya</div>
                <div className="author-role">Direktur Properti & Real Estate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="testi-group">
          {/*  Card 1  */}
          <div className="testi-card">
            <div className="stars">★★★★★</div>
            <p className="testi-text">"Sempet panik parah karena deadline skripsi tinggal 2 minggu tapi web Laravel saya masih banyak error database. Untung ketemu WeabooCoding, 3 hari doang beres semua bug-nya + diajarin cara jelasin kodenya ke dosen penguji! 🙏"</p>
            <div className="testi-author">
              <div className="avatar av1">RI</div>
              <div>
                <div className="author-name">Rendi Ilham</div>
                <div className="author-role">Mahasiswa Sistem Informasi</div>
              </div>
            </div>
          </div>
          {/*  Card 2  */}
          <div className="testi-card">
            <div className="stars">★★★★★</div>
            <p className="testi-text">"Request custom e-commerce pakai Next.js dan payment gateway Midtrans. Timnya asik diajak diskusi, harganya masuk akal buat ukuran startup lokal, dan hasilnya beneran ngacir loadingnya."</p>
            <div className="testi-author">
              <div className="avatar av2">BK</div>
              <div>
                <div className="author-name">Bintang Kurniawan</div>
                <div className="author-role">Founder Fashion Brand</div>
              </div>
            </div>
          </div>
          {/*  Card 3  */}
          <div className="testi-card">
            <div className="stars">★★★★★</div>
            <p className="testi-text">"Desain UI/UX Figma untuk aplikasi kasir dari mereka bener-bener clean dan modern banget. Tim programmer internal saya juga bilang slice-nya gampang karena desainnya rapi dan terstruktur."</p>
            <div className="testi-author">
              <div className="avatar av3">CA</div>
              <div>
                <div className="author-name">Citra Ayu</div>
                <div className="author-role">Product Manager POS App</div>
              </div>
            </div>
          </div>
          {/*  Card 4  */}
          <div className="testi-card">
            <div className="stars">★★★★★</div>
            <p className="testi-text">"Bikin aplikasi absensi pakai Flutter + fitur radius GPS buat pegawai lapangan. Awalnya sempet ragu karena harganya miring, tapi ternyata supportnya luar biasa banget. Sampe dibantuin upload ke Playstore juga."</p>
            <div className="testi-author">
              <div className="avatar av4">DS</div>
              <div>
                <div className="author-name">Dika Saputra</div>
                <div className="author-role">HRD Perusahaan Kontraktor</div>
              </div>
            </div>
          </div>
          {/*  Card 5  */}
          <div className="testi-card">
            <div className="stars">★★★★★</div>
            <p className="testi-text">"Mentok di logic React JS buat state management udah berhari-hari nggak nemu solusinya. Sewa jasa Solve Code WeabooCoding sejam via Zoom, langsung ketahuan masalahnya dimana. Mantap banget mentornya jelasinnya gampang dimengerti."</p>
            <div className="testi-author">
              <div className="avatar av5">EF</div>
              <div>
                <div className="author-name">Eko Febriansyah</div>
                <div className="author-role">Junior Frontend Dev</div>
              </div>
            </div>
          </div>
          {/*  Card 6  */}
          <div className="testi-card">
            <div className="stars">★★★★★</div>
            <p className="testi-text">"Pesen website company profile buat perusahaan properti saya. Tampilannya elegan, SEO-nya jalan banget, dan bulan lalu masuk halaman 1 Google buat keyword pencarian daerah saya. ROI-nya dapet banget!"</p>
            <div className="testi-author">
              <div className="avatar av6">FA</div>
              <div>
                <div className="author-name">Fani Anindya</div>
                <div className="author-role">Direktur Properti & Real Estate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>

  {/*  CONTACT  */}
  <section id="contact">
    <div className="section-header">
      <div className="section-tag">Hubungi Kami</div>
      <h2 className="section-title">Siap Mulai Project?</h2>
      <p className="section-sub">Ceritakan kebutuhanmu dan kami akan berikan solusi terbaik dalam waktu singkat.</p>
    </div>

    <div className="contact-grid">
      <div className="reveal reveal-left">
        <h3>Kontak &amp; Sosial Media</h3>
        <p>Hubungi kami melalui channel yang kamu suka. Tim kami siap merespons dalam 1×24 jam.</p>
        <div className="contact-links">
          <a href="https://wa.me/6285157558469" className="contact-link" target="_blank">
            <span className="icon">💬</span> WhatsApp: +6285157558469
          </a>
          <a href="https://instagram.com/weaboocoding" className="contact-link" target="_blank">
            <span className="icon">📸</span> @weaboocoding
          </a>
        </div>
      </div>

      <div className="reveal reveal-right">
        <form className="contact-form" onsubmit="handleSubmit(event)">
          <div className="form-group">
            <label htmlFor="nama">Nama Lengkap</label>
            <input type="text" id="nama" placeholder="Masukkan nama kamu" required />
          </div>

          <div className="form-group">
            <label htmlFor="layanan">Jenis Layanan</label>
            <input type="text" id="layanan" placeholder="Website, Aplikasi, Tugas, dll." />
          </div>
          <div className="form-group">
            <label htmlFor="pesan">Deskripsi Project</label>
            <textarea id="pesan" placeholder="Ceritakan kebutuhan projectmu secara singkat..." required></textarea>
          </div>
          <button type="submit" className="btn-hero primary" style={{ alignSelf: 'flex-start' }}>Kirim Pesan 🚀</button>
        </form>
      </div>
    </div>
  </section>

  {/*  FOOTER  */}
  <footer>
    <div className="footer-grid">
      <div className="footer-brand">
        <div className="nav-logo-text" style={{ display: 'block', marginBottom: '.8rem' }}>Weaboo<span
            style={{ color: 'var(--blue-300)' }}>Coding</span></div>
        <p>Jasa coding profesional untuk website, aplikasi, tugas kuliah, dan solve code. Melayani dengan cepat,
          terpercaya, dan terjangkau.</p>
        <div className="footer-socials">
          <a href="#" className="social-btn">📸</a>
          <a href="#" className="social-btn">💼</a>
          <a href="#" className="social-btn">🐙</a>
        </div>
      </div>
      <div className="footer-col">
        <h4>Navigasi</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Layanan</h4>
        <ul>
          <li><a href="#services">Pembuatan Website</a></li>
          <li><a href="#services">Aplikasi Android</a></li>
          <li><a href="#services">Joki Tugas</a></li>
          <li><a href="#services">UI/UX Design</a></li>
          <li><a href="#services">Debug & Solve Code</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Kontak</h4>
        <ul>
          <li><a href="https://wa.me/6285157558469">WhatsApp</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 WeabooCoding. All rights reserved.</span>
      <span>Made with ❤️ by WeabooCoding Team</span>
    </div>
  </footer>

  {/*  FLOATING WA BUTTON  */}
  <a href="https://wa.me/6285157558469" className="float-wa" target="_blank" aria-label="Chat WhatsApp">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
    <span className="float-wa-tooltip">Chat WhatsApp</span>
  </a>

  <script src="js/script.js" defer></script>

    </>
  );
}

export default Home;
