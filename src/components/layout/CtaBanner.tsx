import type { CtaBannerContent } from '../../types';
import { assets } from '../../data/site';
import Button from '../ui/Button';
import Wave from '../ui/Wave';

interface CtaBannerProps {
  content: CtaBannerContent;
  arcColor: 'white' | 'mist' | 'navy';
}

export default function CtaBanner({ content, arcColor }: CtaBannerProps) {
  return (
    <section
      className="relative flex justify-center bg-n7-navy bg-cover bg-center bg-scroll px-5 lg:bg-fixed py-[72px] text-white sm:px-[72px]"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${assets.flagPhoto}")` }}
    >
      <Wave variant="arc" color={arcColor} />
      <div className="relative max-w-[768px] pt-6 text-center">
        <h2 className="mb-2.5 mt-5 font-serif text-[28px] font-bold leading-[38px] sm:text-4xl sm:leading-[45px]">
          {content.title}
          <span className="sr-only"> avec N7 Consulting, Junior-Entreprise de l’ENSEEIHT à Toulouse</span>
        </h2>
        <p className="mb-2.5 text-lg leading-[28.8px]">{content.text}</p>
        <Button link={content.button} />
      </div>
    </section>
  );
}
