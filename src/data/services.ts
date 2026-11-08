import type { ImageAsset, LinkItem, MethodContent, RichText, ServiceGroupBlock, ServicePageContent, ServiceSlug } from '../types';
import { CDN, siteContent } from './site';

const icon = (file: string, alt: string) => ({ src: `${CDN}/${file}`, alt });

const actions = (methodLabel: string): [LinkItem, LinkItem] => [
  { label: 'Discutons de votre projet', href: '/contact' },
  { label: methodLabel, href: '#Methode' },
];

const quoteButton: LinkItem = { label: 'Demander un devis', href: '/contact' };

export const methodContent: MethodContent = {
  anchor: 'Methode',
  title: 'Notre méthode en action',
  steps: [
    {
      number: '01',
      title: 'Cahier des charges',
      image: icon('67b47c9509b063ec3f6e953b_journee_intervenant_je%20(7)_2_11zon.avif', 'journee_intervenant_je'),
      text: 'Après votre premier contact, nous planifions un rendez-vous pour **analyser vos besoins** et ==comprendre votre projet en profondeur==. Nous vous proposons alors un devis adapté **répondant** précisément ==à votre projet==. Ensuite, place au développement.',
    },
    {
      number: '02',
      title: 'Développement',
      image: icon('67b47c8f0a38e41d18e4b7ed_MembreJE_PC_4_11zon.avif', 'Membre de la Junior-Entreprise travaillant sur ordinateur'),
      text: "Les **étudiants sélectionnés** (appelés ==intervenants==) suivent rigoureusement **le cahier des charges** pour garantir la qualité de votre projet. Un chargé d'affaire dédié assure un ==suivi continu== de l'avancement du projet à vos côtés. Fort de son ==expérience== en **gestion de projet**, il anticipe les risques potentiels et veille à la ==bonne progression== des travaux.",
    },
    {
      number: '03',
      title: 'Tests et Validation',
      image: icon('67b47c90b7e1481582208392_journee_intervenant_je%20(78)_3_11zon.avif', 'Journée intervenant informatique junior entreprise'),
      text: "Nous effectuons ensemble les ==tests et validations== pour nous assurer que tout fonctionne parfaitement avant le lancement ! Pendant la **période de garantie** nous restons à votre disposition pour résoudre d'éventuels soucis.",
    },
  ],
};

export const servicePages: Record<ServiceSlug, ServicePageContent> = {
  'digital-data': {
    slug: 'digital-data',
    metaTitle: 'Digital & Data',
    hero: {
      titleLines: ['Transformez vos idées digitales en solutions innovantes'],
      subtitle:
        "Explorez nos services Digital & Data : des sites web élégants aux applications sur mesure, jusqu'à l'IA et l'analyse de données.",
      buttons: [quoteButton, { label: 'Téléchargez notre plaquette', href: siteContent.brochure.href }],
    },
    blocks: [
      {
        type: 'group',
        title: 'Découvrez nos services Digitaux',
        introStyle: 'card',
        intro:
          "Aujourd’hui, le digital est un moteur essentiel pour votre entreprise, permettant d'atteindre des objectifs variés à chaque étape de votre parcours, **de leur lancement à leur pérennisation**. Vous avez une idée à développer ? Pourquoi ne pas la concrétiser avec **une application web ou un site** pour la promouvoir ? Votre entreprise manque de visibilité et votre développement commercial stagne ? **Un site internet** pourrait être la solution. Votre site actuel est obsolète ? Il est temps de **le moderniser** et de le remettre au goût du jour.\nAlors, **prêt à passer à l’action** ?",
        features: [
          {
            icon: icon('67d3011f2f0197f1e5ff967b_web%20bicolore.png', 'Pictogramme Web'),
            title: 'Application web',
            points: [
              '**Conception d’applications web sur mesure** pour aller au-delà du simple site vitrine',
              '**Fonctionnalités avancées** : gestion de compte, personnalisation, collecte de données',
              '**Expérience utilisateur optimisée** pour engager et fidéliser vos clients',
              '**Un outil puissant** pour concrétiser votre idée et **accompagner la croissance de votre entreprise**',
            ],
            actions: actions('Notre méthode ici'),
          },
          {
            icon: icon('67d30100e3e9bcc9a38b4a3d_site_web_bicolore.png', 'Pictogramme site'),
            title: 'Site vitrine',
            points: [
              '**Créez votre vitrine numérique** pour renforcer votre visibilité et votre crédibilité',
              '**Présentez efficacement** votre activité, vos produits et vos services à vos clients',
              '**Répondez aux attentes du marché** : 63 % des TPE/PME estiment leur présence en ligne indispensable',
              '**Faites le premier pas vers le digital** avec un site professionnel, accesible et impactant',
            ],
            actions: actions('Notre méthode ici'),
          },
          {
            icon: icon('67d300f68065dab7b3aa3846_ordinateur_smartphone_bicolore.png', 'Pictogramme appli'),
            title: 'Application mobile',
            points: [
              '**Restez en contact avec vos clients à tout moment** grâce à une application mobile dédiée',
              '**Soyez présent sur leur smartphone**, l’outil le plus utilisé au quotidien',
              '**Renforcez l’engagement client** avec une expérience fluide, accessible et personnalisée',
              '**Faites de votre application un levier de croissance** pour votre activité',
            ],
            actions: actions('Notre méthode ici'),
          },
          {
            icon: icon('67d30117af63fb8c6e26bc5d_engrenage_bicolore.png', 'Pictogramme engrenage'),
            title: 'Logiciels',
            points: [
              '**Développement de logiciels sur mesure** pour répondre précisément à vos besoins',
              '**Optimisation de vos processus** grâce à des solutions parfaitement adaptées à votre activité',
              '**Un outil qui s’adapte à vous**, et non l’inverse : fini les compromis avec les solutions standards',
              '**Gain en efficacité, en fluidité et en performance** au quotidien',
            ],
            actions: actions('Notre méthode ici'),
          },
        ],
      },
      {
        type: 'caseStudies',
        items: [
          {
            quote:
              'Nous avons développé pour Vinci une application ergonomique, afin de renforcer sa communication interne. L’application permet de publier des podcasts qui sont disponibles pour tous les employés. Elle dispose de la fonction kit main libre (commande vocale) ainsi que d’une mesure du taux d’écoute.',
            client: 'Vinci-Facilities',
            logo: icon('681b66789a601c79c5aed233_idKD-3DC2L_1746626161017.png', 'Logo Vinci Energies'),
          },
          {
            quote:
              'Jean-Emmanuel Faure, le jeune entrepreneur à la tête de la start-up toulousaine Water Horizon nous a contacté pour la refonte de son site internet. Nous avons alors développé un site qui constitue la vitrine de sa marque, un appui et un outil pour faire connaître ses services et ses produits au plus grand nombre.',
            client: 'Water HORIZON',
            logo: icon('68248246e18df70c2dc509cf_water-horizon.png', 'Logo Water HORIZON'),
          },
          {
            quote:
              'Certipair a fait appel à nous concernant le développement d’un programme en langage C. Ce programme permet la récupération des informations de la carte Vitale des patients, leur stockage dans un fichier JSON puis une transmission sécurisée au site de Certipair, en utilisant notamment la solution informatique d’intercommunication d’applications (API).',
            client: 'CertiPair',
            logo: icon('682482dbbb290a4726a02bf8_certipair.png', 'Logo CertiPair'),
          },
          {
            quote:
              'L’Institut Universitaire du Cancer de Toulouse Oncopole a fait appel à nous pour développer une application web ludique afin de sensibiliser le personnel médical, les patients et leurs proches aux précautions d’emploi de leurs médicaments. Cette application web a en plus été adaptée en application mobile.',
            client: 'Oncopole Institut Universitaire du Cancer de Toulouse',
            logo: icon('682483c06227a38fd7d71b9e_oncopole.svg', 'Logo Oncopole Institut Universitaire Du Cancer De Toulouse'),
          },
        ],
      },
      {
        type: 'group',
        title: 'Découvrez nos services Datas',
        introStyle: 'card',
        intro:
          "Les données vous sont essentielles pour prendre des décisions éclairées et vous développer efficacement. L'analyse de vos données, renforcée par l'intelligence artificielle, vous permet de recueillir des informations précieuses sur vos clients, processus et opérations. Grâce à l'IA, vous pouvez détecter des tendances invisibles, optimiser vos processus en temps réel et prédire des résultats avec précision. En intégrant l'IA, vous transformez l'information brute en actions concrètes, améliorant ainsi la performance et la croissance de votre entreprise.",
        features: [
          {
            icon: icon('67d300e0d5eb424e00e42b30_data_bicolore.png', 'Pictogramme traitement'),
            title: 'Traitement de BDD',
            points: [
              '**Analysez en profondeur votre entreprise** grâce à un outil de traitement de données sur mesure',
              '**Identifiez vos leviers de croissance** et anticipez vos risques avant qu’ils ne surviennent',
              '**Prenez des décisions éclairées au quotidien**, basées sur des données fiables et pertinentes',
              '**Libérez tout le potentiel de vos données** pour piloter efficacement votre activité',
            ],
            actions: actions('Notre méthode ici'),
          },
          {
            icon: icon('67d300fb110e06feffa953e6_reseau_bicolore.png', 'Pictogramme réseau graphe'),
            title: 'Intelligence artificielle',
            points: [
              '**Intégrez l’intelligence artificielle** dans votre projet, même sans expertise préalable',
              '**Exploitez vos données intelligemment** avec des modèles d’analyse et de prédiction sur mesure',
              '**Développez des solutions innovantes** adaptées à vos objectifs métier',
              '**Bénéficiez d’un accompagnement personnalisé** à chaque étape du projet',
            ],
            actions: actions('Notre méthode ici'),
          },
        ],
      },
    ],
  },
  'ingenierie-it': {
    slug: 'ingenierie-it',
    metaTitle: 'Ingénierie & IT',
    hero: {
      titleLines: ["Transformez vos défis industriels en solutions d'ingénierie sur mesure"],
      subtitle:
        'Explorez nos expertises en ingénierie : de la conception électronique à la mécanique des fluides pour vos projets les plus complexes',
      buttons: [quoteButton],
    },
    blocks: [
      {
        type: 'group',
        title: 'Découvrez nos services Ingénierie',
        introStyle: 'plain',
        intro:
          'Conception électronique, systèmes embarqués, objets connectés et expertise en sciences appliquées : nous développons des solutions sur mesure, innovantes et adaptées à vos besoins.',
        features: [
          {
            icon: icon('67d6fdaf4a794ae7d29c388d_circuit.png', 'Pictogramme circuit électonique'),
            title: 'Conception électronique',
            points: [
              '**Conception sur mesure** de cartes électroniques à partir de votre cahier des charges',
              '**Adaptation de vos contraintes** : environnement, taille, consommation',
            ],
            actions: actions('Notre méthode'),
          },
          {
            icon: icon('67d30117af63fb8c6e26bc5d_engrenage_bicolore.png', 'Pictogramme engrenage'),
            title: 'Systèmes embarqués',
            points: [
              "**Développement complet** de systèmes embarqués autonomes à partir de votre besoin ou d'une simple idée",
              '**Intégration intelligente** de l’électronique, de l’informatique et de la mécatronique',
              '**Création d’IHM sur mesure** pour une interaction fluide et intuitive avec l’utilisateur',
            ],
            actions: actions('Notre méthode'),
          },
          {
            icon: icon('67d30110f36c1698dd4c043f_wifi_bicolore.png', 'Pictogramme objets connectés'),
            title: 'Objets connectés et IoT',
            points: [
              '**Développement logiciel sur mesure** pour connecter votre objet à tout type d’appareil (PC, smartphone, tablette…)',
              '**Compatibilité multi-plateforme** assurée grâce à notre expertise en communication embarquée',
              '**Maîtrise des protocoles de communication locaux** : Bluetooth, BLE, ZigBee, Wi-Fi',
              '**Connexion à distance facilitée** via Sigfox, LoRa, GSM, 3G, 4G pour l’Internet des objets (IoT)',
            ],
            actions: actions('Notre méthode'),
          },
          {
            icon: icon('67d300fb110e06feffa953e6_reseau_bicolore.png', 'Pictogramme réseau graphe'),
            title: 'Sciences appliquées',
            points: [
              '**Compétences solides** alliant théorie rigoureuse et pratique concrète en sciences fondamentales',
              '**Maîtrise du traitement du signal** et des **algorithmes avancés** pour répondre aux défis industriels',
              '**Savoir-faire en analyse statistique** pour une prise de décision basée sur les données',
              '**Connaissances pointues en IA et machine learning** pour développer des solutions intelligentes et innovantes',
            ],
            actions: actions('Notre méthode'),
          },
        ],
      },
    ],
  },
  'eco-ingenierie': {
    slug: 'eco-ingenierie',
    metaTitle: 'Éco-Ingénierie',
    hero: {
      titleLines: ['Soyez acteur de la révolution énergétique :optez pour', "l'Éco-Ingénierie !"],
      subtitle:
        "Explorez nos expertises en Éco-Ingénierie : de la gestion de l'eau à la sobriété énergétique pour des projets durables et innovants",
      buttons: [quoteButton],
    },
    blocks: [
      {
        type: 'group',
        title: 'Découvrez nos services Éco-Ingénierie',
        introStyle: 'plain',
        intro: 'Innovation et durabilité : notre approche intégrée pour des solutions éco-responsables et performantes.',
        features: [
          {
            icon: icon('67d300f36cfc40b16536408d_loupe_bicolore.png', 'Pictogramme loupe'),
            title: "Gestion de l'eau",
            points: [
              '**Savoir-faire en hydrologie** appliquée à vos enjeux de gestion de l’eau',
              '**Solutions sur mesure** pour la prévention des risques naturels et l’optimisation des ouvrages hydrauliques',
              '**Modélisation avancée** pour anticiper et mieux piloter vos projets',
              '**Accompagnement stratégique** pour améliorer l’efficacité et la durabilité de vos infrastructures hydrauliques',
            ],
            actions: actions('Notre méthode'),
          },
          {
            icon: icon('67d3011a11f1119078bcf058_idee_groupe_bicolore.png', 'Pictogramme ampoule créative'),
            title: 'RSE',
            points: [
              '**Accompagnement stratégique en RSE** pour développer votre activité de manière engagée ou intégrer la RSE au coeur de votre activité',
              '**Compréhension des enjeux climatiques** et adaptation aux nouvelles attentes sociétales',
              '**Mise en place d’actions concrètes** pour réduire votre impact environnemental',
              '**Conformité aux obligations réglementaires** et valorisation de votre image d’entreprise responsable',
            ],
            actions: actions('Notre méthode'),
          },
          {
            icon: icon('67d300e08171170c928dd8d4_croissance_bicolore.png', 'Pictogramme croissance'),
            title: 'Dépenses énergétiques',
            points: [
              '**Accompagnement vers la sobriété énergétique**, enjeu clé de la transition actuelle',
              '**Optimisation de vos projets** pour réduire à la fois consommation énergétique et coûts',
              '**Analyse rigoureuse** grâce aux compétences scientifiques de nos intervenants',
              '**Solutions durables et innovantes** adaptées aux nouvelles exigences du secteur énergétique',
            ],
            actions: actions('Notre méthode'),
          },
          {
            icon: icon('67d30117af63fb8c6e26bc5d_engrenage_bicolore.png', 'Pictogramme engrenage'),
            title: 'Mécanique des fluides',
            points: [
              '**Modélisation précise de phénomènes physiques** pour mieux les comprendre et les anticiper',
              '**Savoir-faire dédié en conception et simulation** grâce à une filière spécialisée de notre école',
              '**Stratégies de maillage intelligentes** pour optimiser votre temps de calcul et la précision de vos résultats',
              '**Solutions sur mesure** pour répondre à vos besoins industriels ou de recherche',
            ],
            actions: actions('Notre méthode'),
          },
        ],
      },
    ],
  },
};

export interface Offer {
  title: string;
  icon: ImageAsset;
  points: RichText[];
  href: string;
}

export interface OfferGroup {
  title: string;
  href: string;
  offers: Offer[];
}

const CATEGORY_TITLES: Record<ServiceSlug, string> = {
  'digital-data': 'Digital & Data',
  'ingenierie-it': 'Ingénierie & IT',
  'eco-ingenierie': 'Éco-Ingénierie',
};

/** Offres regroupées par thème (pôle de prestations). */
export const offerGroups: OfferGroup[] = (
  Object.entries(servicePages) as Array<[ServiceSlug, ServicePageContent]>
).map(([slug, page]) => ({
  title: CATEGORY_TITLES[slug],
  href: `/${slug}`,
  offers: page.blocks
    .filter((block): block is ServiceGroupBlock => block.type === 'group')
    .flatMap((block) =>
      block.features.map((feature) => ({
        title: feature.title,
        icon: feature.icon,
        points: feature.points,
        href: `/${slug}`,
      })),
    ),
}));
