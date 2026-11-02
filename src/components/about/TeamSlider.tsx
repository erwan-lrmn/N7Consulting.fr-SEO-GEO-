import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { AboutContent, TeamMember } from '../../types';
import { assets } from '../../data/site';

interface TeamSliderProps {
  content: AboutContent['team'];
}

const BREAKPOINTS: Array<{ query: string; perView: number }> = [
  { query: '(min-width: 1024px)', perView: 4 },
  { query: '(min-width: 768px)', perView: 3 },
  { query: '(min-width: 480px)', perView: 2 },
];

function usePerView(): number {
  const compute = (): number => {
    if (typeof window === 'undefined') return 4;
    const match = BREAKPOINTS.find((breakpoint) => window.matchMedia(breakpoint.query).matches);
    return match ? match.perView : 1;
  };
  const [perView, setPerView] = useState<number>(compute);

  useEffect(() => {
    const handleResize = (): void => setPerView(compute());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return perView;
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="group my-2.5 flex h-[calc(100%-20px)] flex-col gap-px rounded-[10px] bg-white pb-6 shadow-team transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_8px_18px_2px_rgba(0,0,0,0.22)]">
      <div className="overflow-hidden rounded-t-[10px]">
        <img
          src={member.photo}
          alt={`${member.firstName} ${member.lastName}, ${member.role}`}
          loading="lazy"
          className="mb-[18px] aspect-[215/322] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-6">
        <h3 className="mt-5 text-2xl font-semibold leading-[30px] text-n7-graphite">{member.firstName}</h3>
        <p className="text-2xl font-semibold leading-[30px] text-n7-graphite">{member.lastName}</p>
        <p className="mb-5 mt-5 text-[17px] leading-[27.2px] text-n7-graphite">{member.role}</p>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`LinkedIn de ${member.firstName} ${member.lastName}`}
          className="mt-auto inline-flex w-fit transition-transform duration-300 hover:scale-110"
        >
          <img src={assets.linkedinSmall} alt="" aria-hidden="true" className="h-6 w-6" />
        </a>
      </div>
    </article>
  );
}

export default function TeamSlider({ content }: TeamSliderProps) {
  const perView = usePerView();
  const pages = useMemo<TeamMember[][]>(() => {
    const result: TeamMember[][] = [];
    for (let start = 0; start < content.members.length; start += perView) {
      result.push(content.members.slice(start, start + perView));
    }
    return result;
  }, [content.members, perView]);
  const [page, setPage] = useState<number>(0);
  const pageCount = pages.length;
  const current = Math.min(page, pageCount - 1);

  const goTo = (next: number): void => setPage(((next % pageCount) + pageCount) % pageCount);

  return (
    <section className="bg-white px-5 py-20 sm:px-[30px]">
      <div className="mx-auto max-w-[1173px]">
        <h2 className="mb-[30px] mt-5 text-center text-[28px] font-bold leading-9 text-n7-graphite sm:text-4xl sm:leading-[45px]">{content.title}</h2>
        <p className="mx-auto mb-2.5 max-w-[530px] text-center text-lg leading-[28.8px] text-n7-graphite">{content.subtitle}</p>

        <div className="relative mt-[50px] px-10 lg:px-[60px]">
          <div className="overflow-hidden py-2">
            <div
              className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {pages.map((members, pageIndex) => (
                <div
                  key={members.map((member) => member.lastName).join('-')}
                  aria-hidden={pageIndex !== current}
                  className="grid w-full shrink-0 gap-6 px-1 lg:gap-[78px]"
                  style={{ gridTemplateColumns: `repeat(${perView}, minmax(0, 1fr))` }}
                >
                  {members.map((member) => (
                    <MemberCard key={`${member.firstName}-${member.lastName}`} member={member} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => goTo(current - 1)}
            aria-label="Membres précédents"
            className="absolute left-0 top-1/2 -translate-y-1/2 p-1 text-[#C8C8C8] transition-all duration-300 hover:-translate-x-1 hover:text-n7-navy"
          >
            <ChevronLeft className="h-10 w-10" strokeWidth={1.5} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(current + 1)}
            aria-label="Membres suivants"
            className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-[#C8C8C8] transition-all duration-300 hover:translate-x-1 hover:text-n7-navy"
          >
            <ChevronRight className="h-10 w-10" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          {pages.map((members, dotIndex) => (
            <button
              key={members.map((member) => member.firstName).join('-')}
              type="button"
              onClick={() => goTo(dotIndex)}
              aria-label={`Afficher le groupe ${dotIndex + 1}`}
              aria-current={dotIndex === current}
              className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                dotIndex === current ? 'bg-n7-graphite' : 'bg-[#C8C8C8] hover:bg-n7-steel'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
