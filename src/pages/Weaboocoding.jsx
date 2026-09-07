import React from 'react';
import '../style.css';
import useSEO from '../hooks/useSEO';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import ServicesSection from '../components/ServicesSection';
import Pricing from '../components/Pricing';
import PortfolioSection from '../components/PortfolioSection';
import WhyUs from '../components/WhyUs';
import FAQSection from '../components/FAQSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingWA from '../components/FloatingWA';

function Weaboocoding() {
  useSEO({
    title: `WeabooCoding – Jasa Pembuatan Website, Aplikasi & Jasa Coding Profesional`,
    description: ``,
    schema: `{
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "WeabooCoding",
    "image": "https://weaboocoding.vercel.app/images/logo.png",
    "@id": "https://weaboocoding.vercel.app/",
    "url": "https://weaboocoding.vercel.app/",
    "telephone": "+6285157558469",
    "priceRange": "Rp 500.000 - Rp 10.000.000",
    "description": "Layanan jasa pembuatan website profesional, pengembangan aplikasi Android dan Web, jasa joki tugas coding, serta UI/UX Design dengan kualitas tinggi.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    },
    "sameAs": [
      "https://instagram.com/weaboocoding"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://weaboocoding.vercel.app/#services",
      "priceCurrency": "IDR",
      "price": "500000",
      "itemOffered": {
        "@type": "Service",
        "name": "Jasa Pembuatan Website & Coding"
      }
    }
  }`
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
      <FAQSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
      <FloatingWA />
      <script src="js/script.js" defer></script>
    </>
  );
}

export default Weaboocoding;
