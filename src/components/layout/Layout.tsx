import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { siteContent } from '../../data/site';
import Footer from './Footer';
import Header from './Header';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return undefined;
    }

    const id = decodeURIComponent(hash.slice(1));
    let cancelled = false;
    let attempts = 0;
    let timer: number | undefined;

    const tryScroll = (): void => {
      if (cancelled) return;

      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      attempts += 1;
      if (attempts < 30) {
        timer = window.setTimeout(tryScroll, 80);
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };

    tryScroll();

    return () => {
      cancelled = true;
      if (timer) window.clearTimeout(timer);
    };
  }, [pathname, hash]);

  return null;
}

function CanonicalManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    const href = `${window.location.origin}${path}`;
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = href;
  }, [pathname]);

  return null;
}

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <CanonicalManager />
      <Header />
      <main>
        <Suspense fallback={<div className="min-h-screen bg-white" aria-hidden="true" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer site={siteContent} />
    </>
  );
}
