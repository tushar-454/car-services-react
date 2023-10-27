/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionTimingFunction: {
        custom: 'cubic-bezier(1,-0.01, 0.23, 0.99)',
      },
    },
  },
  plugins: [],
};
