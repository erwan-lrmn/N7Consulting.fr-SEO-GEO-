# Site N7 Consulting — clone React

Reproduction du site vitrine [n7consulting.fr](https://n7consulting.fr), la Junior-Entreprise de l’ENSEEIHT à Toulouse.

**Stack :** React 18, TypeScript (strict), Tailwind CSS 3, React Router 6, `lucide-react`, Vite.

## Démarrer

```bash
npm install
npm run dev
```

```bash
npm run build
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Accueil |
| `/nos-prestations` | Les trois pôles d’expertise |
| `/digital-data`, `/ingenierie-it`, `/eco-ingenierie` | Pages prestations |
| `/qui-sommes-nous` | Mission, équipe, valeurs, histoire |
| `/actualites` et `/actualites/:slug` | Liste et articles |
| `/contact` | Formulaire de contact |
| `/mentions-legales` | Mentions légales |

## Organisation

- `src/types.ts` : interfaces de toutes les données.
- `src/data/` : tout le contenu (textes, images, liens). Aucun texte n’est écrit en dur dans les composants.
  - `site.ts` : navigation, partenaires, footer, bannière d’appel à l’action, URLs du CDN.
  - `home.ts`, `services.ts`, `about.ts`, `pages.ts` (contact, actualités, mentions légales, 404, titres d’onglets).
  - `articles.ts` : les articles, extraits du site d’origine.
- `src/components/` : `layout/` (Navbar, Footer, CtaBanner), `ui/` (Button, RichText, Wave…), et un dossier par page.
- `src/pages/` : assemblage des sections par route.

Les textes enrichis utilisent une mini-syntaxe interprétée par `RichText` : `**gras**`, `==mise en avant orange==`, `[lien](/url)`, et `\n` pour un retour à la ligne.

## À savoir

- **Images :** elles sont chargées depuis le CDN Webflow du site d’origine (`cdn.prod.website-files.com`). Pour s’en affranchir, télécharger les fichiers dans `public/` et mettre à jour les URLs dans `src/data/`.
- **Formulaire de contact :** sans `endpoint` dans `src/data/pages.ts`, l’envoi ouvre le client mail du visiteur vers `contact@n7consulting.fr`. Pour un envoi direct, renseigner l’URL d’un service de formulaire (Formspree, Getform, API maison) dans `contactContent.endpoint`.
- **Hébergement :** l’application utilise des routes côté client. Configurer l’hébergeur pour renvoyer `index.html` sur toutes les routes (règle de réécriture « SPA »).
# N7Consulting.fr-SEO-GEO-
