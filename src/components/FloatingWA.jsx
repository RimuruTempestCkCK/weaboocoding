import React from 'react';
import '../style.css';

export default function FloatingWA() {
  return (
    <a 
      href="https://wa.me/6285157558469" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '60px',
        height: '60px',
        backgroundColor: '#25D366',
        color: '#FFF',
        borderRadius: '50px',
        textAlign: 'center',
        fontSize: '35px',
        boxShadow: '2px 2px 10px rgba(0,0,0,0.2)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none'
      }}
      title="Hubungi Kami via WhatsApp"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '35px', height: '35px' }} />
    </a>
  );
}
