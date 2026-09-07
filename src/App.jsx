import { track } from '@vercel/analytics';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Weaboocoding from './pages/Weaboocoding';
import Blog from './pages/Blog';
import BlogDetail from './pages/blog/BlogDetail';
import KotaList from './pages/kota/KotaList';
import KotaDetail from './pages/kota/KotaDetail';
import JasaDetail from './pages/jasa/JasaDetail';
import NotFound from './pages/NotFound';

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

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) {
              if (node.classList.contains('reveal')) {
                observer.observe(node);
              }
              const children = node.querySelectorAll('.reveal');
              children.forEach(child => observer.observe(child));
            }
          });
        }
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

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
        track('Klik_WA');
        window.open(`https://wa.me/6285157558469?text=${waMsg}`, '_blank');
      });
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname]);

  return null;
}

import PageTracker from './components/PageTracker';
import FloatingWA from './components/FloatingWA';

function App() {
  return (
    <Router>
      <PageTracker />
      <LegacyScripts />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weaboocoding" element={<Weaboocoding />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/kota" element={<KotaList />} />
        <Route path="/kota/:id" element={<KotaDetail />} />
        <Route path="/:slug" element={<JasaDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FloatingWA />
    </Router>
  );
}

export default App;
