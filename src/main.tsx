import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './fonts.css';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Élément #root introuvable dans index.html');
}

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// En production, le HTML est pré-rendu au build : on hydrate pour conserver
// le contenu statique (LCP/CLS) au lieu de vider puis reconstruire le DOM.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
