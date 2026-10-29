import React, { useState } from 'react';

const faqs = [
  {
    q: 'Berapa lama estimasi proses pengerjaan website atau aplikasi?',
    a: 'Tergantung kompleksitas fitur. Untuk landing page atau website company profile rata-rata 3–5 hari kerja. Untuk sistem informasi kompleks, e-commerce, atau custom mobile app biasanya memerlukan 2–4 minggu dengan progress update berkala.',
  },
  {
    q: 'Apakah ada biaya langganan bulanan atau tahunan?',
    a: 'Biaya jasa development hanya dibayarkan satu kali (one-time fee). Untuk domain dan hosting server biasanya ada perpanjangan tahunan resmi langsung ke penyedia hosting, atau tim kami siap membantu pengelolaannya secara berkala.',
  },
  {
    q: 'Bagaimana dengan garansi dan hak revisi proyek?',
    a: 'Setiap project di WeabooCoding dilengkapi garansi bebas error/bug selama masa pemeliharaan (1–3 bulan) dan garansi revisi minor sesuai kesepakatan awal hingga website atau aplikasi berjalan optimal.',
  },
  {
    q: 'Saya mahasiswa IT dan butuh bantuan tugas atau skripsi, apakah bisa?',
    a: 'Sangat bisa! Kami rutin membantu mahasiswa memecahkan error coding, menyelesaikan proyek praktikum, hingga mendampingi perancangan prototipe skripsi lengkap dengan penjelasan alur kode agar siap menghadapi dosen penguji.',
  },
  {
    q: 'Bagaimana alur pembayaran dan sistem kerja samanya?',
    a: 'Pembayaran dilakukan secara bertahap via transfer bank: Down Payment (DP) 30%–50% di awal sebelum pengerjaan, dan sisa pelunasan dilakukan setelah hasil kerja didemokan dan Anda puas.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="rt-faq" style={{ padding: '90px 0', backgroundColor: '#ffffff' }}>
      <div className="w-layout-blockcontainer rt-faq-container w-container">
        <div className="rt-faq-content-main">
          {/* Header */}
          <div className="w-layout-hflex rt-faq-heading-main" data-aos="fade-up" data-aos-duration="700">
            <div className="w-layout-vflex rt-faq-heading-wrap rt-desktop-text-center">
              <div className="rt-sub-gap">
                <div className="rt-sub-text rt-sub-gredient">Tanya Jawab Seputar Layanan</div>
              </div>
              <h2 className="rt-no-margin">
                Pertanyaan yang Sering Diajukan <span className="rt-color-periwinkle-gray">(FAQ)</span>
              </h2>
              <p className="rt-hero-v1-top-padding rt-gap-off rt-desktop-text-center" style={{ maxWidth: '650px', margin: '15px auto 0' }}>
                Temukan jawaban cepat untuk pertanyaan umum mengenai estimasi waktu, garansi, harga, dan alur pengerjaan.
              </p>
            </div>
          </div>

          {/* FAQ Accordion List using Taskopia Classes */}
          <div className="rt-faq-main rt-margin-auto" style={{ marginTop: '3.5rem', maxWidth: '850px' }} data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="w-layout-vflex rt-faq-dropdown-wrap rt-faq-item-refined"
                  style={{
                    backgroundColor: isOpen ? '#faf9fc' : '#ffffff',
                    border: isOpen ? '1px solid rgba(43,75,238,0.25)' : '1px solid rgba(26,11,84,0.08)',
                    borderRadius: '16px',
                    marginBottom: '1rem',
                    overflow: 'hidden',
                    boxShadow: isOpen ? '0 8px 24px rgba(43,75,238,0.06)' : 'none',
                  }}
                >
                  <div
                    className="w-layout-hflex rt-faq-top-part"
                    onClick={() => toggleFAQ(idx)}
                    style={{
                      cursor: 'pointer',
                      padding: '1.4rem 1.8rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div className="w-layout-hflex r-faq-text-wrap" style={{ flex: 1, paddingRight: '1rem' }}>
                      <div className="rt-text-style-h6" style={{ fontSize: '1.1rem', color: '#1a0b54', fontWeight: 600, lineHeight: 1.4 }}>
                        {faq.q}
                      </div>
                    </div>
                    <div
                      className="rt-faq-right-part"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: isOpen ? '#2b4bee' : '#f0eff4',
                        color: isOpen ? '#ffffff' : '#1a0b54',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        transition: 'transform 0.25s ease, background-color 0.25s ease',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        flexShrink: 0,
                      }}
                    >
                      +
                    </div>
                  </div>

                  {isOpen && (
                    <div
                      className="rt-faq-bottom-part rt-overflow-hidden"
                      style={{
                        padding: '0 1.8rem 1.5rem',
                        borderTop: '1px solid rgba(26,11,84,0.06)',
                        paddingTop: '1rem',
                      }}
                    >
                      <div className="rt-faq-para-wrap">
                        <p className="rt-gap-off" style={{ color: '#554d74', fontSize: '0.95rem', lineHeight: 1.7 }}>
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
