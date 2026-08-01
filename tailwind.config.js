/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#09090b',
        'bg-secondary': '#111118',
        accent: '#8b5cf6',
        'text-primary': '#f8fafc',
        'text-secondary': '#a1a1aa',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
