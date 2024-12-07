/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        darkMode: 'class',
        extend: {
            colors: {
                primary: '#03143E',
                secondary: '#14285B',
                accent: '#A8BDD1',
                background: '#EFEAEA',
                text: '#ffffff',
                // Dark mode colors
                'dark-background': '#010E30',
                'dark-primary': '#A8BDD1',
                'dark-secondary': '#ffffff',
                'dark-accent': '#ffffff',
                'dark-text': '#ffffff',
            },
        },
    },
    plugins: [],
};
