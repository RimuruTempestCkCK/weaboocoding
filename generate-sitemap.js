import fs from 'fs';
import { blogData } from './src/data/blogData.js';
import { jasaData } from './src/data/jasaData.js';
import { kotaData } from './src/data/kotaData.js';

const BASE_URL = 'https://weaboocoding.vercel.app';

function generateSitemap() {
  const sitemapHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  const sitemapFooter = `\n</urlset>`;

  const urls = [];

  // Static routes
  urls.push({ loc: '/', priority: '1.0' });
  urls.push({ loc: '/blog', priority: '0.8' });
  urls.push({ loc: '/kota', priority: '0.8' });

  // Jasa routes
  jasaData.forEach(jasa => {
    urls.push({ loc: `/${jasa.id}`, priority: '0.9' });
  });

  // Kota routes
  kotaData.forEach(kota => {
    urls.push({ loc: `/kota/${kota.id}`, priority: '0.8' });
  });

  // Blog routes
  blogData.forEach(blog => {
    urls.push({ loc: `/blog/${blog.id}`, priority: '0.7' });
  });

  let xmlBody = '';
  urls.forEach(url => {
    xmlBody += `
  <url>
    <loc>${BASE_URL}${url.loc}</loc>
    <priority>${url.priority}</priority>
  </url>`;
  });

  const fullSitemap = sitemapHeader + xmlBody + sitemapFooter;
  
  fs.writeFileSync('./public/sitemap.xml', fullSitemap);
  console.log('✅ Sitemap successfully generated at public/sitemap.xml');
}

generateSitemap();
