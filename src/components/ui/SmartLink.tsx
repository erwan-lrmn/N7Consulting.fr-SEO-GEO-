import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface SmartLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
  onClick?: () => void;
  tabIndex?: number;
}

const isExternal = (href: string): boolean => /^(https?:|mailto:|tel:)/.test(href);

export default function SmartLink({ href, className, children, ariaLabel, onClick, tabIndex }: SmartLinkProps) {
  if (isExternal(href)) {
    const opensNewTab = href.startsWith('http');
    return (
      <a
        href={href}
        className={className}
        aria-label={ariaLabel}
        onClick={onClick}
        tabIndex={tabIndex}
        target={opensNewTab ? '_blank' : undefined}
        rel={opensNewTab ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith('#')) {
    return (
      <a href={href} className={className} aria-label={ariaLabel} onClick={onClick} tabIndex={tabIndex}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className} aria-label={ariaLabel} onClick={onClick} tabIndex={tabIndex}>
      {children}
    </Link>
  );
}
