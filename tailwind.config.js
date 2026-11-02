/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        n7: {
          // Couleurs relevées au pixel sur les captures de n7consulting.fr
          navy: '#212E4C', // barre de navigation, vagues, section chiffres clés
          'navy-card': '#22304B', // bordure des cartes de prestations
          gold: '#E7B844', // boutons « Nous contacter » / « Demander un devis »
          'gold-dark': '#D4A332', // état :hover des boutons
          'gold-line': '#DBB862', // filets dorés des vagues
          sky: '#A3C8E4', // vague bleu clair du hero
          mist: '#E9F2FF', // fond du hero (haut)
          'mist-mid': '#E3E9F4', // fond du hero (milieu)
          'mist-deep': '#D8DFED', // fond du hero (bas)
          ink: '#000000', // titres et textes sur fond clair
        },
      },
      fontFamily: {
        sans: ['Lexend', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Libre Baskerville"', 'ui-serif', 'Georgia', 'serif'],
      },
      maxWidth: {
        site: '1600px',
      },
      boxShadow: {
        nav: '0 6px 24px -8px rgba(33, 46, 76, 0.45)',
        card: '0 10px 18px -10px rgba(33, 46, 76, 0.55)',
        'card-hover': '0 22px 32px -14px rgba(33, 46, 76, 0.6)',
      },
      keyframes: {
        'marquee-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'marquee-down': {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'marquee-up': 'marquee-up 45s linear infinite',
        'marquee-down': 'marquee-down 45s linear infinite',
        'fade-down': 'fade-down 200ms ease-out',
      },
    },
  },
  plugins: [],
};
