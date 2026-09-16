import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, schema, image }) {
  const defaultImage = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80&fm=webp";
  const targetImage = image || defaultImage;
  
  const baseUrl = "https://weaboocoding.vercel.app";
  let path = "";
  if (typeof window !== 'undefined') {
    path = window.location.pathname;
  }
  const url = `${baseUrl}${path}`;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {title && <meta name="twitter:title" content={title} />}
      
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      {description && <meta name="twitter:description" content={description} />}
      
      {keywords && <meta name="keywords" content={keywords} />}
      
      <meta property="og:image" content={targetImage} />
      <meta name="twitter:image" content={targetImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="WeabooCoding" />
      
      {url && <meta property="og:url" content={url} />}
      {url && <link rel="canonical" href={url} />}
      
      {schema && (
        <script type="application/ld+json">
          {schema}
        </script>
      )}
    </Helmet>
  );
}
