import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../../hooks/useSEO';
import { kotaData } from '../../data/kotaData';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../style.css';

function KotaList() {
  useSEO({
    title: 'Joki Kota | Layanan Joki Tugas per Kota di Indonesia',
    description: 'Layanan joki untuk mahasiswa dari berbagai kota di Indonesia. Temukan jasa joki terdekat di kota Anda seperti Jakarta, Bandung, Surabaya, dan lainnya.',
    schema: ''
  });

  return (
    <>
      <Header />

      <section id="kota" style={{ paddingTop: '150px' }}>
        <div className="section-header centered">
          <div className="section-tag">Joki Kota</div>
          <h1 className="section-title">Layanan Joki untuk Mahasiswa dari Berbagai Kota</h1>
          <p className="section-sub">
            Temukan layanan joki tugas, proyek, dan skripsi yang disesuaikan dengan kebutuhan kampus di kota Anda.
          </p>
        </div>

        <div className="services-grid">
          {kotaData.map((kota) => (
            <Link to={`/kota/${kota.id}`} key={kota.id} className="service-card reveal reveal-zoom" style={{ textDecoration: 'none' }}>
              <div className="s-icon">🎓</div>
              <div className="s-title" style={{ fontSize: '1.4rem' }}>{kota.name}</div>
              <p className="s-desc" style={{ marginBottom: '10px' }}>{kota.province}</p>
              <p className="s-desc">
                {kota.description.substring(0, 100)}...
              </p>
              <div className="s-link" style={{ marginTop: '15px', display: 'inline-block' }}>
                {kota.students} mahasiswa →
              </div>
            </Link>
          ))}
        </div>

        <div className="section-header centered" style={{ marginTop: '40px' }}>
          <p className="section-sub">Menampilkan {kotaData.length} dari {kotaData.length} kota</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default KotaList;
