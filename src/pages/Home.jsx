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
import ContactSection from '../components/ContactSection';

function Home() {
  useSEO({
    title: `WeabooCoding – Jasa Coding & Pembuatan Website Profesional`,
    description: `WeabooCoding menyediakan jasa coding profesional, pembuatan website, dan aplikasi untuk bisnis dan mahasiswa di Tangerang Selatan dan sekitarnya.`,
    schema: `{
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
    ],
    "areaServed": {
      "@type": "City",
      "name": "Tangerang Selatan"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://weaboocoding.vercel.app/#services",
      "priceCurrency": "IDR",
      "price": "200000",
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
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
