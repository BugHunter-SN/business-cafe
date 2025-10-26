/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#008874',
          50: '#e6f5f2',
          100: '#ccebe5',
          200: '#99d7cb',
          300: '#66c3b1',
          400: '#33af97',
          500: '#008874',
          600: '#006d5d',
          700: '#005246',
          800: '#00362e',
          900: '#001b17',
        },
        secondary: {
          DEFAULT: '#000000',
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#4d4d4d',
          700: '#333333',
          800: '#1a1a1a',
          900: '#000000',
        },
        accent: {
          DEFAULT: '#ffffff',
        },
        success: {
          DEFAULT: '#29D378',
          50: '#e8faf1',
          100: '#d1f5e3',
          200: '#a3ebc7',
          300: '#75e1ab',
          400: '#47d78f',
          500: '#29D378',
          600: '#21a960',
          700: '#197f48',
          800: '#115430',
          900: '#082a18',
        },
        warning: {
          DEFAULT: '#EBE453',
          50: '#fdfce8',
          100: '#fbf9d1',
          200: '#f7f3a3',
          300: '#f3ed75',
          400: '#efe747',
          500: '#EBE453',
          600: '#bcb642',
          700: '#8d8932',
          800: '#5e5b21',
          900: '#2f2e11',
        },
        error: {
          DEFAULT: '#E4312B',
          50: '#fceae9',
          100: '#f9d5d3',
          200: '#f3aba7',
          300: '#ed817b',
          400: '#e7574f',
          500: '#E4312B',
          600: '#b62722',
          700: '#891d1a',
          800: '#5b1411',
          900: '#2e0a09',
        },
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        DEFAULT: '8px',
      },
      boxShadow: {
        'sm': '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.06)',
        'md': '0px 0px 4px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0px 0px 15px rgba(0, 0, 0, 0.1), 0px 10px 30px rgba(0, 0, 0, 0.15)',
      },
      borderWidth: {
        'xs': '0.5px',
        'sm': '1px',
        'md': '2px',
        DEFAULT: '1px',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '0': '0px',
        '1': '0.25rem',    // 4px
        '2': '0.5rem',     // 8px
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '8': '2rem',       // 32px
        '10': '2.5rem',    // 40px
        '12': '3rem',      // 48px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}