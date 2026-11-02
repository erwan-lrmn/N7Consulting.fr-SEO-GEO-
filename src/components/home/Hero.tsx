import { Fragment } from 'react';
import type { HeroContent, ImageAsset } from '../../types';
import { assets } from '../../data/site';
import Button from '../ui/Button';

interface HeroProps {
  content: HeroContent;
}

interface GalleryColumnProps {
  images: ImageAsset[];
  direction: 'up' | 'down';
}

function GalleryColumn({ images, direction }: GalleryColumnProps) {
  const animation = direction === 'up' ? 'motion-safe:animate-marquee-up' : 'motion-safe:animate-marquee-down';
  const copies: Array<{ key: string; hidden: boolean }> = [
    { key: 'a', hidden: false },
    { key: 'b', hidden: true },
  ];

  return (
    <div className="relative h-full overflow-hidden">
      <div className={`flex flex-col ${animation} hover:[animation-play-state:paused]`}>
        {copies.map((copy) => (
          <ul key={copy.key} aria-hidden={copy.hidden} className="flex flex-col gap-4 pb-4">
            {images.map((image) => (
              <li key={`${copy.key}-${image.src}`} className="group relative aspect-[316/379] overflow-hidden rounded-[10px] bg-n7-sky/30">
                <img
                  src={image.src}
                  alt={copy.hidden ? '' : image.alt}
                  className="absolute inset-0 h-full w-full rounded-[10px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function Hero({ content }: HeroProps) {
  const [leftColumn, rightColumn] = content.galleryColumns;

  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-cover bg-top lg:min-h-screen"
      style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url("${assets.flagPhoto}")` }}
    >
      <div className="grid grid-cols-1 items-center lg:grid-cols-2">
        <div className="mx-[6vw] max-w-[35rem] pb-[calc(16.5vw+32px)] pt-[110px] sm:mx-[5vw] lg:ml-[calc(5vw+8px)] lg:mr-20 lg:pb-[calc(16.5vw+48px)] lg:pt-[120px]">
          <h1 className="mb-2.5 mt-5 font-serif text-[36px] font-bold leading-[43px] text-black sm:text-5xl sm:leading-[57.6px]">
            {content.title}
          </h1>
          <p className="text-lg leading-[28.8px] text-black">
            {content.descriptionLines.map((line, index) => (
              <Fragment key={line}>
                {index > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </p>
          <div className="mt-10">
            <Button link={content.cta} />
          </div>
        </div>

        <div className="relative z-[1] hidden h-screen min-h-[640px] grid-cols-2 gap-4 pr-[5vw] lg:grid">
          <GalleryColumn images={leftColumn} direction="up" />
          <GalleryColumn images={rightColumn} direction="down" />
        </div>
      </div>
    </section>
  );
}
