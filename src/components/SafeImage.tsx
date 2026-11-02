import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  loading?: 'eager' | 'lazy';
}

export default function SafeImage({
  src,
  alt,
  className = '',
  fallbackClassName = 'bg-n7-navy/15',
  loading = 'lazy',
}: SafeImageProps) {
  const [hasError, setHasError] = useState<boolean>(false);

  if (hasError) {
    return <div role="img" aria-label={alt} className={`${className} ${fallbackClassName}`} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
