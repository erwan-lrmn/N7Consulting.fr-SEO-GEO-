import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const ServicesOverviewPage = lazy(() => import('./pages/ServicesOverviewPage'));

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
