import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { track } from '@vercel/analytics';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Services', href: '/#services' },
    { label: 'Portfolio', href: '/#portfolio' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Kota', href: '/kota/' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <div
      data-wf--rt-nav--variant="base"
      className={`rt-top-nav rt-bg-color ${scrolled ? 'rt-scrolled' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#ffffff',
        transition: 'box-shadow 0.3s ease',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div
        data-animation="default"
        data-collapse="medium"
        role="banner"
        className="rt-nav w-nav"
      >
        <div className="w-layout-blockcontainer rt-container-nav rt-position-relative w-container">
          <div className="rt-navbar-wrapper rt-position-relative">
            {/* Logo */}
            <div className="rt-navbar-logo-wrap">
              <Link to="/" className="rt-navbar-logo rt-position-relative w-nav-brand" style={{ textDecoration: 'none' }}>
                <div style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: '#1a0b54',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  Weaboo<span style={{ color: '#2b4bee' }}>Coding</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="w-layout-hflex rt-navbar-v1-menu-desktop">
              {navLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="rt-navbar-dropdown-toggle w-inline-block"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="rt-menu-text">{item.label}</div>
                </a>
              ))}
            </div>

            {/* Desktop Right CTA Button */}
            <div className="w-layout-hflex rt-navbar-button-wrap rt-tab-display-none">
              <a
                data-wf--rt-border-button--variant="padding"
                href="https://wa.me/6285157558469"
                onClick={() => track('Klik_WA')}
                target="_blank"
                rel="noopener noreferrer"
                className="rt-button-body rt-nav-btn w-inline-block"
                style={{ textDecoration: 'none' }}
              >
                <div className="rt-button-text rt-btn-color-nav">💬 Konsultasi Gratis</div>
                <div className="rt-button-body-overlay rt-nav-overlay"></div>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div
              className={`rt-menu-button-main w-nav-button ${mobileOpen ? 'w--open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{ cursor: 'pointer' }}
            >
              <div
                className="rt-menu-line rt-top-line"
                style={mobileOpen ? { transform: 'translateY(7px) rotate(45deg)', transition: '0.2s' } : { transition: '0.2s' }}
              ></div>
              <div
                className="rt-menu-line rt-middle-line"
                style={mobileOpen ? { opacity: 0, transition: '0.2s' } : { transition: '0.2s' }}
              ></div>
              <div
                className="rt-menu-line rt-bottom-line"
                style={mobileOpen ? { transform: 'translateY(-7px) rotate(-45deg)', transition: '0.2s' } : { transition: '0.2s' }}
              ></div>
            </div>

            {/* Mobile Navigation Drawer */}
            <nav
              role="navigation"
              className={`rt-navbar-v1-menu-mobile w-nav-menu ${mobileOpen ? 'rt-open-mobile' : ''}`}
              style={{ display: mobileOpen ? 'block' : 'none' }}
            >
              <div className="w-layout-vflex rt-mobile-menu-main">
                <div className="w-layout-vflex rt-mobile-menu-content-main">
                  <div className="rt-mobile-navbar" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {navLinks.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="rt-navbar-dropdown-toggle rt-bottom w-inline-block"
                        style={{ textDecoration: 'none', padding: '0.6rem 0' }}
                      >
                        <div className="rt-menu-text" style={{ fontSize: '1rem', fontWeight: 600 }}>{item.label}</div>
                      </a>
                    ))}
                  </div>

                  <div className="rt-mobile-menu-button-wrap" style={{ marginTop: '1.2rem' }}>
                    <a
                      href="https://wa.me/6285157558469"
                      onClick={() => { track('Klik_WA'); setMobileOpen(false); }}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rt-button-body rt-nav-btn w-inline-block"
                      style={{ textDecoration: 'none', textAlign: 'center', width: '100%', display: 'block' }}
                    >
                      <div className="rt-button-text rt-btn-color-nav">💬 Konsultasi via WhatsApp</div>
                      <div className="rt-button-body-overlay rt-nav-overlay"></div>
                    </a>
                  </div>
                </div>

                <div className="w-layout-vflex rt-mobile-menu-bottom-part" style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1rem' }}>
                  <div className="w-layout-vflex rt-mobile-menu-llink-main">
                    <div className="rt-text-style-h5" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Hubungi Kami</div>
                    <div className="w-layout-vflex rt-mobile-menu-link-text-mian">
                      <a href="https://wa.me/6285157558469" className="rt-text-style-h5" style={{ textDecoration: 'none', fontSize: '0.9rem' }}>+62 851-5755-8469</a>
                      <a href="https://instagram.com/weaboocoding" target="_blank" rel="noopener noreferrer" className="rt-text-style-h5" style={{ textDecoration: 'none', fontSize: '0.9rem' }}>@weaboocoding</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="rt-nav-shadows rt-opacite-on"></div>
    </div>
  );
}

export default Header;
