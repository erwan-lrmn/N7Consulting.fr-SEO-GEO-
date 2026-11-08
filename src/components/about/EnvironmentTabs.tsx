import { useState, type KeyboardEvent } from 'react';
import type { AboutContent } from '../../types';
import RichText from '../ui/RichText';

interface EnvironmentTabsProps {
  content: AboutContent['environment'];
}

export default function EnvironmentTabs({ content }: EnvironmentTabsProps) {
  const [activeId, setActiveId] = useState<string>(content.tabs[0]?.id ?? '');

  const activeIndex = Math.max(
    0,
    content.tabs.findIndex((tab) => tab.id === activeId),
  );
  const activeTab = content.tabs[activeIndex] ?? content.tabs[0];

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const offset = event.key === 'ArrowRight' ? 1 : -1;
    const next = content.tabs[(activeIndex + offset + content.tabs.length) % content.tabs.length];
    if (next) setActiveId(next.id);
  };

  if (!activeTab) return null;

  return (
    <section id="environnement" className="scroll-mt-24 bg-white px-5 pb-[100px] pt-[70px]">
      <div className="mx-auto max-w-[1140px]">
        <h2 className="mb-3 mt-5 text-center text-[28px] font-bold leading-9 text-n7-graphite sm:text-4xl sm:leading-[45px]">
          {content.title}
        </h2>
        <p className="mx-auto mb-10 max-w-[680px] text-center text-lg leading-[28.8px] text-n7-steel">
          Étudiants, alumni et école : les trois piliers qui font vivre la Junior-Entreprise.
        </p>

        <div
          role="tablist"
          aria-label={content.title}
          onKeyDown={handleKeyDown}
          className="mx-auto mb-12 flex max-w-[680px] flex-wrap justify-center gap-2 rounded-full border border-n7-navy bg-white p-1"
        >
          {content.tabs.map((tab) => {
            const isActive = tab.id === activeTab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(tab.id)}
                className={`flex-1 whitespace-nowrap rounded-full px-5 py-3 text-[13px] font-semibold leading-[18px] transition-all duration-300 sm:text-[15px] ${
                  isActive ? 'bg-n7-navy text-white shadow-sm' : 'text-n7-navy hover:bg-n7-sky/30'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tous les panneaux restent dans le DOM (SEO), seul l'actif est affiché. */}
        {content.tabs.map((tab) => {
          const isActive = tab.id === activeTab.id;
          return (
            <div
              key={tab.id}
              role="tabpanel"
              id={`panel-${tab.id}`}
              aria-labelledby={`tab-${tab.id}`}
              className={
                isActive
                  ? 'grid animate-fade-down grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16'
                  : 'hidden'
              }
            >
              <div>
                <h3 className="mb-6 text-[22px] font-semibold leading-[28.6px] text-black">{tab.title}</h3>
                {tab.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mb-5 text-lg leading-[28.8px] text-black">
                    <RichText text={paragraph} />
                  </p>
                ))}
                {tab.list && (
                  <ul className="mb-5 list-disc pl-6 text-lg leading-[28.8px] text-black">
                    {tab.list.map((item) => (
                      <li key={item}>
                        <RichText text={item} />
                      </li>
                    ))}
                  </ul>
                )}
                {tab.closing && (
                  <p className="text-lg leading-[28.8px] text-black">
                    <RichText text={tab.closing} />
                  </p>
                )}
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={tab.image.src}
                  alt={tab.image.alt}
                  loading="lazy"
                  className="mx-auto max-h-[420px] w-full max-w-[500px] rounded-2xl object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
