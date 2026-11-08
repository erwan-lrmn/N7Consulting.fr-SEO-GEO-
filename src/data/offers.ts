import type { ImageAsset } from '../types';

export interface Offer {
  title: string;
  icon: ImageAsset;
  points: string[];
  href: string;
}

export interface OfferGroup {
  title: string;
  href: string;
  offers: Offer[];
}

/** Offres regroupées par pôle, servies par l'accordéon de l'accueil. */
export const offerGroups: OfferGroup[] = [
  {
    "title": "Digital & Data",
    "href": "/digital-data",
    "offers": [
      {
        "title": "Application web",
        "icon": {
          "src": "https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/67d3011f2f0197f1e5ff967b_web%20bicolore.png",
          "alt": "Pictogramme Web"
        },
        "points": [
          "**Conception d’applications web sur mesure** pour aller au-delà du simple site vitrine",
          "**Fonctionnalités avancées** : gestion de compte, personnalisation, collecte de données",
          "**Expérience utilisateur optimisée** pour engager et fidéliser vos clients",
          "**Un outil puissant** pour concrétiser votre idée et **accompagner la croissance de votre entreprise**"
        ],
        "href": "/digital-data"
      },
      {
        "title": "Site vitrine",
        "icon": {
          "src": "https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/67d30100e3e9bcc9a38b4a3d_site_web_bicolore.png",
          "alt": "Pictogramme site"
        },
        "points": [
          "**Créez votre vitrine numérique** pour renforcer votre visibilité et votre crédibilité",
          "**Présentez efficacement** votre activité, vos produits et vos services à vos clients",
          "**Répondez aux attentes du marché** : 63 % des TPE/PME estiment leur présence en ligne indispensable",
          "**Faites le premier pas vers le digital** avec un site professionnel, accesible et impactant"
        ],
        "href": "/digital-data"
      },
      {
        "title": "Application mobile",
        "icon": {
          "src": "https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/67d300f68065dab7b3aa3846_ordinateur_smartphone_bicolore.png",
          "alt": "Pictogramme appli"
        },
        "points": [
          "**Restez en contact avec vos clients à tout moment** grâce à une application mobile dédiée",
          "**Soyez présent sur leur smartphone**, l’outil le plus utilisé au quotidien",
          "**Renforcez l’engagement client** avec une expérience fluide, accessible et personnalisée",
          "**Faites de votre application un levier de croissance** pour votre activité"
        ],
        "href": "/digital-data"
      },
      {
        "title": "Logiciels",
        "icon": {
          "src": "https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/67d30117af63fb8c6e26bc5d_engrenage_bicolore.png",
          "alt": "Pictogramme engrenage"
        },
        "points": [
          "**Développement de logiciels sur mesure** pour répondre précisément à vos besoins",
          "**Optimisation de vos processus** grâce à des solutions parfaitement adaptées à votre activité",
          "**Un outil qui s’adapte à vous**, et non l’inverse : fini les compromis avec les solutions standards",
          "**Gain en efficacité, en fluidité et en performance** au quotidien"
        ],
        "href": "/digital-data"
      },
      {
        "title": "Traitement de BDD",
        "icon": {
          "src": "https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/67d300e0d5eb424e00e42b30_data_bicolore.png",
          "alt": "Pictogramme traitement"
        },
        "points": [
          "**Analysez en profondeur votre entreprise** grâce à un outil de traitement de données sur mesure",
          "**Identifiez vos leviers de croissance** et anticipez vos risques avant qu’ils ne surviennent",
          "**Prenez des décisions éclairées au quotidien**, basées sur des données fiables et pertinentes",
          "**Libérez tout le potentiel de vos données** pour piloter efficacement votre activité"
        ],
        "href": "/digital-data"
      },
      {
        "title": "Intelligence artificielle",
        "icon": {
          "src": "https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/67d300fb110e06feffa953e6_reseau_bicolore.png",
          "alt": "Pictogramme réseau graphe"
        },
        "points": [
          "**Intégrez l’intelligence artificielle** dans votre projet, même sans expertise préalable",
          "**Exploitez vos données intelligemment** avec des modèles d’analyse et de prédiction sur mesure",
          "**Développez des solutions innovantes** adaptées à vos objectifs métier",
          "**Bénéficiez d’un accompagnement personnalisé** à chaque étape du projet"
        ],
        "href": "/digital-data"
      }
    ]
  },
  {
    "title": "Ingénierie & IT",
    "href": "/ingenierie-it",
    "offers": [
      {
        "title": "Conception électronique",
        "icon": {
          "src": "https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/67d6fdaf4a794ae7d29c388d_circuit.png",
          "alt": "Pictogramme circuit électonique"
        },
        "points": [
          "**Conception sur mesure** de cartes électroniques à partir de votre cahier des charges",
          "**Adaptation de vos contraintes** : environnement, taille, consommation"
        ],
        "href": "/ingenierie-it"
      },
      {
        "title": "Systèmes embarqués",
        "icon": {
          "src": "https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/67d30117af63fb8c6e26bc5d_engrenage_bicolore.png",
          "alt": "Pictogramme engrenage"
        },
        "points": [
          "**Développement complet** de systèmes embarqués autonomes à partir de votre besoin ou d'une simple idée",
          "**Intégration intelligente** de l’électronique, de l’informatique et de la mécatronique",
          "**Création d’IHM sur mesure** pour une interaction fluide et intuitive avec l’utilisateur"
        ],
        "href": "/ingenierie-it"
      },
      {
        "title": "Objets connectés et IoT",
        "icon": {
          "src": "https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/67d30110f36c1698dd4c043f_wifi_bicolore.png",
          "alt": "Pictogramme objets connectés"
        },
        "points": [
          "**Développement logiciel sur mesure** pour connecter votre objet à tout type d’appareil (PC, smartphone, tablette…)",
          "**Compatibilité multi-plateforme** assurée grâce à notre expertise en communication embarquée",
          "**Maîtrise des protocoles de communication locaux** : Bluetooth, BLE, ZigBee, Wi-Fi",
          "**Connexion à distance facilitée** via Sigfox, LoRa, GSM, 3G, 4G pour l’Internet des objets (IoT)"
        ],
        "href": "/ingenierie-it"
      },
      {
        "title": "Sciences appliquées",
        "icon": {
          "src": "https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/67d300fb110e06feffa953e6_reseau_bicolore.png",
          "alt": "Pictogramme réseau graphe"
        },
        "points": [
          "**Compétences solides** alliant théorie rigoureuse et pratique concrète en sciences fondamentales",
          "**Maîtrise du traitement du signal** et des **algorithmes avancés** pour répondre aux défis industriels",
          "**Savoir-faire en analyse statistique** pour une prise de décision basée sur les données",
          "**Connaissances pointues en IA et machine learning** pour développer des solutions intelligentes et innovantes"
        ],
        "href": "/ingenierie-it"
      }
    ]
  },
  {
    "title": "Éco-Ingénierie",
    "href": "/eco-ingenierie",
    "offers": [
      {
        "title": "Gestion de l'eau",
        "icon": {
          "src": "https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/67d300f36cfc40b16536408d_loupe_bicolore.png",
          "alt": "Pictogramme loupe"
        },
        "points": [
          "**Savoir-faire en hydrologie** appliquée à vos enjeux de gestion de l’eau",
          "**Solutions sur mesure** pour la prévention des risques naturels et l’optimisation des ouvrages hydrauliques",
          "**Modélisation avancée** pour anticiper et mieux piloter vos projets",
          "**Accompagnement stratégique** pour améliorer l’efficacité et la durabilité de vos infrastructures hydrauliques"
        ],
        "href": "/eco-ingenierie"
      },
      {
        "title": "RSE",
        "icon": {
          "src": "https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/67d3011a11f1119078bcf058_idee_groupe_bicolore.png",
          "alt": "Pictogramme ampoule créative"
        },
        "points": [
          "**Accompagnement stratégique en RSE** pour développer votre activité de manière engagée ou intégrer la RSE au coeur de votre activité",
          "**Compréhension des enjeux climatiques** et adaptation aux nouvelles attentes sociétales",
          "**Mise en place d’actions concrètes** pour réduire votre impact environnemental",
          "**Conformité aux obligations réglementaires** et valorisation de votre image d’entreprise responsable"
        ],
        "href": "/eco-ingenierie"
      },
      {
        "title": "Dépenses énergétiques",
        "icon": {
          "src": "https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/67d300e08171170c928dd8d4_croissance_bicolore.png",
          "alt": "Pictogramme croissance"
        },
        "points": [
          "**Accompagnement vers la sobriété énergétique**, enjeu clé de la transition actuelle",
          "**Optimisation de vos projets** pour réduire à la fois consommation énergétique et coûts",
          "**Analyse rigoureuse** grâce aux compétences scientifiques de nos intervenants",
          "**Solutions durables et innovantes** adaptées aux nouvelles exigences du secteur énergétique"
        ],
        "href": "/eco-ingenierie"
      },
      {
        "title": "Mécanique des fluides",
        "icon": {
          "src": "https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/67d30117af63fb8c6e26bc5d_engrenage_bicolore.png",
          "alt": "Pictogramme engrenage"
        },
        "points": [
          "**Modélisation précise de phénomènes physiques** pour mieux les comprendre et les anticiper",
          "**Savoir-faire dédié en conception et simulation** grâce à une filière spécialisée de notre école",
          "**Stratégies de maillage intelligentes** pour optimiser votre temps de calcul et la précision de vos résultats",
          "**Solutions sur mesure** pour répondre à vos besoins industriels ou de recherche"
        ],
        "href": "/eco-ingenierie"
      }
    ]
  }
];
