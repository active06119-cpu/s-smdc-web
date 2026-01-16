/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-space': '#0a0e27',
        'dark-slate': '#1a1f3a',
        'emerald-green': '#10b981',
        'electric-blue': '#3b82f6',
      },
    },
  },
  plugins: [],
}
