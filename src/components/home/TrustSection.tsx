import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import type { BrandLogo, TrustContent } from '../../types';
import SmartLink from '../ui/SmartLink';
import Wave from '../ui/Wave';

interface TrustSectionProps {
  content: TrustContent;
}

function LogoMarquee({ logos }: { logos: BrandLogo[] }) {
  const copies: Array<{ key: string; hidden: boolean }> = [
    { key: 'a', hidden: false },
    { key: 'b', hidden: true },
  ];

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="flex w-max motion-safe:animate-marquee-left hover:[animation-play-state:paused]">
        {copies.map((copy) => (
          <ul key={copy.key} aria-hidden={copy.hidden} className="flex shrink-0 items-center gap-14 pr-14 sm:gap-20 sm:pr-20">
            {logos.map((logo) => (
              <li key={`${copy.key}-${logo.name}`} className="shrink-0">
                <SmartLink
                  href={logo.href ?? '#'}
                  ariaLabel={logo.name}
                  tabIndex={copy.hidden ? -1 : undefined}
                  className="block opacity-90 transition-opacity duration-300 hover:opacity-70"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="h-9 w-auto max-w-[180px] object-contain sm:h-10 sm:max-w-[200px]"
                  />
                </SmartLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function TrustSection({ content }: TrustSectionProps) {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const testimonial = content.testimonials[activeTestimonial] ?? content.testimonials[0];
  const logos = [...content.logoRows[0], ...content.logoRows[1]];
  const titleWords = content.title.split(' ');
  const lastWord = titleWords.pop() ?? '';
  const cardRef = useRef<HTMLDivElement>(null);
  const lastWheelRef = useRef<number>(0);
  const testimonialCount = content.testimonials.length;

  useEffect(() => {
    const node = cardRef.current;
    if (!node || testimonialCount < 2) return undefined;

    const handleWheel = (event: WheelEvent): void => {
      if (Math.abs(event.deltaY) < 8) return;
      event.preventDefault();
      const now = Date.now();
      if (now - lastWheelRef.current < 600) return;
      lastWheelRef.current = now;
      setActiveTestimonial((previous) => (previous + (event.deltaY > 0 ? 1 : -1) + testimonialCount) % testimonialCount);
    };

    node.addEventListener('wheel', handleWheel, { passive: false });
    return () => node.removeEventListener('wheel', handleWheel);
  }, [testimonialCount]);

  if (!testimonial) return null;

  return (
    <section id="temoignages" className="relative bg-n7-navy px-5 pb-[76px] pt-[76px] text-white sm:px-[5%]">
      <Wave variant="navyAbove" />

      <div className="relative mx-auto max-w-[1296px]">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-12 lg:gap-20">
          <div ref={cardRef} className="relative mx-auto w-full max-w-[600px]">
            <article className="rounded-[24px] border-[6px] border-n7-sky bg-white p-8 text-center text-n7-navy shadow-[0_18px_45px_rgba(0,0,0,0.25)] sm:p-10">
              <img
                src={testimonial.photo.src}
                alt={testimonial.photo.alt}
                loading="lazy"
                className="mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-n7-mist"
              />
              <h3 className="mt-5 text-xl font-bold leading-6">{testimonial.author}</h3>
              <p className="mt-1 text-sm leading-5 text-n7-steel">{testimonial.role}</p>
              <blockquote className="mt-6 text-left text-[15px] leading-6 text-n7-slate">{testimonial.quote}</blockquote>
            </article>

            <div className="mt-5 flex justify-center gap-2 lg:absolute lg:-right-5 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2 lg:flex-col">
              {content.testimonials.map((item, index) => (
                <button
                  key={item.author}
                  type="button"
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Afficher le témoignage de ${item.author}`}
                  aria-current={index === activeTestimonial}
                  className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                    index === activeTestimonial ? 'bg-n7-sky' : 'bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-n7-sky">
              <MessageCircle aria-hidden="true" className="h-5 w-5" />
              Témoignages
            </p>
            <h2 className="mt-6 max-w-[480px] text-[40px] font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              {titleWords.join(' ')} <span className="text-n7-sky">{lastWord}</span>
            </h2>
            <SmartLink
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-lg font-medium text-white transition-colors duration-300 hover:text-n7-sky"
            >
              Les rejoindre
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </SmartLink>
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <LogoMarquee logos={logos} />
        </div>
      </div>

      <Wave variant="navyBelow" />
    </section>
  );
}
