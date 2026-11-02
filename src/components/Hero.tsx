import { Fragment } from 'react';
import type { GalleryImage, HeroContent } from '../types';
import ButtonLink from './ButtonLink';
import N7Logo from './N7Logo';
import SafeImage from './SafeImage';

interface HeroProps {
  content: HeroContent;
}

interface GalleryColumnProps {
  images: GalleryImage[];
  direction: 'up' | 'down';
  eager: boolean;
}

const ASPECT_CLASSES: Record<GalleryImage['aspect'], string> = {
  square: 'aspect-[440/430]',
  portrait: 'aspect-[440/527]',
};

function GalleryColumn({ images, direction, eager }: GalleryColumnProps) {
  const animationClass =
    direction === 'up' ? 'motion-safe:animate-marquee-up' : 'motion-safe:animate-marquee-down';
  const copies: Array<{ key: string; hidden: boolean }> = [
    { key: 'original', hidden: false },
    { key: 'clone', hidden: true },
  ];

  return (
    <div className="relative h-full overflow-hidden">
      <div className={`flex flex-col ${animationClass} hover:[animation-play-state:paused]`}>
        {copies.map((copy) => (
          <ul key={copy.key} aria-hidden={copy.hidden} className="flex flex-col gap-4 pb-4 xl:gap-5 xl:pb-5">
            {images.map((image) => (
              <li
                key={`${copy.key}-${image.src}`}
                className={`group overflow-hidden rounded-xl bg-[#B9C3D4] ${ASPECT_CLASSES[image.aspect]}`}
              >
                <SafeImage
                  src={image.src}
                  alt={copy.hidden ? '' : image.alt}
                  loading={eager ? 'eager' : 'lazy'}
                  fallbackClassName="bg-[#B9C3D4]"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

function HeroWaves() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 2000 340"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[90px] w-full sm:h-[150px] lg:h-[260px] 2xl:h-[340px]"
    >
      <path
        d="M0,200 C200,140 380,118 540,128 C800,145 1050,330 1260,336 C1500,342 1800,200 2000,80 L2000,340 L0,340 Z"
        fill="#212E4C"
      />
      <g fill="none" stroke="#DBB862" strokeWidth="3" strokeLinecap="round">
        <path d="M0,330 C190,232 370,152 560,148 C820,144 1060,318 1270,356" />
        <path d="M-10,346 C180,248 365,166 560,162 C815,158 1050,330 1265,370" />
        <path d="M1520,352 C1720,300 1880,214 2010,138" />
        <path d="M1550,366 C1745,314 1895,230 2010,156" />
      </g>
    </svg>
  );
}

export default function Hero({ content }: HeroProps) {
  const [leftColumn, rightColumn] = content.galleryColumns;

  return (
    <section
      id="accueil"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#E9F2FF_0%,#E3E9F4_55%,#D8DFED_100%)] lg:min-h-[max(100svh,860px)] 2xl:min-h-[1045px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[12%] top-[12%] h-[90%] w-[75%] rounded-[40%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0)_70%)]" />
        <N7Logo
          variant="mark"
          title=""
          className="absolute left-[34%] top-[18%] h-[70%] w-auto rotate-[8deg] opacity-25"
        />
        <span className="absolute left-[4%] top-[46%] origin-left rotate-[22deg] whitespace-nowrap font-serif text-[22vw] font-bold leading-none text-white/50 lg:text-[13vw]">
          {content.watermark}
        </span>
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 2000 340"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 hidden h-[260px] w-full lg:block 2xl:h-[340px]"
      >
        <path d="M640,340 C720,230 830,50 1000,25 C1150,5 1300,80 1400,140 L1400,340 Z" fill="#A3C8E4" />
      </svg>

      <div className="relative z-30 flex flex-col px-5 pb-10 pt-32 sm:px-8 sm:pb-12 lg:min-h-[inherit] lg:px-[10.8%] lg:pb-64 lg:pt-[176px] 2xl:pb-72 2xl:pt-[182px]">
        <div className="max-w-[680px] lg:max-w-[36vw] 2xl:max-w-[680px]">
          <h1 className="font-serif text-[2.4rem] font-bold leading-[1.15] text-n7-ink sm:text-5xl sm:leading-[1.12] xl:text-[52px] 2xl:text-[58px] 2xl:leading-[1.22]">
            {content.title}
          </h1>
          <p className="mt-5 text-lg leading-[1.6] text-n7-ink sm:text-xl 2xl:text-[22px] 2xl:leading-[1.6]">
            {content.descriptionLines.map((line, index) => (
              <Fragment key={line}>
                {index > 0 && (
                  <>
                    {' '}
                    <br className="hidden 2xl:inline" />
                  </>
                )}
                {line}
              </Fragment>
            ))}
          </p>
          <ButtonLink cta={content.cta} className="mt-10 2xl:mt-[54px]" />
        </div>
      </div>

      <div className="relative z-10 mx-5 mb-24 grid h-[460px] grid-cols-2 gap-4 overflow-hidden rounded-xl sm:mx-8 sm:mb-36 sm:h-[560px] lg:absolute lg:inset-y-0 lg:left-1/2 lg:right-[5.1%] lg:mx-0 lg:my-0 lg:h-auto lg:rounded-none xl:gap-5">
        <GalleryColumn images={leftColumn} direction="up" eager />
        <GalleryColumn images={rightColumn} direction="down" eager={false} />
      </div>

      <HeroWaves />
    </section>
  );
}
