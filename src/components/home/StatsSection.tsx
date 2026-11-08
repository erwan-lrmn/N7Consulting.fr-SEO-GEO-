import { useEffect, useRef, useState } from 'react';
import type { BrandLogo, StatItem } from '../../types';
import SmartLink from '../ui/SmartLink';
import Wave from '../ui/Wave';

interface StatsSectionProps {
  stats: StatItem[];
  partnersTitle: string;
  partners: BrandLogo[];
}

function useCountUp(target: number, start: boolean, durationMs = 1600): number {
  // Valeur finale au premier rendu (identique côté serveur et client) pour
  // permettre l'hydratation sans décalage ; l'animation repart de 0 lorsqu'elle démarre.
  const [value, setValue] = useState<number>(target);

  useEffect(() => {
    if (!start) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return undefined;
    }
    setValue(0);
    let frame = 0;
    const startedAt = performance.now();
    const tick = (now: number): void => {
      const progress = Math.min((now - startedAt) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start, durationMs]);

  return value;
}

function StatCard({ stat, start }: { stat: StatItem; start: boolean }) {
  const value = useCountUp(stat.value, start);
  return (
    <div className="group pb-4">
      <p className="flex gap-2.5 text-5xl font-bold leading-[72.8px] text-white transition-colors duration-300 group-hover:text-n7-gold sm:text-[56px]">
        {stat.prefix && <span>{stat.prefix}</span>}
        <span className="tabular-nums">{value}</span>
        {stat.suffix && <span>{stat.suffix}</span>}
      </p>
      <h2 className="mb-2.5 mt-5 max-w-[296px] text-xl font-bold leading-7 text-white">{stat.label}</h2>
    </div>
  );
}

const LIGHT_BLUE_PATH =
  'M1510.5 199.981C1378.5 199.981 1291.5 192.593 1165.5 133.333C1039.5 74.0741 913.5 0 787.5 0C661.5 0 577 115.37 396 163.981C215 212.593 -0.00012207 234.481 -0.00012207 234.481V281.481H472.5C535.5 281.481 661.5 281.481 787.5 281.481C913.5 281.481 1039.5 281.481 1165.5 281.481C1291.5 281.481 1384.5 281.481 1510.5 281.481C1510.5 199.981 1510.5 281.481 1510.5 199.981Z';
const NAVY_WAVE_PATH =
  'M1512 0L1449 46.5C1386 93 1260 186 1134 217C1008 248 882 217 756 175.667C630 134.333 504 82.6667 378 82.6667C252 82.6667 126 134.333 63 160.167L0 186V279H63C126 279 252 279 378 279C504 279 630 279 756 279C882 279 1008 279 1134 279C1260 279 1386 279 1449 279H1512V0Z';
const GOLD_LINE_PATH =
  'M1531 1C1445.5 65.5 1210.2 255.9 1015 233.5C905.338 220.916 755.503 188.126 653.5 143.107C423.918 59.9628 293.726 65.7835 58.5 181.5C41.5122 187.358 -12 217.5 -12 217.5';

function HeroWaves() {
  return (
    <div aria-hidden="true" className="pointer-events-none">
      <div className="absolute inset-x-0 top-[-16.5vw] h-[20vw] overflow-hidden">
        <svg viewBox="0 0 1510 282" className="absolute left-0 top-0 h-auto w-[105%]">
          <path fillRule="evenodd" clipRule="evenodd" d={LIGHT_BLUE_PATH} fill="#8ECAE7" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-[linear-gradient(0deg,#142F4D_33%,transparent)]" />
      </div>
      <div className="absolute inset-x-0 top-[-16vw] z-[2] h-[20vw] overflow-hidden">
        <svg viewBox="0 0 1512 279" className="absolute left-0 top-0 h-auto w-[105%]">
          <path fillRule="evenodd" clipRule="evenodd" d={NAVY_WAVE_PATH} fill="#142F4D" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-[linear-gradient(0deg,#142F4D,transparent)]" />
      </div>
      {['top-[-15vw]', 'top-[-14.5vw]'].map((top) => (
        <div key={top} className={`absolute inset-x-0 z-[2] h-[20vw] overflow-hidden ${top}`}>
          <svg viewBox="0 0 1512 237" fill="none" className="absolute left-0 top-0 h-auto w-[105%]">
            <path d={GOLD_LINE_PATH} stroke="#FAB613" strokeWidth="2" />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default function StatsSection({ stats, partnersTitle, partners }: StatsSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState<boolean>(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setStarted(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="chiffres-cles" className="relative bg-n7-navy pb-[90px] text-white">
      <HeroWaves />
      <div className="relative z-[3] px-[5%] pt-[59px]">
        <div ref={ref} className="mx-auto grid max-w-[1280px] grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} start={started} />
          ))}
        </div>
      </div>

      <div className="relative z-[3] mx-auto mt-[54px] max-w-[85%]">
        <h2 className="mb-2.5 mt-5 text-center text-[28px] font-bold leading-[45px] sm:text-4xl sm:leading-[45px]">{partnersTitle}</h2>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-8 lg:flex-nowrap lg:justify-between lg:gap-6">
          {partners.map((partner) => (
            <li key={partner.name}>
              <SmartLink href={partner.href ?? '#'} ariaLabel={partner.name} className="block transition-transform duration-300 hover:scale-105">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  loading="lazy"
                  className="h-auto max-h-[50px] w-auto max-w-[150px] lg:max-w-[216px]"
                />
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>

      <Wave variant="navyBelow" />
    </section>
  );
}
