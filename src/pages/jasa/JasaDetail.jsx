import { track } from '@vercel/analytics';
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import useSEO from '../../hooks/useSEO';
import { jasaData } from '../../data/jasaData';
import { blogData } from '../../data/blogData';
import { kotaData } from '../../data/kotaData';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NotFound from '../NotFound';
import '../../style.css';

function JasaDetail() {
  const { slug } = useParams();
  
  // Clean slug if it's a legacy .html link
  const cleanSlug = slug.endsWith('.html') ? slug.slice(0, -5) : slug;

  const jasa = jasaData.find(j => j.id === cleanSlug);

  if (!jasa) {
    const slugNoHyphen = cleanSlug.replace(/-/g, '');
    
    // Check if it's a blog post (fuzzy match hyphens)
    const foundBlog = blogData.find(b => b.id.replace(/-/g, '') === slugNoHyphen);
    if (foundBlog) {
      return <Navigate to={`/blog/${foundBlog.id}`} replace />;
    }
    
    // Check if it's a kota page (fuzzy match hyphens)
    const foundKota = kotaData.find(k => k.id.replace(/-/g, '') === slugNoHyphen);
    if (foundKota) {
      return <Navigate to={`/kota/${foundKota.id}`} replace />;
    }
    // Check for hardcoded old root pages
    if (cleanSlug === 'blog') return <Navigate to="/blog" replace />;
    if (cleanSlug === 'weaboocoding') return <Navigate to="/weaboocoding" replace />;
    if (cleanSlug === 'index') return <Navigate to="/" replace />;
    
    return <NotFound />;
  }

  // If we found a valid jasa but the URL still has .html, redirect to clean URL
  if (slug.endsWith('.html')) {
    return <Navigate to={`/${cleanSlug}`} replace />;
  }

  useSEO({
    title: jasa.titleSEO,
    description: jasa.descSEO,
    schema: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": jasa.h1,
          "provider": {
            "@type": "Organization",
            "name": "WeabooCoding"
          },
          "description": jasa.descSEO
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Apakah WeabooCoding melayani klien di luar Tangerang Selatan?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, kami melayani klien dari seluruh Indonesia secara remote dengan komunikasi yang lancar via WhatsApp dan Google Meet."
              }
            },
            {
              "@type": "Question",
              "name": "Berapa lama proses pengerjaan project?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Waktu pengerjaan bervariasi tergantung kompleksitas. Untuk website company profile biasanya 3-7 hari, sedangkan aplikasi custom bisa 2-4 minggu."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah ada garansi atau layanan maintenance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tentu saja! Kami memberikan garansi bebas bug dan layanan maintenance gratis selama periode tertentu setelah project selesai."
              }
            }
          ]
        }
      ]
    })
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
          <a href="https://wa.me/6285157558469" onClick={() => track('Klik_WA')} target="_blank" rel="noreferrer" className="btn-hero primary" style={{ display: 'inline-block' }}>💬 Konsultasi Sekarang</a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default JasaDetail;
