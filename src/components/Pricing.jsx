import React from 'react';
import { track } from '@vercel/analytics';

export default function Pricing() {
  const plans = [
    {
      id: 'basic',
      badge: 'MAHASISWA',
      name: 'Paket Mahasiswa',
      sub: 'Solusi cepat untuk tugas kuliah, praktikum, dan skripsi IT.',
      price: 'Mulai dari Rp 200rb',
      unit: '/ project',
      popular: false,
      features: [
        'Penyelesaian error coding & bug',
        'Bantuan penjelasan alur source code',
        'Setup & running di laptop sendiri',
        'Garansi revisi sampai program jalan',
        'Bimbingan teknis persiapan sidang',
      ],
      ctaText: 'Pilih Paket Mahasiswa',
      ctaMsg: 'Halo WeabooCoding! Saya ingin konsultasi Paket Mahasiswa (mulai Rp 200rb).',
    },
    {
      id: 'popular',
      badge: 'PALING POPULER',
      name: 'Profile / UMKM',
      sub: 'Website profesional siap pakai untuk mendongkrak kredibilitas bisnis.',
      price: 'Mulai dari Rp 1 Juta',
      unit: '/ paket',
      popular: true,
      features: [
        'Domain (.com) & Cloud Hosting 1 Tahun',
        'Desain Modern, Cepat & 100% Responsif',
        'Optimasi SEO Dasar agar masuk Google',
        'Terintegrasi Tombol Chat WhatsApp',
        'Free Email Bisnis (nama@domain.com)',
        'Garansi Maintenance & Support Bebas Bug',
      ],
      ctaText: 'Pilih Paket UMKM',
      ctaMsg: 'Halo WeabooCoding! Saya tertarik dengan Paket Profile/UMKM (mulai Rp 1 Juta). Boleh info detailnya?',
    },
    {
      id: 'enterprise',
      badge: 'ENTERPRISE',
      name: 'Custom Application',
      sub: 'Sistem aplikasi berskala besar, portal, ERP, dan mobile app custom.',
      price: 'Custom',
      unit: 'sesuai spek',
      popular: false,
      features: [
        'Fitur Custom (E-Commerce, ERP, Booking)',
        'Dukungan Multi-Platform (Web & Android)',
        'Arsitektur REST API & Database Terpusat',
        'Dokumentasi Teknis & User Manual Lengkap',
        'Perjanjian Kerahasiaan (NDA) Resmi',
        'Garansi Maintenance & Monitoring SLA',
      ],
      ctaText: 'Konsultasi Gratis',
      ctaMsg: 'Halo WeabooCoding! Saya ingin konsultasi pembuatan Custom Application / Enterprise project.',
    },
  ];

  return (
    <section id="pricing" className="rt-pricing-v1" style={{ padding: '90px 0', backgroundColor: '#faf9fc', position: 'relative' }}>
      <div className="w-layout-blockcontainer rt-container-main w-container">
        {/* Section Heading */}
        <div className="rt-heading-bottom-gap" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }} data-aos="fade-up" data-aos-duration="700">
          <div className="rt-sub-gap" style={{ justifyContent: 'center', display: 'flex' }}>
            <div className="rt-sub-text rt-sub-gredient">Paket Harga Transparan</div>
          </div>
          <h2 className="rt-gap-off" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', marginTop: '0.5rem', marginBottom: '0.8rem' }}>
            Pilih Paket Investasi Digital <span className="rt-color-periwinkle-gray">Sesuai Kebutuhanmu</span>
          </h2>
          <p className="rt-gap-off" style={{ color: '#554d74', fontSize: '1rem', lineHeight: 1.65 }}>
            Transparan, terjangkau, dan tanpa biaya tersembunyi. Solusi tepat untuk mahasiswa, UMKM, hingga skala perusahaan.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="w-layout-grid rt-pricing-card-main" style={{ marginTop: '2.5rem' }}>
          {plans.map((p, idx) => {
            if (p.popular) {
              return (
                <div key={p.id} className="rt-pricing-card-gradient" data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">
                  <div className="w-layout-vflex rt-pricing-v3-card rt-two">
                    {/* Badge */}
                    <div className="w-layout-hflex rt-pricing-v3-text-wrap rt-two rt-overflow-hidden">
                      <div className="rt-sub-text rt-gapp">{p.badge}</div>
                      <div className="rt-pricing-v3-text-inner rt-two"></div>
                    </div>

                    {/* Price and Heading */}
                    <div className="w-layout-vflex rt-pricing-v3-heading-main">
                      <div className="w-layout-vflex rt-pricing-v3-card-plan-wrap">
                        <div className="w-layout-hflex rt-pricing-v3-discount-main">
                          <div className="w-layout-hflex rt-pricing-v3-amount-wrap">
                            <div className="rt-text-style-h2 rt-text-color-white" style={{ fontSize: '2.4rem' }}>{p.price}</div>
                            <div className="rt-text-color-white rt-text-color-moonlit-steel" style={{ marginLeft: '6px' }}>{p.unit}</div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex rt-pricing-v3-card-heading">
                        <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.2rem', marginBottom: '4px' }}>{p.name}</div>
                        <p className="rt-gap-off rt-text-color-white">{p.sub}</p>
                      </div>
                    </div>

                    {/* Features Checklist */}
                    <div className="w-layout-vflex rt-pricing-v2-list-wrap">
                      {p.features.map((feat, fi) => (
                        <div key={fi} className="rt-basic-plan-list-flex">
                          <img width="15" height="16" alt="Check" src="/images/69009d1f25ce9874fa707d09_Vector_20_25_.svg" loading="lazy" className="rt-pricing-icon" />
                          <div className="rt-text-color-white">{feat}</div>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <div className="rt-pricing-v3-button-wrap">
                      <a
                        href={`https://wa.me/6285157558469?text=${encodeURIComponent(p.ctaMsg)}`}
                        onClick={() => track('Klik_WA')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rt-button-body rt-button-featured w-inline-block"
                        style={{ textDecoration: 'none', width: '100%', textAlign: 'center' }}
                      >
                        <div className="rt-button-text rt-blue-white">{p.ctaText}</div>
                        <div className="rt-button-body-overlay rt-blue-white"></div>
                      </a>
                    </div>

                    {/* Ribbon Tag */}
                    <div className="rt-pricing-tag">
                      <div>
                        <img src="/images/691ab2d6cb02a5ac930cfd0e_star_20prising.svg" loading="lazy" alt="Star" />
                      </div>
                      <div className="rt-text-color-white">Paling Diminati</div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={p.id}
                className="w-layout-vflex rt-pricing-v3-card rt-border rt-card-hover"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={idx * 150}
                style={{ backgroundColor: '#ffffff' }}
              >
                {/* Badge */}
                <div className="w-layout-hflex rt-pricing-v3-text-wrap rt-overflow-hidden">
                  <div className="rt-sub-text rt-gapp">{p.badge}</div>
                  <div className="rt-pricing-v3-text-inner"></div>
                </div>

                {/* Price and Heading */}
                <div className="w-layout-vflex rt-pricing-v3-heading-main">
                  <div className="w-layout-vflex rt-pricing-v3-card-plan-wrap">
                    <div className="w-layout-hflex rt-pricing-v3-discount-main">
                      <div className="w-layout-hflex rt-pricing-v3-amount-wrap">
                        <div className="rt-text-style-h2" style={{ fontSize: '2.4rem', color: '#1a0b54' }}>{p.price}</div>
                        <div className="rt-text-color-moonlit-steel" style={{ marginLeft: '6px' }}>{p.unit}</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-vflex rt-pricing-v3-card-heading">
                    <div style={{ color: '#1a0b54', fontWeight: 700, fontSize: '1.2rem', marginBottom: '4px' }}>{p.name}</div>
                    <p className="rt-no-margin rt-text-color-moonlit-steel">{p.sub}</p>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="w-layout-vflex rt-pricing-v2-list-wrap">
                  {p.features.map((feat, fi) => (
                    <div key={fi} className="rt-basic-plan-list-flex">
                      <img width="15" height="16" alt="Check" src="/images/69009c3b0ab20444b2601ab7_Vector_20_24_.svg" loading="lazy" className="rt-pricing-icon" />
                      <div style={{ color: '#1a0b54' }}>{feat}</div>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="rt-pricing-v3-button-wrap">
                  <a
                    data-wf--rt-border-button--variant="base"
                    href={`https://wa.me/6285157558469?text=${encodeURIComponent(p.ctaMsg)}`}
                    onClick={() => track('Klik_WA')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rt-button-body rt-nav-btn w-inline-block"
                    style={{ textDecoration: 'none', width: '100%', textAlign: 'center' }}
                  >
                    <div className="rt-button-text rt-btn-color-nav">{p.ctaText}</div>
                    <div className="rt-button-body-overlay rt-nav-overlay"></div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
