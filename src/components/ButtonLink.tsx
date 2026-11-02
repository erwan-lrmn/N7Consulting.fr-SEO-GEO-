import type { CallToAction } from '../types';

interface ButtonLinkProps {
  cta: CallToAction;
  className?: string;
  onClick?: () => void;
}

export default function ButtonLink({ cta, className = '', onClick }: ButtonLinkProps) {
  return (
    <a
      href={cta.href}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-lg bg-n7-gold px-[22px] py-2 font-sans text-lg font-normal tracking-[0.06em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-n7-gold-dark hover:shadow-[0_8px_20px_-8px_rgba(231,184,68,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-n7-navy active:translate-y-0 2xl:text-xl ${className}`}
    >
      {cta.label}
    </a>
  );
}
