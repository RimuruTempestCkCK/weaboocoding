import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { track } from '@vercel/analytics';
import SEO from '../../components/SEO';
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

  const jasa = jasaData.find((j) => j.id === cleanSlug);

  if (!jasa) {
    const slugNoHyphen = cleanSlug.replace(/-/g, '');

    // Check if it's a blog post (fuzzy match hyphens)
    const foundBlog = blogData.find((b) => b.id.replace(/-/g, '') === slugNoHyphen);
    if (foundBlog) {
      return <Navigate to={`/blog/${foundBlog.id}`} replace />;
    }

    // Check if it's a kota page (fuzzy match hyphens)
    const foundKota = kotaData.find((k) => k.id.replace(/-/g, '') === slugNoHyphen);
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

  const seoProps = {
    title: jasa.titleSEO,
    description: jasa.descSEO,
    schema: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: jasa.h1,
          provider: {
            '@type': 'Organization',
            name: 'WeabooCoding',
          },
          description: jasa.descSEO,
        },
        {
          '@type': 'FAQPage',
          name: 'FAQ Layanan WeabooCoding',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Apakah WeabooCoding melayani klien di luar Tangerang Selatan?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ya, kami melayani klien dari seluruh Indonesia secara remote dengan komunikasi yang lancar via WhatsApp dan Google Meet.',
              },
            },
            {
              '@type': 'Question',
              name: 'Berapa lama proses pengerjaan project?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Waktu pengerjaan bervariasi tergantung kompleksitas. Untuk website company profile biasanya 3-7 hari, sedangkan aplikasi custom bisa 2-4 minggu.',
              },
            },
            {
              '@type': 'Question',
              name: 'Apakah ada garansi atau layanan maintenance?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tentu saja! Kami memberikan garansi bebas bug dan layanan maintenance gratis selama periode tertentu setelah project selesai.',
              },
            },
          ],
        },
      ],
    }),
  };

  return (
    <>
      <SEO {...seoProps} />
      <Header />
      <main>
        {/* Service Hero Header */}
        <section className="rt-hero-10" style={{ padding: '80px 0 40px', backgroundColor: '#ffffff' }}>
          <div className="w-layout-blockcontainer rt-container-main w-container" style={{ maxWidth: '900px' }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#554d74', marginBottom: '1.5rem' }}>
              <Link to="/" style={{ color: '#554d74', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <a href="/#services" style={{ color: '#554d74', textDecoration: 'none' }}>Layanan</a>
              <span>/</span>
              <span style={{ color: '#2b4bee', fontWeight: 500 }}>{jasa.h1}</span>
            </div>

            <div className="rt-sub-gap">
              <div className="rt-sub-text rt-sub-gredient">Layanan Profesional</div>
            </div>

            <h1
              style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 800,
                color: '#1a0b54',
                lineHeight: 1.25,
                margin: '15px 0',
              }}
            >
              {jasa.h1}
            </h1>

            <p style={{ fontSize: '1.1rem', color: '#554d74', lineHeight: 1.7 }}>
              {jasa.descSEO}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section style={{ padding: '40px 0 100px', backgroundColor: '#ffffff' }}>
          <div className="w-layout-blockcontainer rt-container-main w-container" style={{ maxWidth: '850px' }}>
            {/* HTML Content from Jasa */}
            <div
              className="w-richtext"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.05rem',
                lineHeight: 1.85,
                color: '#342f4c',
              }}
              dangerouslySetInnerHTML={{ __html: jasa.htmlContent }}
            />

            {/* Taskopia Style CTA Box */}
            <div
              style={{
                marginTop: '4rem',
                backgroundColor: '#1a0b54',
                borderRadius: '20px',
                padding: '2.5rem',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.5rem',
              }}
            >
              <div style={{ flex: 1, minWidth: '280px' }}>
                <h3 style={{ fontFamily: 'Geist, sans-serif', color: '#ffffff', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                  Tertarik Menggunakan Layanan Ini?
                </h3>
                <p style={{ color: '#bacbe8', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  Konsultasikan spesifikasi kebutuhan Anda secara langsung bersama tim teknis WeabooCoding. Dapatkan penawaran harga dan timeline terbaik.
                </p>
              </div>

              <div>
                <a
                  href={`https://wa.me/6285157558469?text=${encodeURIComponent(`Halo WeabooCoding! Saya tertarik dengan layanan ${jasa.h1}. Boleh info penawarannya?`)}`}
                  onClick={() => track('Klik_WA')}
                  target="_blank"
                  rel="noreferrer"
                  className="rt-button-body"
                  style={{ textDecoration: 'none', backgroundColor: '#2b4bee', display: 'inline-block' }}
                >
                  <div className="rt-button-text">💬 Konsultasi via WhatsApp</div>
                  <div className="rt-button-body-overlay"></div>
                </a>
              </div>
            </div>

            {/* Other Services Link */}
            <div style={{ marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(26,11,84,0.08)' }}>
              <div className="rt-text-style-h6" style={{ fontSize: '1.2rem', color: '#1a0b54', marginBottom: '1.2rem' }}>
                Layanan Terkait Lainnya
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                {jasaData.filter((item) => item.id !== cleanSlug).slice(0, 6).map((item) => (
                  <Link
                    key={item.id}
                    to={`/${item.id}`}
                    style={{
                      textDecoration: 'none',
                      backgroundColor: '#faf9fc',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(26,11,84,0.06)',
                      display: 'block',
                    }}
                  >
                    <div style={{ color: '#1a0b54', fontWeight: 600, fontSize: '0.9rem' }}>
                      {item.h1}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default JasaDetail;
