import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { OfferGroup } from '../../data/services';
import type { ServiceTeaser } from '../../types';
import Reveal from '../ui/Reveal';
import RichText from '../ui/RichText';

interface OffersSectionProps {
  title: string;
  groups: OfferGroup[];
  categories: ServiceTeaser[];
}

export default function OffersSection({ title, groups, categories }: OffersSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const activeGroup = openIndex === null ? null : groups[openIndex];

  return (
    <section id="prestations" className="bg-white px-[5%]">
      <div className="mx-auto max-w-[1280px] py-16">
        <h2 className="mb-2.5 mt-5 text-[28px] font-bold leading-9 text-black sm:text-4xl sm:leading-[45px]">{title}</h2>

        <div className="mt-[17px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {groups.map((group, groupIndex) => {
            const category = categories.find((item) => item.href === group.href);
            const isOpen = openIndex === groupIndex;
            return (
              <button
                key={group.title}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : groupIndex)}
                aria-expanded={isOpen}
                aria-controls={`offers-panel-${groupIndex}`}
                className={`group flex h-full flex-col overflow-hidden rounded-[10px] border bg-white text-left shadow-presta transition-all duration-300 ${
                  isOpen
                    ? 'border-n7-navy shadow-presta-hover'
                    : 'border-n7-line hover:-translate-y-1 hover:border-n7-navy hover:shadow-presta-hover'
                }`}
              >
                <span className="relative block aspect-[16/9] overflow-hidden bg-n7-mist">
                  {category && (
                    <img
                      src={category.image.src}
                      alt={category.image.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </span>
                <span className="flex flex-1 flex-col p-6">
                  <span className="flex items-start justify-between gap-3">
                    <span className="text-[22px] font-semibold leading-[28.6px] text-n7-navy">{group.title}</span>
                    <ChevronDown
                      aria-hidden="true"
                      strokeWidth={2}
                      className={`mt-1 h-6 w-6 shrink-0 text-n7-navy transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </span>
                  {category && <span className="mt-3 block text-[15px] leading-6 text-n7-slate">{category.description}</span>}
                  <span className="mt-4 block text-sm font-medium text-n7-steel">{group.offers.length} offres</span>
                </span>
              </button>
            );
          })}
        </div>

        {activeGroup && (
          <div
            id={`offers-panel-${openIndex}`}
            role="region"
            aria-label={`Offres ${activeGroup.title}`}
            className="mt-6 animate-fade-down rounded-[10px] border border-n7-line bg-n7-mist p-6"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {activeGroup.offers.map((offer, offerIndex) => (
                <Reveal key={offer.title} delay={offerIndex * 60} className="h-full">
                  <Link to={offer.href} className="group block h-full">
                    <article className="flex h-full flex-col rounded-[8px] border border-n7-line bg-white p-5 text-left shadow-actu transition-all duration-300 group-hover:-translate-y-1 group-hover:border-n7-navy group-hover:shadow-actu-hover">
                      <img src={offer.icon.src} alt={offer.icon.alt} loading="lazy" className="h-12 w-auto object-contain" />
                      <h3 className="mb-3 mt-4 text-lg font-semibold leading-6 text-n7-navy">{offer.title}</h3>
                      <ul className="space-y-2 text-[15px] leading-6 text-n7-slate">
                        {offer.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex gap-2">
                            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-n7-gold" />
                            <span className="flex-1">
                              <RichText text={point} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
