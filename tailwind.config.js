module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        // Font default (sans-serif stack)
        sans: ['Inter', 'sans-serif'],
        
        // Font sans-serif
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        sourcesans: ['Source Sans 3', 'sans-serif'],
        
        // Font serif
        playfair: ['Playfair Display', 'serif'],
        merriweather: ['Merriweather', 'serif'],
        
        // Font monospace
        fira: ['Fira Code', 'monospace'],
        jetbrains: ['JetBrains Mono', 'monospace'],
        
        // Font decorative
        pacifico: ['Pacifico', 'cursive'],
        dancing: ['Dancing Script', 'cursive']
      },
      colors: {
        primary: {
          light: '#2563eb',
          dark: '#3b82f6'
        },
        secondary: {
          light: '#10b981',
          dark: '#34d399'
        },
        dark: {
          800: '#1e293b',
          900: '#0f172a'
        },
        light: {
          100: '#f8fafc',
          200: '#e2e8f0'
        }
      },
      animation: {
        bounce: 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'glow-purple': '0 0 15px rgba(168, 85, 247, 0.5)',
        'glow-teal': '0 0 15px rgba(45, 212, 191, 0.5)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}