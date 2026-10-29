import React from 'react';

export default function WhyUs() {
  const leftFeatures = [
    {
      num: '01',
      title: 'Desain Responsif & Modern',
      desc: 'Semua project dioptimalkan agar tampil sempurna dan cepat di smartphone, tablet, maupun desktop.',
      icon: '/images/6916ef876682eed2b2fd5911_Vector_20_34_.svg',
    },
    {
      num: '02',
      title: 'Pengerjaan Cepat (Fast Delivery)',
      desc: 'Kami sangat menghargai waktu dan deadline Anda. Pengerjaan gesit tanpa mengorbankan standar kualitas kode.',
      icon: '/images/6916f00db3051e5aed09bd3f_Group_202085663576.svg',
    },
    {
      num: '03',
      title: 'Harga Terjangkau & Transparan',
      desc: 'Kualitas premium dengan biaya yang ramah kantong mahasiswa maupun skala anggaran pelaku UMKM.',
      icon: '/images/69009f3a550ade63441a8014_samll-ikon-3.svg',
    },
    {
      num: '04',
      title: 'Konsultasi Gratis Tanpa Komitmen',
      desc: 'Diskusikan ide atau kendala koding Anda secara santai dan gratis sebelum memutuskan bekerja sama.',
      icon: '/images/691aa59bf2f2a3f94a847b78_call_20_1_.svg',
    },
  ];

  const rightFeatures = [
    {
      num: '05',
      title: 'Garansi Revisi Sampai Tuntas',
      desc: 'Setiap project disertai garansi perbaikan bug dan revisi fitur sesuai kesepakatan awal hingga tuntas.',
      icon: '/images/6916ec635353353be914aafc_Vector_20_32_.svg',
    },
    {
      num: '06',
      title: 'Dukungan Purna Jual (After-Sales)',
      desc: 'Kami tidak lepas tangan setelah proyek selesai. Bantuan teknis dan panduan operasional tetap kami berikan.',
      icon: '/images/6916ec6339f890a80905a69b_Vector_20_33_.svg',
    },
    {
      num: '07',
      title: 'Keamanan Data & Privasi Terjamin',
      desc: 'Data, ide bisnis, dan source code proyek Anda aman bersama kami dengan kesepakatan kerahasiaan (NDA).',
      icon: '/images/6904af5ad9ca1a4322df6d9e_databaseicon-1.svg',
    },
    {
      num: '08',
      title: 'Developer Berpengalaman 3+ Tahun',
      desc: 'Ditangani langsung oleh tim praktisi yang menguasai ekosistem web modern, mobile, dan kecerdasan buatan.',
      icon: '/images/6916ed30eddd8192431b095e_specialiti-icon-1_20_1_.svg',
    },
  ];

  return (
    <section className="rt-why-choose-v1" id="why" style={{ backgroundColor: '#faf9fc', padding: '90px 0' }}>
      <div className="w-layout-blockcontainer rt-container-extra-large w-container">
        <div className="rt-why-choose-v1-wrapper" style={{ padding: '4rem 2.5rem' }}>
          <div className="rt-why-choose-v1-content">
            {/* Header */}
            <div className="rt-heading-bottom-gap" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }} data-aos="fade-up" data-aos-duration="700">
              <div className="rt-sub-gap" style={{ justifyContent: 'center', display: 'flex' }}>
                <div className="rt-sub-text rt-sub-gredient">Keunggulan Layanan</div>
              </div>
              <h2 className="rt-gap-off" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', marginTop: '0.5rem', marginBottom: '0.8rem' }}>
                Kenapa Memilih <span className="rt-color-periwinkle-gray">WeabooCoding?</span>
              </h2>
              <p className="rt-gap-off" style={{ color: '#554d74', fontSize: '1rem', lineHeight: 1.65 }}>
                Kami memberikan nilai lebih dari sekadar baris kode—kami memberikan solusi teknologi tepat guna yang mempercepat kesuksesan Anda.
              </p>
            </div>

            {/* Main Content Layout with Taskopia Why Choose Grid */}
            <div className="rt-why-choose-v1-main rt-overflow-hidden" style={{ marginTop: '2rem' }}>
              {/* Left Column */}
              <div className="rt-why-choose-v1-left" data-aos="fade-right" data-aos-duration="800">
                {leftFeatures.map((f, i) => (
                  <React.Fragment key={f.num}>
                    <div className="rt-why-choose-v1-left-item" style={{ padding: '0.5rem 0' }}>
                      <div className="rt-why-choose-v1-icon" style={{ paddingBottom: '0.8rem' }}>
                        <img src={f.icon} loading="lazy" width="28" height="28" alt={f.title} className="rt-why-choose-icon" />
                      </div>
                      <div className="rt-text-style-h6 rt-small-heading-para-gap" style={{ fontSize: '1.1rem', color: '#1a0b54', fontWeight: 700, marginBottom: '0.4rem' }}>
                        {f.num}. {f.title}
                      </div>
                      <p className="rt-gap-off" style={{ color: '#554d74', fontSize: '0.92rem', lineHeight: 1.6 }}>{f.desc}</p>
                    </div>
                    {i < leftFeatures.length - 1 && <div className="rt-about-v1-right-line rt-why-choose-v1-line"></div>}
                  </React.Fragment>
                ))}
              </div>

              {/* Center Graphic */}
              <div className="rt-why-choose-v1-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} data-aos="zoom-in" data-aos-duration="800">
                <img
                  src="/images/691ecfdec4425f741cb80fc8_tasopiya-home-one-hande.webp"
                  loading="lazy"
                  alt="WeabooCoding trust illustration"
                  style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Right Column */}
              <div className="rt-why-choose-v1-left" data-aos="fade-left" data-aos-duration="800">
                {rightFeatures.map((f, i) => (
                  <React.Fragment key={f.num}>
                    <div className="rt-why-choose-v1-left-item" style={{ padding: '0.5rem 0' }}>
                      <div className="rt-why-choose-v1-icon" style={{ paddingBottom: '0.8rem' }}>
                        <img src={f.icon} loading="lazy" width="28" height="28" alt={f.title} className="rt-why-choose-icon" />
                      </div>
                      <div className="rt-text-style-h6 rt-small-heading-para-gap" style={{ fontSize: '1.1rem', color: '#1a0b54', fontWeight: 700, marginBottom: '0.4rem' }}>
                        {f.num}. {f.title}
                      </div>
                      <p className="rt-gap-off" style={{ color: '#554d74', fontSize: '0.92rem', lineHeight: 1.6 }}>{f.desc}</p>
                    </div>
                    {i < rightFeatures.length - 1 && <div className="rt-about-v1-right-line rt-why-choose-v1-line"></div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
