import type { AboutContent } from '../../types';
import RichText from '../ui/RichText';

interface AboutHeroProps {
  hero: AboutContent['hero'];
}

export default function AboutHero({ hero }: AboutHeroProps) {
  // Bouton CTA retiré à la demande.
  return (
    <section
      className="flex min-h-[640px] items-start bg-cover bg-center px-5 pb-[140px] pt-[140px] sm:px-[30px] lg:min-h-[820px]"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${hero.background}")` }}
    >
      <div className="mx-auto max-w-[1170px] pt-10 text-center text-white">
        <h1 className="mb-2.5 mt-5 font-serif text-[36px] font-bold leading-[44px] sm:text-5xl sm:leading-[57.6px]">{hero.title}</h1>
        <p className="mb-12 text-lg leading-[28px] sm:text-xl sm:leading-[31px]">
          <RichText text={hero.text} />
        </p>
      </div>
    </section>
  );
}
