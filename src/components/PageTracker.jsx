import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.2 });

export default function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // Start progress bar
    NProgress.start();
    
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Fake a small delay to make the progress bar visible
    const timer = setTimeout(() => {
      NProgress.done();
    }, 300);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [location.pathname]);

  return null;
}
