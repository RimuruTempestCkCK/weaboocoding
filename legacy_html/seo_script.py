import os
import re

# Paths
BASE_DIR = r"D:\DOWNLOAD FOLDER\weaboocoding"
INDEX_PATH = os.path.join(BASE_DIR, "index.html")

def read_file(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()

def write_file(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

def update_homepage():
    content = read_file(INDEX_PATH)
    
    # 1. Update Title and Title Meta
    content = re.sub(
        r'<title>.*?</title>',
        r'<title>WeabooCoding – Jasa Coding & Pembuatan Website Profesional</title>',
        content
    )
    content = re.sub(
        r'<meta name="title" content=".*?">',
        r'<meta name="title" content="WeabooCoding – Jasa Coding & Pembuatan Website Profesional">',
        content
    )
    
    # Update Keywords (remove stuffing, make it natural)
    new_keywords = "WeabooCoding, jasa coding, jasa pembuatan website, jasa pembuatan aplikasi, jasa coding Tangerang Selatan, jasa website Tangerang Selatan, jasa sistem informasi"
    content = re.sub(
        r'<meta name="keywords" content=".*?">',
        f'<meta name="keywords" content="{new_keywords}">',
        content,
        flags=re.DOTALL
    )
    
    # Update Meta Description
    content = re.sub(
        r'<meta property="og:description" content=".*?">',
        r'<meta property="og:description" content="WeabooCoding menyediakan jasa coding profesional, pembuatan website, dan aplikasi untuk mahasiswa, UMKM, dan perusahaan di Tangerang Selatan dan sekitarnya.">',
        content
    )
    content = re.sub(
        r'<meta property="twitter:description" content=".*?">',
        r'<meta property="twitter:description" content="WeabooCoding menyediakan jasa coding profesional, pembuatan website, dan aplikasi untuk mahasiswa, UMKM, dan perusahaan di Tangerang Selatan dan sekitarnya.">',
        content
    )
    
    # Add main meta description if it doesn't exist
    if '<meta name="description"' not in content:
        content = content.replace(
            f'<meta name="keywords" content="{new_keywords}">',
            f'<meta name="keywords" content="{new_keywords}">\n  <meta name="description" content="WeabooCoding menyediakan jasa coding profesional, pembuatan website, dan aplikasi untuk bisnis dan mahasiswa di Tangerang Selatan dan sekitarnya.">'
        )
    
    # Update H1
    content = re.sub(
        r'<h1 class="hero-title">.*?</h1>',
        r'<h1 class="hero-title">WeabooCoding – Jasa Coding &amp;<br><span class="accent">Pembuatan Website Profesional</span></h1>',
        content,
        flags=re.DOTALL
    )
    
    # Update Local SEO mention in Hero sub
    content = re.sub(
        r'<p class="hero-sub">Melayani pembuatan website.*?</p>',
        r'<p class="hero-sub">WeabooCoding menyediakan jasa coding dan pembuatan website untuk pelanggan di Tangerang Selatan dan sekitarnya. Solusi tepat untuk mahasiswa, UMKM, dan perusahaan.</p>',
        content,
        flags=re.DOTALL
    )
    
    # Update structured data
    schema_old = r'<script type="application/ld\+json">\s*{\s*"@context": "https://schema\.org",\s*"@type": "ProfessionalService",.*?}\s*</script>'
    schema_new = """<script type="application/ld+json">
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
  }
  </script>"""
    
    content = re.sub(schema_old, schema_new, content, flags=re.DOTALL)
    
    write_file(INDEX_PATH, content)
    print("Updated index.html")

def create_service_pages():
    services = [
        {"slug": "jasa-pembuatan-website", "title": "Jasa Pembuatan Website di Tangerang Selatan | WeabooCoding", "h1": "Jasa Pembuatan Website Profesional", "desc": "WeabooCoding melayani jasa pembuatan website profesional untuk company profile, toko online, UMKM, dan perusahaan di Tangerang Selatan."},
        {"slug": "jasa-pembuatan-aplikasi", "title": "Jasa Pembuatan Aplikasi Android & Web | WeabooCoding", "h1": "Jasa Pembuatan Aplikasi Custom", "desc": "Jasa pembuatan aplikasi Android, iOS, dan Web app custom oleh WeabooCoding. Solusi digital terbaik untuk bisnis Anda di Tangerang Selatan."},
        {"slug": "jasa-coding", "title": "Jasa Coding & Bantuan Tugas Pemrograman | WeabooCoding", "h1": "Jasa Coding Profesional & Mahasiswa", "desc": "Butuh jasa coding? WeabooCoding melayani pengerjaan proyek, debug, dan penyelesaian tugas coding untuk mahasiswa dan perusahaan."},
        {"slug": "jasa-sistem-informasi", "title": "Jasa Pembuatan Sistem Informasi | WeabooCoding", "h1": "Jasa Pembuatan Sistem Informasi Terintegrasi", "desc": "Jasa pembuatan sistem informasi custom untuk kampus, sekolah, rumah sakit, dan perusahaan oleh WeabooCoding di Tangerang Selatan."},
        {"slug": "jasa-ui-ux", "title": "Jasa Desain UI/UX & Figma | WeabooCoding", "h1": "Jasa Desain UI/UX Modern", "desc": "Tingkatkan user experience dengan jasa desain UI/UX dari WeabooCoding. Prototipe interaktif dengan Figma untuk aplikasi dan website."},
        {"slug": "jasa-debugging", "title": "Jasa Debugging & Solve Code Error | WeabooCoding", "h1": "Jasa Debugging & Perbaikan Error Kode", "desc": "Stuck dengan error coding? WeabooCoding menyediakan jasa debugging cepat untuk memperbaiki bug di website atau aplikasi Anda."}
    ]
    
    template = """<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <meta name="title" content="{title}">
  <meta name="description" content="{desc}">
  <link rel="canonical" href="https://weaboocoding.vercel.app/{slug}.html">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <nav id="navbar">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-text">Weaboo<span>Coding</span></div>
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="index.html#services">Services</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="index.html#contact">Contact</a></li>
    </ul>
  </nav>

  <section style="padding: 150px 5% 100px; max-width: 800px; margin: auto;">
    <h1 style="font-size: 2.5rem; margin-bottom: 20px;">{h1}</h1>
    <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 20px;">
      {desc} WeabooCoding hadir sebagai solusi terpercaya untuk Anda yang membutuhkan layanan ini, khususnya di wilayah Tangerang Selatan dan seluruh Indonesia secara online.
    </p>
    <h2>Siapa yang Cocok Menggunakan Layanan Ini?</h2>
    <ul style="line-height: 1.8; margin-bottom: 20px; padding-left: 20px;">
      <li>Mahasiswa IT yang membutuhkan bantuan tugas atau skripsi</li>
      <li>UMKM yang ingin go digital dengan teknologi modern</li>
      <li>Startup dan perusahaan menengah</li>
    </ul>
    <h2>Proses Kerja WeabooCoding</h2>
    <ol style="line-height: 1.8; margin-bottom: 20px; padding-left: 20px;">
      <li>Konsultasi gratis mengenai kebutuhan Anda</li>
      <li>Penentuan estimasi biaya dan waktu</li>
      <li>Proses pengerjaan dan reporting berkala</li>
      <li>Testing, revisi (jika ada), dan serah terima (delivery)</li>
    </ol>
    <div style="margin-top: 40px;">
      <a href="https://wa.me/6285157558469" class="btn-hero primary">💬 Konsultasi Sekarang</a>
      <a href="index.html#portfolio" class="btn-hero secondary" style="margin-left: 15px;">Lihat Portfolio</a>
    </div>
  </section>
</body>
</html>
"""

    for s in services:
        path = os.path.join(BASE_DIR, f"{s['slug']}.html")
        content = template.format(
            title=s["title"],
            h1=s["h1"],
            desc=s["desc"],
            slug=s["slug"]
        )
        write_file(path, content)
        print(f"Created {s['slug']}.html")

def create_articles():
    articles = [
        {"slug": "biaya-membuat-website-2026", "title": "Berapa Biaya Membuat Website di Tahun 2026? | WeabooCoding", "h1": "Berapa Biaya Membuat Website di Tahun 2026?", "desc": "Panduan lengkap estimasi biaya pembuatan website tahun 2026 untuk company profile, toko online, dan custom app oleh WeabooCoding."},
        {"slug": "jasa-pembuatan-website-tangerang-selatan", "title": "Jasa Pembuatan Website di Tangerang Selatan: Harga dan Layanan", "h1": "Jasa Pembuatan Website di Tangerang Selatan: Harga dan Layanan", "desc": "WeabooCoding menyediakan jasa pembuatan website profesional di Tangerang Selatan. Ketahui harga, fitur, dan keunggulan layanan kami."},
        {"slug": "jasa-coding-mahasiswa", "title": "Jasa Coding untuk Mahasiswa: Apa Saja yang Bisa Dibantu?", "h1": "Jasa Coding untuk Mahasiswa: Apa Saja yang Bisa Dibantu?", "desc": "Stuck dengan tugas akhir? WeabooCoding melayani jasa coding untuk mahasiswa IT dengan jaminan kualitas dan bimbingan source code."}
    ]
    
    template = """<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <meta name="title" content="{title}">
  <meta name="description" content="{desc}">
  <link rel="canonical" href="https://weaboocoding.vercel.app/{slug}.html">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "{h1}",
    "author": {{
      "@type": "Organization",
      "name": "WeabooCoding"
    }},
    "publisher": {{
      "@type": "Organization",
      "name": "WeabooCoding",
      "logo": {{
        "@type": "ImageObject",
        "url": "https://weaboocoding.vercel.app/images/logo.png"
      }}
    }},
    "datePublished": "2026-09-05",
    "description": "{desc}"
  }}
  </script>
</head>
<body>
  <nav id="navbar">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-text">Weaboo<span>Coding</span></div>
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="jasa-pembuatan-website.html">Website</a></li>
      <li><a href="jasa-pembuatan-aplikasi.html">Aplikasi</a></li>
      <li><a href="jasa-coding.html">Jasa Coding</a></li>
      <li><a href="blog.html">Blog</a></li>
    </ul>
  </nav>

  <article style="padding: 150px 5% 100px; max-width: 800px; margin: auto; line-height: 1.8;">
    <h1 style="font-size: 2.5rem; margin-bottom: 20px;">{h1}</h1>
    <p>WeabooCoding terus berkomitmen untuk mengedukasi dan memberikan layanan digital terbaik. Di artikel ini, kami akan membahas secara detail terkait topik <strong>{h1}</strong>.</p>
    
    <h2>Solusi dari WeabooCoding</h2>
    <p>{desc} Sebagai salah satu penyedia <a href="jasa-pembuatan-website.html">jasa pembuatan website</a> dan <a href="jasa-coding.html">jasa coding</a> terkemuka di Tangerang Selatan, kami memastikan klien mendapatkan nilai terbaik dari investasi digital mereka.</p>
    
    <h2>FAQ</h2>
    <p><strong>Apakah WeabooCoding melayani klien di luar Tangerang Selatan?</strong><br>Ya, kami melayani klien dari seluruh Indonesia secara remote dengan komunikasi yang lancar.</p>

    <div style="margin-top: 40px; padding: 20px; background: #f8fafc; border-radius: 8px;">
      <h3>Butuh Bantuan Lebih Lanjut?</h3>
      <p>Jika Anda sedang mencari <a href="jasa-pembuatan-aplikasi.html">jasa pembuatan aplikasi Android</a> atau <a href="index.html">jasa coding</a> profesional, WeabooCoding siap membantu.</p>
      <a href="index.html#contact" class="btn-hero primary" style="display:inline-block; margin-top:10px;">Hubungi WeabooCoding</a>
    </div>
  </article>
</body>
</html>
"""

    for a in articles:
        path = os.path.join(BASE_DIR, f"{a['slug']}.html")
        content = template.format(
            title=a["title"],
            h1=a["h1"],
            desc=a["desc"],
            slug=a["slug"]
        )
        write_file(path, content)
        print(f"Created {a['slug']}.html")

def update_sitemap():
    sitemap_path = os.path.join(BASE_DIR, "sitemap.xml")
    content = read_file(sitemap_path)
    
    urls_to_add = [
        "jasa-pembuatan-website.html", "jasa-pembuatan-aplikasi.html", 
        "jasa-coding.html", "jasa-sistem-informasi.html", 
        "jasa-ui-ux.html", "jasa-debugging.html",
        "biaya-membuat-website-2026.html", 
        "jasa-pembuatan-website-tangerang-selatan.html", 
        "jasa-coding-mahasiswa.html"
    ]
    
    new_urls_xml = ""
    for url in urls_to_add:
        new_urls_xml += f"""
  <url>
    <loc>https://weaboocoding.vercel.app/{url}</loc>
    <lastmod>2026-09-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>"""
        
    content = content.replace("</urlset>", f"{new_urls_xml}\n</urlset>")
    write_file(sitemap_path, content)
    print("Updated sitemap.xml")

if __name__ == "__main__":
    update_homepage()
    create_service_pages()
    create_articles()
    update_sitemap()
    print("All tasks completed.")
