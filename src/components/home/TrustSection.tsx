import type { BrandLogo, TrustContent } from '../../types';
import Reveal from '../ui/Reveal';
import Wave from '../ui/Wave';

interface TrustSectionProps {
  content: TrustContent;
}

function LogoMarquee({ logos, direction }: { logos: BrandLogo[]; direction: 'left' | 'right' }) {
  const animation = direction === 'left' ? 'motion-safe:animate-marquee-left' : 'motion-safe:animate-marquee-right';
  const copies: Array<{ key: string; hidden: boolean }> = [
    { key: 'a', hidden: false },
    { key: 'b', hidden: true },
  ];

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className={`flex w-max ${animation} hover:[animation-play-state:paused]`}>
        {copies.map((copy) => (
          <ul key={copy.key} aria-hidden={copy.hidden} className="flex shrink-0 items-center gap-16 pr-16 sm:gap-24 sm:pr-24">
            {logos.map((logo) => (
              <li key={`${copy.key}-${logo.name}`} className="shrink-0">
                <img
                  src={logo.src}
                  alt={copy.hidden ? '' : logo.alt}
                  loading="lazy"
                  className="h-10 w-auto max-w-[312px] object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function TrustSection({ content }: TrustSectionProps) {
  const [firstRow, secondRow] = content.logoRows;

  return (
    <section id="temoignages" className="relative bg-n7-navy px-5 pb-[72px] text-white sm:px-[5%]">
      <Wave variant="navyAbove" />
      <div className="relative mx-auto max-w-[1296px]">
        <div className="mx-auto max-w-[768px] text-center">
          <h2 className="mb-2.5 mt-5 font-serif text-[28px] font-bold leading-[38px] sm:text-4xl sm:leading-[45px]">{content.title}</h2>
          <p className="mb-2.5 text-lg leading-[28.8px]">{content.subtitle}</p>
        </div>

        <div className="mt-10 flex flex-col gap-14">
          <LogoMarquee logos={firstRow} direction="left" />
          <LogoMarquee logos={secondRow} direction="right" />
        </div>

        <div className="mt-[30px] grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          {content.testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 150}>
              <figure className="text-center">
                <blockquote>
                  <h3 className="mb-2.5 mt-5 text-lg font-semibold leading-[26px] sm:text-[22px] sm:leading-[28.6px]">{testimonial.quote}</h3>
                </blockquote>
                <figcaption className="mt-2.5">
                  <img
                    src={testimonial.photo.src}
                    alt={testimonial.photo.alt}
                    loading="lazy"
                    className="mx-auto h-16 w-16 rounded-[10px] object-cover"
                  />
                  <span className="mt-2 block text-base font-semibold leading-5">{testimonial.author}</span>
                  <span className="block text-base leading-5">{testimonial.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
      <Wave variant="navyBelow" />
    </section>
  );
}
