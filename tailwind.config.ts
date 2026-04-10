/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#E9F000',
        base: '#F5F5F5',
      },
      boxShadow: {
        card: '0 10px 30px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
