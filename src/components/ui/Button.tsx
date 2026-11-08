import type { LinkItem } from '../../types';
import SmartLink from './SmartLink';

// Variantes de bouton partagées par tout le site.
export type ButtonVariant = 'primary' | 'small' | 'navy' | 'hero' | 'brochure' | 'heroLarge' | 'brochureLarge';

interface ButtonProps {
  link: LinkItem;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  rounded?: boolean;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-n7-gold px-[18px] py-2 text-base hover:px-5 hover:py-2.5',
  small: 'bg-n7-gold px-[18px] py-2 text-sm hover:px-5 hover:py-2.5',
  navy: 'bg-n7-navy px-[18px] py-2 text-sm hover:px-5 hover:py-2.5',
  hero: 'bg-n7-gold px-3 py-2 text-[18px] hover:px-4 hover:py-2.5 lg:px-5 lg:py-2.5 lg:text-[20.8px] lg:hover:px-[22px] lg:hover:py-3',
  brochure: 'bg-n7-navy px-3 py-2 text-[18px] hover:px-4 hover:py-2.5 lg:px-5 lg:py-2.5 lg:text-[20.8px] lg:hover:px-[22px] lg:hover:py-3',
  heroLarge:
    'border border-white bg-n7-gold px-[14px] py-[11px] text-[21.6px] hover:px-[19px] hover:py-[13px] xl:px-6 xl:py-[14px] xl:text-[25px] xl:hover:px-[28px] xl:hover:py-[16px]',
  brochureLarge:
    'bg-n7-navy px-[14px] py-[11px] text-[21.6px] hover:px-[19px] hover:py-[13px] xl:px-6 xl:py-[14px] xl:text-[25px] xl:hover:px-[28px] xl:hover:py-[16px]',
};

export default function Button({ link, variant = 'primary', className = '', onClick, rounded = true }: ButtonProps) {
  return (
    <SmartLink
      href={link.href}
      onClick={onClick}
      className={`inline-block ${rounded ? 'rounded-[10px]' : 'rounded-none'} text-center font-sans leading-5 tracking-[1px] text-white transition-all duration-300 hover:bg-n7-sand hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-n7-sky focus-visible:ring-offset-2 ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {link.label}
    </SmartLink>
  );
}
