import type { SiteContent } from '../types';

export const CDN = 'https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7';
export const CDN_CMS = 'https://cdn.prod.website-files.com/680f9779a28582b229e3585f';
export const CDN_TEMPLATE = 'https://cdn.prod.website-files.com/62434fa732124a0fb112aab4';

export const assets = {
  flagPhoto: `${CDN}/67bdba0d63dbef114fbc6f39_flag_photo.webp`,
  checkIcon: `${CDN}/680fa237f39e7ffdc047e6fb_4fd1a3f1593ced2d232e0bd8cb0bd62c_1.svg`,
  quoteIcon: `${CDN_TEMPLATE}/62434fa732124a91e612aae8_quote-mark.svg`,
  linkedinSmall: `${CDN_TEMPLATE}/62434fa732124a389912aad8_linkedin%20small.svg`,
} as const;

export const siteContent: SiteContent = {
  name: 'N7 Consulting',
  logo: {
    src: `${CDN}/67a9fe01c0749a737a00f77e_Logo_N7C_classic_fond_bleu.png`,
    alt: 'Logo N7 Consulting',
  },
  homeHref: '/',
  navigation: [
    { label: 'Accueil', href: '/', hideInFooter: true },
    {
      label: 'Nos prestations',
      href: '/nos-prestations',
      children: [
        { label: 'Digital & Data', footerLabel: '💻 Digital & Data', href: '/digital-data' },
        { label: 'Ingénierie', footerLabel: '⚙️ Ingénierie', href: '/ingenierie-it' },
        { label: 'Éco-ingénierie', footerLabel: '🍃 Éco-ingénierie', href: '/eco-ingenierie' },
      ],
    },
    { label: 'Qui sommes-nous ?', href: '/qui-sommes-nous' },
    { label: 'Actualités', href: '/actualites' },
  ],
  contactCta: { label: 'Nous contacter', href: '/contact' },
  partnersTitle: 'Nos partenaires',
  partners: [
    {
      name: 'Société Générale',
      src: `${CDN}/67c0852826dd15160d215ae7_Societe%20generale_blanc.png`,
      alt: 'Logo Société Générale, partenaire de N7 Consulting',
      href: 'https://particuliers.sg.fr/',
    },
    {
      name: 'VINCI Energies',
      src: `${CDN}/67c085286f5365d8a9e7cd83_Vinci%20energies_blanc.png`,
      alt: 'Logo VINCI Energies, partenaire de N7 Consulting',
      href: 'https://www.vinci-energies.com/',
    },
    {
      name: 'Wavestone',
      src: `${CDN}/67d8a5bc4529e90eb63623a5_Wavestone_Logo_Blanc.png`,
      alt: 'Logo Wavestone, partenaire de N7 Consulting',
      href: 'https://www.wavestone.com/fr/',
    },
    {
      name: 'ALTEN',
      src: `${CDN}/68d4333652e8a997d5be2fe6_ALTEN_White.png`,
      alt: 'Logo ALTEN, partenaire de N7 Consulting',
      href: 'https://www.alten.fr/',
    },
    {
      name: 'PwC',
      src: `${CDN}/67c08af84a1d883205d094a7_pwc.png`,
      alt: 'Logo PwC, partenaire de N7 Consulting',
      href: 'https://www.pwc.fr/fr.html',
    },
  ],
  brochure: {
    label: 'Recevoir la brochure',
    href: `${CDN}/699e0eb658bbef180d016e90_plaquette_commerciale_n7_consulting_compressed%20(1).pdf`,
  },
  socials: [
    {
      label: 'LinkedIn de N7 Consulting',
      href: 'https://fr.linkedin.com/company/n7-consulting',
      icon: { src: `${CDN}/681b3654ccd730052aec5ae6_icons8-linkedin-50.png`, alt: 'LinkedIn de N7 Consulting' },
    },
    {
      label: 'Instagram de N7 Consulting',
      href: 'https://www.instagram.com/n7consulting/',
      icon: { src: `${CDN}/681b36594e5161eaa463b491_icons8-instagram-60.png`, alt: 'Instagram de N7 Consulting' },
    },
  ],
  address: {
    label: '2 Rue Charles Camichel, 31000 Toulouse',
    href: 'https://maps.app.goo.gl/FfJGui8JWUYhUUGC7',
  },
  copyright: '© 2026 N7 Consulting. Tous droits réservés.',
  legalLink: { label: 'Mentions légales', href: '/mentions-legales' },
  ctaBanner: {
    title: 'Faites le premier pas vers la réussite de votre projet',
    text: 'Contactez-nous pour discuter de vos projets et découvrez ce que nous pouvons vous apporter.',
    button: { label: "Passez à l'action", href: '/contact' },
  },
};
