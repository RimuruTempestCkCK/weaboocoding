import React from 'react';
import '../style.css';
import useSEO from '../hooks/useSEO';

function JasaSistemInformasi() {
  useSEO({
    title: `Jasa Pembuatan Sistem Informasi | WeabooCoding`,
    description: `Jasa pembuatan sistem informasi custom untuk kampus, sekolah, rumah sakit, dan perusahaan oleh WeabooCoding di Tangerang Selatan.`,
    schema: ``
  });

  return (
    <>
      
  <nav id="navbar">
    <a href="/" className="nav-logo">
      <div className="nav-logo-text">Weaboo<span>Coding</span></div>
    </a>
    <ul className="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/#services">Services</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/#contact">Contact</a></li>
    </ul>
  </nav>

  <section style={{ padding: '150px 5% 100px', maxWidth: '800px', margin: 'auto' }}>
    <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Jasa Pembuatan Sistem Informasi Terintegrasi</h1>
    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
      Jasa pembuatan sistem informasi custom untuk kampus, sekolah, rumah sakit, dan perusahaan oleh WeabooCoding di Tangerang Selatan. WeabooCoding hadir sebagai solusi terpercaya untuk Anda yang membutuhkan layanan ini, khususnya di wilayah Tangerang Selatan dan seluruh Indonesia secara online.
    </p>
    <h2>Siapa yang Cocok Menggunakan Layanan Ini?</h2>
    <ul style={{ lineHeight: '1.8', marginBottom: '20px', paddingLeft: '20px' }}>
      <li>Mahasiswa IT yang membutuhkan bantuan tugas atau skripsi</li>
      <li>UMKM yang ingin go digital dengan teknologi modern</li>
      <li>Startup dan perusahaan menengah</li>
    </ul>
    <h2>Proses Kerja WeabooCoding</h2>
    <ol style={{ lineHeight: '1.8', marginBottom: '20px', paddingLeft: '20px' }}>
      <li>Konsultasi gratis mengenai kebutuhan Anda</li>
      <li>Penentuan estimasi biaya dan waktu</li>
      <li>Proses pengerjaan dan reporting berkala</li>
      <li>Testing, revisi (jika ada), dan serah terima (delivery)</li>
    </ol>
    <div style={{ marginTop: '40px' }}>
      <a href="https://wa.me/6285157558469" className="btn-hero primary">💬 Konsultasi Sekarang</a>
      <a href="/#portfolio" className="btn-hero secondary" style={{ marginLeft: '15px' }}>Lihat Portfolio</a>
    </div>
  </section>

    </>
  );
}

export default JasaSistemInformasi;
