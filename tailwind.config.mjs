/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37',
          light: '#F7E7CE',
          dark: '#B89B2D',
        },
        secondary: {
          DEFAULT: '#1B365D',
          light: '#2A4E7D',
          dark: '#122440',
        },
        cream: '#FDF6E3',
        gray: {
          DEFAULT: '#6B6B6B',
          dark: '#333333',
        },
        success: '#2E7D32',
        warning: '#ED6C02',
        error: '#D32F2F',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      height: {
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
};