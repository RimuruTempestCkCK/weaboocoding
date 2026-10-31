import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { track } from '@vercel/analytics';
import SEO from '../../components/SEO';
import { kotaData } from '../../data/kotaData';
import { blogData } from '../../data/blogData';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NotFound from '../NotFound';
import '../../style.css';

function KotaDetail() {
  const { id } = useParams();
  const kota = kotaData.find((k) => k.id === id);

  if (!kota) {
    return <NotFound />;
  }

  const seoProps = {
    title: `Jasa Pembuatan Website & Joki Coding di ${kota.name} | WeabooCoding`,
    description: `Jasa coding profesional, pembuatan website, aplikasi Android, dan joki tugas IT di ${kota.name}, ${kota.province}. Harga murah, pengerjaan cepat dan bergaransi.`,
    schema: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Jasa Pembuatan Website & Coding ${kota.name}`,
      provider: {
        '@type': 'Organization',
        name: 'WeabooCoding',
      },
      areaServed: {
        '@type': 'City',
        name: kota.name,
      },
      description: kota.description,
    }),
  };

  return (
    <>
      <SEO {...seoProps} />
      <Header />
      <main>
        {/* City Hero */}
        <section className="rt-hero-10" style={{ padding: '80px 0 50px', backgroundColor: '#ffffff' }}>
          <div className="w-layout-blockcontainer rt-container-main w-container" style={{ maxWidth: '900px' }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#554d74', marginBottom: '1.5rem' }}>
              <Link to="/" style={{ color: '#554d74', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link to="/kota/" style={{ color: '#554d74', textDecoration: 'none' }}>Kota</Link>
              <span>/</span>
              <span style={{ color: '#2b4bee', fontWeight: 500 }}>{kota.name}</span>
            </div>

            <div className="rt-sub-gap">
              <div className="rt-sub-text rt-sub-gredient">{kota.province}</div>
            </div>

            <h1 className="rt-gap-off">
              Jasa Pembuatan Website &amp; Coding di <span className="rt-color-periwinkle-gray">{kota.name}</span>
            </h1>

            <p className="rt-hero-v1-top-padding rt-gap-off" style={{ margin: '15px 0 2rem', fontSize: '1.1rem', color: '#554d74', lineHeight: 1.7 }}>
              {kota.description}
            </p>

            {/* City Highlights */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.5rem',
                marginTop: '2rem',
              }}
            >
              <div
                style={{
                  backgroundColor: '#f5f3ff',
                  padding: '1.8rem',
                  borderRadius: '16px',
                  borderLeft: '4px solid #2b4bee',
                }}
              >
                <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '1.4rem', fontWeight: 800, color: '#1a0b54', marginBottom: '0.4rem' }}>
                  {kota.students} Mahasiswa
                </div>
                <p className="rt-gap-off" style={{ fontSize: '0.88rem', color: '#554d74' }}>
                  Komunitas pelajar &amp; kampus yang aktif membutuhkan solusi IT handal dan bimbingan koding terpercaya.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#f5f3ff',
                  padding: '1.8rem',
                  borderRadius: '16px',
                  borderLeft: '4px solid #2b4bee',
                }}
              >
                <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '1.4rem', fontWeight: 800, color: '#1a0b54', marginBottom: '0.4rem' }}>
                  Pengerjaan Cepat
                </div>
                <p className="rt-gap-off" style={{ fontSize: '0.88rem', color: '#554d74' }}>
                  Deadline mepet bukan halangan. Kami berkomitmen menyelesaikan tugas dan website sesuai jadwal yang disepakati.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#f5f3ff',
                  padding: '1.8rem',
                  borderRadius: '16px',
                  borderLeft: '4px solid #2b4bee',
                }}
              >
                <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '1.4rem', fontWeight: 800, color: '#1a0b54', marginBottom: '0.4rem' }}>
                  100% Bergaransi
                </div>
                <p className="rt-gap-off" style={{ fontSize: '0.88rem', color: '#554d74' }}>
                  Setiap kode yang kami kirimkan telah lolos pengujian dan disertai revisi hingga program berjalan lancar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Example Projects in this City */}
        <section style={{ padding: '60px 0', backgroundColor: '#faf9fc' }}>
          <div className="w-layout-blockcontainer rt-container-main w-container" style={{ maxWidth: '900px' }}>
            <div className="rt-sub-gap">
              <div className="rt-sub-text rt-sub-gredient">Studi Kasus</div>
            </div>
            <h2 className="rt-gap-off" style={{ fontSize: '1.8rem', color: '#1a0b54', marginBottom: '0.5rem' }}>
              Proyek yang Sering Dikerjakan di Wilayah {kota.name}
            </h2>
            <p style={{ color: '#554d74', fontSize: '0.95rem', marginBottom: '2.5rem' }}>
              Berikut beberapa contoh pengerjaan tugas akhir, prototipe aplikasi, dan sistem informasi kampus di wilayah {kota.name}.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.5rem',
              }}
            >
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid rgba(26,11,84,0.08)',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                    alt="Sistem Prediksi Kelulusan"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span style={{ fontSize: '0.78rem', color: '#2b4bee', fontWeight: 600 }}>Skripsi / Data Mining</span>
                  <div className="rt-text-style-h6" style={{ fontSize: '1.15rem', color: '#1a0b54', margin: '6px 0' }}>
                    Sistem Prediksi Kelulusan Mahasiswa
                  </div>
                  <p className="rt-gap-off" style={{ fontSize: '0.88rem', color: '#554d74', lineHeight: 1.6 }}>
                    Aplikasi web Python (Flask) dengan algoritma Naive Bayes dan visualisasi grafik evaluasi akurasi model.
                  </p>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid rgba(26,11,84,0.08)',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <img
                    src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80"
                    alt="Aplikasi Manajemen Inventaris"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span style={{ fontSize: '0.78rem', color: '#2b4bee', fontWeight: 600 }}>Tugas Kuliah / Web App</span>
                  <div className="rt-text-style-h6" style={{ fontSize: '1.15rem', color: '#1a0b54', margin: '6px 0' }}>
                    Aplikasi Manajemen Inventaris Kampus
                  </div>
                  <p className="rt-gap-off" style={{ fontSize: '0.88rem', color: '#554d74', lineHeight: 1.6 }}>
                    Sistem informasi pencatatan aset berbasis Laravel &amp; MySQL dengan fitur export PDF dan notifikasi stok minimum.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div
              style={{
                backgroundColor: '#1a0b54',
                borderRadius: '20px',
                padding: '2.5rem',
                marginTop: '3.5rem',
                textAlign: 'center',
                color: '#ffffff',
              }}
            >
              <h3 style={{ fontFamily: 'Geist, sans-serif', color: '#ffffff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                Butuh Jasa Coding atau Pembuatan Web di {kota.name}?
              </h3>
              <p style={{ color: '#bacbe8', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
                Konsultasikan langsung dengan developer WeabooCoding via WhatsApp. Kami siap memberikan penawaran harga terbaik.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href={`https://wa.me/6285157558469?text=${encodeURIComponent(`Halo WeabooCoding! Saya di kota ${kota.name} dan ingin konsultasi pembuatan web / koding.`)}`}
                  onClick={() => track('Klik_WA')}
                  target="_blank"
                  rel="noreferrer"
                  className="rt-button-body"
                  style={{ textDecoration: 'none', backgroundColor: '#2b4bee' }}
                >
                  <div className="rt-button-text">💬 Konsultasi Sekarang</div>
                  <div className="rt-button-body-overlay"></div>
                </a>
                <Link
                  to="/kota/"
                  className="rt-button-body rt-btn-outline-white"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="rt-button-text">Lihat Kota Lain</div>
                  <div className="rt-button-body-overlay"></div>
                </Link>
              </div>
            </div>

            {/* Related Blog Articles */}
            <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(26,11,84,0.08)' }}>
              <div className="rt-text-style-h6" style={{ fontSize: '1.2rem', color: '#1a0b54', marginBottom: '1.2rem' }}>
                Artikel &amp; Edukasi Terkait
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                {blogData.slice(0, 4).map((b) => (
                  <Link
                    key={b.id}
                    to={`/blog/${b.id}/`}
                    style={{
                      textDecoration: 'none',
                      backgroundColor: '#ffffff',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      border: '1px solid rgba(26,11,84,0.06)',
                      display: 'block',
                    }}
                  >
                    <div style={{ color: '#1a0b54', fontWeight: 600, fontSize: '0.92rem', marginBottom: '4px' }}>
                      {b.title}
                    </div>
                    <span style={{ color: '#2b4bee', fontSize: '0.78rem' }}>Baca Artikel →</span>
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

export default KotaDetail;
