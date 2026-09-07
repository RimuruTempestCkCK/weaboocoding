import React from 'react';

export default function ContactSection() {
  return (
    <>
      {/*  CONTACT  */}
      <section id="contact">
        <div className="section-header">
          <div className="section-tag">Hubungi Kami</div>
          <h2 className="section-title">Siap Mulai Project?</h2>
          <p className="section-sub">Ceritakan kebutuhanmu dan kami akan berikan solusi terbaik dalam waktu singkat.</p>
        </div>

        <div className="contact-grid">
          <div className="reveal reveal-left">
            <h3>Kontak &amp; Sosial Media</h3>
            <p>Hubungi kami melalui channel yang kamu suka. Tim kami siap merespons dalam 1×24 jam.</p>
            <div className="contact-links">
              <a href="https://wa.me/6285157558469" className="contact-link" target="_blank">
                <span className="icon">💬</span> WhatsApp: +6285157558469
              </a>
              <a href="https://instagram.com/weaboocoding" className="contact-link" target="_blank">
                <span className="icon">📸</span> @weaboocoding
              </a>
            </div>
          </div>

          <div className="reveal reveal-right">
            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault();
              const nama = document.getElementById('nama').value;
              const layanan = document.getElementById('layanan').value;
              const pesan = document.getElementById('pesan').value;
              
              const text = `Halo WeabooCoding! 👋%0A%0APerkenalkan saya *${nama}*.%0ASaya tertarik dengan layanan *${layanan}*.%0A%0A*Deskripsi Project:*%0A${pesan}%0A%0AMohon info lebih lanjut ya, terima kasih!`;
              window.open(`https://wa.me/6285157558469?text=${text}`, '_blank');
            }}>
              <div className="form-group">
                <label htmlFor="nama">Nama Lengkap</label>
                <input type="text" id="nama" placeholder="Masukkan nama kamu" required />
              </div>

              <div className="form-group">
                <label htmlFor="layanan">Jenis Layanan</label>
                <input type="text" id="layanan" placeholder="Website, Aplikasi, Tugas, dll." required />
              </div>
              <div className="form-group">
                <label htmlFor="pesan">Deskripsi Project</label>
                <textarea id="pesan" placeholder="Ceritakan kebutuhan projectmu secara singkat..." required></textarea>
              </div>
              <button type="submit" className="btn-hero primary" style={{ alignSelf: 'flex-start' }}>Kirim via WhatsApp 🚀</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
