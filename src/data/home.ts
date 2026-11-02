import type { HomeContent, ServicesOverviewContent } from '../types';
import { CDN } from './site';

export const servicesOverview: ServicesOverviewContent = {
  title: 'Quels défis souhaitez-vous relever ?',
  description:
    'Optimisation énergétique, innovation technologique ou transformation digitale ? Chez N7 Consulting, nos étudiants ingénieurs mettent leurs compétences au service de vos projets à travers trois pôles d’expertise.',
  items: [
    {
      title: 'Digital & Data',
      description:
        'À l’ère du tout-connecté, exploitez la puissance des données et du digital pour faire évoluer votre entreprise. Nos étudiants ingénieurs vous guident à chaque étape de votre transition numérique.',
      image: {
        src: `${CDN}/68320aa7188508d45dc74399_Capture%20d%E2%80%99%C3%A9cran%202025-05-24%20200210.png`,
        alt: 'Ordinateur Digital et data',
      },
      href: '/digital-data',
    },
    {
      title: 'Ingénierie & IT',
      description:
        'Besoin d’expertise en conception électronique et systèmes embarqués ? Nous vous accompagnons dans le développement de vos projets technologiques.',
      image: {
        src: `${CDN}/68320eded0a1d1885e3cc6d0_vecteezy_gear-icon-3d_17339000.webp`,
        alt: 'Ingénierie et IT prestation',
      },
      href: '/ingenierie-it',
    },
    {
      title: 'Éco-Ingénierie',
      description:
        'Optimisez vos modèles, réduisez vos coûts énergétiques et minimisez votre impact environnemental grâce à nos solutions sur mesure. Ensemble, construisons un avenir plus responsable',
      image: {
        src: `${CDN}/68320aa7700597d66a3d2208_Capture%20d%E2%80%99%C3%A9cran%202025-05-24%20200225.png`,
        alt: 'Eco-ingénierie Mécanique des fluides RSE',
      },
      href: '/eco-ingenierie',
    },
  ],
};

export const homeContent: HomeContent = {
  hero: {
    title: 'L’innovation étudiante au cœur de vos projets',
    descriptionLines: [
      'Parce que chaque projet mérite une approche innovante,',
      'N7 Consulting, la Junior-Entreprise de l’ENSEEIHT à Toulouse, met à votre disposition l’expertise et le dynamisme de ses étudiants ingénieurs.',
    ],
    cta: { label: 'Demander un devis', href: '/contact' },
    galleryColumns: [
      [
        {
          src: `${CDN}/67b47c9509b063ec3f6e953b_journee_intervenant_je%20(7)_2_11zon.avif`,
          alt: 'Étudiants ingénieurs lors d’une journée intervenants N7 Consulting',
        },
        {
          src: `${CDN}/67b330cc542f1a73c558375f_Raph_concentre.avif`,
          alt: 'Étudiant ingénieur de N7 Consulting travaillant sur une étude',
        },
        {
          src: `${CDN}/67b47c90b7e1481582208392_journee_intervenant_je%20(78)_3_11zon.avif`,
          alt: 'Journée intervenant informatique junior entreprise',
        },
      ],
      [
        {
          src: `${CDN}/67b47c8f28387bca819ef6c0_N7C_CRPSO2024_5_11zon.avif`,
          alt: 'CRP Junior Entreprise Toulouse ENSEEIHT',
        },
        {
          src: `${CDN}/67b47c8f0a38e41d18e4b7cd_3EA_Centrale_1_11zon.avif`,
          alt: '3EA Panneau solaires',
        },
        {
          src: `${CDN}/67b47c92c96ca901a03cd600_PC_Stickers_6_11zon.avif`,
          alt: 'Intervenant informatique',
        },
      ],
    ],
  },
  stats: [
    { prefix: 'Top', value: 3, label: 'Parmi les 3 meilleurs JE de France en 2022' },
    { prefix: '+', value: 600, label: 'Projets réalisés' },
    { value: 97, suffix: '%', label: 'Taux de satisfaction' },
    { value: 49, suffix: 'ans', label: 'd’expérience' },
  ],
  services: servicesOverview,
  trust: {
    title: 'Ils nous font confiance',
    subtitle: 'Découvrez pourquoi !',
    logoRows: [
      [
        { name: 'Thales', src: `${CDN}/681b393b0abbd13e37e6496d_thales-3.svg`, alt: 'Logo thales' },
        { name: 'Engie', src: `${CDN}/681b3bc8047cea776955dc59_engie.svg`, alt: 'Logo Engie' },
        {
          name: 'Vinci Energies',
          src: `${CDN}/681b3f97760bd7a42844dec8_VINCI%20Energies_idjDJIpDNj_1.svg`,
          alt: 'Logo Vinci Energies',
        },
        { name: 'CNRS', src: `${CDN}/681b3d2123aa3a416f972b83_logocnrs.svg`, alt: 'Logo CNRS' },
        { name: 'CNES', src: `${CDN}/6823c0c85adf62d8c9a951d3_Cnes_blanc.png`, alt: 'Logo CNES' },
      ],
      [
        { name: 'Mantu', src: `${CDN}/6823bee411c8d5e48846d6f7_mantu.svg`, alt: 'Logo MANTU' },
        { name: 'Sigfox', src: `${CDN}/6823c0ada6893f49cc967854_Sigfox_blanc.png`, alt: 'Logo sigfox' },
        { name: 'RTE', src: `${CDN}/6823c0e4fff28bcc4b6541ba_RTE_blanc.png`, alt: 'Logo RTE' },
        { name: 'Phoenix Gala', src: `${CDN}/6823c1961ea974e1eaa5306b_gala.svg`, alt: 'Logo phoenix gala' },
        {
          name: 'Toulouse INP N7',
          src: `${CDN}/6823c061183ee729a2a2c865_logo-N7-blanc.png`,
          alt: 'Logo Toulouse INP N7 (ENSEEIHT)',
        },
      ],
    ],
    testimonials: [
      {
        quote:
          '"Le résultat est au rendez-vous. Durant cette industrialisation nous avons pu bénéficier de toute l\'innovation des étudiants de l\'N7 ainsi que d\'un suivi qu\'on peut sans forcer qualifier de professionnel tant en termes de réactivité que de qualité"',
        author: 'Benoît JEANSON',
        role: 'R&D project manager, RTE',
        photo: { src: `${CDN}/681b5475e691f7d5b39e2cd8_BJ.webp`, alt: 'Benoit Jeanson RTE' },
      },
      {
        quote:
          '"Je recommande vivement N7 Consulting à toute entreprise recherchant un travail sérieux et de qualité pour des projets traitant de problématiques de mécanique des fluides ou d\'apprentissage machine."',
        author: 'David BARBIER',
        role: 'CTO & Co-Founder, QuadrX',
        photo: { src: `${CDN}/681b56138da892f599a9a5bf_DB.jpg`, alt: 'Photo David Barbier QuadrX' },
      },
    ],
  },
  video: {
    title: 'N7 Consulting : accélérateur de talents — voir sur Dailymotion',
    href: 'https://www.dailymotion.com/video/x8fig11',
    thumbnail: `${CDN}/6ad6ac57a524fc59d22b4d62_miniature-video-n7c-accelerateur-de-talents.jpg`,
    badge: {
      src: `${CDN}/699e15280cc4592bb5dc5b93_Screenshot%20from%202026-02-24%2022-15-19-Photoroom.png`,
      alt: 'Le Point',
    },
  },
  latestNews: {
    title: 'Dernières actualités',
    intro: 'Études réalisées, événements et vie de la Junior : suivez ce qui se passe chez N7 Consulting.',
    allLink: { label: 'Toutes les actualités', href: '/actualites' },
    count: 3,
  },
};
