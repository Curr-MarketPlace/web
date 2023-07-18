/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  mode:"jit",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pinkGrad:{
          100: "#D463F9",
        },
      },
      linearGradientColors: {
        'custom-gradient': '105.26deg, #3E06D6, #901BB7',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
