import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { AboutContent, TeamMember } from '../../types';
import { assets } from '../../data/site';
import { useIsomorphicLayoutEffect } from '../../useIsomorphicLayoutEffect';

interface TeamSliderProps {
  content: AboutContent['team'];
}

function MemberCard({ member, isClone = false }: { member: TeamMember; isClone?: boolean }) {
  return (
    <article className="flex h-full flex-col gap-px rounded-[10px] bg-white pb-5 shadow-team transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[4px_8px_18px_2px_rgba(0,0,0,0.22)]">
      <div className="overflow-hidden rounded-t-[10px]">
        <img
          src={member.photo}
          alt={`${member.firstName} ${member.lastName}, ${member.role} de N7 Consulting`}
          loading="lazy"
          className="mb-3 aspect-[215/230] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-6">
        <h3 className="mt-4 text-2xl font-semibold leading-[30px] text-n7-graphite">{member.firstName}</h3>
        <p className="text-2xl font-semibold leading-[30px] text-n7-graphite">{member.lastName}</p>
        <p className="mb-4 mt-4 text-[17px] leading-[27.2px] text-n7-graphite">{member.role}</p>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={isClone ? -1 : undefined}
          aria-label={`LinkedIn de ${member.firstName} ${member.lastName}`}
          className="mt-auto inline-flex w-fit transition-transform duration-300 hover:scale-110"
        >
          <img src={assets.linkedinSmall} alt="" aria-hidden="true" className="h-6 w-6" />
        </a>
      </div>
    </article>
  );
}

const COPIES = [0, 1, 2];
// Trois copies pour un défilement infini continu.

export default function TeamSlider({ content }: TeamSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const setWidthRef = useRef<number>(0);
  const shiftRef = useRef<number>(0);
  const recenterTimer = useRef<number | undefined>(undefined);
  const hasInteractedRef = useRef<boolean>(false);
  const recenterLockRef = useRef<number>(0);

  const measureSetWidth = (): number => {
    const track = trackRef.current;
    const cards = track?.querySelectorAll<HTMLElement>('[data-team-card]');
    if (!track || !cards || cards.length <= content.members.length) return 0;
    const firstCard = cards[0];
    const middleCard = cards[content.members.length];
    if (!firstCard || !middleCard) return 0;
    return middleCard.offsetLeft - firstCard.offsetLeft;
  };

  const centerTrack = (): void => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>('[data-team-card]');
    if (!track || !card) return;
    const setWidth = measureSetWidth();
    const shift = Math.max((track.clientWidth - card.offsetWidth) / 2, 0);
    setWidthRef.current = setWidth;
    shiftRef.current = shift;
    hasInteractedRef.current = false;
    if (setWidth > 0) track.scrollLeft = setWidth - shift;
  };

  useIsomorphicLayoutEffect(() => {
    centerTrack();
    const handleResize = (): void => centerTrack();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (recenterTimer.current) window.clearTimeout(recenterTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content.members.length]);

  const scrollByCard = (direction: number): void => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>('[data-team-card]');
    if (!track || !card) return;
    hasInteractedRef.current = true;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' });
  };

  const handleScroll = (): void => {
    if (!hasInteractedRef.current) return;
    if (Date.now() < recenterLockRef.current) return;
    if (recenterTimer.current) window.clearTimeout(recenterTimer.current);
    recenterTimer.current = window.setTimeout(() => {
      const track = trackRef.current;
      const setWidth = setWidthRef.current;
      if (!track || !setWidth || Date.now() < recenterLockRef.current) return;
      const shift = shiftRef.current;
      const lowerBound = setWidth - shift;
      const upperBound = setWidth * 2 - shift;
      if (track.scrollLeft < lowerBound - 2) {
        recenterLockRef.current = Date.now() + 300;
        track.scrollLeft += setWidth;
      } else if (track.scrollLeft >= upperBound + 2) {
        recenterLockRef.current = Date.now() + 300;
        track.scrollLeft -= setWidth;
      }
    }, 120);
  };

  return (
    <section className="bg-white px-5 py-20 sm:px-[30px]">
      <div className="mx-auto max-w-[1173px]">
        <h2 className="mb-[30px] mt-5 text-center text-[28px] font-bold leading-9 text-n7-graphite sm:text-4xl sm:leading-[45px]">{content.title}</h2>
        <p className="mx-auto mb-2.5 max-w-[530px] text-center text-lg leading-[28.8px] text-n7-graphite">{content.subtitle}</p>

        <div
          aria-roledescription="carrousel"
          aria-label="Membres de l'équipe"
          className="relative mt-[50px] px-10 lg:px-[60px]"
        >
          <div
            ref={trackRef}
            tabIndex={0}
            onScroll={handleScroll}
            onPointerDown={() => {
              hasInteractedRef.current = true;
            }}
            onTouchStart={() => {
              hasInteractedRef.current = true;
            }}
            onWheel={() => {
              hasInteractedRef.current = true;
            }}
            onKeyDown={() => {
              hasInteractedRef.current = true;
            }}
            aria-label="Faites défiler les membres de l'équipe"
            className="flex gap-6 overflow-x-auto py-2 [scrollbar-width:none] [-ms-overflow-style:none] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-n7-sky [&::-webkit-scrollbar]:hidden"
          >
            {COPIES.map((copy) =>
              content.members.map((member) => {
                const isClone = copy !== 1;
                return (
                  <div
                    key={`${copy}-${member.firstName}-${member.lastName}`}
                    data-team-card
                    aria-hidden={isClone || undefined}
                    className="group w-[calc(100vw-7.5rem)] max-w-[300px] shrink-0 sm:w-[275px] lg:w-[277px]"
                  >
                    <MemberCard member={member} isClone={isClone} />
                  </div>
                );
              }),
            )}
          </div>

          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Membres précédents"
            className="absolute left-0 top-1/2 -translate-y-1/2 p-1 text-[#C8C8C8] transition-all duration-300 hover:-translate-x-1 hover:text-n7-navy"
          >
            <ChevronLeft className="h-10 w-10" strokeWidth={1.5} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Membres suivants"
            className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-[#C8C8C8] transition-all duration-300 hover:translate-x-1 hover:text-n7-navy"
          >
            <ChevronRight className="h-10 w-10" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
