export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface CallToAction {
  label: string;
  href: string;
}

export interface NavigationContent {
  brandName: string;
  homeHref: string;
  links: NavLink[];
  cta: CallToAction;
}

export type GalleryAspect = 'square' | 'portrait';

export interface GalleryImage {
  src: string;
  alt: string;
  aspect: GalleryAspect;
}

export interface HeroContent {
  title: string;
  descriptionLines: string[];
  cta: CallToAction;
  watermark: string;
  galleryColumns: [GalleryImage[], GalleryImage[]];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface BrandLogo {
  name: string;
  logo: string;
  href?: string;
}

export interface StatsContent {
  stats: StatItem[];
  partnersTitle: string;
  partners: BrandLogo[];
}

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface ServicesContent {
  title: string;
  description: string;
  items: ServiceItem[];
}

export interface ClientsContent {
  title: string;
  subtitle: string;
  clients: BrandLogo[];
}

export interface SiteContent {
  navigation: NavigationContent;
  hero: HeroContent;
  stats: StatsContent;
  services: ServicesContent;
  clients: ClientsContent;
}
