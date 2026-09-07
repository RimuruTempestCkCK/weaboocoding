import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogData } from '../data/blogData';

function Blog() {
  useSEO({
    title: `WeabooCoding – Jasa Pembuatan Website, Aplikasi & Jasa Coding Profesional`,
    description: ``,
    schema: `{}`
  });

  const articles = blogData;

  return (
    <>
      <Header />


  </nav>

  <section className="blog-header" style={{ paddingTop: '150px', paddingBottom: '50px', background: 'var(--gray-50)', textAlign: 'center' }}>
    <div className="section-tag">Blog & Artikel</div>
    <h1 className="hero-title">Tips, Tutorial & Insight</h1>
    <p className="section-sub" style={{ margin: '0 auto' }}>Baca artikel terbaru seputar web development, programming, dan teknologi dari WeabooCoding.</p>
  </section>

  <section className="blog-list" style={{ padding: '60px 6%' }}>
    <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
      {articles.map((item, i) => (
        <Link to={`/blog/${item.id}`} key={i} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="pricing-card reveal reveal-zoom" style={{ padding: '0', overflow: 'hidden' }}>
            <img src={item.image} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '25px' }}>
              <div className="section-tag" style={{ fontSize: '0.8rem', marginBottom: '10px' }}>{item.tag}</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '20px' }}>{item.description}</p>
              <span style={{ color: 'var(--primary)', fontWeight: '600' }}>Baca Selengkapnya &rarr;</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>      <Footer />

  <script src="js/script.js" defer></script>

    </>
  );
}

export default Blog;
