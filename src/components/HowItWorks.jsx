import React from 'react';

function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: 'Konsultasi & Diskusi',
      desc: 'Diskusikan kebutuhan, fitur, dan referensi desain website/aplikasi yang Anda inginkan.',
      icon: '💬'
    },
    {
      id: 2,
      title: 'Penawaran & DP',
      desc: 'Kami akan memberikan estimasi waktu dan harga. Pengerjaan dimulai setelah DP dibayarkan.',
      icon: '📝'
    },
    {
      id: 3,
      title: 'Proses Pengerjaan',
      desc: 'Tim kami akan melakukan coding. Anda akan mendapatkan update berkala mengenai progress.',
      icon: '💻'
    },
    {
      id: 4,
      title: 'Testing & Revisi',
      desc: 'Kami mengirimkan versi beta untuk Anda tes. Kami akan melakukan revisi jika ada yang kurang sesuai.',
      icon: '⚙️'
    },
    {
      id: 5,
      title: 'Serah Terima',
      desc: 'Setelah pelunasan, source code atau akses penuh ke website akan diserahkan kepada Anda.',
      icon: '🚀'
    }
  ];

  return (
    <section id="how-it-works" className="section bg-light">
      <div className="container">
        <div className="section-title text-center" data-aos="fade-up">
          <h2>Cara <span>Kerja</span></h2>
          <p>Alur pemesanan jasa di WeabooCoding dari awal hingga proyek selesai.</p>
        </div>
        
        <div className="how-it-works-grid">
          {steps.map((step, index) => (
            <div 
              className="how-it-works-card" 
              key={step.id} 
              data-aos="fade-up" 
              data-aos-delay={`${index * 100}`}
            >
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">
                <span className="step-number">{step.id}.</span> {step.title}
              </h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
