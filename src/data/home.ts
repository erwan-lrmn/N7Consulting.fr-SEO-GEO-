import type { HomeContent, ServicesOverviewContent } from '../types';
import { CDN } from './site';

// Offres présentées sur l'accueil et sur la page prestations (visuels Unsplash).
// Digital & Data conserve l'écran de code ; Ingénierie & IT utilise un PCB.
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
        src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?auto=format&fit=crop&w=1200&h=675&q=80',
        alt: 'Écran de code et de données pour la prestation Digital & Data',
      },
      href: '/digital-data',
    },
    {
      title: 'Ingénierie & IT',
      description:
        'Besoin d’expertise en conception électronique et systèmes embarqués ? Nous vous accompagnons dans le développement de vos projets technologiques.',
      image: {
        src: 'https://images.unsplash.com/photo-1782338938777-908f4e1db3be?auto=format&fit=crop&w=1200&h=675&q=80',
        alt: 'Carte électronique (PCB) avec un microprocesseur pour la prestation Ingénierie & IT',
      },
      href: '/ingenierie-it',
    },
    {
      title: 'Éco-Ingénierie',
      description:
        'Optimisez vos modèles, réduisez vos coûts énergétiques et minimisez votre impact environnemental grâce à nos solutions sur mesure. Ensemble, construisons un avenir plus responsable',
      image: {
        src: 'https://images.unsplash.com/photo-1615209853186-e4bd66602508?auto=format&fit=crop&w=1200&h=675&q=80',
        alt: 'Éolienne dans un paysage au lever du jour pour la prestation Éco-Ingénierie',
      },
      href: '/eco-ingenierie',
    },
  ],
};

export const homeContent: HomeContent = {
  hero: {
    title: 'N7 Consulting, la Junior-Entreprise de l’ENSEEIHT à Toulouse',
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
    { prefix: 'Top', value: 3, label: 'Parmi les 3 meilleures Junior-Entreprises de France en 2022' },
    { prefix: '+', value: 600, label: 'Projets réalisés' },
    { value: 97, suffix: '%', label: 'Taux de satisfaction' },
    { value: 49, suffix: 'ans', label: 'd’expérience chez N7 Consulting' },
  ],
  services: { ...servicesOverview, title: 'Nos offres', description: '' },
  trust: {
    title: 'Ils nous ont fait confiance',
    subtitle: 'Découvrez pourquoi !',
    logoRows: [
      [
        { name: 'Thales', src: `${CDN}/681b393b0abbd13e37e6496d_thales-3.svg`, alt: 'Logo thales', href: 'https://www.thalesgroup.com/fr' },
        { name: 'Engie', src: `${CDN}/681b3bc8047cea776955dc59_engie.svg`, alt: 'Logo Engie', href: 'https://www.engie.com/' },
        {
          name: 'Vinci Energies',
          src: `${CDN}/681b3f97760bd7a42844dec8_VINCI%20Energies_idjDJIpDNj_1.svg`,
          alt: 'Logo Vinci Energies',
          href: 'https://www.vinci-energies.com/',
        },
        { name: 'CNRS', src: `${CDN}/681b3d2123aa3a416f972b83_logocnrs.svg`, alt: 'Logo CNRS', href: 'https://www.cnrs.fr/' },
        { name: 'CNES', src: `${CDN}/6823c0c85adf62d8c9a951d3_Cnes_blanc.png`, alt: 'Logo CNES', href: 'https://www.cnes.fr/' },
      ],
      [
        { name: 'Mantu', src: `${CDN}/6823bee411c8d5e48846d6f7_mantu.svg`, alt: 'Logo MANTU', href: 'https://www.mantu.com/' },
        { name: 'Sigfox', src: `${CDN}/6823c0ada6893f49cc967854_Sigfox_blanc.png`, alt: 'Logo sigfox', href: 'https://www.sigfox.com/' },
        { name: 'RTE', src: `${CDN}/6823c0e4fff28bcc4b6541ba_RTE_blanc.png`, alt: 'Logo RTE', href: 'https://www.rte-france.com/' },
        { name: 'Phoenix Gala', src: `${CDN}/6823c1961ea974e1eaa5306b_gala.svg`, alt: 'Logo phoenix gala', href: 'https://gala.bde.enseeiht.fr/' },
        {
          name: 'Toulouse INP N7',
          src: `${CDN}/6823c061183ee729a2a2c865_logo-N7-blanc.png`,
          alt: 'Logo Toulouse INP N7 (ENSEEIHT)',
          href: 'https://www.enseeiht.fr/',
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
    sectionTitle: 'Ils parlent de nous',
    videos: [
      {
        title: 'N7 Consulting : accélérateur de talents — voir sur Dailymotion',
        href: 'https://www.dailymotion.com/video/x8fig11',
        thumbnail: `${CDN}/6ad6ac57a524fc59d22b4d62_miniature-video-n7c-accelerateur-de-talents.jpg`,
        publisherLogo: {
          src: 'https://thumb.wikimedia.org/wikipedia/fr/thumb/8/88/Le_Point.svg/960px-Le_Point.svg.png',
          alt: 'Le Point',
        },
      },
      {
        title: 'N7 Consulting sur BFM Business — voir sur YouTube',
        href: 'https://www.youtube.com/watch?v=AJJbEshowC8&t=1s',
        thumbnail: 'https://i.ytimg.com/vi/AJJbEshowC8/maxresdefault.jpg',
        publisherLogo: {
          src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Logo_BFM_Business_2020.svg/960px-Logo_BFM_Business_2020.svg.png',
          alt: 'BFM Business',
        },
      },
    ],
  },
  latestNews: {
    title: 'Dernières actualités',
    intro: 'Études réalisées, événements et vie de la Junior : suivez ce qui se passe chez N7 Consulting.',
    allLink: { label: 'Toutes les actualités', href: '/actualites' },
    count: 3,
  },
};
