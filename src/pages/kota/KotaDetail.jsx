import { track } from '@vercel/analytics';
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import useSEO from '../../hooks/useSEO';
import { kotaData } from '../../data/kotaData';
import { blogData } from '../../data/blogData';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NotFound from '../NotFound';
import '../../style.css';

function KotaDetail() {
  const { id } = useParams();
  const kota = kotaData.find(k => k.id === id);

  if (!kota) {
    return <NotFound />;
  }

  useSEO({
    title: `Jasa Joki IT Mahasiswa ${kota.name} | WeabooCoding`,
    description: kota.description,
    schema: ''
  });

  return (
    <>
      <Header />

      <section style={{ paddingTop: '150px', paddingBottom: '100px', paddingLeft: '5%', paddingRight: '5%' }}>
        <div className="section-header centered reveal reveal-zoom" style={{ maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
          <div className="section-tag" style={{ margin: '0 auto 15px auto', display: 'table' }}>{kota.province}</div>
          <h1 className="section-title">Layanan Joki IT di {kota.name}</h1>
          <p className="section-sub" style={{ color: 'var(--gray-600)', lineHeight: '1.8', marginBottom: '3rem' }}>
            {kota.description}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '3rem' }}>
            <div className="service-card" style={{ padding: '1.5rem', borderTop: '3px solid var(--primary)' }}>
              <h4 style={{ color: 'var(--blue-900)', fontSize: '1.1rem', marginBottom: '10px' }}>{kota.students} Mahasiswa</h4>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem' }}>Komunitas pelajar yang besar membutuhkan solusi IT yang handal.</p>
            </div>
            <div className="service-card" style={{ padding: '1.5rem', borderTop: '3px solid var(--primary)' }}>
              <h4 style={{ color: 'var(--blue-900)', fontSize: '1.1rem', marginBottom: '10px' }}>Pengerjaan Cepat</h4>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem' }}>Deadline ketat bukan masalah. Kami komit dengan timeline yang disepakati.</p>
            </div>
            <div className="service-card" style={{ padding: '1.5rem', borderTop: '3px solid var(--primary)' }}>
              <h4 style={{ color: 'var(--blue-900)', fontSize: '1.1rem', marginBottom: '10px' }}>Solusi Terbaik</h4>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem' }}>Dari tugas kampus hingga skripsi dan proyek IT.</p>
            </div>
          </div>
          
          <div style={{ marginTop: '50px', marginBottom: '40px', textAlign: 'left' }}>
            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '10px' }}>Proyek Mahasiswa {kota.name}</h2>
            <p className="section-sub" style={{ marginBottom: '30px' }}>Berikut adalah beberapa contoh proyek IT dan tugas akhir yang sering kami kerjakan untuk mahasiswa di wilayah {kota.name}.</p>
            
            <div className="portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div className="portfolio-card" style={{ textAlign: 'left' }}>
                <div className="p-thumb" style={{ padding: '0', overflow: 'hidden', height: '160px' }}>
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Portfolio Data Mining" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="p-body" style={{ padding: '20px' }}>
                  <div className="p-tag" style={{ color: 'var(--blue-500)', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '5px' }}>Skripsi / Data Mining</div>
                  <div className="p-name" style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '10px' }}>Sistem Prediksi Kelulusan</div>
                  <p className="p-desc" style={{ color: 'var(--gray-600)', fontSize: '0.9rem', lineHeight: '1.5' }}>Pembuatan sistem berbasis web menggunakan Python (Flask) dan algoritma Naive Bayes untuk tugas akhir mahasiswa IT.</p>
                </div>
              </div>

              <div className="portfolio-card" style={{ textAlign: 'left' }}>
                <div className="p-thumb" style={{ padding: '0', overflow: 'hidden', height: '160px' }}>
                  <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80" alt="Portfolio Web App" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="p-body" style={{ padding: '20px' }}>
                  <div className="p-tag" style={{ color: 'var(--blue-500)', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '5px' }}>Tugas Kuliah / Web App</div>
                  <div className="p-name" style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '10px' }}>Aplikasi Manajemen Inventaris</div>
                  <p className="p-desc" style={{ color: 'var(--gray-600)', fontSize: '0.9rem', lineHeight: '1.5' }}>Sistem informasi inventaris barang sederhana dibangun dengan Laravel dan MySQL dengan waktu pengerjaan 3 hari.</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <a href="https://wa.me/6285157558469" onClick={() => track('Klik_WA')} className="btn-hero primary">Konsultasi Sekarang</a>
            <Link to="/kota" className="btn-hero secondary">Lihat Kota Lain</Link>
          </div>
        </div>
      
        <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid #eee', textAlign: 'left' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Artikel & Edukasi Terbaru</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
            {blogData.slice(0, 5).map(b => (
              <Link key={b.id} to={`/blog/${b.id}`} style={{ color: 'var(--primary)', textDecoration: 'none', background: 'var(--gray-50)', padding: '12px 15px', borderRadius: '8px', borderLeft: '4px solid var(--primary)', display: 'block' }}>
                <strong style={{ color: 'var(--bg-dark)' }}>{b.title}</strong>
              </Link>
            ))}
          </div>
        </div>

      </section>
      <Footer />
    </>
  );
}

export default KotaDetail;
