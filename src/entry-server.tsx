import { renderToString } from 'react-dom/server';
import { Route, Routes } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import Layout from './components/layout/Layout';
import { articles } from './data/articles';
import { pageTitles } from './data/pages';
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
  /** Image de partage (Open Graph / Twitter). URL absolue. */
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
}

/** Toutes les routes générées en HTML statique au build. */
export const prerenderRoutes: PrerenderRoute[] = [
  {
    path: '/',
    title: pageTitles.home,
    description:
      'N7 Consulting, la Junior-Entreprise de l’ENSEEIHT à Toulouse, met les compétences de ses étudiants ingénieurs au service de vos projets en digital & data, ingénierie et éco-ingénierie. Demandez votre devis.',
  },
  {
    path: '/nos-prestations',
    title: `${pageTitles.servicesOverview}${pageTitles.suffix}`,
    description:
      'Découvrez les prestations de N7 Consulting, la Junior-Entreprise de l’ENSEEIHT à Toulouse : digital & data, ingénierie et éco-ingénierie. Nos étudiants ingénieurs vous accompagnent dans la réalisation de vos projets.',
  },
  {
    path: '/digital-data',
    title: `${servicePages['digital-data'].metaTitle}${pageTitles.suffix}`,
    description: `N7 Consulting à Toulouse : ${servicePages['digital-data'].hero.subtitle}`,
  },
  {
    path: '/ingenierie-it',
    title: `${servicePages['ingenierie-it'].metaTitle}${pageTitles.suffix}`,
    description: `N7 Consulting à Toulouse : ${servicePages['ingenierie-it'].hero.subtitle}`,
  },
  {
    path: '/eco-ingenierie',
    title: `${servicePages['eco-ingenierie'].metaTitle}${pageTitles.suffix}`,
    description: `N7 Consulting à Toulouse : ${servicePages['eco-ingenierie'].hero.subtitle}`,
  },
  {
    path: '/qui-sommes-nous',
    title: `${pageTitles.about}${pageTitles.suffix}`,
    description:
      'N7 Consulting, la Junior-Entreprise de l’ENSEEIHT à Toulouse depuis 1977, vous présente sa mission, son équipe, ses alumnis et son histoire. Découvrez comment nos étudiants ingénieurs font vivre la Junior au quotidien.',
  },
  {
    path: '/actualites',
    title: `${pageTitles.news}${pageTitles.suffix}`,
    description:
      'Les actualités de N7 Consulting, la Junior-Entreprise de l’ENSEEIHT à Toulouse : études de cas, événements, vie de la Junior et conseils pratiques pour vos projets digitaux, d’ingénierie et d’éco-ingénierie.',
  },
  ...articles.map((article) => ({
    path: `/actualites/${article.slug}`,
    title: article.seoTitle,
    description: article.excerpt,
    type: 'article' as const,
    image: article.cover.src,
    imageAlt: article.cover.alt,
  })),
  {
    path: '/contact',
    title: `${pageTitles.contact}${pageTitles.suffix}`,
    description:
      'Contactez N7 Consulting, la Junior-Entreprise de l’ENSEEIHT à Toulouse, pour un devis ou un projet en digital & data, ingénierie ou éco-ingénierie. Notre équipe d’étudiants ingénieurs vous répond rapidement.',
  },
  {
    path: '/mentions-legales',
    title: `${pageTitles.legal}${pageTitles.suffix}`,
    description:
      'Mentions légales et politique de confidentialité de N7 Consulting, la Junior-Entreprise de l’ENSEEIHT à Toulouse. Consultez les informations sur l’éditeur, l’hébergeur et la protection de vos données personnelles.',
  },
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
