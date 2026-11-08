/**
 * Texte enrichi (mini-syntaxe interprétée par <RichText />) :
 * **gras**, ==mise en avant (orange)==, _italique_, [lien](/url) et \n pour un retour à la ligne.
 */
export type RichText = string;

export interface LinkItem {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface BrandLogo extends ImageAsset {
  name: string;
  href?: string;
}

export interface NavChild extends LinkItem {
  footerLabel: string;
}

export interface NavLink extends LinkItem {
  children?: NavChild[];
  hideInFooter?: boolean;
}

export interface SocialLink extends LinkItem {
  icon: ImageAsset;
}

export interface CtaBannerContent {
  title: string;
  text: string;
  button: LinkItem;
}

export interface SiteContent {
  name: string;
  logo: ImageAsset;
  homeHref: string;
  navigation: NavLink[];
  contactCta: LinkItem;
  partnersTitle: string;
  partners: BrandLogo[];
  brochure: LinkItem;
  socials: SocialLink[];
  address: LinkItem;
  copyright: string;
  legalLink: LinkItem;
  ctaBanner: CtaBannerContent;
}

/* ---------- Accueil ---------- */

export interface HeroContent {
  title: string;
  descriptionLines: string[];
  cta: LinkItem;
  galleryColumns: [ImageAsset[], ImageAsset[]];
}

export interface StatItem {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
}

export interface ServiceTeaser {
  title: string;
  description: string;
  image: ImageAsset;
  href: string;
}

export interface ServicesOverviewContent {
  title: string;
  description: string;
  items: ServiceTeaser[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  photo: ImageAsset;
}

export interface TrustContent {
  title: string;
  subtitle: string;
  logoRows: [BrandLogo[], BrandLogo[]];
  testimonials: Testimonial[];
}

export interface VideoItem {
  title: string;
  href: string;
  thumbnail: string;
  publisherLogo: ImageAsset;
}

export interface VideoContent {
  sectionTitle: string;
  videos: VideoItem[];
}

export interface LatestNewsContent {
  title: string;
  intro: string;
  allLink: LinkItem;
  count: number;
}

export interface HomeContent {
  hero: HeroContent;
  stats: StatItem[];
  services: ServicesOverviewContent;
  trust: TrustContent;
  video: VideoContent;
  latestNews: LatestNewsContent;
}

/* ---------- Pages prestations ---------- */

export type ServiceSlug = 'digital-data' | 'ingenierie-it' | 'eco-ingenierie';

export interface ServiceFeature {
  icon: ImageAsset;
  title: string;
  points: RichText[];
  actions: [LinkItem, LinkItem];
}

export interface ServiceGroupBlock {
  type: 'group';
  title: string;
  intro: RichText;
  introStyle: 'card' | 'plain';
  features: ServiceFeature[];
}

export interface CaseStudy {
  quote: string;
  client: string;
  logo: ImageAsset;
}

export interface CaseStudiesBlock {
  type: 'caseStudies';
  items: CaseStudy[];
}

export type ServiceBlock = ServiceGroupBlock | CaseStudiesBlock;

export interface ServicePageContent {
  slug: ServiceSlug;
  metaTitle: string;
  hero: {
    titleLines: string[];
    subtitle: string;
    buttons: LinkItem[];
  };
  blocks: ServiceBlock[];
}

export interface MethodStep {
  number: string;
  title: string;
  image: ImageAsset;
  text: RichText;
}

export interface MethodContent {
  anchor: string;
  title: string;
  steps: MethodStep[];
}

/* ---------- Qui sommes-nous ---------- */

export interface Reason {
  icon: ImageAsset;
  title: string;
  text: string;
}

export interface TeamMember {
  firstName: string;
  lastName: string;
  role: string;
  photo: string;
  linkedin: string;
}

export interface EnvironmentTab {
  id: string;
  label: string;
  title: string;
  paragraphs: RichText[];
  list?: RichText[];
  closing?: RichText;
  image: ImageAsset;
}

export interface TimelineEntry {
  year: string;
  achievements: string[];
  image?: ImageAsset;
}

export interface AboutContent {
  hero: {
    title: string;
    text: RichText;
    cta: LinkItem;
    background: string;
  };
  junior: {
    title: string;
    text: string;
    whyTitle: string;
    reasons: Reason[];
    moreLink: LinkItem;
  };
  team: {
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
  values: {
    title: string;
    items: string[];
    purposeTitle: string;
    purpose: string;
  };
  environment: {
    title: string;
    tabs: EnvironmentTab[];
  };
  timeline: {
    title: string;
    entries: TimelineEntry[];
  };
}

/* ---------- Contact ---------- */

export interface CheckboxOption {
  name: string;
  label: string;
}

export interface FormField {
  name: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  placeholder: string;
  required: boolean;
  width: 'half' | 'full';
}

export interface ContactContent {
  hero: {
    title: string;
    background: string;
  };
  title: string;
  intro: string;
  servicesLabel: string;
  services: CheckboxOption[];
  infoLabel: string;
  fields: FormField[];
  sourceLabel: string;
  sources: CheckboxOption[];
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
  recipient: string;
  /** URL d'un service de formulaire (Formspree, Getform, API maison…). Sans URL, l'envoi passe par le client mail. */
  endpoint?: string;
}

/* ---------- Actualités ---------- */

export type ArticleBlock =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: RichText }
  | { type: 'list'; ordered: boolean; items: RichText[] }
  | { type: 'logos'; items: ImageAsset[] };

export interface Article {
  slug: string;
  category: string;
  date: string;
  updated: string;
  title: string;
  excerpt: string;
  cover: ImageAsset;
  blocks: ArticleBlock[];
}

export interface NewsContent {
  title: string;
  intro: string;
  background: string;
  backLink: LinkItem;
  readMore: string;
  feedbackQuestion: string;
  feedbackButton: LinkItem;
}

/* ---------- Mentions légales ---------- */

export interface LegalSection {
  heading?: string;
  body: RichText;
}

export interface NotFoundContent {
  title: string;
  text: string;
  button: LinkItem;
}

export interface PageTitles {
  home: string;
  servicesOverview: string;
  about: string;
  contact: string;
  news: string;
  legal: string;
  notFound: string;
  suffix: string;
}

export interface LegalContent {
  title: string;
  sections: LegalSection[];
}
