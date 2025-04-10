module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2563eb',
          dark: '#3b82f6'
        },
        dark: {
          800: '#1e293b',
          900: '#0f172a'
        }
      },
      animation: {
        bounce: 'bounce 2s infinite'
      }
    },
  },
  plugins: [],
}