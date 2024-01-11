import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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

        'secundary-400': '#66e0ff',
        'secundary-500': '#00ADBB',
        'secundary-600': '#00718f',

        'letter-400': '#4cd2ff',
        'letter-500': '#009ABF',
        'letter-600': '#005c80',
      },
    },
  },
  plugins: [],
};

export default config;
