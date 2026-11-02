import type { MethodContent } from '../../types';
import Reveal from '../ui/Reveal';
import RichText from '../ui/RichText';

interface MethodSectionProps {
  content: MethodContent;
}

export default function MethodSection({ content }: MethodSectionProps) {
  return (
    <section id={content.anchor} className="scroll-mt-28 bg-white px-5">
      <div className="mx-auto max-w-[1140px] pb-[100px] pt-[50px]">
        <h2 className="mb-8 mt-5 text-center text-[30px] font-bold leading-[38px] text-black sm:text-[38px] sm:leading-[44px]">{content.title}</h2>
        <div className="mt-[66px] grid grid-cols-1 gap-10 md:grid-cols-3">
          {content.steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 150}>
              <div className="group relative mb-8">
                <span className="absolute -top-3.5 left-[22px] z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-n7-gold text-[26px] leading-8 tracking-[-0.16px] text-white transition-transform duration-300 group-hover:-translate-y-1">
                  {step.number}
                </span>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={step.image.src}
                    alt={step.image.alt}
                    loading="lazy"
                    className="aspect-[353/235] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <h3 className="mb-4 text-center text-2xl font-semibold leading-8 text-black">{step.title}</h3>
              <p className="mt-1 text-justify text-lg leading-[28.08px] text-black">
                <RichText text={step.text} />
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
