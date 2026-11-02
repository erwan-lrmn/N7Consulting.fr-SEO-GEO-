import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { siteContent } from '../../data/site';
import Footer from './Footer';
import Navbar from './Navbar';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <Navbar site={siteContent} />
      <main>
        <Outlet />
      </main>
      <Footer site={siteContent} />
    </>
  );
}
