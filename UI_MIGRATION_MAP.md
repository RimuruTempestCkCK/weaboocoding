# Peta Migrasi UI Template Taskopia (UI_MIGRATION_MAP.md)

Dokumen kerja resmi migrasi antarmuka WeabooCoding ke template baru **Taskopia** (`taskopia/`).

---

## 1. Inventarisasi Rute & Halaman

| Rute | Halaman / Komponen | Sumber Data | Komponen Template Taskopia | Status |
|------|-------------------|-------------|----------------------------|--------|
| `/` | `Home.jsx` (Landing Page) | Hardcoded props, SEO schema, FAQ schema | `rt-navbar-v1`, `rt-hero-v1`, `rt-marquee-v1`, `rt-about-v1`, `rt-collaboration-v1`, `rt-our-benefits`, `rt-pricing-v1`, `rt-testimonials-v1`, `rt-faq`, `rt-contact-v1`, `rt-footer` | Siap |
| `/weaboocoding` | `Weaboocoding.jsx` (Branded Landing) | `kotaData`, `jasaData`, SEO | Taskopia Homepage variant dengan SEO lengkap | Siap |
| `/blog` | `Blog.jsx` (Daftar Artikel) | `blogData.js` | `taskopia/blog-one.html` (`rt-hero-10`, `rt-blog-v1-card`, grid) | Siap |
| `/blog/:slug` | `BlogDetail.jsx` (Detail Artikel) | `blogData.js`, `kotaData.js` | `taskopia/blog-post/*.html` (Article view, breadcrumb, content formatting) | Siap |
| `/kota` | `KotaList.jsx` (Daftar Kota SEO) | `kotaData.js` | Taskopia card grid, search/filter friendly | Siap |
| `/kota/:id` | `KotaDetail.jsx` (Landing Kota) | `kotaData.js`, `blogData.js` | Taskopia Hero v8, benefits, services list, FAQ accordion, CTA | Siap |
| `/:slug` | `JasaDetail.jsx` (Detail Layanan) | `jasaData.js`, `kotaData.js`, `blogData.js` | Taskopia `service-one.html` / `service-two.html` (Hero, features, pricing, FAQ, CTA) | Siap |
| `*` | `NotFound.jsx` (Halaman 404) | - | `taskopia/404.html` (Illustrasi 404 Taskopia, back to home button) | Siap |

---

## 2. Pemetaan Komponen Bersama

| Komponen Lama | Fungsi & Data | Komponen Pengganti Taskopia | CSS Baru |
|---------------|--------------|-----------------------------|----------|
| `Header.jsx` | Navigasi utama, dropdown, toggle mobile, tombol WA CTA, logo | `rt-navbar-v1`, `rt-container-navbar`, mobile menu drawer | Taskopia Webflow Navbar styles |
| `Footer.jsx` | Brand, deskripsi, link navigasi, link layanan, social media, copyright | `rt-footer`, `rt-footer-link-wrap`, bottom bar | Taskopia Webflow Footer styles |
| `Hero.jsx` | Judul, subjudul, rating badge, stats counter, CTA buttons | `rt-hero-v1` / `rt-hero-one`, Taskopia floating cards | Taskopia Hero styles |
| `About.jsx` | Visi, pengalaman 3+ tahun, 50+ tech, nilai utama | `rt-about-v1`, stats wrap, value boxes | Taskopia About styles |
| `HowItWorks.jsx` | Alur 4 langkah kerja sama | `rt-collaboration-v1` / step workflow cards | Taskopia Workflow styles |
| `ServicesSection.jsx` | 6 kartu layanan utama, fitur & tags | `rt-our-benefits` / service benefit cards | Taskopia Benefit styles |
| `Pricing.jsx` | 4 kartu paket harga + fitur checklist + CTA WA konsultasi | `rt-pricing-v1` cards dari `pricing.html` | Taskopia Pricing styles |
| `PortfolioSection.jsx` | Galeri proyek web/mobile, tags, link, pagination/load more | Taskopia project showcases & cards | Taskopia Portfolio styles |
| `WhyUs.jsx` | Keunggulan kompetitif (cepat, bergaransi, harga mahasiswa) | `rt-why-choose-v1` | Taskopia Feature styles |
| `TestimonialSection.jsx`| Ulasan klien asli (mahasiswa & UMKM), bintang 5 | `rt-testimonials-v1` slider / grid | Taskopia Testimonials styles |
| `FAQSection.jsx` | Tanya jawab seputar pengerjaan & garansi, schema FAQPage | `rt-faq` accordion interaktif | Taskopia FAQ styles |
| `ContactSection.jsx` | Form pesan langsung via WhatsApp API (nama, layanan, pesan) | `rt-contact-v1` form wrapper | Taskopia Form styles |
| `FloatingWA.jsx` | Tombol mengambang chat WhatsApp dengan analytics | Floating WA terintegrasi token Taskopia | Modern floating button |
| `SEO.jsx` | Helmet title, meta description, OG tags, Schema.org JSON-LD | Dipertahankan 100% | Non-visual (head) |

---

## 3. Sistem Styling & Strategi Aset

- **CSS Utama**: Mengadopsi CSS murni dari `taskopia/css/taskopia.webflow.shared.f0926b53b.css` sebagai `src/styles/taskopia.css` (dengan path URL asset `/images/...`).
- **Aset Gambar**: 1,324 file dari `taskopia/images/` telah dicopy ke `public/images/`.
- **CSS Lama yang Dipensiunkan**:
  - `src/howitworks.css` (dihapus/dikosongkan)
  - CSS custom lama di `src/style.css` (diganti total dengan sistem styling template Taskopia)
  - `src/App.css` dan `src/index.css` (tetap bersih)
- **Interaktivitas**: Mobile menu drawer, accordion FAQ, dan form WA diintegrasikan langsung secara deklaratif React tanpa ketergantungan jQuery yang merusak virtual DOM.

---

## 4. Rencana Kerja Bertahap

- [x] **Batch 0: Fondasi & Aset**
  - Copy gambar template ke `public/images/`
  - Buat stylesheet sistem Taskopia `src/styles/taskopia.css`
  - Validasi path dan font Geist & Poppins
- [ ] **Batch 1: Header, Footer & Global Layout**
  - Migrasi `Header.jsx` ke `rt-navbar-v1`
  - Migrasi `Footer.jsx` ke `rt-footer`
  - Migrasi `FloatingWA.jsx`
- [ ] **Batch 2: Komponen Landing Page (Home)**
  - Migrasi `Hero.jsx`, `About.jsx`, `HowItWorks.jsx`
  - Migrasi `ServicesSection.jsx`, `Pricing.jsx`, `PortfolioSection.jsx`
  - Migrasi `WhyUs.jsx`, `TestimonialSection.jsx`, `FAQSection.jsx`, `ContactSection.jsx`
- [ ] **Batch 3: Halaman Detail & Inner Pages**
  - Migrasi `Blog.jsx` & `BlogDetail.jsx`
  - Migrasi `KotaList.jsx` & `KotaDetail.jsx`
  - Migrasi `JasaDetail.jsx`
  - Migrasi `NotFound.jsx`
- [ ] **Batch 4: Verifikasi & Audit Akhir**
  - Audit CSS lama dan selector yatim
  - Verifikasi build (`npm run build`)
  - Verifikasi semua data, route, SEO, dan tombol WhatsApp
