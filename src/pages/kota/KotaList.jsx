import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { kotaData } from '../../data/kotaData';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../style.css';

function KotaList() {
  const [searchTerm, setSearchTerm] = useState('');

  const seoProps = {
    title: 'Jasa Coding & Web per Kota di Indonesia | WeabooCoding',
    description: 'Layanan jasa pembuatan website, aplikasi Android, dan joki tugas IT untuk mahasiswa dan bisnis di berbagai kota di Indonesia (Jakarta, Bandung, Surabaya, Tangerang, dll).',
    schema: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Daftar Kota Layanan WeabooCoding',
      numberOfItems: kotaData.length,
    }),
  };

  const filteredCities = kotaData.filter((k) =>
    k.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    k.province.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEO {...seoProps} />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="rt-hero-10" style={{ padding: '80px 0 50px', backgroundColor: '#ffffff' }}>
          <div className="w-layout-blockcontainer rt-container-main w-container">
            <div className="rt-hero-10-heading rt-desktop-text-center rt-position-relative">
              <div className="rt-sub-gap">
                <div className="rt-sub-text rt-sub-gredient">Cakupan Wilayah</div>
              </div>
              <h1 className="rt-gap-off">
                Layanan Coding &amp; Pembuatan Website <span className="rt-color-periwinkle-gray">di Kota Anda</span>
              </h1>
              <p
                className="rt-hero-v1-top-padding rt-gap-off rt-desktop-text-center"
                style={{ maxWidth: '650px', margin: '15px auto 0' }}
              >
                Menjangkau mahasiswa, startup, dan pelaku bisnis di berbagai kota di Indonesia dengan layanan pengerjaan remote yang cepat, aman, dan bergaransi.
              </p>

              {/* Search Bar */}
              <div style={{ maxWidth: '480px', margin: '2rem auto 0' }}>
                <input
                  type="text"
                  placeholder="Cari nama kota atau provinsi..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="rt-contact-v1-field w-input"
                  style={{
                    borderRadius: '12px',
                    padding: '14px 20px',
                    fontSize: '0.95rem',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
                    border: '1px solid rgba(26,11,84,0.12)',
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section style={{ padding: '40px 0 100px', backgroundColor: '#faf9fc' }}>
          <div className="w-layout-blockcontainer rt-container-main w-container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {filteredCities.map((kota) => (
                <Link
                  to={`/kota/${kota.id}/`}
                  key={kota.id}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: '1px solid rgba(26,11,84,0.08)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.25s ease',
                      padding: '1.8rem',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(43,75,238,0.08)';
                      e.currentTarget.style.borderColor = 'rgba(43,75,238,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                      e.currentTarget.style.borderColor = 'rgba(26,11,84,0.08)';
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <span
                          style={{
                            fontSize: '0.78rem',
                            fontFamily: 'Geist, sans-serif',
                            fontWeight: 600,
                            color: '#2b4bee',
                            backgroundColor: 'rgba(43,75,238,0.08)',
                            padding: '4px 10px',
                            borderRadius: '20px',
                          }}
                        >
                          {kota.province}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: '#554d74' }}>
                          {kota.students} Mahasiswa
                        </span>
                      </div>

                      <h2
                        className="rt-text-style-h6"
                        style={{
                          fontSize: '1.3rem',
                          color: '#1a0b54',
                          fontWeight: 700,
                          marginBottom: '0.5rem',
                        }}
                      >
                        {kota.name}
                      </h2>

                      <p
                        className="rt-gap-off"
                        style={{
                          fontSize: '0.9rem',
                          color: '#554d74',
                          lineHeight: 1.6,
                        }}
                      >
                        {kota.description.length > 100 ? `${kota.description.substring(0, 100)}...` : kota.description}
                      </p>
                    </div>

                    <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                      <span
                        style={{
                          color: '#2b4bee',
                          fontWeight: 600,
                          fontSize: '0.88rem',
                          fontFamily: 'Geist, sans-serif',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        Lihat Layanan di {kota.name} →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem', color: '#554d74', fontSize: '0.9rem' }}>
              Menampilkan {filteredCities.length} dari total {kotaData.length} kota di seluruh Indonesia
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default KotaList;
