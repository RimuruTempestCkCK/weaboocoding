import { useEffect } from 'react';

export default function useSEO({ title, description, keywords, schema }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }

    if (keywords) {
      let metaKw = document.querySelector('meta[name="keywords"]');
      if (!metaKw) {
        metaKw = document.createElement('meta');
        metaKw.name = 'keywords';
        document.head.appendChild(metaKw);
      }
      metaKw.content = keywords;
    }

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
  }, [title, description, keywords, schema]);
}
