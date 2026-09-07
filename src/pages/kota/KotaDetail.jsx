import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import useSEO from '../../hooks/useSEO';
import { kotaData } from '../../data/kotaData';
import Breadcrumb from '../../components/Breadcrumb';
import '../../style.css';

function KotaDetail() {
  const { id } = useParams();
  const kota = kotaData.find(k => k.id === id);

  if (!kota) {
    return <Navigate to="/kota" replace />;
  }

  useSEO({
    title: `Jasa Joki IT Mahasiswa ${kota.name} | WeabooCoding`,
    description: kota.description,
    schema: ''
  });

  const breadcrumbItems = [
    { label: 'Beranda', link: '/' },
    { label: 'Kota', link: '/kota' },
    { label: kota.name }
  ];

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
          <li><a href="/kota">Kota</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </nav>

      <section style={{ paddingTop: '150px', paddingBottom: '100px', paddingLeft: '5%', paddingRight: '5%' }}>
        <div className="section-header centered reveal reveal-zoom" style={{ maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '20px' }}>
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className="section-tag" style={{ margin: '0 auto 15px auto', display: 'table' }}>{kota.province}</div>
          <h1 className="section-title">Layanan Joki IT di {kota.name}</h1>
          <p className="section-sub" style={{ color: 'var(--gray-600)', lineHeight: '1.8', marginBottom: '3rem' }}>
            {kota.description}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '3rem' }}>
            <div className="service-card" style={{ padding: '1.5rem' }}>
              <div className="s-icon" style={{ margin: '0 auto 15px auto' }}>🎓</div>
              <h4 style={{ color: 'var(--blue-900)', fontSize: '1.1rem', marginBottom: '10px' }}>{kota.students} Mahasiswa</h4>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem' }}>Komunitas pelajar yang besar membutuhkan solusi IT yang handal.</p>
            </div>
            <div className="service-card" style={{ padding: '1.5rem' }}>
              <div className="s-icon" style={{ margin: '0 auto 15px auto' }}>⚡</div>
              <h4 style={{ color: 'var(--blue-900)', fontSize: '1.1rem', marginBottom: '10px' }}>Pengerjaan Cepat</h4>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem' }}>Deadline ketat bukan masalah. Kami komit dengan timeline yang disepakati.</p>
            </div>
            <div className="service-card" style={{ padding: '1.5rem' }}>
              <div className="s-icon" style={{ margin: '0 auto 15px auto' }}>💡</div>
              <h4 style={{ color: 'var(--blue-900)', fontSize: '1.1rem', marginBottom: '10px' }}>Solusi Terbaik</h4>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem' }}>Dari tugas kampus hingga skripsi dan proyek IT.</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <a href="https://wa.me/6285157558469" className="btn-hero primary">💬 Konsultasi Sekarang</a>
            <Link to="/kota" className="btn-hero secondary">Lihat Kota Lain</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default KotaDetail;
