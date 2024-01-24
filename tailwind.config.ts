import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        brandon: ['Brandon', 'Times'],
      },

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
      },
    },
  },

  plugins: [],
};

export default config;
