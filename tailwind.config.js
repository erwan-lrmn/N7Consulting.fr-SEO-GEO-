/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        n7: {
          // Variables CSS officielles du site (feuille Webflow de n7consulting.fr)
          navy: '#142F4D', // --bleu-pe : fonds, navbar, footer, titres
          gold: '#FAB613', // --orange-solaire : boutons, mises en avant
          sand: '#FED693', // --or : survol des boutons, badges d'articles
          sky: '#8ECAE7', // --bleu-divin : vagues, encarts, survol des liens
          cream: '#FAE9CE', // halo décoratif des pages prestations
          ivory: '#FFFBF4', // halo décoratif des pages prestations
          mist: '#F5F8FB', // fond de la section « Dernières actualités »
          line: '#E3E8EE', // bordure des cartes d'actualités
          pale: '#D6E6F2', // chapô et date des articles
          slate: '#3D4B5C', // textes secondaires
          steel: '#5B6B7F', // dates des cartes d'actualités
          prose: '#22303F', // corps de texte des articles
          graphite: '#333333', // textes des pages équipe / mentions
          ink: '#0D0E10', // champs de formulaire
          ring: '#414141', // frise chronologique
          night: '#0A0A0A', // halo des points de la frise
        },
      },
      fontFamily: {
        sans: ['Lexend', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Libre Baskerville"', 'ui-serif', 'Georgia', 'serif'],
        montserrat: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        nav: '1368px',
      },
      boxShadow: {
        nav: '0 0 5px 5px rgba(255, 255, 255, 0.2)',
        presta: '0 4px 10px 0 rgba(0, 0, 0, 0.2)',
        'presta-hover': '0 14px 28px -6px rgba(0, 0, 0, 0.3)',
        actu: '0 6px 20px 0 rgba(20, 47, 77, 0.08)',
        'actu-hover': '0 14px 32px 0 rgba(20, 47, 77, 0.16)',
        feature: '0 0 15px 3px rgba(255, 255, 255, 0.2)',
        intro: '0 13px 100px 0 rgba(199, 199, 199, 0.25)',
        team: '2px 2px 10px 2px rgba(0, 0, 0, 0.2)',
        reason: '0 5px 40px 10px rgba(199, 199, 199, 0.2)',
        cover: '0 18px 40px 0 rgba(20, 47, 77, 0.22)',
        dot: '0 0 0 8px #0A0A0A',
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
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'marquee-up': 'marquee-up 40s linear infinite',
        'marquee-down': 'marquee-down 40s linear infinite',
        'marquee-left': 'marquee-left 35s linear infinite',
        'marquee-right': 'marquee-right 35s linear infinite',
        'fade-down': 'fade-down 200ms ease-out',
      },
    },
  },
  plugins: [],
};
