import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

function Blog() {
  useSEO({
    title: `WeabooCoding – Jasa Pembuatan Website, Aplikasi & Jasa Coding Profesional`,
    description: ``,
    schema: `{
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "WeabooCoding",
    "image": "https://weaboocoding.vercel.app/images/logo.png",
    "@id": "https://weaboocoding.vercel.app/",
    "url": "https://weaboocoding.vercel.app/",
    "telephone": "+6285157558469",
    "priceRange": "Rp 500.000 - Rp 10.000.000",
    "description": "Layanan jasa pembuatan website profesional, pengembangan aplikasi Android dan Web, jasa joki tugas coding, serta UI/UX Design dengan kualitas tinggi.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    },
    "sameAs": [
      "https://instagram.com/weaboocoding"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://weaboocoding.vercel.app/#services",
      "priceCurrency": "IDR",
      "price": "500000",
      "itemOffered": {
        "@type": "Service",
        "name": "Jasa Pembuatan Website & Coding"
      }
    }
  }`
  });

  const articles = [
    {
        "slug": "biaya-membuat-aplikasi-android",
        "tag": "ESTIMASI BIAYA",
        "title": "Berapa Biaya Membuat Aplikasi Android di 2026?",
        "desc": "Hitung estimasi budget pembuatan aplikasi mobile impian Anda dari nol sampai rilis di Play Store.",
        "img": "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&q=80"
    },
    {
        "slug": "biaya-membuat-website-2026",
        "tag": "ESTIMASI BIAYA",
        "title": "Rincian Biaya Pembuatan Website Tahun 2026",
        "desc": "Mulai dari domain, hosting, hingga jasa development. Ketahui berapa modal yang pas untuk website Anda.",
        "img": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
        "slug": "cara-memilih-jasa-pembuatan-website-terpercaya",
        "tag": "TIPS BISNIS",
        "title": "Cara Memilih Jasa Pembuatan Website Terpercaya",
        "desc": "Hati-hati penipuan! Panduan memilih agensi pembuatan website yang profesional dan amanah.",
        "img": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
    },
    {
        "slug": "jasa-coding-mahasiswa",
        "tag": "LAYANAN KAMI",
        "title": "Jasa Coding Mahasiswa Termurah",
        "desc": "Pusing error saat skripsi? Kami menyediakan layanan bantuan perbaikan dan pembuatan program mahasiswa.",
        "img": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
    },
    {
        "slug": "jasa-coding-tangerang-selatan",
        "tag": "LAYANAN KAMI",
        "title": "Jasa Coding Tangerang Selatan Terbaik",
        "desc": "Solusi pembuatan software, aplikasi, dan website terbaik di area Tangsel dan sekitarnya.",
        "img": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
    },
    {
        "slug": "kenapa-harus-belajar-react-js",
        "tag": "PROGRAMMING",
        "title": "Kenapa Harus Belajar React JS di Tahun Ini?",
        "desc": "Library frontend buatan Facebook ini masih menjadi primadona di dunia kerja IT. Ketahui alasan kenapa React sangat populer.",
        "img": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
    },
    {
        "slug": "memilih-tech-stack-untuk-startup",
        "tag": "WEB DEV",
        "title": "Panduan Memilih Tech Stack yang Tepat untuk Startup",
        "desc": "React, Vue, Laravel, atau Node.js? Jangan sampai salah pilih teknologi untuk membangun produk digital bisnis Anda.",
        "img": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
    },
    {
        "slug": "mengatasi-error-500-php-laravel",
        "tag": "TUTORIAL PHP",
        "title": "5 Cara Paling Ampuh Mengatasi Error 500 di PHP & Laravel",
        "desc": "Sering ketemu error 500 Internal Server Error saat hosting aplikasi PHP/Laravel? Jangan panik, begini cara debugnya.",
        "img": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
    },
    {
        "slug": "pentingnya-website-untuk-toko-baju",
        "tag": "BISNIS UMKM",
        "title": "Pentingnya Punya Website Sendiri untuk Toko Baju Online",
        "desc": "Masih jualan baju cuma lewat IG/WA? Ini alasan kenapa toko baju Anda butuh website e-commerce sendiri agar omset naik.",
        "img": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80"
    },
    {
        "slug": "portofolio-weaboocoding",
        "tag": "INFO",
        "title": "Portofolio WeabooCoding",
        "desc": "Lihat hasil karya dan sistem informasi yang telah berhasil kami bangun untuk klien.",
        "img": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
        "slug": "tips-lolos-sidang-skripsi-it",
        "tag": "TIPS MAHASISWA",
        "title": "Tips Lolos Sidang Skripsi IT Walaupun Codingan Dibantu Joki",
        "desc": "Memakai jasa bantuan coding sah-sah saja asalkan Anda bisa mempertanggungjawabkannya. Ini rahasia lulus sidang.",
        "img": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
    },
    {
        "slug": "tips-ui-ux-ramah-pengguna",
        "tag": "UI/UX DESIGN",
        "title": "7 Prinsip UI/UX yang Bikin Pengguna Betah di Aplikasi Anda",
        "desc": "Desain yang cantik tidak selalu berarti mudah digunakan. Pelajari 7 prinsip dasar merancang antarmuka yang user-friendly.",
        "img": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
    },
    {
        "slug": "website-company-profile-umkm",
        "tag": "BISNIS UMKM",
        "title": "Keuntungan Website Company Profile untuk UMKM",
        "desc": "Tingkatkan kredibilitas bisnis Anda di mata klien dan investor dengan company profile modern.",
        "img": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
        "slug": "pentingnya-seo-untuk-website-bisnis",
        "tag": "DIGITAL MARKETING",
        "title": "Pentingnya SEO untuk Website Bisnis Anda",
        "desc": "Ketahui mengapa SEO sangat penting untuk meningkatkan penjualan dan traffic website bisnis Anda di tahun ini.",
        "img": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80"
    },
    {
        "slug": "keuntungan-membuat-aplikasi-mobile-untuk-toko",
        "tag": "BISNIS UMKM",
        "title": "Keuntungan Membuat Aplikasi Mobile untuk Toko",
        "desc": "Pelajari keuntungan tak terduga dalam membuat aplikasi mobile untuk UMKM dan toko retail Anda.",
        "img": "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&q=80"
    },
    {
        "slug": "cara-belajar-coding-untuk-pemula-2026",
        "tag": "TUTORIAL",
        "title": "Cara Belajar Coding untuk Pemula Tahun 2026",
        "desc": "Panduan langkah demi langkah cara belajar coding untuk pemula yang ingin berkarir sebagai programmer.",
        "img": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
    },
    {
        "slug": "apa-itu-ui-ux-dan-mengapa-penting",
        "tag": "UI/UX DESIGN",
        "title": "Apa itu UI/UX dan Mengapa Penting?",
        "desc": "Memahami konsep UI dan UX dalam desain aplikasi, serta mengapa UI/UX yang baik dapat meningkatkan konversi.",
        "img": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80"
    },
    {
        "slug": "tips-mencari-jasa-pembuatan-skripsi-it",
        "tag": "TIPS MAHASISWA",
        "title": "Tips Mencari Jasa Pembuatan Skripsi IT Terpercaya",
        "desc": "Jangan salah pilih. Berikut tips aman dalam mencari jasa bantuan pembuatan skripsi dan tugas akhir.",
        "img": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
    },
    {
        "slug": "jasa-pembuatan-website-tangerang-selatan-murah",
        "tag": "LAYANAN LOKAL",
        "title": "Jasa Pembuatan Website Tangerang Selatan Murah & Profesional",
        "desc": "Mencari jasa pembuatan website di Tangsel? Kami menawarkan pembuatan web custom dengan harga terjangkau dan kualitas premium.",
        "img": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80"
    },
    {
        "slug": "cara-mengatasi-website-lambat",
        "tag": "WEB DEV",
        "title": "Cara Ampuh Mengatasi Website yang Lambat Diakses",
        "desc": "Website loading lama? Pelajari teknik optimasi kecepatan website agar pengunjung tidak kabur.",
        "img": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
        "slug": "keunggulan-framework-laravel",
        "tag": "PROGRAMMING",
        "title": "10 Keunggulan Framework Laravel untuk Website Anda",
        "desc": "Mengapa banyak software house menggunakan Laravel? Temukan alasan keamanan dan skalabilitasnya.",
        "img": "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80"
    },
    {
        "slug": "pentingnya-responsif-design",
        "tag": "UI/UX DESIGN",
        "title": "Pentingnya Responsive Design di Era Mobile First",
        "desc": "Lebih dari 70% trafik internet berasal dari HP. Pastikan website Anda responsif di semua perangkat.",
        "img": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
    },
    {
        "slug": "jasa-pembuatan-aplikasi-kasir-pos",
        "tag": "LAYANAN BISNIS",
        "title": "Jasa Pembuatan Aplikasi Kasir POS Custom",
        "desc": "Tingkatkan efisiensi toko dengan aplikasi kasir POS berbasis web atau Android yang dibuat khusus.",
        "img": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
    },
    {
        "slug": "perbedaan-ui-dan-ux",
        "tag": "UI/UX DESIGN",
        "title": "Perbedaan UI dan UX yang Wajib Anda Tahu",
        "desc": "UI dan UX sering tertukar. Berikut penjelasan detail tentang perbedaan ranah kerja dan output desainnya.",
        "img": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
    },
    {
        "slug": "tips-keamanan-website",
        "tag": "WEB SECURITY",
        "title": "Tips Mengamankan Website dari Serangan Hacker",
        "desc": "Jangan biarkan data Anda diretas. Terapkan 5 standar keamanan website ini sekarang juga.",
        "img": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80"
    },
    {
        "slug": "bikin-website-berbasis-wordpress-vs-custom",
        "tag": "WEB DEV",
        "title": "WordPress vs Custom Code: Mana yang Lebih Baik?",
        "desc": "Bingung memilih antara CMS WordPress atau pembuatan website dari nol? Ini perbandingannya.",
        "img": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
    },
    {
        "slug": "pentingnya-maintenance-website",
        "tag": "TIPS BISNIS",
        "title": "Pentingnya Jasa Maintenance Website Secara Berkala",
        "desc": "Website bukan sekadar dibuat lalu ditinggal. Maintenance rutin mencegah error dan menjaga performa.",
        "img": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
        "slug": "cara-memulai-karir-sebagai-programmer",
        "tag": "TIPS MAHASISWA",
        "title": "Cara Memulai Karir Sebagai Programmer di 2026",
        "desc": "Mulai dari belajar algoritma hingga menyusun portofolio. Ini roadmap lengkap karir developer.",
        "img": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
    },
    {
        "slug": "jasa-debug-dan-solve-code-tercepat",
        "tag": "LAYANAN KAMI",
        "title": "Jasa Debug dan Solve Code Tercepat",
        "desc": "Error code bikin stres? Kami bantu perbaiki source code Anda dengan cepat dan rapi.",
        "img": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
    },
    {
        "slug": "mengapa-harus-memilih-weaboocoding",
        "tag": "INFO",
        "title": "Mengapa Harus Memilih Layanan WeabooCoding?",
        "desc": "Inilah komitmen kami dalam memberikan layanan IT terbaik, mulai dari konsultasi hingga deployment.",
        "img": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
    }
];

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

  <section className="blog-header" style={{ paddingTop: '150px', paddingBottom: '50px', background: 'var(--gray-50)', textAlign: 'center' }}>
    <div className="section-tag">Blog & Artikel</div>
    <h1 className="hero-title">Tips, Tutorial & Insight</h1>
    <p className="section-sub" style={{ margin: '0 auto' }}>Baca artikel terbaru seputar web development, programming, dan teknologi dari WeabooCoding.</p>
  </section>

  <section className="blog-list" style={{ padding: '60px 6%' }}>
    <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
      {articles.map((item, i) => (
        <Link to={`/blog/${item.slug}`} key={i} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="pricing-card reveal reveal-zoom" style={{ padding: '0', overflow: 'hidden' }}>
            <img src={item.img} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '25px' }}>
              <div className="section-tag" style={{ fontSize: '0.8rem', marginBottom: '10px' }}>{item.tag}</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '20px' }}>{item.desc}</p>
              <span style={{ color: 'var(--primary)', fontWeight: '600' }}>Baca Selengkapnya &rarr;</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>{/*  FOOTER  */}
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

export default Blog;
