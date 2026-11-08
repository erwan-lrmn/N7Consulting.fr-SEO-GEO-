import { useEffect, useRef, useState } from 'react';
import type { AboutContent, TimelineEntry } from '../../types';

interface TimelineProps {
  content: AboutContent['timeline'];
}

function TimelineItem({ entry }: { entry: TimelineEntry }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setActive(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((item) => item.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -45% 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-[48px_1fr] py-12 transition-opacity duration-700 md:grid-cols-[1fr_180px_1fr] md:py-20 ${
        active ? 'opacity-100' : 'opacity-30'
      }`}
    >
      <div className="col-start-2 md:col-start-1 md:row-start-1">
        <p className="mb-4 text-4xl font-medium leading-[44px] tracking-[-1.44px] text-white md:sticky md:top-[50vh] md:mb-0 md:text-right md:text-5xl md:leading-[57.6px]">
          {entry.year}
        </p>
      </div>
      <div className="col-start-1 row-span-2 row-start-1 flex justify-center md:col-start-2 md:row-span-1">
        <span
          className={`mt-4 h-[15px] w-[15px] rounded-full shadow-dot transition-colors duration-500 md:sticky md:top-[50vh] ${
            active ? 'bg-white' : 'bg-n7-ring'
          }`}
        />
      </div>
      <div className="col-start-2 md:col-start-3">
        <ul className="flex flex-col gap-6">
          {entry.achievements.map((achievement) => (
            <li key={achievement} className="text-lg font-medium leading-7 text-white md:text-2xl md:leading-[31.2px]">
              {achievement}
            </li>
          ))}
        </ul>
        {entry.image && (
          <img
            src={entry.image.src}
            alt={entry.image.alt}
            loading="lazy"
            className="mt-12 w-full max-w-[470px] rounded-[10px] object-contain"
          />
        )}
      </div>
    </div>
  );
}

export default function Timeline({ content }: TimelineProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let frame = 0;
    const update = (): void => {
      frame = 0;
      const node = listRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const center = window.innerHeight / 2;
      const ratio = (center - rect.top) / rect.height;
      setProgress(Math.min(Math.max(ratio, 0), 1));
    };
    const onScroll = (): void => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="histoire" className="scroll-mt-24 bg-n7-navy px-5">
      <div className="py-[100px] text-center lg:pb-[150px] lg:pt-[140px]">
        <h2 className="mb-2.5 mt-5 text-[28px] font-bold leading-9 text-white sm:text-4xl sm:leading-[45px]">{content.title}</h2>
      </div>
      <div ref={listRef} className="relative mx-auto max-w-[1120px] pb-10">
        <div aria-hidden="true" className="absolute bottom-0 left-[23px] top-0 w-[3px] bg-n7-ring md:left-1/2 md:-translate-x-1/2">
          <div className="w-full bg-white" style={{ height: `${progress * 100}%` }} />
        </div>
        {content.entries.map((entry) => (
          <TimelineItem key={entry.year} entry={entry} />
        ))}
      </div>
    </section>
  );
}
