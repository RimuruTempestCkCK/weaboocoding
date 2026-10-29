import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogData } from '../data/blogData';

function Blog() {
  const articles = blogData;

  const seoProps = {
    title: `Blog & Tutorial Coding | WeabooCoding`,
    description: `Kumpulan artikel, tips pemrograman, tutorial web development, dan panduan tugas akhir IT dari tim WeabooCoding.`,
    schema: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Blog WeabooCoding',
      description: 'Tips, Tutorial & Insight Pemrograman dan Web Development',
      url: 'https://weaboocoding.com/blog/',
    }),
  };

  return (
    <>
      <SEO {...seoProps} />
      <Header />
      <main>
        {/* Blog Hero using Taskopia rt-hero-10 */}
        <section className="rt-hero-10" style={{ padding: '80px 0 50px', backgroundColor: '#ffffff' }}>
          <div className="w-layout-blockcontainer rt-container-main w-container">
            <div className="rt-hero-10-heading rt-desktop-text-center rt-position-relative">
              <div className="rt-sub-gap">
                <div className="rt-sub-text rt-sub-gredient">Blog &amp; Edukasi</div>
              </div>
              <h1 className="rt-gap-off">
                Tips, Panduan &amp; Insight <span className="rt-color-periwinkle-gray">Teknologi Terbaru</span>
              </h1>
              <p
                className="rt-hero-v1-top-padding rt-gap-off rt-desktop-text-center"
                style={{ maxWidth: '650px', margin: '15px auto 0' }}
              >
                Kumpulan artikel, tutorial koding praktis, dan panduan dunia IT dari developer berpengalaman WeabooCoding.
              </p>
            </div>
          </div>
        </section>

        {/* Blog List Section */}
        <section style={{ padding: '40px 0 100px', backgroundColor: '#faf9fc' }}>
          <div className="w-layout-blockcontainer rt-container-main w-container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '2rem',
              }}
            >
              {articles.map((item) => (
                <Link
                  to={`/blog/${item.id}/`}
                  key={item.id}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '1px solid rgba(26,11,84,0.08)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(43,75,238,0.09)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                    }}
                  >
                    <div style={{ height: '220px', overflow: 'hidden', backgroundColor: '#f0eff4' }}>
                      <img
                        loading="lazy"
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                      />
                    </div>

                    <div style={{ padding: '1.8rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.8rem' }}>
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
                            {item.tag}
                          </span>
                        </div>

                        <h2
                          className="rt-text-style-h5"
                          style={{
                            fontSize: '1.25rem',
                            color: '#1a0b54',
                            lineHeight: 1.4,
                            marginBottom: '0.75rem',
                            fontWeight: 700,
                          }}
                        >
                          {item.title}
                        </h2>

                        <p
                          className="rt-gap-off"
                          style={{
                            fontSize: '0.92rem',
                            color: '#554d74',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                          }}
                        >
                          {item.description}
                        </p>
                      </div>

                      <div
                        style={{
                          paddingTop: '1rem',
                          borderTop: '1px solid rgba(26,11,84,0.06)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div
                            style={{
                              width: '28px',
                              height: '28px',
                              borderRadius: '50%',
                              backgroundColor: '#2b4bee',
                              color: '#ffffff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '0.75rem',
                              fontWeight: 700,
                            }}
                          >
                            W
                          </div>
                          <span style={{ fontSize: '0.82rem', color: '#554d74', fontWeight: 500 }}>
                            WeabooCoding Team
                          </span>
                        </div>

                        <span
                          style={{
                            color: '#2b4bee',
                            fontWeight: 600,
                            fontSize: '0.88rem',
                            fontFamily: 'Geist, sans-serif',
                          }}
                        >
                          Baca Artikel →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Blog;
