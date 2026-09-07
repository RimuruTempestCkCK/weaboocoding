import React from 'react';
import '../style.css';
import useSEO from '../hooks/useSEO';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import ServicesSection from '../components/ServicesSection';
import Pricing from '../components/Pricing';
import PortfolioSection from '../components/PortfolioSection';
import WhyUs from '../components/WhyUs';
import TestimonialSection from '../components/TestimonialSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

function Home() {
  useSEO({
    title: `WeabooCoding – Jasa Coding & Pembuatan Website Profesional`,
    description: `WeabooCoding menyediakan jasa coding profesional, pembuatan website, dan aplikasi untuk bisnis dan mahasiswa di Tangerang Selatan dan sekitarnya.`,
    schema: `[
      {
        "@context": "https://schema.org",
        "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
        "name": "WeabooCoding",
        "image": "https://weaboocoding.vercel.app/images/logo.png",
        "@id": "https://weaboocoding.vercel.app/",
        "url": "https://weaboocoding.vercel.app/",
        "telephone": "+6285157558469",
        "priceRange": "Rp 200.000 - Rp 10.000.000",
        "description": "WeabooCoding menyediakan jasa coding dan pembuatan website profesional untuk pelanggan di Tangerang Selatan dan sekitarnya.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Tangerang Selatan",
          "addressCountry": "ID"
        },
        "sameAs": [
          "https://instagram.com/weaboocoding"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
          "@type": "Question",
          "name": "Berapa lama proses pengerjaan website atau aplikasi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tergantung tingkat kerumitan. Untuk website Company Profile atau Landing Page rata-rata memakan waktu 3-5 hari kerja. Sedangkan untuk Custom Web App atau sistem informasi kompleks bisa memakan waktu 2-4 minggu."
          }
        }, {
          "@type": "Question",
          "name": "Apakah ada biaya bulanan atau tahunan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Untuk biaya pembuatan (Development) hanya dibayar satu kali. Namun, untuk domain dan server (Hosting) biasanya ada biaya perpanjangan tahunan yang dibayarkan langsung ke pihak provider, atau bisa kami bantu manage."
          }
        }, {
          "@type": "Question",
          "name": "Apakah saya mendapatkan garansi dan revisi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tentu. Setiap proyek dari WeabooCoding sudah termasuk garansi perbaikan bug/error selama masa maintenance (biasanya 1-3 bulan) dan revisi minor sesuai kesepakatan awal."
          }
        }]
      }
    ]`
  });

  return (
    <>
      <Header />
      <Hero />
      <About />
      <ServicesSection />
      <Pricing />
      <PortfolioSection />
      <WhyUs />
      <TestimonialSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
