import React from 'react';
import { track } from '@vercel/analytics';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section
      data-wf--rt-footer-v1--variant="white-version"
      className="rt-footer rt-color-change w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0 rt-position-relative"
    >
      <div className="w-layout-blockcontainer rt-container-main w-container">
        <div className="rt-footer-wrap rt-position-relative">
          <div className="w-layout-grid rt-footer-link-grid w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
            {/* Column 1: Direct Contact */}
            <div className="w-layout-vflex rt-footer-link-wrap">
              <div className="rt-small-name rt-text-color-white w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                Hubungi Kami
              </div>
              <div className="w-layout-vflex rt-footer-link-box rt-change">
                <div className="rt-footer-link w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                  <div className="rt-text-color-white rt-color-change w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                    WhatsApp Resmi
                  </div>
                  <a
                    href="https://wa.me/6285157558469"
                    onClick={() => track('Klik_WA')}
                    target="_blank"
                    rel="noreferrer"
                    className="rt-text-color-white rt-bark w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0 rt-footer-link"
                  >
                    +62 851-5755-8469
                  </a>
                </div>
                <div className="rt-footer-link w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                  <div className="rt-text-color-white rt-color-change w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                    Instagram Kami
                  </div>
                  <a
                    href="https://instagram.com/weaboocoding"
                    target="_blank"
                    rel="noreferrer"
                    className="rt-text-color-white rt-emil rt-color-blue w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0 rt-footer-link"
                  >
                    @weaboocoding
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="w-layout-vflex rt-footer-link-wrap">
              <div className="rt-small-name rt-text-color-white w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                Navigasi
              </div>
              <div className="w-layout-vflex rt-footer-link-box">
                <a href="/#home" className="rt-footer-link w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                  Home
                </a>
                <a href="/#about" className="rt-footer-link w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                  Tentang Kami
                </a>
                <a href="/#pricing" className="rt-footer-link w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                  Paket Harga
                </a>
                <a href="/#services" className="rt-footer-link w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                  Layanan
                </a>
                <a href="/#portfolio" className="rt-footer-link w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                  Portfolio
                </a>
                <Link to="/blog/" className="rt-footer-link w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                  Blog &amp; Tips
                </Link>
                <Link to="/kota/" className="rt-footer-link w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                  Layanan Kota
                </Link>
              </div>
            </div>

            {/* Column 3: Featured Services */}
            <div className="w-layout-vflex rt-footer-link-wrap rt-border-none">
              <div className="rt-small-name rt-text-color-white w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                Layanan Unggulan
              </div>
              <div className="w-layout-vflex rt-footer-link-box">
                <a href="/#services" className="rt-footer-link w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                  Pembuatan Website
                </a>
                <a href="/#services" className="rt-footer-link w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                  Aplikasi Android &amp; PWA
                </a>
                <a href="/#services" className="rt-footer-link w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                  Joki Tugas Kuliah / Skripsi
                </a>
                <a href="/#services" className="rt-footer-link w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                  UI/UX Design Figma
                </a>
                <a href="/#services" className="rt-footer-link w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                  Solve Code &amp; Debugging
                </a>
              </div>
            </div>

            {/* Column 4: CTA */}
            <div
              id="w-node-e6ec5761-f4fc-4af6-536f-a4c3f63a6430-fe735dda"
              className="w-layout-vflex rt-footer-link-main"
            >
              <div className="w-layout-vflex rt-footer-text-wrap">
                <div className="rt-small-name rt-text-color-white w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                  Konsultasi Gratis
                </div>
                <p className="rt-color-pale-periwinkle w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0 rt-gap-off rt-gap">
                  <span className="rt-text-color-white rt-bark w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0">
                    Diskusikan ide proyek digitalmu
                  </span>
                  —tim developer WeabooCoding siap memberikan solusi terbaik dan estimasi biaya transparan.
                </p>
                <div
                  className="rt-white-footer w-variant-4e53b383-59ff-12b8-0d77-36138c3c95c0"
                  style={{ marginTop: '1rem' }}
                >
                  <a
                    href="https://wa.me/6285157558469"
                    onClick={() => track('Klik_WA')}
                    target="_blank"
                    rel="noreferrer"
                    className="rt-button-body w-inline-block"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="rt-button-text">💬 Chat WhatsApp Sekarang</div>
                    <div className="rt-button-body-overlay" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
