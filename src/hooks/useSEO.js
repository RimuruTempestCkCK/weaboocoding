import { useEffect } from 'react';

export default function useSEO({ title, description, keywords, schema, image }) {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
      setMetaTag('property', 'og:title', title);
      setMetaTag('name', 'twitter:title', title);
    }
    
    // 2. Update Description
    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }

    // 3. Update Keywords
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // 4. Update Open Graph Image
    const defaultImage = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80"; // Gambar default jika tidak ada
    const targetImage = image || defaultImage;
    setMetaTag('property', 'og:image', targetImage);
    setMetaTag('name', 'twitter:image', targetImage);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('property', 'og:type', 'website');
    
    // Update URL
    setMetaTag('property', 'og:url', window.location.href);

    // 5. Schema.org
    if (schema) {
      let script = document.getElementById('schema-script');
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'schema-script';
        document.head.appendChild(script);
      }
      script.innerHTML = schema;
    }
  }, [title, description, keywords, schema, image]);
}

// Helper function to create or update meta tags dynamically
function setMetaTag(attrName, attrValue, content) {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}
