/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        'primary': {
          100: "#d0fcf4",
          200: "#a0f9e9",
          300: "#71f5de",
          400: "#41f2d3",
          500: "#12efc8",
          600: "#0ebfa0",
          700: "#0b8f78",
          800: "#076050",
          900: "#043028",
          'main': "#12efc8",
          'light': '#41f2d3',
        },
        'secondary': {
          100: "#fcf0dd",
          200: "#fae1bb",
          300: "#f7d299",
          400: "#f5c377",
          500: "#f2b455",
          600: "#c29044",
          700: "#916c33",
          800: "#614822",
          900: "#302411",
          'main': '#f2b455',
        },
        'tertiary': {
          100: "#e7e6f7",
          200: "#cfceef",
          300: "#b8b5e8",
          400: "#a09de0",
          500: "#8884d8",
          600: "#6d6aad",
          700: "#524f82",
          800: "#363556",
          900: "#1b1a2b"
        },
        'grey': {
          100: "#f0f0f3",
          200: "#e1e2e7",
          300: "#d1d3da",
          400: "#c2c5ce",
          500: "#b3b6c2",
          600: "#8f929b",
          700: "#6b6d74",
          800: "#48494e",
          900: "#242427",
          'main': "#b3b6c2",
        },
        'background': {
          'main': '#1f2026',
          'default': '#1f2026',
          'light': '#2d2d34',
        }
      },
    },

    plugins: [],
  }
}
