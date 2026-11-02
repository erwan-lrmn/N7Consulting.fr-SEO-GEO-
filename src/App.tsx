import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import LegalPage from './pages/LegalPage';
import NewsPage from './pages/NewsPage';
import NotFoundPage from './pages/NotFoundPage';
import ServicePage from './pages/ServicePage';
import ServicesOverviewPage from './pages/ServicesOverviewPage';

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
