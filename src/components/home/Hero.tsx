import type { HeroContent } from '../../types';
import { aboutContent } from '../../data/about';
import { siteContent } from '../../data/site';
import Button from '../ui/Button';

interface HeroProps {
  content: HeroContent;
}

const brochureLink = { label: 'Télécharger la plaquette', href: siteContent.brochure.href };

/** Photo d'illustration provisoire : vue de l'ENSEEIHT depuis le canal du Midi. */
const HERO_BACKGROUND =
  'https://wsrv.nl/?url=https%3A%2F%2Fwww.enseeiht.fr%2F_resource%2Fcharte%2Faccueil%2Fheader-bg.jpg&output=webp&w=1920&q=80';
const HERO_BACKGROUND_CREDIT_URL = 'https://www.enseeiht.fr/';

export default function Hero({ content }: HeroProps) {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-white pb-[calc(16.5vw+200px)] pt-28 text-center"
    >
      <div aria-hidden="true" className="absolute inset-0 scale-105 bg-cover bg-center blur-[2px]" style={{ backgroundImage: `url("${HERO_BACKGROUND}")` }} />

      <div className="relative z-10 flex w-full flex-col items-center px-[6vw]">
        <img
          id="hero-logo"
          src="/logo-n7-consulting-white.svg"
          alt="N7 Consulting, la Junior-Entreprise de l’ENSEEIHT"
          width={1124}
          height={1062}
          className="h-auto max-h-[50svh] w-auto max-w-[86vw]"
        />
        <h1 className="sr-only">{content.title}</h1>
        <ul className="mt-[105px] flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)] sm:gap-x-6 sm:text-sm">
          {aboutContent.values.items.map((value, index) => (
            <li key={value} className="flex items-center gap-3 sm:gap-4">
              <span>{value}</span>
              {index < aboutContent.values.items.length - 1 && (
                <span aria-hidden="true" className="text-n7-gold">
                  •
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 mt-[165px] flex w-full flex-col items-center gap-4 px-6 md:flex-row md:justify-center md:gap-6 xl:grid xl:grid-cols-3 xl:gap-0 xl:px-0">
        <div className="flex justify-center xl:col-start-1">
          <Button link={content.cta} variant="heroLarge" rounded={false} />
        </div>
        <div className="flex justify-center xl:col-start-3">
          <Button link={brochureLink} variant="brochureLarge" rounded={false} />
        </div>
      </div>

      <p className="absolute bottom-[calc(16.5vw+16px)] left-5 z-10 text-left text-[11px] leading-4 text-n7-steel">
        Photo :{' '}
        <a
          href={HERO_BACKGROUND_CREDIT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted underline-offset-2 transition-colors duration-300 hover:text-n7-navy"
        >
          Toulouse INP-ENSEEIHT
        </a>
      </p>
    </section>
  );
}
