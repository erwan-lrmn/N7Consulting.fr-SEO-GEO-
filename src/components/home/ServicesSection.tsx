import { Link } from 'react-router-dom';
import type { ServicesOverviewContent } from '../../types';
import Reveal from '../ui/Reveal';

interface ServicesSectionProps {
  content: ServicesOverviewContent;
  asPageTitle?: boolean;
}

export default function ServicesSection({ content, asPageTitle = false }: ServicesSectionProps) {
  const Title = asPageTitle ? 'h1' : 'h2';

  return (
    <section id="prestations" className="bg-white px-[5%]">
      <div className="mx-auto max-w-[1280px] py-16">
        <Title className="mb-2.5 mt-5 text-[28px] font-bold leading-9 text-black sm:text-4xl sm:leading-[45px]">
          {asPageTitle && <span className="sr-only">Nos prestations à Toulouse : </span>}
          {content.title}
        </Title>
        {content.description && (
          <p className="mb-2.5 max-w-[1024px] text-lg leading-[28.8px] text-black">{content.description}</p>
        )}
        <div className="mt-[17px] grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {content.items.map((item, index) => (
            <Reveal key={item.href} delay={index * 120} className="h-full">
              <Link to={item.href} className="group block h-full">
                <article className="h-full rounded-[10px] border-[3px] border-n7-navy bg-white p-5 text-center shadow-presta transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-presta-hover">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    width={1200}
                    height={675}
                    loading="lazy"
                    className="mx-auto h-[135px] w-auto max-w-full object-contain"
                  />
                  <h3 className="mb-4 text-[22px] font-semibold leading-[28.6px] text-black">{item.title}</h3>
                  <p className="mb-2.5 text-left text-lg leading-[28.8px] text-black">{item.description}</p>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
