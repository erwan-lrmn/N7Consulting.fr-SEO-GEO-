import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import type { NavChild, NavLink, SiteContent } from '../../types';
import Button from '../ui/Button';
import SmartLink from '../ui/SmartLink';

interface NavbarProps {
  site: SiteContent;
}

interface DropdownProps {
  link: NavLink;
  items: NavChild[];
  useFooterLabels?: boolean;
}

export function NavDropdown({ link, items, useFooterLabels = false }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handlePointerDown = (event: PointerEvent): void => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) setIsOpen(false);
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
        className="relative flex items-center py-[26px] pl-5 pr-[30px] text-base leading-5 text-white transition-colors duration-300 hover:text-n7-sky focus-visible:text-n7-sky focus-visible:outline-none"
      >
        {link.label}
        <ChevronDown
          aria-hidden="true"
          strokeWidth={3}
          className={`absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 min-w-full">
          <ul className="animate-fade-down overflow-hidden rounded-xl bg-n7-sky py-2">
            {items.map((item) => (
              <li key={item.href}>
                <SmartLink
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block whitespace-nowrap px-5 py-[5px] text-sm leading-5 text-[#222222] transition-all duration-300 hover:text-[14.5px] hover:text-n7-navy"
                >
                  {useFooterLabels ? item.footerLabel : item.label}
                </SmartLink>
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
        <SmartLink
          href={link.href}
          onClick={onNavigate}
          className="block px-5 py-2.5 text-center text-lg text-white transition-colors duration-300 hover:text-n7-sky"
        >
          {link.label}
        </SmartLink>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((previous) => !previous)}
        className="mx-auto flex items-center gap-1.5 px-5 py-2.5 text-lg text-white transition-colors duration-300 hover:text-n7-sky"
      >
        {link.label}
        <ChevronDown
          aria-hidden="true"
          strokeWidth={3}
          className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isExpanded ? 'visible grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0'
        }`}
      >
        <ul className="mx-auto w-fit overflow-hidden rounded-xl bg-n7-sky">
          {children.map((child) => (
            <li key={child.href}>
              <SmartLink
                href={child.href}
                onClick={onNavigate}
                className="block px-6 py-2 text-center text-base text-[#222222] transition-colors duration-300 hover:text-n7-navy"
              >
                {child.label}
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function Navbar({ site }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const handleChange = (event: MediaQueryListEvent): void => {
      if (event.matches) setIsMenuOpen(false);
    };
    desktopQuery.addEventListener('change', handleChange);
    return () => desktopQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = (): void => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-5 top-2.5 z-50 mx-auto max-w-nav lg:inset-x-[72px]">
      <nav
        aria-label="Navigation principale"
        className="rounded-[10px] border-2 border-white bg-n7-navy px-2 py-[5px] shadow-nav lg:px-5"
      >
        <div className="mx-auto flex h-[60px] max-w-[1260px] items-center justify-between pl-3 pr-1 lg:h-[76px] lg:pl-[30px] lg:pr-[15px]">
          <SmartLink
            href={site.homeHref}
            ariaLabel={`${site.name} – Accueil`}
            className="flex shrink-0 items-center transition-opacity duration-300 hover:opacity-80"
          >
            <img src={site.logo.src} alt={site.logo.alt} className="h-[52px] w-auto lg:h-[76px]" />
          </SmartLink>

          <div className="hidden items-center lg:flex">
            <ul className="flex items-center">
              {site.navigation.map((link) => {
                const children = link.children ?? [];
                return (
                  <li key={link.label}>
                    {children.length > 0 ? (
                      <NavDropdown link={link} items={children} />
                    ) : (
                      <SmartLink
                        href={link.href}
                        className="px-2.5 py-[5px] text-base leading-5 tracking-[0.25px] text-white transition-colors duration-300 hover:text-n7-sky"
                      >
                        {link.label}
                      </SmartLink>
                    )}
                  </li>
                );
              })}
            </ul>
            <Button link={site.contactCta} className="ml-[30px] whitespace-nowrap" />
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className={`flex h-12 w-12 items-center justify-center text-white transition-colors duration-300 lg:hidden ${
              isMenuOpen ? 'bg-[#C8C8C8]' : 'hover:text-n7-sky'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`grid transition-all duration-300 ease-out lg:hidden ${
            isMenuOpen ? 'visible grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="max-h-[calc(100svh-100px)] overflow-y-auto pb-5 pt-3">
              <ul className="flex flex-col">
                {site.navigation.map((link) => (
                  <MobileItem key={link.label} link={link} onNavigate={closeMenu} />
                ))}
              </ul>
              <div className="mt-2 flex justify-center">
                <Button link={site.contactCta} onClick={closeMenu} className="text-lg" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
