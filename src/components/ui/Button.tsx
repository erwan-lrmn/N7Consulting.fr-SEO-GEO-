import type { LinkItem } from '../../types';
import SmartLink from './SmartLink';

export type ButtonVariant = 'primary' | 'small' | 'navy' | 'hero';

interface ButtonProps {
  link: LinkItem;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-n7-gold px-[18px] py-2 text-base hover:px-5 hover:py-2.5',
  small: 'bg-n7-gold px-[18px] py-2 text-sm hover:px-5 hover:py-2.5',
  navy: 'bg-n7-navy px-[18px] py-2 text-sm hover:px-5 hover:py-2.5',
  hero: 'bg-n7-gold px-5 py-2.5 text-[20.8px] hover:px-[22px] hover:py-3',
};

export default function Button({ link, variant = 'primary', className = '', onClick }: ButtonProps) {
  return (
    <SmartLink
      href={link.href}
      onClick={onClick}
      className={`inline-block rounded-[10px] text-center font-sans leading-5 tracking-[1px] text-white transition-all duration-300 hover:bg-n7-sand hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-n7-sky focus-visible:ring-offset-2 ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {link.label}
    </SmartLink>
  );
}
