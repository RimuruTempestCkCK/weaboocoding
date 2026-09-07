import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import useSEO from '../../hooks/useSEO';
import { jasaData } from '../../data/jasaData';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../style.css';

function JasaDetail() {
  const { slug } = useParams();
  const jasa = jasaData.find(j => j.id === slug);

  if (!jasa) {
    return <Navigate to="/#services" replace />;
  }

  useSEO({
    title: jasa.titleSEO,
    description: jasa.descSEO,
    schema: `{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "${jasa.h1}",
      "provider": {
        "@type": "Organization",
        "name": "WeabooCoding"
      },
      "description": "${jasa.descSEO}"
    }`
  });

  return (
    <>
      <Header />

      <section style={{ padding: '150px 5% 100px', maxWidth: '800px', margin: 'auto', lineHeight: '1.8', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--bg-dark)' }}>{jasa.h1}</h1>
        
        <div dangerouslySetInnerHTML={{ __html: jasa.htmlContent }} style={{ marginBottom: '40px' }} />

        <div style={{ marginTop: '40px', padding: '20px', background: 'var(--gray-50)', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '10px' }}>Butuh Bantuan Lebih Lanjut?</h3>
          <p style={{ marginBottom: '15px' }}>Jika Anda sedang mencari jasa pembuatan aplikasi, website, atau jasa coding profesional, WeabooCoding siap membantu.</p>
          <a href="https://wa.me/6285157558469" target="_blank" rel="noreferrer" className="btn-hero primary" style={{ display: 'inline-block' }}>💬 Konsultasi Sekarang</a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default JasaDetail;
