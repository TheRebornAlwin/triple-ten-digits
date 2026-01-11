/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pure Black System
        'pure-black': '#000000',
        'deep-charcoal': '#0D0D0D',
        'elevated-surface': '#1A1A1A',

        // Luxury Accents
        'liquid-gold': '#D4AF37',
        'liquid-gold-light': '#FFD700',
        'mocha-mousse': '#A47764',
        'chrome-silver': '#E8E8E8',

        // Glass System
        'glass-dark': 'rgba(26, 26, 26, 0.7)',
        'glass-light': 'rgba(255, 255, 255, 0.05)',
        'frosted-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'mono': ['Space Grotesk', 'monospace'],
      },
      fontSize: {
        // Luxury Type Scale
        'hero': ['6rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'headline': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'title': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body-lg': ['1.25rem', { lineHeight: '1.8' }],
        'body': ['1rem', { lineHeight: '1.8' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
        '224': '56rem',
        '256': '64rem',
      },
      maxWidth: {
        '8xl': '1400px',
        '9xl': '1600px',
      },
      backgroundImage: {
        'liquid-gold': 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
        'gold-flow': 'linear-gradient(90deg, #D4AF37 0%, #FFD700 50%, #D4AF37 100%)',
        'dark-gradient': 'linear-gradient(180deg, #000000 0%, #0D0D0D 100%)',
        'mesh-gradient': 'radial-gradient(at 27% 37%, rgba(212, 175, 55, 0.2) 0px, transparent 50%), radial-gradient(at 97% 21%, rgba(164, 119, 100, 0.1) 0px, transparent 50%), radial-gradient(at 52% 99%, rgba(0, 0, 0, 1) 0px, transparent 50%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },
      boxShadow: {
        'glow-gold': '0 0 40px rgba(212, 175, 55, 0.4)',
        'glow-gold-lg': '0 0 80px rgba(212, 175, 55, 0.6)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'luxury': '0 20px 60px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'slide-left': 'slideLeft 0.8s ease-out',
        'slide-right': 'slideRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-flow': 'gradientFlow 3s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 80px rgba(212, 175, 55, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
