interface N7LogoProps {
  variant?: 'full' | 'mark';
  className?: string;
  title?: string;
}

const STROKES: string[] = [
  'M47 3 C63 17 70 33 63 50 C57 64 47 79 40 106',
  'M53 2 C68 18 74 35 67 51 C61 65 50 80 44 104',
  'M58 4 C72 20 77 37 70 52 C64 66 54 81 49 101',
  'M42 8 C57 21 63 36 58 50 C53 62 45 76 37 99',
];

export default function N7Logo({ variant = 'full', className = '', title = 'N7 Consulting' }: N7LogoProps) {
  return (
    <svg
      viewBox="0 0 120 110"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none" stroke="currentColor" strokeLinecap="round" className="text-n7-gold">
        {STROKES.map((d, index) => (
          <path key={d} d={d} strokeWidth={index === 1 ? 2.2 : 1.3} />
        ))}
      </g>
      {variant === 'full' && (
        <text
          x="60"
          y="58"
          textAnchor="middle"
          fontFamily="'Libre Baskerville', Georgia, serif"
          fontSize="11"
          letterSpacing="0.15"
          fill="#FFFFFF"
        >
          N<tspan fill="#E7B844">7</tspan>CONSULTING
        </text>
      )}
    </svg>
  );
}
