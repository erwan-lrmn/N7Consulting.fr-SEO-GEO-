import type { SiteContent } from '../../types';
import Button from '../ui/Button';
import SmartLink from '../ui/SmartLink';
import { NavDropdown } from './Navbar';

interface FooterProps {
  site: SiteContent;
}

export default function Footer({ site }: FooterProps) {
  const footerLinks = site.navigation.filter((link) => !link.hideInFooter);

  return (
    <footer className="bg-n7-navy px-5 pb-10 pt-[50px] text-white sm:px-[30px]">
      <div className="mx-auto max-w-[1152px]">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-0">
          <SmartLink
            href={site.homeHref}
            ariaLabel={`${site.name} – Accueil`}
            className="shrink-0 transition-opacity duration-300 hover:opacity-80"
          >
            <img src={site.logo.src} alt={site.logo.alt} width={1124} height={1062} loading="lazy" className="h-[110px] w-auto lg:h-[127px]" />
          </SmartLink>

          <ul className="flex flex-col items-center lg:flex-row">
            {footerLinks.map((link) => {
              const children = link.children ?? [];
              return (
                <li key={link.label}>
                  {children.length > 0 ? (
                    <NavDropdown link={link} items={children} useFooterLabels />
                  ) : (
                    <SmartLink
                      href={link.href}
                      className="block px-2.5 py-[5px] text-base leading-5 tracking-[0.25px] text-white transition-colors duration-300 hover:text-n7-sky"
                    >
                      {link.label}
                    </SmartLink>
                  )}
                </li>
              );
            })}
            <li className="mt-4 lg:ml-[30px] lg:mt-0">
              <Button link={site.contactCta} className="whitespace-nowrap" />
            </li>
          </ul>
        </div>

        <div className="mx-auto mt-6 max-w-[85%] lg:mt-0">
          <h3 className="mb-2.5 mt-5 text-center text-[28px] font-bold leading-[45px] sm:text-4xl sm:leading-[45px]">{site.partnersTitle}</h3>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-6 lg:flex-nowrap lg:justify-between lg:gap-4">
            {site.partners.map((partner) => (
              <li key={partner.name}>
                <SmartLink
                  href={partner.href ?? '#'}
                  ariaLabel={partner.name}
                  className="block transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                    loading="lazy"
                    className="h-auto max-h-[50px] w-auto max-w-[140px] lg:max-w-[216px]"
                  />
                </SmartLink>
              </li>
            ))}
          </ul>

          <div className="mt-[30px] text-center">
            <Button link={site.brochure} />
          </div>

          <ul className="mt-[30px] flex items-center justify-center gap-2.5">
            {site.socials.map((social) => (
              <li key={social.href}>
                <SmartLink href={social.href} ariaLabel={social.label} className="block transition-transform duration-300 hover:scale-110">
                  <img src={social.icon.src} alt={social.icon.alt} width={40} height={40} loading="lazy" className="h-10 w-10" />
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="my-5 h-px bg-[#E4EBF3]" />

        <SmartLink href={site.address.href} className="text-xs font-bold leading-5 text-white transition-colors duration-300 hover:text-n7-sky">
          {site.address.label}
        </SmartLink>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5">{site.copyright}</p>
          <SmartLink
            href={site.legalLink.href}
            className="text-xs leading-5 text-white underline transition-colors duration-300 hover:text-n7-sky"
          >
            {site.legalLink.label}
          </SmartLink>
        </div>
      </div>
    </footer>
  );
}
