import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { siteContent } from '../../data/site';
import SmartLink from '../ui/SmartLink';

const isActive = (pathname: string, href: string): boolean =>
  href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSolid, setIsSolid] = useState<boolean>(location.pathname !== '/');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!openDropdown) return undefined;

    const handlePointerDown = (event: PointerEvent): void => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenDropdown(null);
    };
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setOpenDropdown(null);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openDropdown]);

  useEffect(() => {
    const update = (): void => {
      const headerHeight = headerRef.current?.offsetHeight ?? 80;
      const heroLogo = document.getElementById('hero-logo');
      if (!heroLogo) {
        setIsSolid(true);
        return;
      }
      const rect = heroLogo.getBoundingClientRect();
      // Le fondu démarre quand la moitié du logo central est passée sous le header.
      setIsSolid(rect.top + rect.height / 2 <= headerHeight);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [location.pathname]);

  const solid = isSolid || isMenuOpen;
  const textShadow = solid ? '' : 'drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]';

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-700 ${
        solid ? 'border-black/5 bg-white/90 shadow-[0_2px_12px_rgba(20,47,77,0.06)] backdrop-blur-md' : 'border-transparent bg-transparent shadow-none'
      }`}
    >
      <div className="grid h-16 w-full grid-cols-[1fr_auto_1fr] items-center px-6 md:h-20 lg:px-14">
        <SmartLink
          href={siteContent.homeHref}
          ariaLabel={`${siteContent.name} – Accueil`}
          className="flex shrink-0 items-center justify-self-start"
        >
          <span className={`relative block h-10 w-[150px] overflow-hidden transition-all duration-700 md:w-[160px] lg:h-12 lg:w-[190px] ${textShadow}`}>
            <img
              src="/logo-n7-consulting.svg"
              alt={siteContent.name}
              width={1124}
              height={1062}
              className={`absolute left-0 top-1/2 w-full -translate-y-[52.5%] transition-[filter] duration-700 ${
                solid ? 'brightness-100 invert-0' : 'brightness-0 invert'
              }`}
            />
          </span>
        </SmartLink>

        <nav ref={navRef} aria-label="Navigation principale" className="hidden items-center gap-4 justify-self-center md:flex lg:gap-8">
          {siteContent.navigation.map((link) => {
            const children = link.children ?? [];
            const active = isActive(location.pathname, link.href);
            const linkClasses = `whitespace-nowrap text-[13px] font-medium transition-all duration-700 lg:text-[15px] ${textShadow} ${
              solid
                ? active
                  ? 'text-n7-navy'
                  : 'text-n7-slate hover:text-n7-navy'
                : active
                  ? 'text-white'
                  : 'text-white/80 hover:text-white'
            }`;

            if (children.length === 0) {
              return (
                <SmartLink key={link.label} href={link.href} className={linkClasses}>
                  {link.label}
                </SmartLink>
              );
            }

            const open = openDropdown === link.label;

            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="flex items-center">
                  <SmartLink href={link.href} className={linkClasses}>
                    {link.label}
                  </SmartLink>
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={open}
                    aria-label={`Ouvrir le sous-menu ${link.label}`}
                    onClick={() => setOpenDropdown(open ? null : link.label)}
                    className={`flex h-6 w-5 items-center justify-center transition-all duration-700 ${textShadow} ${
                      solid ? 'text-n7-slate hover:text-n7-navy' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>

                {open && (
                  <div className="absolute left-0 top-full z-50 min-w-[220px] pt-2">
                    <div className="overflow-hidden rounded-[8px] border border-n7-line bg-white py-2 shadow-[0_10px_30px_rgba(20,47,77,0.15)]">
                      {children.map((child) => (
                        <SmartLink
                          key={child.href}
                          href={child.href}
                          className="block whitespace-nowrap px-5 py-2.5 text-[14px] text-n7-slate transition-colors duration-200 hover:bg-n7-mist hover:text-n7-navy"
                        >
                          {child.label}
                        </SmartLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <SmartLink
          href={siteContent.contactCta.href}
          className="hidden whitespace-nowrap rounded-[4px] bg-n7-navy px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-700 hover:bg-n7-gold hover:text-n7-navy md:inline-block md:justify-self-end lg:px-6 lg:py-3 lg:text-sm"
        >
          {siteContent.contactCta.label}
        </SmartLink>

        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          aria-expanded={isMenuOpen}
          aria-controls="header-mobile-menu"
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className={`col-start-3 flex h-10 w-10 items-center justify-center justify-self-end transition-all duration-700 md:hidden ${textShadow} ${
            solid ? 'text-n7-navy hover:text-n7-gold' : 'text-white hover:text-n7-gold'
          }`}
        >
          {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {isMenuOpen && (
        <div id="header-mobile-menu" className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-n7-line bg-white md:hidden">
          <nav aria-label="Navigation mobile" className="flex flex-col px-5 py-4">
            {siteContent.navigation.map((link) => {
              const children = link.children ?? [];
              const active = isActive(location.pathname, link.href);
              return (
                <div key={link.label}>
                  <SmartLink
                    href={link.href}
                    className={`block py-3 text-base font-medium transition-colors duration-300 hover:text-n7-navy ${
                      active ? 'text-n7-navy' : 'text-n7-slate'
                    }`}
                  >
                    {link.label}
                  </SmartLink>
                  {children.length > 0 && (
                    <ul className="mb-2 ml-4 border-l border-n7-line pl-4">
                      {children.map((child) => (
                        <li key={child.href}>
                          <SmartLink href={child.href} className="block py-2 text-sm text-n7-slate transition-colors duration-300 hover:text-n7-navy">
                            {child.label}
                          </SmartLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
            <SmartLink
              href={siteContent.contactCta.href}
              className="mt-3 rounded-[4px] bg-n7-navy px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-n7-gold hover:text-n7-navy"
            >
              {siteContent.contactCta.label}
            </SmartLink>
          </nav>
        </div>
      )}
    </header>
  );
}
