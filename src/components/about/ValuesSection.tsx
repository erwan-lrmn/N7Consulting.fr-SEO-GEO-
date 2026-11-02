import type { AboutContent } from '../../types';

interface ValuesSectionProps {
  content: AboutContent['values'];
}

export default function ValuesSection({ content }: ValuesSectionProps) {
  return (
    <section className="bg-n7-navy px-5 pb-[72px] pt-[43.2px] text-white">
      <div className="mx-auto max-w-[768px] text-center">
        <h2 className="mb-2.5 mt-5 font-serif text-[28px] font-bold leading-[38px] sm:text-4xl sm:leading-[45px]">{content.title}</h2>
        <ul className="flex flex-wrap justify-center gap-x-11 gap-y-2">
          {content.items.map((value) => (
            <li key={value}>
              <h3 className="mb-2.5 mt-5 text-[22px] font-semibold leading-[28.6px] transition-colors duration-300 hover:text-n7-gold">{value}</h3>
            </li>
          ))}
        </ul>
        <h2 className="mb-2.5 mt-10 font-serif text-[28px] font-bold leading-[38px] sm:text-4xl sm:leading-[45px]">{content.purposeTitle}</h2>
        <p className="mb-2.5 mt-5 text-lg leading-[28.8px]">{content.purpose}</p>
      </div>
    </section>
  );
}
