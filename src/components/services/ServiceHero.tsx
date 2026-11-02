import type { ServicePageContent } from '../../types';
import Button from '../ui/Button';

interface ServiceHeroProps {
  hero: ServicePageContent['hero'];
}

export default function ServiceHero({ hero }: ServiceHeroProps) {
  return (
    <section className="relative isolate flex min-h-[640px] items-center justify-center overflow-hidden px-6 pb-24 pt-32 sm:px-[10vw] lg:h-[98vh] lg:pb-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-n7-sky opacity-70 blur-[60px] sm:h-[25rem] sm:w-[25rem] lg:h-[30rem] lg:w-[30rem]" />
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-n7-cream opacity-70 blur-[60px] sm:h-[25rem] sm:w-[25rem] lg:h-[30rem] lg:w-[30rem]" />
        <div className="absolute left-0 top-[51%] h-56 w-56 rounded-full bg-n7-ivory opacity-70 blur-[60px] sm:h-[30rem] sm:w-[30rem] lg:h-[35rem] lg:w-[35rem]" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-n7-sand opacity-70 blur-[60px] sm:h-[25rem] sm:w-[25rem] lg:h-[30rem] lg:w-[30rem]" />
      </div>
      <div className="w-full max-w-[1152px] text-center">
        <h1 className="mb-2.5 mt-5 font-serif text-[34px] font-bold leading-[42px] text-n7-navy sm:text-5xl sm:leading-[57.6px]">
          {hero.titleLines.map((line, index) => (
            <span key={line} className="block">
              {index > 0 && <span className="sr-only"> </span>}
              {line}
            </span>
          ))}
        </h1>
        <p className="mx-auto mb-2.5 max-w-[80%] text-lg leading-[28px] text-n7-navy sm:text-xl sm:leading-[31px]">{hero.subtitle}</p>
        <div className="mt-[50px] flex flex-col items-center gap-[45px]">
          {hero.buttons.map((button) => (
            <Button key={button.label} link={button} variant="hero" />
          ))}
        </div>
      </div>
    </section>
  );
}
