import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import type { NavLink, NavigationContent } from '../types';
import ButtonLink from './ButtonLink';
import N7Logo from './N7Logo';

interface NavbarProps {
  content: NavigationContent;
}

interface DesktopDropdownProps {
  link: NavLink;
  items: NavLink[];
}

function DesktopDropdown({ link, items }: DesktopDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (event: PointerEvent): void => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previous) => !previous)}
        className="group flex items-center gap-1.5 whitespace-nowrap py-2 text-lg text-white transition-colors duration-300 hover:text-n7-gold focus-visible:text-n7-gold focus-visible:outline-none 2xl:text-xl"
      >
        {link.label}
        <ChevronDown
          aria-hidden="true"
          strokeWidth={2.75}
          className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4">
          <ul className="min-w-[240px] animate-fade-down overflow-hidden rounded-lg border-2 border-white bg-n7-navy py-2 shadow-nav">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-5 py-3 text-base text-white transition-all duration-300 hover:bg-white/10 hover:pl-7 hover:text-n7-gold 2xl:text-lg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

interface MobileItemProps {
  link: NavLink;
  onNavigate: () => void;
}

function MobileItem({ link, onNavigate }: MobileItemProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const children = link.children ?? [];

  if (children.length === 0) {
    return (
      <li>
        <a
          href={link.href}
          onClick={onNavigate}
          className="block rounded-md px-3 py-3 text-lg text-white transition-colors duration-300 hover:bg-white/10 hover:text-n7-gold"
        >
          {link.label}
        </a>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((previous) => !previous)}
        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-lg text-white transition-colors duration-300 hover:bg-white/10 hover:text-n7-gold"
      >
        {link.label}
        <ChevronDown
          aria-hidden="true"
          strokeWidth={2.75}
          className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isExpanded ? 'visible grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0'
        }`}
      >
        <ul className="ml-3 overflow-hidden border-l-2 border-n7-gold/70 pl-3">
          {children.map((child) => (
            <li key={child.href}>
              <a
                href={child.href}
                onClick={onNavigate}
                className="block rounded-md px-3 py-2.5 text-base text-white/90 transition-colors duration-300 hover:bg-white/10 hover:text-n7-gold"
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function Navbar({ content }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1280px)');
    const handleChange = (event: MediaQueryListEvent): void => {
      if (event.matches) setIsMenuOpen(false);
    };
    desktopQuery.addEventListener('change', handleChange);
    return () => desktopQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = (): void => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-3 top-3 z-50 sm:inset-x-6 lg:inset-x-[4.7%] lg:top-[10px]">
      <nav
        aria-label="Navigation principale"
        className="rounded-[10px] border-2 border-white bg-n7-navy shadow-nav"
      >
        <div className="flex h-[72px] items-center justify-between px-4 sm:px-6 lg:h-[100px] lg:px-10 xl:px-16 2xl:h-[114px] 2xl:pl-[182px] 2xl:pr-[150px]">
          <a
            href={content.homeHref}
            aria-label={`${content.brandName} – Accueil`}
            className="flex shrink-0 items-center transition-opacity duration-300 hover:opacity-80"
          >
            <N7Logo className="h-[58px] w-auto lg:h-[80px] 2xl:h-[90px]" title={content.brandName} />
          </a>

          <div className="hidden items-center xl:flex">
            <ul className="flex items-center gap-7 2xl:gap-[38px]">
              {content.links.map((link) => {
                const children = link.children ?? [];
                return (
                  <li key={link.label}>
                    {children.length > 0 ? (
                      <DesktopDropdown link={link} items={children} />
                    ) : (
                      <a
                        href={link.href}
                        className="relative whitespace-nowrap py-2 text-lg text-white transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-n7-gold after:transition-transform after:duration-300 hover:text-n7-gold hover:after:scale-x-100 2xl:text-xl"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
            <ButtonLink cta={content.cta} className="ml-10 whitespace-nowrap 2xl:ml-[60px]" />
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition-all duration-300 hover:bg-white/10 hover:text-n7-gold xl:hidden"
          >
            {isMenuOpen ? <X className="h-7 w-7" aria-hidden="true" /> : <Menu className="h-7 w-7" aria-hidden="true" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`grid transition-all duration-300 ease-out xl:hidden ${
            isMenuOpen ? 'visible grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="max-h-[calc(100svh-110px)] overflow-y-auto border-t border-white/20 px-4 pb-6 pt-3 sm:px-6">
              <ul className="flex flex-col gap-1">
                {content.links.map((link) => (
                  <MobileItem key={link.label} link={link} onNavigate={closeMenu} />
                ))}
              </ul>
              <ButtonLink cta={content.cta} onClick={closeMenu} className="mt-5 w-full py-3" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
