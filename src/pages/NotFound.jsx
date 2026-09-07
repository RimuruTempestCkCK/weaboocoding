import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css';

function NotFound() {
  return (
    <>
      <Header />
      <section style={{ padding: '200px 5% 150px', textAlign: 'center', minHeight: '60vh' }}>
        <h1 style={{ fontSize: '5rem', color: 'var(--blue-500)', marginBottom: '20px' }}>404</h1>
        <h2 style={{ fontSize: '2rem', color: 'var(--bg-dark)', marginBottom: '20px' }}>Halaman Tidak Ditemukan</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '40px' }}>
          Maaf, halaman yang Anda cari mungkin telah dihapus, dipindahkan, atau tidak pernah ada.
        </p>
        <Link to="/" className="btn-hero primary">
          Kembali ke Beranda
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default NotFound;
