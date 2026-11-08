type WaveVariant = 'navyBelow' | 'navyAbove' | 'arc';
type ArcColor = 'white' | 'mist' | 'navy';

interface WaveProps {
  variant: WaveVariant;
  color?: ArcColor;
  className?: string;
}

const ARC_FILL: Record<ArcColor, string> = {
  white: '#FFFFFF',
  mist: '#F5F8FB',
  navy: '#142F4D',
};

/** Courbes reprises à l'identique des SVG du site (viewBox 1512 px, affichées à 105 % de la largeur). */
export default function Wave({ variant, color = 'white', className = '' }: WaveProps) {
  if (variant === 'navyBelow') {
    return (
      <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 top-full z-10 h-[58px] overflow-hidden ${className}`}>
        <svg viewBox="0 0 1512 64" className="absolute left-1/2 top-0 h-auto w-[105%] -translate-x-1/2" preserveAspectRatio="none">
          <path
            fill="#142F4D"
            d="M-34 23.978H31.8333C97.6667 23.978 229.333 23.978 361 20.0992C492.667 16.0441 624.333 7.93388 756 5.28926C887.667 2.64463 1019.33 5.28926 1151 16.0441C1282.67 26.6226 1414.33 45.3113 1480.17 54.6556L1546 64V-62H-34Z"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'navyAbove') {
    return (
      <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 bottom-[calc(100%-2px)] z-[2] h-[58px] overflow-hidden ${className}`}>
        <svg viewBox="0 0 1512 65" className="absolute bottom-[-1px] left-1/2 h-auto w-[105%] -translate-x-1/2" preserveAspectRatio="none">
          <path
            fill="#142F4D"
            d="M-49 40.522H16.8333C82.6667 40.522 214.333 40.522 346 44.4008C477.667 48.4559 609.333 56.5661 741 59.2107C872.667 61.8554 1004.33 59.2107 1136 48.4559C1267.67 37.8774 1399.33 19.1887 1465.17 9.84435L1531 0.5V64.5H-49V40.522Z"
          />
        </svg>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 top-[-1px] h-[58px] overflow-hidden ${className}`}>
      <svg viewBox="0 0 1512 51" className="absolute left-1/2 top-0 h-auto w-[105%] -translate-x-1/2" preserveAspectRatio="none">
        <path
          fill={ARC_FILL[color]}
          d="M0 38.291L126 27.7922C252 17.5697 504 -3.42787 756 -1.49389C1008 0.716381 1260 25.8582 1386 38.291L1512 51V-62H0V38.291Z"
        />
      </svg>
    </div>
  );
}
