import React from 'react';

export default function PortfolioSection() {
  return (
    <>
      {/* PortfolioSection */}
      
  <section className="portfolio" id="portfolio">
    <div className="section-header centered">
      <div className="section-tag">Portfolio</div>
      <h2 className="section-title">Project Terbaru Kami</h2>
      <p className="section-sub">Beberapa contoh project yang telah kami kerjakan dengan kualitas terbaik.</p>
    </div>

    <div className="portfolio-grid">
      <div className="portfolio-card reveal reveal-zoom">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img loading="lazy" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">E-Commerce</div>
          <div className="p-name">FashionHub Online</div>
          <p className="p-desc">Platform toko online (Next.js & Node.js) lengkap dengan payment gateway Midtrans & dashboard admin canggih.</p>
        </div>
      </div>
      <div className="portfolio-card reveal reveal-zoom">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img loading="lazy" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">Sistem Informasi</div>
          <div className="p-name">KlinikCare Digital</div>
          <p className="p-desc">Manajemen rekam medis (Laravel), antrean pasien real-time, dan integrasi WhatsApp API untuk notifikasi.</p>
        </div>
      </div>
      <div className="portfolio-card reveal reveal-zoom">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img loading="lazy" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">Android App</div>
          <div className="p-name">Absensi GeoTrack</div>
          <p className="p-desc">Aplikasi absensi pegawai (Flutter) berbasis lokasi GPS, radius kantor, dan face recognition sederhana.</p>
        </div>
      </div>
      <div className="portfolio-card reveal reveal-zoom">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img loading="lazy" src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">Joki Skripsi</div>
          <div className="p-name">Sistem Pakar AI</div>
          <p className="p-desc">Pembuatan sistem pakar diagnosa penyakit berbasis Python (Flask) untuk tugas akhir mahasiswa IT.</p>
        </div>
      </div>
      <div className="portfolio-card reveal reveal-zoom">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img loading="lazy" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">Web Company Profile</div>
          <div className="p-name">Cafe & Resto "Bite"</div>
          <p className="p-desc">Website modern (React) dengan animasi GSAP, fitur reservasi meja otomatis, dan menu digital interaktif.</p>
        </div>
      </div>
      <div className="portfolio-card reveal reveal-zoom">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img loading="lazy" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">Dashboard Admin</div>
          <div className="p-name">SalesPro Analytics</div>
          <p className="p-desc">Dashboard monitoring penjualan ERP (Vue.js + Tailwind) dengan visualisasi grafik (Chart.js).</p>
        </div>
      </div>
      <div className="portfolio-card hidden">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img loading="lazy" src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">Web Portal</div>
          <div className="p-name">Portal Sekolah Terpadu</div>
          <p className="p-desc">Portal akademik untuk SMA lengkap dengan sistem e-learning, jadwal, dan nilai (PHP Native / CodeIgniter).</p>
        </div>
      </div>
      <div className="portfolio-card hidden">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img loading="lazy" src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">Logistik App</div>
          <div className="p-name">KurirKu Tracking</div>
          <p className="p-desc">Sistem resi dan tracking pengiriman barang real-time terintegrasi dengan Google Maps API (MERN Stack).</p>
        </div>
      </div>
      <div className="portfolio-card hidden">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img loading="lazy" src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">Web Booking</div>
          <div className="p-name">Staycation Villa</div>
          <p className="p-desc">Website pemesanan villa dengan kalender ketersediaan, filter fasilitas, dan checkout instan.</p>
        </div>
      </div>
      <div className="portfolio-card hidden">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img loading="lazy" src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">Solve Code / Debug</div>
          <div className="p-name">Fix Bug Aplikasi POS</div>
          <p className="p-desc">Memperbaiki memory leak dan error kalkulasi pajak pada aplikasi kasir (React Native) klien dalam 24 jam.</p>
        </div>
      </div>
      <div className="portfolio-card hidden">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img loading="lazy" src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
        <div className="p-body">
          <div className="p-tag">UI/UX Design</div>
          <div className="p-name">Redesign App Bank</div>
          <p className="p-desc">Proyek desain ulang antarmuka (Figma) untuk aplikasi perbankan agar lebih intuitif dan ramah pengguna.</p>
        </div>
      </div>
      <div className="portfolio-card hidden">
        <div className="p-thumb" style={{ padding: '0', overflow: 'hidden' }}><img loading="lazy" src="https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80" alt="Portfolio Item" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}   /></div>
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

  
    </>
  );
}
