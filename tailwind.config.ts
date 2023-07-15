import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      button: {
        primary: '#0b7076',
        secondary: '#509495',
      },
      background: {
        gray: '#ffffff',
        white: '#ffffff',
        'dark-gray': '#262626',
      },
      text: {
        basic: '#404040',
        description: '#727272',
        little: '#7d7d7d',
        white: '#ffffff',
        brand: '#0b7076',
      },
      primary: '#0b7076',
      blue: {
        900: '#0a2341',
      },
      orange: {
        100: '#EDE9E7',
        200: '#e6d4c8',
        700: '#c36446',
        800: '#aa5532',
        900: '#91432a',
      },
      gray: colors.gray,
      white: colors.white,
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2.25rem',
      '4xl': '3rem',
      '5xl': '3.75rem',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
  ],
}
