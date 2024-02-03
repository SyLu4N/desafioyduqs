import type { Config } from 'tailwindcss';

const config = {
  darkMode: 'class',

  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],

  prefix: '',

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    extend: {
      colors: {
        'primary-400': '#24407A',
        'primary-500': '#12284c',
        'primary-600': '#0C1B33',

        'secondary-400': '#66e0ff',
        'secondary-500': '#00ADBB',
        'secondary-600': '#00718f',

        'letter-400': '#4cd2ff',
        'letter-500': '#009ABF',
        'letter-600': '#005c80',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },

        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },

        'notifications-up': {
          '0%': { opacity: '0', marginTop: '1rem' },
          '100%': { opacity: '1', marginTop: '0rem' },
        },

        'notifications-down': {
          '0%': { opacity: '1', marginTop: '0rem' },
          '100%': { opacity: '0', marginTop: '-1.5rem' },
        },

        'opacity-open': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },

        'opacity-closed': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',

        'notifications-up': 'notifications-up 0.3s ease-out',
        'notifications-down': 'notifications-down 0.3s ease-out',

        'opacity-open': 'opacity-open 0.5s ease-out',
        'opacity-closed': 'opacity-closed 0.5s ease-out',
      },
    },
  },

  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
