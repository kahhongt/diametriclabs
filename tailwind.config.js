/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                primary: '#03143E',
                secondary: '#14285B',
                accent: '#A8BDD1',
                background: '#FFFFFF',
                text: '#03143E',
                // Dark mode colors
                'dark-background': '#020617',
                'dark-primary': '#A8BDD1',
                'dark-secondary': '#ffffff',
                'dark-accent': '#ffffff',
                'dark-text': '#ffffff',
            },
        },
    },
    plugins: [],
};
