import React, { useState } from 'react';

const faqs = [
  {
    q: "Berapa lama proses pengerjaan website atau aplikasi?",
    a: "Tergantung tingkat kerumitan. Untuk website Company Profile atau Landing Page rata-rata memakan waktu 3-5 hari kerja. Sedangkan untuk Custom Web App atau sistem informasi kompleks bisa memakan waktu 2-4 minggu."
  },
  {
    q: "Apakah ada biaya bulanan atau tahunan?",
    a: "Untuk biaya pembuatan (Development) hanya dibayar satu kali. Namun, untuk domain dan server (Hosting) biasanya ada biaya perpanjangan tahunan yang dibayarkan langsung ke pihak provider, atau bisa kami bantu manage."
  },
  {
    q: "Apakah saya mendapatkan garansi dan revisi?",
    a: "Tentu. Setiap proyek dari WeabooCoding sudah termasuk garansi perbaikan bug/error selama masa maintenance (biasanya 1-3 bulan) dan revisi minor sesuai kesepakatan awal."
  },
  {
    q: "Saya mahasiswa, butuh bantuan tugas atau skripsi. Apakah bisa?",
    a: "Sangat bisa! Kami sering membantu mahasiswa menyelesaikan error coding, tugas akhir IT, maupun pembuatan prototipe aplikasi untuk sidang skripsi dengan harga khusus mahasiswa."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" style={{ padding: '100px 5% 80px', background: 'var(--white)' }}>
      <div className="section-header centered">
        <div className="section-tag">Tanya Jawab</div>
        <h2 className="section-title">FAQ (Pertanyaan yang Sering Diajukan)</h2>
        <p className="section-sub">Temukan jawaban cepat untuk pertanyaan yang sering ditanyakan oleh klien kami.</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {faqs.map((faq, idx) => (
          <div key={idx} style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
            <button 
              onClick={() => toggleFAQ(idx)}
              style={{ 
                width: '100%', 
                padding: '20px', 
                background: openIndex === idx ? 'var(--gray-50)' : '#fff', 
                border: 'none', 
                textAlign: 'left', 
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontWeight: '600',
                fontSize: '1.1rem',
                color: 'var(--bg-dark)'
              }}
            >
              {faq.q}
              <span style={{ fontSize: '1.5rem', color: 'var(--primary)', transform: openIndex === idx ? 'rotate(45deg)' : 'rotate(0)', transition: '0.3s' }}>
                +
              </span>
            </button>
            
            {openIndex === idx && (
              <div style={{ padding: '0 20px 20px 20px', background: 'var(--gray-50)', color: 'var(--gray-600)', lineHeight: '1.7' }}>
                <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '15px', marginTop: '5px' }}>
                  {faq.a}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
