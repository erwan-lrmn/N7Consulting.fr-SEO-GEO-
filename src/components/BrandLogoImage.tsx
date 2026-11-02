import { useState } from 'react';
import type { BrandLogo } from '../types';

interface BrandLogoImageProps {
  brand: BrandLogo;
  className?: string;
}

export default function BrandLogoImage({ brand, className = '' }: BrandLogoImageProps) {
  const [hasError, setHasError] = useState<boolean>(false);

  const content = hasError ? (
    <span className="text-center font-sans text-base font-semibold uppercase tracking-[0.12em] text-white sm:whitespace-nowrap sm:text-lg lg:text-xl lg:tracking-[0.18em] 2xl:text-3xl">
      {brand.name}
    </span>
  ) : (
    <img
      src={brand.logo}
      alt={brand.name}
      loading="lazy"
      decoding="async"
      onError={() => setHasError(true)}
      className="h-full w-auto object-contain brightness-0 invert"
    />
  );

  const wrapperClass = `flex h-10 items-center justify-center opacity-90 transition-all duration-300 hover:scale-105 hover:opacity-100 sm:h-12 2xl:h-[60px] ${className}`;

  if (brand.href) {
    return (
      <a href={brand.href} target="_blank" rel="noopener noreferrer" className={wrapperClass} aria-label={brand.name}>
        {content}
      </a>
    );
  }

  return <div className={wrapperClass}>{content}</div>;
}
