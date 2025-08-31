/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Lexend', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#4a6cf7',
        'dark-text': '#79808a',
        dark: '#111722',
        stroke: '#e5e7eb',
      },
      backgroundImage: {
        'noise-pattern': "url('/images/NoisePattern.svg')",
      },
      dropShadow: {
        light: 'drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.1))',
      },
      aspectRatio: {
        '360/370': '360 / 370',
        '86/121': '86 / 121',
        '53/66': '53 / 66',
      },
      zIndex: {
        '999': '999',
        '99999': '99999',
      },
    },
  },
  plugins: [],
}