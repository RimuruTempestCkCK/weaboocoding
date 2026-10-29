import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Halaman Tidak Ditemukan | WeabooCoding</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header />
      <main>
        <div className="rt-utility-404-page-wrap" style={{ minHeight: '70vh', padding: '100px 5% 120px' }}>
          <div className="rt-utility-page-content">
            <div style={{ maxWidth: '650px', margin: '0 auto' }}>
              <img
                src="/images/69268ffa2be8b119d1fdd4b1_taskopia-404.webp"
                alt="404 Not Found"
                style={{ width: '100%', height: 'auto', maxHeight: '350px', objectFit: 'contain' }}
              />
            </div>
            <div className="rt-utility-404-text-wrap" style={{ marginTop: '2rem' }}>
              <h2 className="rt-gap-off" style={{ fontFamily: 'Geist, sans-serif', color: '#1a0b54', fontSize: '2.2rem' }}>
                Oops ! Halaman Tidak Ditemukan
              </h2>
              <div className="rt-utility-404-para" style={{ color: '#554d74', fontSize: '1.05rem', marginTop: '0.8rem' }}>
                Halaman yang Anda tuju mungkin telah dipindahkan, dihapus, atau tautan yang Anda masukkan salah.
              </div>
            </div>
            <div className="rt-utility-404-button-wrap" style={{ marginTop: '2.5rem' }}>
              <Link to="/" className="rt-button-body w-inline-block" style={{ textDecoration: 'none' }}>
                <div className="rt-button-text">Kembali ke Beranda</div>
                <div className="rt-button-body-overlay"></div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
