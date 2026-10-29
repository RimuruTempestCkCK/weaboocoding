import React, { useState } from 'react';

export default function PortfolioSection() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'FashionHub Online',
      tag: 'E-Commerce',
      desc: 'Platform toko online Next.js & Node.js lengkap dengan payment gateway Midtrans & dashboard admin real-time.',
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    },
    {
      title: 'KlinikCare Digital',
      tag: 'Sistem Informasi',
      desc: 'Manajemen rekam medis Laravel, antrean pasien real-time, dan integrasi WhatsApp API untuk notifikasi jadwal.',
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    },
    {
      title: 'Absensi GeoTrack',
      tag: 'Android App',
      desc: 'Aplikasi mobile Flutter absensi pegawai berbasis geolokasi GPS, radius kantor, dan face verification anti-fake GPS.',
      img: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80',
    },
    {
      title: 'Sistem Pakar AI Diagnosa',
      tag: 'Joki Skripsi & AI',
      desc: 'Pembuatan sistem pakar diagnosa penyakit berbasis Python (Flask) dan algoritma Naive Bayes untuk tugas akhir mahasiswa IT.',
      img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
    },
    {
      title: 'Cafe & Resto "Bite"',
      tag: 'Web Company Profile',
      desc: 'Website modern (React) dengan animasi interaktif, reservasi meja otomatis, dan menu digital interaktif.',
      img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    },
    {
      title: 'SalesPro Analytics ERP',
      tag: 'Dashboard Admin',
      desc: 'Dashboard visualisasi monitoring penjualan ERP (Vue.js + Tailwind) dengan analitik grafik interaktif.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    },
    {
      title: 'Portal Sekolah Terpadu',
      tag: 'Web Portal',
      desc: 'Portal akademik untuk SMA lengkap dengan modul e-learning, jadwal ujian, dan penilaian siswa.',
      img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
    },
    {
      title: 'KurirKu Tracking Logistik',
      tag: 'Logistik App',
      desc: 'Sistem resi dan live tracking kurir pengiriman barang terintegrasi dengan Google Maps API (MERN Stack).',
      img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80',
    },
    {
      title: 'Staycation Villa Booking',
      tag: 'Web Booking',
      desc: 'Website pemesanan villa dengan kalender ketersediaan dinamis, filter fasilitas, dan checkout instan.',
      img: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
    },
    {
      title: 'Solve Code: Fix Bug Aplikasi POS',
      tag: 'Solve Code / Debug',
      desc: 'Memperbaiki memory leak dan error kalkulasi pajak transaksi pada aplikasi kasir klien dalam tempo 24 jam.',
      img: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=80',
    },
    {
      title: 'Redesign UI/UX Mobile Banking',
      tag: 'UI/UX Design',
      desc: 'Proyek desain ulang antarmuka (Figma) untuk aplikasi finansial agar lebih intuitif, clean, dan user-friendly.',
      img: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&q=80',
    },
    {
      title: 'Smart Home Controller API',
      tag: 'Backend API & IoT',
      desc: 'Pengembangan RESTful API (Express.js & MQTT) untuk menghubungkan sensor perangkat IoT dengan mobile controller.',
      img: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="portfolio" style={{ padding: '90px 0', backgroundColor: '#ffffff' }}>
      <div className="w-layout-blockcontainer rt-container-main w-container">
        {/* Section Heading */}
        <div className="rt-heading-bottom-gap" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }} data-aos="fade-up" data-aos-duration="700">
          <div className="rt-sub-gap" style={{ justifyContent: 'center', display: 'flex' }}>
            <div className="rt-sub-text rt-sub-gredient">Portfolio &amp; Karya</div>
          </div>
          <h2 className="rt-gap-off">
            Proyek Pilihan yang Telah Kami Selesaikan <span className="rt-color-periwinkle-gray">dengan Presisi</span>
          </h2>
          <p className="rt-hero-v1-top-padding rt-gap-off rt-desktop-text-center" style={{ maxWidth: '650px', margin: '15px auto 0' }}>
            Bukti nyata komitmen kami dalam menghadirkan website berkinerja tinggi, aplikasi mobile andal, dan solusi coding tuntas.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginTop: '3.5rem',
          }}
        >
          {visibleProjects.map((p, idx) => (
            <div
              key={idx}
              className="rt-card-hover"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={(idx % 3) * 120}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(26,11,84,0.08)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ height: '210px', overflow: 'hidden', backgroundColor: '#f0eff4', position: 'relative' }}>
                <img
                  loading="lazy"
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
              </div>

              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span className="rt-service-pill" style={{ marginBottom: '0.85rem' }}>
                    {p.tag}
                  </span>

                  <div className="rt-text-style-h6" style={{ fontSize: '1.2rem', color: '#1a0b54', marginBottom: '0.55rem', lineHeight: 1.35 }}>
                    {p.title}
                  </div>

                  <p className="rt-gap-off" style={{ fontSize: '0.92rem', color: '#554d74', lineHeight: 1.65 }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && (
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button
              onClick={() => setShowAll(true)}
              className="rt-button-body rt-bg-color"
              style={{
                cursor: 'pointer',
                border: '1px solid rgba(26,11,84,0.15)',
                display: 'inline-block',
                background: 'transparent',
              }}
            >
              <div className="rt-button-text rt-btn-color">Tampilkan Seluruh Portfolio ({projects.length}) ↓</div>
              <div className="rt-button-body-overlay rt-color-blue"></div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
