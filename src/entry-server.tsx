import { renderToString } from 'react-dom/server';
import { Route, Routes } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import Layout from './components/layout/Layout';
import { articles } from './data/articles';
import { contactContent, newsContent, pageTitles } from './data/pages';
import { servicePages } from './data/services';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import LegalPage from './pages/LegalPage';
import NewsPage from './pages/NewsPage';
import NotFoundPage from './pages/NotFoundPage';
import ServicePage from './pages/ServicePage';
import ServicesOverviewPage from './pages/ServicesOverviewPage';

export interface PrerenderRoute {
  path: string;
  title: string;
  description?: string;
}

/** Toutes les routes générées en HTML statique au build. */
export const prerenderRoutes: PrerenderRoute[] = [
  { path: '/', title: pageTitles.home },
  { path: '/nos-prestations', title: `${pageTitles.servicesOverview}${pageTitles.suffix}` },
  {
    path: '/digital-data',
    title: `${servicePages['digital-data'].metaTitle}${pageTitles.suffix}`,
    description: servicePages['digital-data'].hero.subtitle,
  },
  {
    path: '/ingenierie-it',
    title: `${servicePages['ingenierie-it'].metaTitle}${pageTitles.suffix}`,
    description: servicePages['ingenierie-it'].hero.subtitle,
  },
  {
    path: '/eco-ingenierie',
    title: `${servicePages['eco-ingenierie'].metaTitle}${pageTitles.suffix}`,
    description: servicePages['eco-ingenierie'].hero.subtitle,
  },
  { path: '/qui-sommes-nous', title: `${pageTitles.about}${pageTitles.suffix}` },
  { path: '/actualites', title: `${pageTitles.news}${pageTitles.suffix}`, description: newsContent.intro },
  ...articles.map((article) => ({
    path: `/actualites/${article.slug}`,
    title: `${article.title}${pageTitles.suffix}`,
    description: article.excerpt,
  })),
  { path: '/contact', title: `${pageTitles.contact}${pageTitles.suffix}`, description: contactContent.intro },
  { path: '/mentions-legales', title: `${pageTitles.legal}${pageTitles.suffix}` },
];

export const notFoundTitle = `${pageTitles.notFound}${pageTitles.suffix}`;

/** Même arbre de routes que l'application, mais avec des imports statiques (pas de React.lazy). */
function StaticRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="nos-prestations" element={<ServicesOverviewPage />} />
        <Route path="digital-data" element={<ServicePage key="digital-data" slug="digital-data" />} />
        <Route path="ingenierie-it" element={<ServicePage key="ingenierie-it" slug="ingenierie-it" />} />
        <Route path="eco-ingenierie" element={<ServicePage key="eco-ingenierie" slug="eco-ingenierie" />} />
        <Route path="qui-sommes-nous" element={<AboutPage />} />
        <Route path="actualites" element={<NewsPage />} />
        <Route path="actualites/:slug" element={<ArticlePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="mentions-legales" element={<LegalPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export function render(path: string): string {
  return renderToString(
    <StaticRouter location={path}>
      <StaticRoutes />
    </StaticRouter>,
  );
}
