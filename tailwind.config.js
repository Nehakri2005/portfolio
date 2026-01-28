/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
       backgroundImage: {
        'hero-pattern': "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
      },
      backgroundSize: {
        'hero-pattern': '20px 20px',
      },
      colors: {
        'gradient-start': '#0ea5e9', 
        'gradient-end': '#6366f1',   
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        bounce: 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

