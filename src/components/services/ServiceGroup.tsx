import type { ServiceFeature, ServiceGroupBlock } from '../../types';
import { assets } from '../../data/site';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import RichText from '../ui/RichText';

interface ServiceGroupProps {
  group: ServiceGroupBlock;
  isFirst: boolean;
}

function FeatureCard({ feature }: { feature: ServiceFeature }) {
  const [primary, secondary] = feature.actions;

  return (
    <article className="flex h-full flex-col rounded-[10px] bg-white px-6 py-10 shadow-feature transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_6px_rgba(255,255,255,0.3)] sm:px-10 sm:py-12">
      <img src={feature.icon.src} alt={feature.icon.alt} loading="lazy" className="mb-8 h-[100px] w-auto self-start object-contain" />
      <h3 className="mb-4 text-[22px] font-semibold leading-[28.6px] text-black">{feature.title}</h3>
      <ul className="flex flex-col gap-5">
        {feature.points.map((point) => (
          <li key={point} className="flex gap-4">
            <img src={assets.checkIcon} alt="" aria-hidden="true" className="mt-0.5 h-[15px] w-[17px] shrink-0" />
            <span className="font-montserrat text-base font-medium leading-[21px] tracking-[0.5px] text-black sm:text-lg sm:leading-[23.4px]">
              <RichText text={point} />
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Button link={primary} variant="small" />
        <Button link={secondary} variant="navy" />
      </div>
    </article>
  );
}

export default function ServiceGroup({ group, isFirst }: ServiceGroupProps) {
  const isCard = group.introStyle === 'card';

  return (
    <div className={`mx-auto max-w-[1160px] pb-2.5 ${isFirst ? 'pt-[100px]' : 'pt-[60px] lg:pt-[100px]'}`}>
      <Reveal>
        <div
          className={
            isCard
              ? 'mb-[30px] rounded-[10px] bg-n7-sky px-6 py-10 shadow-intro sm:pb-12 sm:pl-14 sm:pr-20 sm:pt-12'
              : 'mb-[30px]'
          }
        >
          <h2
            className={`font-serif text-[34px] font-bold leading-[42px] tracking-[-0.56px] sm:text-[56px] sm:leading-[64px] ${
              isCard ? 'text-black' : 'text-white'
            }`}
          >
            {group.title}
          </h2>
          <p
            className={`mt-[26px] text-lg leading-[29px] opacity-90 sm:text-xl sm:leading-8 ${
              isCard ? 'text-black' : 'font-medium text-white'
            }`}
          >
            <RichText text={group.intro} />
          </p>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {group.features.map((feature, index) => (
          <Reveal key={feature.title} delay={(index % 2) * 120} className="h-full">
            <FeatureCard feature={feature} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
