/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#ffe4e1',
        'warm-white': '#fdfbf7',
        'deep-rose': '#8b3a3a', // Darker, richer
        'royal-red': '#4a0404',
        'soft-gold': '#d4af37',
        'rich-gold': '#aa771c',
      },
      fontFamily: {
        'arabic': ['Amiri', 'serif'],
        'handwriting': ['Aref Ruqaa', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(45deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)',
      }
    },
  },
  plugins: [],
}
