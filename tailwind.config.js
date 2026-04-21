module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                saffron: '#FF6B00',
                gold: '#F5A623',
                turmeric: '#E8C547',
                'deep-red': '#C0392B',
                cream: '#FFF8EE',
                'light-cream': '#FEF3DC',
                brown: '#4A2C0A',
                green: '#2D6A4F',
            },
            fontFamily: {
                'playfair': ['Playfair Display', 'serif'],
                'hindi': ['Tiro Devanagari Hindi', 'serif'],
                'sans': ['DM Sans', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}