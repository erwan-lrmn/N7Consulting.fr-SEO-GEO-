import type { AboutContent, TeamMember } from '../types';
import { CDN, assets } from './site';

const member = (firstName: string, lastName: string, role: string, photoFile: string, linkedin: string): TeamMember => ({
  firstName,
  lastName,
  role,
  photo: `${CDN}/${photoFile}`,
  linkedin,
});

export const aboutContent: AboutContent = {
  hero: {
    title: 'Notre mission',
    text: "N7 Consulting est une Junior-Entreprise engagée à mettre en avant le **savoir-faire technique** de nos étudiants. Notre mission est de fournir des **solutions innovantes** aux entreprises dans les domaines du digital, de l'ingénierie et de l'éco-ingénierie.",
    cta: { label: 'Nous contacter', href: '/contact' },
    background: `${CDN}/6a205143a27654696a6c68c4_photo_quais-30%20(1).webp`,
  },
  junior: {
    title: "Comprendre le fonctionnement d'une Junior-Entreprise",
    text: 'Une Junior-Entreprise est une structure associative à vocation économique, gérée par des étudiants d’une grande école.  Elle permet aux entreprises de bénéficier de prestations sur mesure, leur permettant de bénéficier de compétences techniques et méthodologiques pointues, issues des enseignements les plus récents, au service de leurs projets.',
    whyTitle: 'Pourquoi collaborer avec notre Junior-Entreprise ?',
    reasons: [
      {
        icon: { src: `${CDN}/67d301108099bf8cbaf1a0e8_cible_bicolore.png`, alt: 'Pictogramme cible' },
        title: 'Des compétences immédiatement mobilisables',
        text: 'Nous mettons à votre disposition des étudiants formés aux dernières innovations technologiques et aux méthodologies actuelles, capables de répondre efficacement à vos problématiques opérationnelles.',
      },
      {
        icon: { src: `${CDN}/67d300ef4714df562d2413c6_info_bicolore.png`, alt: 'Pictogramme information' },
        title: 'Un fonctionnement professionnel et flexible',
        text: 'Notre Junior-Entreprise adopte un fonctionnement similaire à celui d’un cabinet de conseil : un interlocuteur unique, une gestion de projet cadrée et des livrables de qualité, dans le respect de vos délais et exigences.',
      },
      {
        icon: { src: `${CDN}/67d3011cbb7552606d4a1866_retribution_bicolore.png`, alt: 'Pictogramme dollar' },
        title: 'Un savoir-faire technique à forte valeur ajoutée et à coût maîtrisé',
        text: 'Profitez d’un savoir-faire technique de qualité à un tarif avantageux, adapté à vos contraintes budgétaires, sans compromis sur la qualité.',
      },
    ],
    moreLink: { label: 'En savoir plus', href: 'https://junior-entreprises.com/' },
  },
  team: {
    title: 'Notre équipe',
    subtitle: 'Rencontrez les membres de notre équipe dynamique.',
    members: [
      member('Lucie', 'Gruet', 'Présidente', '6a2058449ec54c1ee09b4bf5_Lucie-Photoroom.webp', 'https://www.linkedin.com/in/luciegruet/'),
      member('Ali', 'Benanni', 'Vice-Président', '6a205836c6097920fd11c182_Ali-Photoroom.webp', 'https://www.linkedin.com/in/ali-bennani-963802364/'),
      member('Shtefan', 'Cucu', 'Responsable Qualité', '6a205849fdf9fd0380d5a58b_Shtefan-Photoroom.webp', 'https://www.linkedin.com/in/shtefan-cucu-473792385/'),
      member('Daniel', "M'Bouyou", 'Responsable Technique', '6a205839a506264d41daf43c_Daniel-Photoroom.webp', 'https://www.linkedin.com/in/daniel-m-bouyou-360869257/'),
      member('Yvan', 'Jacob', 'GRHI', '6a20584cd2267396927becb8_Yvan-Photoroom.webp', 'https://www.linkedin.com/in/yvan-jacob-186104385/'),
      member('Chahyn', 'Ettaghi', "Directeur des Systèmes d'Information", '6ae3c4bc90ffef6a1482e9be_Chahyn-Photoroom.png', 'https://www.linkedin.com/in/chahyn-ettaghi-4a4763332/'),
      member('Emilien', 'Mauperon', "Directeur des Systèmes d'Information", '6a20583a4753d055af1b4edc_Emilien-Photoroom.webp', 'https://www.linkedin.com/in/emilien-mauperon/'),
      member('Mehdi', 'Lassoued', 'Trésorier', '6a20584619fda8ee34a2ad82_Mehdi-Photoroom.webp', 'https://www.linkedin.com/in/mehdi-lassoued-b75797385/'),
      member('Yueshan', 'Ren', 'Responsable Développement Commercial', '6a20584fd3eadd858446ee46_Yueshan-Photoroom.webp', 'https://www.linkedin.com/in/yueshan-ren-86a023215/'),
      member('Titouan', 'Rambaud', 'Responsable Marketing', '6a20584acaabcb84fcfe907e_Titouan-Photoroom.webp', 'https://www.linkedin.com/in/titouan-rambaud-691b69384/'),
      member('Pierre', 'Guyonet', "Chargé d'Affaires", '6a205846a8c860e0de25d469_Pierre-Photoroom.webp', 'https://www.linkedin.com/in/pierre-guyonet/?locale=fr'),
      member('Emma', 'Monsang', 'Responsable RSE', '6a20583e32f6def113dbf497_Emma-Photoroom.webp', 'https://www.linkedin.com/in/emma-monsang-520b70309/'),
      member('Lili', 'Hournarette', 'Secretaire Général', '6a205840ae65c985e63311a4_Lili-Photoroom.webp', 'https://www.linkedin.com/in/lili-hournarette-a71a65310/'),
      member('Grégoire', 'Cendré', 'Responsable Marketing', '6a20583e5bf0545790dbecd4_Gr%C3%87goire-Photoroom.webp', 'https://www.linkedin.com/in/gr%C3%A9goire-cendr%C3%A9-1942a5372/'),
      member('Aymen', 'Mrini', "Chargé d'Affaires", '6a20583932a5e027686a3e37_Aymen-Photoroom.webp', 'https://www.linkedin.com/in/aymen-mrini-55a45229a/'),
      member('Elaia', 'Amestoy-Alpha', 'Trésorière', '6a20583a06d6b5200fad5440_Elaia-Photoroom.webp', 'https://www.linkedin.com/in/elaia-amestoy-alpha-5320a9340/'),
      member('Sacha', 'Smietana', 'Responsable Étude', '6a664ad1f395f8f20685eb6e_Sacha%20(1).webp', 'https://www.linkedin.com/in/sacha-smietana-0a9702357/'),
    ],
  },
  values: {
    title: 'Nos valeurs',
    items: ['Engagement', 'Responsabilité', 'Innovation'],
    purposeTitle: "Notre raison d'être",
    purpose:
      '"Incarner l\'innovation et l\'engagement avec responsabilité pour proposer des projets impactants et porteurs de sens à notre écosystème et à nos clients."',
  },
  environment: {
    title: 'Notre environnement',
    tabs: [
      {
        id: 'intervenants',
        label: 'Nos intervenants',
        title: 'Nos intervenants',
        paragraphs: [
          'Les **intervenants** chez N7 Consulting sont **des étudiants talentueux et motivés** qui sont essentiels au fonctionnement de notre Junior-Entreprise. Ils représentent une ressource précieuse pour les entreprises qui cherchent à mettre en œuvre des projets innovants et à obtenir des résultats concrets. **Les intervenants sont sélectionnés pour leur motivation et leurs compétences, garantissant ainsi une qualité de travail à nos clients.** Ils sont également habitués à travailler en équipe et à résoudre des problèmes complexes, ce qui leur permet de s’adapter rapidement à de nouveaux défis. En choisissant N7 Consulting, les entreprises peuvent bénéficier de la créativité, **de l’innovation et du savoir-faire technique de nos intervenants.** Grâce à leur engagement envers la réussite de chaque projet, nos intervenants offrent une valeur ajoutée à chaque entreprise avec laquelle nous travaillons.',
        ],
        image: { src: `${CDN}/67a9fe17a0c7605fa5e24334_N7C_Intervenants.png`, alt: 'Logo N7Consulting Intervenants' },
      },
      {
        id: 'alumnis',
        label: 'Nos alumnis',
        title: 'Nos alumnis',
        paragraphs: [
          'Les alumni, **anciens administrateurs de la Junior-Entreprise**, représentent un appuie stratégique fort pour le mandat en exercice. Leur implication dans la vie active, relative aux domaines de spécialité de la J.E. **contribue à la professionnalisation de la structure**. Au sein de N7 Consulting, ce sont **49 années d’expérience** qui sont transmises à chaque passation et qui permettent de bâtir **une stratégie toujours plus performante**. En effet, au travers de différentes formations, événements et COS (Conseil d’Orientation Stratégique), **les alumni conseillent les administrateurs et participent à la vie de la Junior**. Enfin, c’est en générant de potentielles études que les alumni s’inscrivent définitivement dans la grande famille N7 Consulting.',
        ],
        image: { src: `${CDN}/67b47c8f28387bca819ef6c0_N7C_CRPSO2024_5_11zon.avif`, alt: 'CRP Junior Entreprise Toulouse ENSEEIHT' },
      },
      {
        id: 'enseeiht',
        label: "L'ENSEEIHT",
        title: "L'ENSEEIHT",
        paragraphs: [
          'Fondée en **1907** pour déployer ses ingénieurs sur les barrages français, l’ENSEEIHT a toujours su garder un temps d’avance dans l’innovation pour répondre aux enjeux de son temps. Aujourd’hui l’N7 reste à la pointe sur les dernières technologies puisqu’elle rassemble plus de **150 enseignant-chercheurs** réparties dans **4 laboratoires** toulousains : l’**IMFT**, l’**IRIT**, le **LAAS** et le **LAPLACE**. Les étudiants de l’ENSEEIHT font le pari de **se spécialiser dans des filières d’excellence pour développer leur expertise technique** dans les domaines suivants :',
        ],
        list: [
          '**Électronique, Énergie Électrique et Automatique** (3EA)',
          '**Sciences du Numérique** (SN)',
          '**Mécanique des Fluides, Énergie et Environnement** (MFEE)',
        ],
        closing:
          'C\'est à travers ces fortes spécialisations que les **1500 étudiants-ingénieurs** de l’ENSEEIHT tirent leur haut niveau de technicité que l’on retrouve chez N7 Consulting.',
        image: { src: `${CDN}/67d8a20d71ad3d284a9bc8c5_LogoN7.png`, alt: 'Logo Toulouse INP N7' },
      },
    ],
  },
  timeline: {
    title: 'Voici Notre Histoire',
    entries: [
      {
        year: '2024',
        achievements: [
          'Finaliste du prix du Meilleur Accompagnement Commercial',
          'Finaliste du prix de la Meilleur Étude en Ingénierie',
          'Se positionne dans le Top 30 depuis plus de 10 ans',
        ],
        image: { src: `${CDN}/67a9fe01c0749a737a00f77e_Logo_N7C_classic_fond_bleu.png`, alt: 'Logo N7 Consulting' },
      },
      {
        year: '2023',
        achievements: [
          'Finaliste du prix de la Meilleure Etude en Ingénierie',
          "Finaliste du prix du Meilleur Partenaire de l'Enseignement Supérieur",
          'Gagnant du prix du Meilleur Accompagnement Intervenants',
          'Entrée en Top 6',
          'Appel à projet RSE',
        ],
        image: { src: `${CDN}/67db33a0013b1f261a648bdb_groupes_je-4-min.jpg`, alt: 'Photo mandat N7Consulting' },
      },
      {
        year: '2022',
        achievements: [
          'Obtention de la norme ISO 9001',
          'Entrée en Top 3',
          "Finaliste du prix d'Excellence",
          'Gagnant du prix de la Meilleure Étude en Ingénierie',
          'Second Lauréat du prix de la meilleure data-visualisation',
        ],
        image: { src: `${CDN}/6823c641c3f19a7f6f5f2925_logo-afnor-site_blanc.png`, alt: 'Logo certification ISO 9001' },
      },
      {
        year: '2021',
        achievements: [
          'Finaliste du prix de la Meilleure Étude en Ingénierie',
          'Finaliste du prix de la Meilleure Approche Commerciale',
        ],
      },
      { year: '2019', achievements: ["Appel d'offre publique à +100k€ signé avec le CNES"] },
      { year: '2013', achievements: ['Entrée dans le Top 30'] },
      { year: '2012', achievements: ['Prix du Meilleur Partenariat'] },
      {
        year: '2010',
        achievements: ['Prix du Meilleur Espoir'],
        image: { src: assets.flagPhoto, alt: 'Drapeau N7Consulting' },
      },
      { year: '1977', achievements: ['Création de N7 Consulting'] },
    ],
  },
};
