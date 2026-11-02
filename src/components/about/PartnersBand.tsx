import type { BrandLogo } from '../../types';
import SmartLink from '../ui/SmartLink';

interface PartnersBandProps {
  title: string;
  partners: BrandLogo[];
}

export default function PartnersBand({ title, partners }: PartnersBandProps) {
  return (
    <section className="-mb-0.5 bg-n7-navy px-5 pb-[60px] pt-10 text-white">
      <div className="mx-auto max-w-[85%]">
        <h2 className="mb-2.5 mt-5 text-center text-[28px] font-bold leading-[45px] sm:text-4xl sm:leading-[45px]">{title}</h2>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-8 lg:flex-nowrap lg:justify-between">
          {partners.map((partner) => (
            <li key={partner.name}>
              <SmartLink href={partner.href ?? '#'} ariaLabel={partner.name} className="block transition-transform duration-300 hover:scale-105">
                <img src={partner.src} alt={partner.alt} loading="lazy" className="h-auto max-h-[50px] w-auto max-w-[150px] lg:max-w-[216px]" />
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
