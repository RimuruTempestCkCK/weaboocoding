import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Weaboocoding from './pages/Weaboocoding';
import Blog from './pages/Blog';
import BlogDetail from './pages/blog/BlogDetail';
import KotaList from './pages/kota/KotaList';
import KotaDetail from './pages/kota/KotaDetail';
import JasaDetail from './pages/jasa/JasaDetail';
import NotFound from './pages/NotFound';
import PageTracker from './components/PageTracker';
import FloatingWA from './components/FloatingWA';

function ScrollHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle in-page hash links and smooth scrolling
  useEffect(() => {
    const handleLinkClick = (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (href && href.startsWith('/') && !href.startsWith('http') && !a.getAttribute('target')) {
        if (href.includes('#')) {
          e.preventDefault();
          const [path, hash] = href.split('#');
          const targetPath = path === '' ? '/' : path;
          if (targetPath === location.pathname) {
            const el = document.getElementById(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          } else {
            navigate(href);
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [navigate, location.pathname]);

  // Handle hash scrolling on page load/navigate
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <PageTracker />
      <ScrollHandler />
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
    </>
  );
}

export default App;
