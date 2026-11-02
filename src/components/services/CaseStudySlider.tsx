import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { CaseStudy } from '../../types';
import { assets } from '../../data/site';

interface CaseStudySliderProps {
  items: CaseStudy[];
  intervalMs?: number;
}

export default function CaseStudySlider({ items, intervalMs = 8000 }: CaseStudySliderProps) {
  const [index, setIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const count = items.length;

  const goTo = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);

  useEffect(() => {
    if (paused || count < 2) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % count), intervalMs);
    return () => window.clearInterval(timer);
  }, [paused, count, intervalMs]);

  return (
    <section
      aria-roledescription="carrousel"
      aria-label="Études de cas"
      className="px-0 py-20 sm:px-[30px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative mx-auto max-w-[940px]">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((item, itemIndex) => (
              <figure
                key={item.client}
                aria-hidden={itemIndex !== index}
                className="w-full shrink-0 px-12 py-3 sm:pl-16 sm:pr-24"
              >
                <img src={assets.quoteIcon} alt="" aria-hidden="true" className="mb-6 h-[59px] w-16" />
                <blockquote className="mb-8 text-lg font-semibold italic leading-7 text-white sm:text-2xl sm:leading-8">{item.quote}</blockquote>
                <figcaption className="flex flex-wrap items-center gap-4">
                  <img src={item.logo.src} alt={item.logo.alt} loading="lazy" className="h-[60px] w-auto max-w-[188px] object-contain" />
                  <span className="text-base font-bold italic leading-5 text-white">{item.client}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Étude de cas précédente"
          className="absolute left-0 top-[42%] -translate-y-1/2 p-2 text-white transition-all duration-300 hover:-translate-x-1 hover:text-n7-gold"
        >
          <ChevronLeft className="h-10 w-10" strokeWidth={1.5} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Étude de cas suivante"
          className="absolute right-0 top-[42%] -translate-y-1/2 p-2 text-white transition-all duration-300 hover:translate-x-1 hover:text-n7-gold sm:right-6"
        >
          <ChevronRight className="h-10 w-10" strokeWidth={1.5} aria-hidden="true" />
        </button>

        <div className="mt-6 flex justify-center gap-6 pt-2.5">
          {items.map((item, dotIndex) => (
            <button
              key={item.client}
              type="button"
              onClick={() => goTo(dotIndex)}
              aria-label={`Afficher l’étude de cas ${dotIndex + 1}`}
              aria-current={dotIndex === index}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                dotIndex === index ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
