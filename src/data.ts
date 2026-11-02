import type { SiteContent } from './types';

const unsplash = (id: string, width: number): string =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const siteContent: SiteContent = {
  navigation: {
    brandName: 'N7 Consulting',
    homeHref: '/',
    links: [
      { label: 'Accueil', href: '/' },
      {
        label: 'Nos prestations',
        href: '/#prestations',
        children: [
          { label: 'Digital & Data', href: '/digital-data' },
          { label: 'Ingénierie & IT', href: '/ingenierie-it' },
          { label: 'Éco-Ingénierie', href: '/eco-ingenierie' },
        ],
      },
      { label: 'Qui sommes-nous ?', href: '/qui-sommes-nous' },
      { label: 'Actualités', href: '/actualites' },
    ],
    cta: { label: 'Nous contacter', href: '/contact' },
  },

  hero: {
    title: 'L’innovation étudiante au cœur de vos projets',
    descriptionLines: [
      'Parce que chaque projet mérite une approche innovante,',
      'N7 Consulting, la Junior-Entreprise de l’ENSEEIHT à Toulouse, met à votre disposition l’expertise et le dynamisme de ses étudiants ingénieurs.',
    ],
    cta: { label: 'Demander un devis', href: '/contact' },
    watermark: 'N7CONSULTING',
    galleryColumns: [
      [
        {
          src: unsplash('photo-1522202176988-66273c2fd55f', 900),
          alt: 'Étudiants ingénieurs travaillant ensemble sur leurs ordinateurs',
          aspect: 'square',
        },
        {
          src: unsplash('photo-1517694712202-14dd9538aa97', 900),
          alt: 'Étudiant rédigeant un rapport d’étude sur son ordinateur portable',
          aspect: 'portrait',
        },
        {
          src: unsplash('photo-1497366216548-37526070297c', 900),
          alt: 'Locaux lumineux de l’école d’ingénieurs',
          aspect: 'square',
        },
        {
          src: unsplash('photo-1531482615713-2afd69097998', 900),
          alt: 'Consultants étudiants en réunion de travail',
          aspect: 'portrait',
        },
      ],
      [
        {
          src: unsplash('photo-1524178232363-1fb2b075b655', 900),
          alt: 'Amphithéâtre rempli d’étudiants lors d’un événement de la Junior-Entreprise',
          aspect: 'square',
        },
        {
          src: unsplash('photo-1509391366360-2e959784a276', 900),
          alt: 'Visite d’une centrale photovoltaïque par les étudiants ingénieurs',
          aspect: 'portrait',
        },
        {
          src: unsplash('photo-1552664730-d307ca884978', 900),
          alt: 'Atelier de cadrage d’un projet client',
          aspect: 'square',
        },
        {
          src: unsplash('photo-1581091226825-a6a2a5aee158', 900),
          alt: 'Ingénieure travaillant sur un prototype électronique',
          aspect: 'portrait',
        },
      ],
    ],
  },

  stats: {
    stats: [
      { value: 'Top 4', label: 'Parmi les 3 meilleurs JE de France en 2022' },
      { value: '+ 597', label: 'Projets réalisés' },
      { value: '96 %', label: 'Taux de satisfaction' },
      { value: '48 ans', label: 'd’expérience' },
    ],
    partnersTitle: 'Nos partenaires',
    partners: [
      { name: 'Société Générale', logo: '/images/partners/societe-generale.svg' },
      { name: 'Vinci Energies', logo: '/images/partners/vinci-energies.svg' },
      { name: 'Wavestone', logo: '/images/partners/wavestone.svg' },
      { name: 'Alten', logo: '/images/partners/alten.svg' },
      { name: 'PwC', logo: '/images/partners/pwc.svg' },
    ],
  },

  services: {
    title: 'Quels défis souhaitez-vous relever ?',
    description:
      'Optimisation énergétique, innovation technologique ou transformation digitale ? Chez N7 Consulting, nos étudiants ingénieurs mettent leurs compétences au service de vos projets à travers trois pôles d’expertise.',
    items: [
      {
        title: 'Digital & Data',
        description:
          'À l’ère du tout-connecté, exploitez la puissance des données et du digital pour faire évoluer votre entreprise. Nos étudiants ingénieurs vous guident à chaque étape de votre transition numérique.',
        image: '/images/services/digital-data.png',
        imageAlt: 'Illustration 3D d’un ordinateur portable',
        href: '/digital-data',
      },
      {
        title: 'Ingénierie & IT',
        description:
          'Besoin d’expertise en conception électronique et systèmes embarqués ? Nous vous accompagnons dans le développement de vos projets technologiques.',
        image: '/images/services/ingenierie-it.png',
        imageAlt: 'Illustration 3D d’engrenages',
        href: '/ingenierie-it',
      },
      {
        title: 'Éco-Ingénierie',
        description:
          'Optimisez vos modèles, réduisez vos coûts énergétiques et minimisez votre impact environnemental grâce à nos solutions sur mesure. Ensemble, construisons un avenir plus responsable',
        image: '/images/services/eco-ingenierie.png',
        imageAlt: 'Illustration 3D d’un îlot de verdure',
        href: '/eco-ingenierie',
      },
    ],
  },

  clients: {
    title: 'Ils nous font confiance',
    subtitle: 'Découvrez pourquoi !',
    clients: [
      { name: 'Thales', logo: '/images/clients/thales.svg' },
      { name: 'Engie', logo: '/images/clients/engie.svg' },
      { name: 'Vinci Energies', logo: '/images/clients/vinci-energies.svg' },
      { name: 'CNRS', logo: '/images/clients/cnrs.svg' },
      { name: 'CNES', logo: '/images/clients/cnes.svg' },
    ],
  },
};
