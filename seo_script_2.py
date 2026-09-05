import os

BASE_DIR = r"D:\DOWNLOAD FOLDER\weaboocoding"

articles = [
    {"slug": "jasa-pembuatan-sistem-informasi-umkm", "title": "Jasa Pembuatan Sistem Informasi untuk UMKM | WeabooCoding", "h1": "Jasa Pembuatan Sistem Informasi untuk UMKM", "desc": "Tingkatkan efisiensi bisnis UMKM Anda dengan sistem informasi custom dari WeabooCoding. Hubungi kami untuk jasa pembuatan sistem informasi di Tangerang Selatan."},
    {"slug": "jasa-pembuatan-aplikasi-android-custom", "title": "Jasa Pembuatan Aplikasi Android Custom | WeabooCoding", "h1": "Jasa Pembuatan Aplikasi Android Custom", "desc": "WeabooCoding melayani jasa pembuatan aplikasi Android custom sesuai kebutuhan bisnis Anda. Solusi aplikasi mobile terbaik di Tangerang Selatan."},
    {"slug": "cara-memilih-jasa-pembuatan-website-terpercaya", "title": "Cara Memilih Jasa Pembuatan Website yang Terpercaya", "h1": "Cara Memilih Jasa Pembuatan Website yang Terpercaya", "desc": "Panduan lengkap cara memilih jasa pembuatan website profesional dan terpercaya agar investasi digital Anda tidak sia-sia."},
    {"slug": "jasa-coding-tangerang-selatan", "title": "Jasa Coding Tangerang Selatan – WeabooCoding", "h1": "Jasa Coding Tangerang Selatan – WeabooCoding", "desc": "Sedang mencari jasa coding di Tangerang Selatan? WeabooCoding siap membantu proyek website, aplikasi, dan tugas coding Anda."},
    {"slug": "website-company-profile-umkm", "title": "Website Company Profile untuk UMKM: Mengapa Penting?", "h1": "Website Company Profile untuk UMKM", "desc": "Pentingnya website company profile untuk UMKM di era digital. Dapatkan jasa pembuatan website profesional dari WeabooCoding."},
    {"slug": "biaya-membuat-aplikasi-android", "title": "Berapa Biaya Membuat Aplikasi Android? | WeabooCoding", "h1": "Berapa Biaya Membuat Aplikasi Android?", "desc": "Rincian estimasi biaya pembuatan aplikasi Android tahun ini. Ketahui faktor yang mempengaruhi harga jasa pembuatan aplikasi."},
    {"slug": "portofolio-weaboocoding", "title": "Portofolio WeabooCoding: Website dan Aplikasi", "h1": "Portofolio WeabooCoding: Website dan Aplikasi", "desc": "Lihat berbagai hasil karya dan portofolio proyek website, sistem informasi, dan aplikasi yang telah diselesaikan oleh WeabooCoding."}
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

def update_sitemap(slugs):
    sitemap_path = os.path.join(BASE_DIR, "sitemap.xml")
    with open(sitemap_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    new_urls_xml = ""
    for url in slugs:
        new_urls_xml += f"""
  <url>
    <loc>https://weaboocoding.vercel.app/{url}.html</loc>
    <lastmod>2026-09-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>"""
        
    content = content.replace("</urlset>", f"{new_urls_xml}\n</urlset>")
    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write(content)

slugs = []
for a in articles:
    path = os.path.join(BASE_DIR, f"{a['slug']}.html")
    content = template.format(
        title=a["title"],
        h1=a["h1"],
        desc=a["desc"],
        slug=a["slug"]
    )
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Created {a['slug']}.html")
    slugs.append(a["slug"])

update_sitemap(slugs)
print("Updated sitemap.xml for remaining articles.")
