const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  darkMode: 'media',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          bg: 'hsl(0, 0%, 100%)',
          0: 'hsl(0, 0%, 100%)',
          100: 'hsl(0, 0%, 90%)',
          200: 'hsl(0, 0%, 77%)',
          300: 'hsl(0, 0%, 66%)',
          400: 'hsl(0, 0%, 55%)',
          500: 'hsl(0, 0%, 44%)',
          600: 'hsl(0, 0%, 33%)',
          700: 'hsl(0, 0%, 22%)',
          800: 'hsl(0, 0%, 11%)',
          900: 'hsl(0, 0%, 0%)',
        },
        dark: {
          bg: 'hsl(0, 0%, 13%)',
          0: 'hsl(0, 0%, 0%)',
          100: 'hsl(0, 0%, 13%)',
          200: 'hsl(0, 0%, 18%)',
          300: 'hsl(0, 0%, 24%)',
          400: 'hsl(0, 0%, 31%)',
          500: 'hsl(0, 0%, 39%)',
          600: 'hsl(0, 0%, 66%)',
          700: 'hsl(0, 0%, 77%)',
          800: 'hsl(0, 0%, 88%)',
          900: 'hsl(0, 0%, 100%)',
        },
      },
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
