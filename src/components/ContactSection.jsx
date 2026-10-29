import React, { useState } from 'react';
import { track } from '@vercel/analytics';

export default function ContactSection() {
  const [nama, setNama] = useState('');
  const [layanan, setLayanan] = useState('');
  const [pesan, setPesan] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Halo WeabooCoding! 👋\n\nPerkenalkan saya *${nama}*.\nSaya tertarik dengan layanan *${layanan}*.\n\n*Deskripsi Project:*\n${pesan}\n\nMohon info lebih lanjut ya, terima kasih!`
    );
    track('Klik_WA');
    window.open(`https://wa.me/6285157558469?text=${text}`, '_blank');
  };

  return (
    <section id="contact" style={{ padding: '80px 0', backgroundColor: '#faf9fc', position: 'relative' }}>
      <div className="w-layout-blockcontainer rt-container-main w-container">
        {/* Section Heading */}
        <div className="rt-heading-bottom-gap" style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem auto' }} data-aos="fade-up" data-aos-duration="700">
          <div className="rt-sub-gap" style={{ justifyContent: 'center', display: 'flex' }}>
            <div className="rt-sub-text rt-sub-gredient">Hubungi Kami</div>
          </div>
          <h2 className="rt-gap-off" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginTop: '0.4rem', marginBottom: '0.6rem' }}>
            Siap Memulai Proyek Digitalmu? <span className="rt-color-periwinkle-gray">Konsultasi Sekarang</span>
          </h2>
          <p className="rt-gap-off" style={{ color: '#554d74', fontSize: '0.98rem', lineHeight: 1.65 }}>
            Ceritakan kebutuhan website, aplikasi, atau tugas kodingmu. Tim WeabooCoding siap memberikan solusi dan estimasi biaya transparan dalam waktu singkat.
          </p>
        </div>

        {/* Contact Info Cards - Compact & Clean */}
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="100"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            maxWidth: '780px',
            margin: '0 auto 2rem auto',
          }}
        >
          {/* Card 1: WhatsApp */}
          <a
            href="https://wa.me/6285157558469"
            onClick={() => track('Klik_WA')}
            target="_blank"
            rel="noreferrer"
            className="rt-card-hover"
            style={{
              backgroundColor: '#ffffff',
              padding: '1rem 1.2rem',
              borderRadius: '12px',
              border: '1px solid rgba(26,11,84,0.08)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'rgba(37, 211, 102, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <img src="/images/691aa59bf2f2a3f94a847b78_call_20_1_.svg" width="20" height="20" alt="WhatsApp" />
            </div>
            <div style={{ textAlign: 'left', minWidth: 0 }}>
              <div style={{ fontSize: '0.78rem', color: '#554d74', fontWeight: 500, lineHeight: 1.2 }}>WhatsApp Hotline</div>
              <div style={{ fontSize: '0.88rem', color: '#1a0b54', fontWeight: 700, marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                +62 851-5755-8469
              </div>
            </div>
          </a>

          {/* Card 2: Instagram */}
          <a
            href="https://instagram.com/weaboocoding"
            target="_blank"
            rel="noreferrer"
            className="rt-card-hover"
            style={{
              backgroundColor: '#ffffff',
              padding: '1rem 1.2rem',
              borderRadius: '12px',
              border: '1px solid rgba(26,11,84,0.08)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'rgba(43, 75, 238, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <img src="/images/68ff46366a330717f35394cc_Kloudera-team-icon.svg" width="20" height="20" alt="Instagram" />
            </div>
            <div style={{ textAlign: 'left', minWidth: 0 }}>
              <div style={{ fontSize: '0.78rem', color: '#554d74', fontWeight: 500, lineHeight: 1.2 }}>Instagram Resmi</div>
              <div style={{ fontSize: '0.88rem', color: '#1a0b54', fontWeight: 700, marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                @weaboocoding
              </div>
            </div>
          </a>

          {/* Card 3: Wilayah Layanan */}
          <div
            className="rt-card-hover"
            style={{
              backgroundColor: '#ffffff',
              padding: '1rem 1.2rem',
              borderRadius: '12px',
              border: '1px solid rgba(26,11,84,0.08)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'rgba(26, 11, 84, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <img src="/images/68ff6f486c1e1aea191e71fa_location.svg" width="20" height="20" alt="Lokasi" />
            </div>
            <div style={{ textAlign: 'left', minWidth: 0 }}>
              <div style={{ fontSize: '0.78rem', color: '#554d74', fontWeight: 500, lineHeight: 1.2 }}>Wilayah Layanan</div>
              <div style={{ fontSize: '0.88rem', color: '#1a0b54', fontWeight: 700, marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Online 24/7 Remote
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Wrapper - Compact & Clean */}
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="200"
          style={{
            maxWidth: '620px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '2rem 1.8rem',
            border: '1px solid rgba(26,11,84,0.08)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontFamily: 'Geist, sans-serif', color: '#1a0b54', fontSize: '1.35rem', marginBottom: '0.35rem', fontWeight: 700 }}>
              Formulir Pesan Langsung via WhatsApp
            </h3>
            <p style={{ color: '#554d74', fontSize: '0.88rem', margin: 0, lineHeight: 1.5 }}>
              Isi form di bawah, kami akan langsung membuka chat WhatsApp dengan format otomatis.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
              <div className="w-layout-vflex rt-contact-v1-field-wrap">
                <label htmlFor="nama" className="rt-color-dark-indigo rt-font-width" style={{ marginBottom: '4px', fontSize: '0.85rem', fontWeight: 600 }}>
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="nama"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Masukkan nama Anda"
                  required
                  className="rt-contact-v1-field w-input"
                  style={{ borderRadius: '8px', padding: '0.75rem 1rem', height: 'auto', fontSize: '0.9rem' }}
                />
              </div>

              <div className="w-layout-vflex rt-contact-v1-field-wrap">
                <label htmlFor="layanan" className="rt-color-dark-indigo rt-font-width" style={{ marginBottom: '4px', fontSize: '0.85rem', fontWeight: 600 }}>
                  Jenis Layanan *
                </label>
                <input
                  type="text"
                  id="layanan"
                  value={layanan}
                  onChange={(e) => setLayanan(e.target.value)}
                  placeholder="Website, Android, Skripsi, Solve Code, dll."
                  required
                  className="rt-contact-v1-field w-input"
                  style={{ borderRadius: '8px', padding: '0.75rem 1rem', height: 'auto', fontSize: '0.9rem' }}
                />
              </div>
            </div>

            <div className="w-layout-vflex rt-contact-v1-field-wrap" style={{ marginBottom: '1.4rem' }}>
              <label htmlFor="pesan" className="rt-color-dark-indigo rt-font-width" style={{ marginBottom: '4px', fontSize: '0.85rem', fontWeight: 600 }}>
                Deskripsi Kebutuhan Project *
              </label>
              <textarea
                id="pesan"
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                placeholder="Ceritakan detail proyek, fitur yang diinginkan, atau deadline..."
                required
                rows={3}
                className="rt-contact-v1-field rt-text-area w-input"
                style={{ borderRadius: '8px', padding: '0.75rem 1rem', resize: 'vertical', fontSize: '0.9rem', minHeight: '90px' }}
              ></textarea>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                className="rt-button-body"
                style={{
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  display: 'block',
                  textAlign: 'center',
                  padding: '0.9rem 1.5rem',
                  borderRadius: '8px',
                }}
              >
                <div className="rt-button-text" style={{ fontSize: '0.95rem' }}>🚀 Kirim Pesan via WhatsApp</div>
                <div className="rt-button-body-overlay"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
