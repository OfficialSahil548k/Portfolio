/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#ffffff', // White
                'bg-secondary': '#f4f4f5', // Zinc 100 - slightly darker for contrast
                'accent': '#facc15', // Yellow 400
                'text-primary': '#09090b', // Zinc 950
                'text-secondary': '#52525b', // Zinc 600
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
