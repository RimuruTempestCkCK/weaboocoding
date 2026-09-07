import React from 'react';

function Header() {
  return (
    <nav id="navbar">
      <a href="/" className="nav-logo">
        <div className="nav-logo-text">Weaboo<span>Coding</span></div>
      </a>

      <ul className="nav-links" id="navLinks">
        <li><a href="/">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#pricing">Pricing</a></li>
        <li><a href="/#portfolio">Portfolio</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/kota">Kota</a></li>
        <li><a href="/#contact">Contact</a></li>
        <li className="nav-cta"><a href="https://wa.me/6285157558469" className="btn-cta">💬 Konsultasi Gratis</a></li>
      </ul>

      <button className="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}

export default Header;
