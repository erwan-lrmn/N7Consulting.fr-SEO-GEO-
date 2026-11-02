import { ArrowRight } from 'lucide-react';
import type { AboutContent } from '../../types';
import Reveal from '../ui/Reveal';
import SmartLink from '../ui/SmartLink';
import Wave from '../ui/Wave';

interface JuniorSectionProps {
  content: AboutContent['junior'];
}

export default function JuniorSection({ content }: JuniorSectionProps) {
  return (
    <section className="relative bg-n7-navy px-5 py-20 text-white sm:px-[30px]">
      <div className="mx-auto max-w-[1173px]">
        <h2 className="mb-4 mt-5 text-center text-[28px] font-bold leading-9 sm:text-4xl sm:leading-[45px]">{content.title}</h2>
        <p className="mx-auto mb-5 max-w-[700px] text-center text-lg leading-[29px] sm:text-xl sm:leading-[31px]">{content.text}</p>

        <h2 className="mb-4 mt-[100px] text-center text-[28px] font-bold leading-9 sm:text-4xl sm:leading-[45px]">{content.whyTitle}</h2>
        <div className="mt-[50px] grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
          {content.reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 150}>
              <div className="group flex flex-col items-center text-center">
                <img
                  src={reason.icon.src}
                  alt={reason.icon.alt}
                  loading="lazy"
                  className="mb-4 h-[100px] w-[100px] rounded-[10px] bg-white p-2.5 shadow-reason transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105"
                />
                <h3 className="mb-2.5 mt-5 text-[22px] font-semibold leading-[28.6px]">{reason.title}</h3>
                <p className="mb-5 text-lg leading-[28.8px]">{reason.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="flex justify-center">
          <SmartLink
            href={content.moreLink.href}
            className="group flex items-center gap-1.5 text-sm leading-5 text-white transition-colors duration-300 hover:text-n7-sky"
          >
            {content.moreLink.label}
            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </SmartLink>
        </div>
      </div>
      <Wave variant="navyBelow" />
    </section>
  );
}
