import type { StatsContent } from '../types';
import BrandLogoImage from './BrandLogoImage';

interface StatsSectionProps {
  content: StatsContent;
}

export default function StatsSection({ content }: StatsSectionProps) {
  return (
    <section
      id="chiffres-cles"
      aria-labelledby="partenaires-title"
      className="relative bg-n7-navy pb-28 pt-10 text-white sm:pb-36 lg:pt-16 2xl:pb-[150px] 2xl:pt-[72px]"
    >
      <div className="px-5 sm:px-8 lg:pl-[10.8%] lg:pr-[8.6%]">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
          {content.stats.map((stat) => (
            <div
              key={stat.value}
              className="group flex flex-col-reverse justify-end transition-transform duration-300 hover:-translate-y-1"
            >
              <dt className="mt-5 max-w-[350px] text-lg font-bold leading-[1.6] sm:text-xl lg:mt-8 2xl:mt-[42px] 2xl:text-[22px]">
                {stat.label}
              </dt>
              <dd className="whitespace-nowrap text-5xl font-bold leading-none tracking-tight transition-colors duration-300 group-hover:text-n7-gold sm:text-6xl 2xl:text-[72px]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <h2
          id="partenaires-title"
          className="mt-20 text-center text-3xl font-bold sm:text-4xl lg:mt-24 2xl:mt-[112px] 2xl:text-5xl"
        >
          {content.partnersTitle}
        </h2>
      </div>

      <ul className="mx-auto mt-12 grid max-w-[1720px] grid-cols-2 items-center justify-items-center gap-x-6 gap-y-10 px-5 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:flex lg:justify-between lg:px-[6%] 2xl:mt-[72px] 2xl:px-[7.8%]">
        {content.partners.map((partner) => (
          <li key={partner.name}>
            <BrandLogoImage brand={partner} />
          </li>
        ))}
      </ul>

      <svg
        aria-hidden="true"
        viewBox="0 0 2000 90"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-[34px] w-full sm:h-[50px] lg:h-[70px] 2xl:h-[90px]"
      >
        <path d="M0,28 C450,-2 1300,-12 2000,70 L2000,90 L0,90 Z" fill="#FFFFFF" />
      </svg>
    </section>
  );
}
