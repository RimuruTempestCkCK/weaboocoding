const puppeteer = require('puppeteer');
const sirv = require('sirv');
const http = require('http');
const fs = require('fs');
const path = require('path');

(async () => {
  const { blogData } = await import('./src/data/blogData.js');
  const { jasaData } = await import('./src/data/jasaData.js');
  const { kotaData } = await import('./src/data/kotaData.js');

  const routes = [
    '/',
    '/blog',
    '/kota',
    '/weaboocoding',
    '/404'
  ];

  jasaData.forEach(j => routes.push(`/${j.id}`));
  kotaData.forEach(k => routes.push(`/kota/${k.id}`));
  blogData.forEach(b => routes.push(`/blog/${b.id}`));

  console.log('Creating pristine dist backup for serving...');
  const distPath = path.resolve('dist');
  const servePath = path.resolve('dist-serve-temp');
  
  if (fs.existsSync(servePath)) {
    fs.rmSync(servePath, { recursive: true, force: true });
  }
  fs.cpSync(distPath, servePath, { recursive: true });

  console.log('Starting static server on pristine dist...');
  const assets = sirv(servePath, { single: true });
  const server = http.createServer(assets);
  
  await new Promise((resolve) => {
    server.listen(4175, '127.0.0.1', () => {
      console.log('Server is listening on 127.0.0.1:4175');
      resolve();
    });
  });

  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  for (const route of routes) {
    console.log(`Prerendering ${route}...`);
    await page.goto(`http://127.0.0.1:4175${route}`, { waitUntil: 'networkidle0' });
    
    // Give it a small delay for Helmet to finish updating the DOM and images to load
    await new Promise(r => setTimeout(r, 1000));
    
    let html = await page.content();
    
    // Fix canonical URLs and JSON-LD URLs to production
    html = html.replace(/http:\/\/localhost:4173/g, 'https://weaboocoding.vercel.app');
    html = html.replace(/http:\/\/127\.0\.0\.1:4173/g, 'https://weaboocoding.vercel.app');
    html = html.replace(/http:\/\/localhost:4175/g, 'https://weaboocoding.vercel.app');
    html = html.replace(/http:\/\/127\.0\.0\.1:4175/g, 'https://weaboocoding.vercel.app');
    html = html.replace(/http:\/\/localhost:3000/g, 'https://weaboocoding.vercel.app');

    let filePath = path.join(distPath, route, 'index.html');
    if (route === '/404') {
      filePath = path.join(distPath, '404.html');
    } else if (route === '/') {
      filePath = path.join(distPath, 'index.html');
    }
    const dirPath = path.dirname(filePath);
    
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(filePath, html);
  }

  await browser.close();
  server.close();
  
  // Cleanup
  if (fs.existsSync(servePath)) {
    fs.rmSync(servePath, { recursive: true, force: true });
  }
  
  console.log('Prerendering complete!');
})();
