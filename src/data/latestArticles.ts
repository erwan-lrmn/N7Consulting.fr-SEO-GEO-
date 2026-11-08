import type { ArticleCardData } from '../types';

/**
 * Les trois actualités affichées sur l'accueil.
 * Version allégée de `articles.ts` pour ne pas embarquer le contenu complet
 * des articles dans le bundle JavaScript initial.
 */
export const latestArticles: ArticleCardData[] = [
  {
    slug: 'hackathon-ia-for-impact-2026-n7-consulting-partenaire-technique',
    category: 'ÉVÉNEMENT',
    date: '20 octobre 2026',
    title: 'Hackathon IA for Impact 2026 : N7 Consulting partenaire technique',
    excerpt:
      "Les 9 et 10 octobre 2026, l'ENSEEIHT accueillait le Hackathon IA for Impact de La Mêlée Numérique. N7 Consulting y était partenaire technique, membre du jury et formateur aux côtés de nombreux acteurs tels que ANITI et IBM.",
    cover: {
      src: 'https://cdn.prod.website-files.com/680f9779a28582b229e3585f/6ad7422f875b1d0d9ffaceae_6ad741ea6fa6c2c12eb33fb4_DSC06851-Avec-accentuation-Bruit-Grande.jpeg',
      alt: 'Participants, organisateurs et partenaires réunis lors du Hackathon IA for Impact de La Mêlée Numérique',
    },
  },
  {
    slug: 'etude-de-cas-vinci-facilities-application-podcasts',
    category: 'ÉTUDE DE CAS',
    date: '20 octobre 2026',
    title: 'Étude de cas Vinci Facilities : une application mobile de podcasts pour la communication interne',
    excerpt:
      'Pour Vinci Facilities, N7 Consulting a développé une application mobile de podcasts destinée à renforcer la communication interne, avec commande vocale et mesure du taux d\'écoute.',
    cover: {
      src: 'https://cdn.prod.website-files.com/680f9779a28582b229e3585f/6ad8bd1c0b1cb572f04dc43f_6ad8bcdd1563b3a5437cb938_Vinci-Energies-customer-story-logo-1920x1080.webp',
      alt: 'Logo VINCI Energies sur fond de centrale solaire',
    },
  },
  {
    slug: 'mandat-49-cap-sur-le-mandat-50-et-les-50-ans',
    category: 'VIE DE LA JE',
    date: '20 octobre 2026',
    title: 'Mandat 49 : N7 Consulting prépare le mandat 50 et ses 50 ans',
    excerpt:
      "Recrutement, formation et passation, audits ISO 9001 et CNJE : le mandat 49 prépare l'arrivée du mandat 50, qui fêtera les 50 ans de N7 Consulting. Restez connectés.",
    cover: {
      src: 'https://cdn.prod.website-files.com/680f9779a28582b229e3585f/6ad75c8afa4efc3d1ef7d680_6a205143a27654696a6c68c4_photo_quais-30%2520(1).webp',
      alt: 'Drapeau N7 Consulting sur les quais de la Garonne à Toulouse',
    },
  },
];
