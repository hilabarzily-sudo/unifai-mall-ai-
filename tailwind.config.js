/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,jsx}",
  ],
  theme: {
    extend: {
      // UnifAI Color Palette
      colors: {
        'unifai': {
          bg: {
            primary: '#f6f7fb',
            secondary: '#eef1f8',
            tertiary: '#e8ebf3',
          },
          glass: {
            light: 'rgba(255, 255, 255, 0.2)',
            medium: 'rgba(255, 255, 255, 0.4)',
            strong: 'rgba(255, 255, 255, 0.6)',
            intense: 'rgba(255, 255, 255, 0.8)',
          },
          border: {
            light: 'rgba(255, 255, 255, 0.2)',
            medium: 'rgba(255, 255, 255, 0.3)',
            strong: 'rgba(255, 255, 255, 0.4)',
          },
        },
      },
      
      // Backdrop Blur
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
        '4xl': '96px',
      },
      
      // Border Radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      
      // Box Shadows (Glassmorphism)
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-lg': '0 12px 48px 0 rgba(31, 38, 135, 0.12)',
        'glass-xl': '0 20px 64px 0 rgba(31, 38, 135, 0.15)',
      },
      
      // Animations
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      
      // Typography
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      
      fontSize: {
        'xxs': '0.625rem',
      },
    },
  },
  plugins: [
    // Line clamp is built-in since Tailwind CSS 3.3+
    // No plugins needed
  ],
}

