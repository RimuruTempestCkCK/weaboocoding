import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb({ items }) {
  return (
    <nav style={{
      padding: '10px 20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      marginBottom: '20px',
      fontSize: '0.9rem',
      display: 'inline-flex',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {item.link ? (
              <Link to={item.link} style={{ color: '#0056b3', textDecoration: 'none', fontWeight: '500' }}>
                {item.label}
              </Link>
            ) : (
              <span style={{ color: '#6c757d' }}>{item.label}</span>
            )}
            {!isLast && <span style={{ margin: '0 10px', color: '#adb5bd' }}>/</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;
