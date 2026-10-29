import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { track } from '@vercel/analytics';
import SEO from '../../components/SEO';
import { blogData } from '../../data/blogData';
import { kotaData } from '../../data/kotaData';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NotFound from '../NotFound';
import '../../style.css';

function BlogDetail() {
  const { slug } = useParams();
  const blog = blogData.find((b) => b.id === slug);

  if (!blog) {
    return <NotFound />;
  }

  const seoProps = {
    title: `${blog.title} | WeabooCoding`,
    description: blog.description,
    keywords: blog.keywords,
    schema: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: blog.title,
      image: blog.image,
      author: {
        '@type': 'Organization',
        name: 'WeabooCoding',
      },
      publisher: {
        '@type': 'Organization',
        name: 'WeabooCoding',
        logo: {
          '@type': 'ImageObject',
          url: 'https://weaboocoding.com/images/logo.png',
        },
      },
      datePublished: '2026-09-05',
      description: blog.description,
    }),
  };

  return (
    <>
      <SEO {...seoProps} />
      <Header />
      <main>
        {/* Article Header */}
        <section style={{ padding: '80px 0 40px', backgroundColor: '#ffffff' }}>
          <div className="w-layout-blockcontainer rt-container-main w-container" style={{ maxWidth: '900px' }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#554d74', marginBottom: '1.5rem' }}>
              <Link to="/" style={{ color: '#554d74', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link to="/blog/" style={{ color: '#554d74', textDecoration: 'none' }}>Blog</Link>
              <span>/</span>
              <span style={{ color: '#2b4bee', fontWeight: 500 }}>{blog.tag}</span>
            </div>

            {/* Tag & Title */}
            <div className="rt-sub-gap" style={{ marginBottom: '1rem' }}>
              <div className="rt-sub-text rt-sub-gredient">{blog.tag}</div>
            </div>

            <h1
              style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 800,
                color: '#1a0b54',
                lineHeight: 1.25,
                marginBottom: '1rem',
              }}
            >
              {blog.title}
            </h1>

            <p style={{ fontSize: '1.1rem', color: '#554d74', lineHeight: 1.7, marginBottom: '2rem' }}>
              {blog.subtitle || blog.description}
            </p>

            {/* Featured Image */}
            <div style={{ borderRadius: '20px', overflow: 'hidden', maxHeight: '450px', backgroundColor: '#f0eff4', marginBottom: '3rem' }}>
              <img
                loading="lazy"
                src={blog.image}
                alt={blog.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="rt-blog-post" style={{ padding: '0 0 100px', backgroundColor: '#ffffff' }}>
          <div className="w-layout-blockcontainer rt-container-main w-container" style={{ maxWidth: '850px' }}>
            <div
              className="w-richtext"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.05rem',
                lineHeight: 1.85,
                color: '#342f4c',
              }}
            >
              {blog.content ? (
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              ) : (
                <>
                  <h2 style={{ fontFamily: 'Geist, sans-serif', color: '#1a0b54', fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    Pengantar: Mengapa Aspek Ini Sangat Krusial?
                  </h2>
                  <p>
                    Di era transformasi digital yang melaju pesat, memahami <strong>{blog.title}</strong> menjadi fondasi utama bagi kesuksesan strategi bisnis maupun teknikal Anda. Seringkali detail arsitektur dan eksekusi diabaikan, yang akhirnya berujung pada pembengkakan biaya, inefisiensi waktu, hingga kegagalan peluncuran sistem.
                  </p>
                  <p>
                    Sebagai partner teknologi terpercaya, tim WeabooCoding selalu menekankan pendekatan berbasis best-practice: performa tinggi, struktur modular, serta dokumentasi yang transparan agar produk digital Anda siap berkembang jangka panjang.
                  </p>

                  <h2 style={{ fontFamily: 'Geist, sans-serif', color: '#1a0b54', fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    Faktor Utama yang Harus Diperhatikan
                  </h2>
                  <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                    <li style={{ marginBottom: '0.6rem' }}>
                      <strong>Skalabilitas &amp; Kualitas Kode:</strong> Memastikan arsitektur backend dan frontend mampu menahan lonjakan pengguna tanpa penurunan kecepatan.
                    </li>
                    <li style={{ marginBottom: '0.6rem' }}>
                      <strong>Keamanan Data:</strong> Menerapkan standar enkripsi modern, proteksi SQL Injection, dan sanitasi payload data.
                    </li>
                    <li style={{ marginBottom: '0.6rem' }}>
                      <strong>User Experience (UX):</strong> Desain antarmuka yang bersih, intuitif, dan responsif di semua resolusi layar gadget.
                    </li>
                    <li style={{ marginBottom: '0.6rem' }}>
                      <strong>Dukungan &amp; Maintenance:</strong> Ketersediaan tim ahli untuk menangani pembaruan dependensi dan perbaikan bug secara berkala.
                    </li>
                  </ul>

                  <h2 style={{ fontFamily: 'Geist, sans-serif', color: '#1a0b54', fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    Langkah Praktis Implementasi
                  </h2>
                  <p>
                    Sebelum memulai pengerjaan, lakukan perancangan workflow yang matang. Jika Anda membutuhkan bimbingan teknis, mentoring satu-lawan-satu, atau tim developer untuk mengeksekusi sistem dari awal, WeabooCoding siap menjadi partner andal Anda.
                  </p>
                </>
              )}
            </div>

            {/* Taskopia Style Callout / Banner */}
            <div
              className="rt-blog-details-overlay"
              style={{
                marginTop: '3.5rem',
                backgroundColor: '#1a0b54',
                borderRadius: '20px',
                padding: '2.5rem',
                color: '#ffffff',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '260px' }}>
                  <div className="rt-text-style-h6 rt-text-color-white" style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                    Butuh Bantuan Coding atau Pembuatan Website?
                  </div>
                  <p style={{ color: '#bacbe8', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                    Konsultasikan kendala koding, tugas kuliah, atau proyek web/aplikasi Anda bersama tim WeabooCoding. Dapatkan pengerjaan cepat dan garansi tuntas.
                  </p>
                </div>
                <div>
                  <a
                    href="https://wa.me/6285157558469"
                    onClick={() => track('Klik_WA')}
                    target="_blank"
                    rel="noreferrer"
                    className="rt-button-body"
                    style={{ textDecoration: 'none', display: 'inline-block', backgroundColor: '#2b4bee' }}
                  >
                    <div className="rt-button-text">💬 Konsultasi via WhatsApp</div>
                    <div className="rt-button-body-overlay"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* Keywords Tag */}
            {blog.keywords && (
              <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(26,11,84,0.08)', fontSize: '0.85rem', color: '#888' }}>
                <strong>Kata Kunci Terkait:</strong> {blog.keywords}
              </div>
            )}

            {/* Regional City Links Section */}
            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(26,11,84,0.08)' }}>
              <div className="rt-text-style-h6" style={{ fontSize: '1.2rem', color: '#1a0b54', marginBottom: '1.2rem' }}>
                Layanan Coding &amp; Web Kami di Kota Anda
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '0.75rem',
                }}
              >
                {kotaData.slice(0, 8).map((k) => (
                  <Link
                    key={k.id}
                    to={`/kota/${k.id}/`}
                    style={{
                      textDecoration: 'none',
                      backgroundColor: '#faf9fc',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(26,11,84,0.06)',
                      display: 'block',
                      transition: 'border-color 0.2s',
                    }}
                  >
                    <div style={{ color: '#1a0b54', fontWeight: 600, fontSize: '0.9rem' }}>
                      Jasa Coding {k.name}
                    </div>
                    <div style={{ color: '#2b4bee', fontSize: '0.78rem' }}>{k.province}</div>
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

export default BlogDetail;
