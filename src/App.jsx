import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import BiayaMembuatAplikasiAndroid from './pages/blog/BiayaMembuatAplikasiAndroid';
import BiayaMembuatWebsite2026 from './pages/blog/BiayaMembuatWebsite2026';
import CaraMemilihJasaPembuatanWebsiteTerpercaya from './pages/blog/CaraMemilihJasaPembuatanWebsiteTerpercaya';
import JasaCodingMahasiswa from './pages/blog/JasaCodingMahasiswa';
import JasaCodingTangerangSelatan from './pages/blog/JasaCodingTangerangSelatan';
import KenapaHarusBelajarReactJs from './pages/blog/KenapaHarusBelajarReactJs';
import MemilihTechStackUntukStartup from './pages/blog/MemilihTechStackUntukStartup';
import MengatasiError500PhpLaravel from './pages/blog/MengatasiError500PhpLaravel';
import PentingnyaWebsiteUntukTokoBaju from './pages/blog/PentingnyaWebsiteUntukTokoBaju';
import PortofolioWeaboocoding from './pages/blog/PortofolioWeaboocoding';
import TipsLolosSidangSkripsiIt from './pages/blog/TipsLolosSidangSkripsiIt';
import TipsUiUxRamahPengguna from './pages/blog/TipsUiUxRamahPengguna';
import WebsiteCompanyProfileUmkm from './pages/blog/WebsiteCompanyProfileUmkm';
import PentingnyaSeoUntukWebsiteBisnis from './pages/blog/PentingnyaSeoUntukWebsiteBisnis';
import KeuntunganMembuatAplikasiMobileUntukToko from './pages/blog/KeuntunganMembuatAplikasiMobileUntukToko';
import CaraBelajarCodingUntukPemula2026 from './pages/blog/CaraBelajarCodingUntukPemula2026';
import ApaItuUiUxDanMengapaPenting from './pages/blog/ApaItuUiUxDanMengapaPenting';
import TipsMencariJasaPembuatanSkripsiIt from './pages/blog/TipsMencariJasaPembuatanSkripsiIt';
import JasaPembuatanWebsiteTangerangSelatanMurah from './pages/blog/JasaPembuatanWebsiteTangerangSelatanMurah';
import CaraMengatasiWebsiteLambat from './pages/blog/CaraMengatasiWebsiteLambat';
import KeunggulanFrameworkLaravel from './pages/blog/KeunggulanFrameworkLaravel';
import PentingnyaResponsifDesign from './pages/blog/PentingnyaResponsifDesign';
import JasaPembuatanAplikasiKasirPos from './pages/blog/JasaPembuatanAplikasiKasirPos';
import PerbedaanUiDanUx from './pages/blog/PerbedaanUiDanUx';
import TipsKeamananWebsite from './pages/blog/TipsKeamananWebsite';
import BikinWebsiteBerbasisWordpressVsCustom from './pages/blog/BikinWebsiteBerbasisWordpressVsCustom';
import PentingnyaMaintenanceWebsite from './pages/blog/PentingnyaMaintenanceWebsite';
import CaraMemulaiKarirSebagaiProgrammer from './pages/blog/CaraMemulaiKarirSebagaiProgrammer';
import JasaDebugDanSolveCodeTercepat from './pages/blog/JasaDebugDanSolveCodeTercepat';
import MengapaHarusMemilihWeaboocoding from './pages/blog/MengapaHarusMemilihWeaboocoding';
import JasaCoding from './pages/JasaCoding';
import JasaDebugging from './pages/JasaDebugging';
import JasaPembuatanAplikasiAndroidCustom from './pages/JasaPembuatanAplikasiAndroidCustom';
import JasaPembuatanAplikasi from './pages/JasaPembuatanAplikasi';
import JasaPembuatanSistemInformasiUmkm from './pages/JasaPembuatanSistemInformasiUmkm';
import JasaPembuatanWebsiteTangerangSelatan from './pages/JasaPembuatanWebsiteTangerangSelatan';
import JasaPembuatanWebsite from './pages/JasaPembuatanWebsite';
import JasaSistemInformasi from './pages/JasaSistemInformasi';
import JasaUiUx from './pages/JasaUiUx';
import Home from './pages/Home';
import Weaboocoding from './pages/Weaboocoding';
import Blog from './pages/Blog';

function LegacyScripts() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleLinkClick = (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (href && href.startsWith('/') && !href.startsWith('http')) {
        e.preventDefault();
        if (href.includes('#')) {
          const [path, hash] = href.split('#');
          if (path === location.pathname || path === '') {
            const el = document.getElementById(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            return;
          }
        }
        navigate(href);
        window.scrollTo(0, 0);
      }
    };
    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [navigate, location.pathname]);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const onScroll = () => {
      if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const toggleMenu = () => {
      if (!navLinks || !hamburger) return;
      navLinks.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      if (navLinks.classList.contains('open')) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    };
    if (hamburger) {
      hamburger.replaceWith(hamburger.cloneNode(true));
      const newHamburger = document.getElementById('hamburger');
      newHamburger.addEventListener('click', toggleMenu);
    }
    if (navLinks) {
      navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          navLinks.classList.remove('open');
          const spans = document.getElementById('hamburger')?.querySelectorAll('span');
          if (spans && spans.length > 2) {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
          }
        });
      });
    }

    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 60);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => observer.observe(el));

    const btnLoadMore = document.getElementById('btn-load-more');
    if (btnLoadMore) {
      btnLoadMore.replaceWith(btnLoadMore.cloneNode(true));
      const newBtn = document.getElementById('btn-load-more');
      newBtn.addEventListener('click', () => {
        const hiddenCards = document.querySelectorAll('.portfolio-card.hidden');
        hiddenCards.forEach(card => {
          card.classList.remove('hidden');
          card.classList.add('reveal', 'reveal-zoom');
          setTimeout(() => card.classList.add('visible'), 50);
        });
        newBtn.style.display = 'none';
      });
    }

    const form = document.querySelector('form');
    if (form && !form.dataset.bound) {
      form.dataset.bound = true;
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nama = document.getElementById('nama')?.value || '';
        const layanan = document.getElementById('layanan')?.value || '';
        const pesan = document.getElementById('pesan')?.value || '';
        const waMsg = encodeURIComponent(`Halo WeabooCoding!\n\nNama: ${nama}\nLayanan: ${layanan}\nPesan: ${pesan}`);
        window.open(`https://wa.me/6285157558469?text=${waMsg}`, '_blank');
      });
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <LegacyScripts />
      <Routes>
        <Route path="/blog/biaya-membuat-aplikasi-android" element={<BiayaMembuatAplikasiAndroid />} />
        <Route path="/blog/biaya-membuat-website-2026" element={<BiayaMembuatWebsite2026 />} />
        <Route path="/blog/cara-memilih-jasa-pembuatan-website-terpercaya" element={<CaraMemilihJasaPembuatanWebsiteTerpercaya />} />
        <Route path="/blog/jasa-coding-mahasiswa" element={<JasaCodingMahasiswa />} />
        <Route path="/blog/jasa-coding-tangerang-selatan" element={<JasaCodingTangerangSelatan />} />
        <Route path="/blog/kenapa-harus-belajar-react-js" element={<KenapaHarusBelajarReactJs />} />
        <Route path="/blog/memilih-tech-stack-untuk-startup" element={<MemilihTechStackUntukStartup />} />
        <Route path="/blog/mengatasi-error-500-php-laravel" element={<MengatasiError500PhpLaravel />} />
        <Route path="/blog/pentingnya-website-untuk-toko-baju" element={<PentingnyaWebsiteUntukTokoBaju />} />
        <Route path="/blog/portofolio-weaboocoding" element={<PortofolioWeaboocoding />} />
        <Route path="/blog/tips-lolos-sidang-skripsi-it" element={<TipsLolosSidangSkripsiIt />} />
        <Route path="/blog/tips-ui-ux-ramah-pengguna" element={<TipsUiUxRamahPengguna />} />
        <Route path="/blog/website-company-profile-umkm" element={<WebsiteCompanyProfileUmkm />} />
        <Route path="/blog/pentingnya-seo-untuk-website-bisnis" element={<PentingnyaSeoUntukWebsiteBisnis />} />
        <Route path="/blog/keuntungan-membuat-aplikasi-mobile-untuk-toko" element={<KeuntunganMembuatAplikasiMobileUntukToko />} />
        <Route path="/blog/cara-belajar-coding-untuk-pemula-2026" element={<CaraBelajarCodingUntukPemula2026 />} />
        <Route path="/blog/apa-itu-ui-ux-dan-mengapa-penting" element={<ApaItuUiUxDanMengapaPenting />} />
        <Route path="/blog/tips-mencari-jasa-pembuatan-skripsi-it" element={<TipsMencariJasaPembuatanSkripsiIt />} />
        <Route path="/blog/jasa-pembuatan-website-tangerang-selatan-murah" element={<JasaPembuatanWebsiteTangerangSelatanMurah />} />
        <Route path="/blog/cara-mengatasi-website-lambat" element={<CaraMengatasiWebsiteLambat />} />
        <Route path="/blog/keunggulan-framework-laravel" element={<KeunggulanFrameworkLaravel />} />
        <Route path="/blog/pentingnya-responsif-design" element={<PentingnyaResponsifDesign />} />
        <Route path="/blog/jasa-pembuatan-aplikasi-kasir-pos" element={<JasaPembuatanAplikasiKasirPos />} />
        <Route path="/blog/perbedaan-ui-dan-ux" element={<PerbedaanUiDanUx />} />
        <Route path="/blog/tips-keamanan-website" element={<TipsKeamananWebsite />} />
        <Route path="/blog/bikin-website-berbasis-wordpress-vs-custom" element={<BikinWebsiteBerbasisWordpressVsCustom />} />
        <Route path="/blog/pentingnya-maintenance-website" element={<PentingnyaMaintenanceWebsite />} />
        <Route path="/blog/cara-memulai-karir-sebagai-programmer" element={<CaraMemulaiKarirSebagaiProgrammer />} />
        <Route path="/blog/jasa-debug-dan-solve-code-tercepat" element={<JasaDebugDanSolveCodeTercepat />} />
        <Route path="/blog/mengapa-harus-memilih-weaboocoding" element={<MengapaHarusMemilihWeaboocoding />} />
        <Route path="/jasa-coding" element={<JasaCoding />} />
        <Route path="/jasa-debugging" element={<JasaDebugging />} />
        <Route path="/jasa-pembuatan-aplikasi-android-custom" element={<JasaPembuatanAplikasiAndroidCustom />} />
        <Route path="/jasa-pembuatan-aplikasi" element={<JasaPembuatanAplikasi />} />
        <Route path="/jasa-pembuatan-sistem-informasi-umkm" element={<JasaPembuatanSistemInformasiUmkm />} />
        <Route path="/jasa-pembuatan-website-tangerang-selatan" element={<JasaPembuatanWebsiteTangerangSelatan />} />
        <Route path="/jasa-pembuatan-website" element={<JasaPembuatanWebsite />} />
        <Route path="/jasa-sistem-informasi" element={<JasaSistemInformasi />} />
        <Route path="/jasa-ui-ux" element={<JasaUiUx />} />
        <Route path="/" element={<Home />} />
        <Route path="/weaboocoding" element={<Weaboocoding />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
