const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      blue: colors.blueGray,
      red: colors.rose,
      green: colors.green,
      yellow: colors.amber,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    flex: {
      half: '1 1 50%',
      third: '1 1 calc(33% - 3rem)',
      'two-thirds': '1 1 calc(66% - 3rem)',
      full: '1 1 100%',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      button:
        '-5px -5px 15px rgba(255, 255, 255, 0.5),5px 5px 15px rgba(70, 70, 70, 0.2),inset -5px -5px 15px rgba(255, 255, 255, 0.1),inset 5px 5px 15px rgba(70, 70, 70, 0.3)',
      'button-hover':
        '-5px -5px 15px rgba(255, 255, 255, 0.7),5px 5px 15px rgba(70, 70, 70, 0.5),inset -5px -5px 15px rgba(255, 255, 255, 0.1),inset 5px 5px 15px rgba(70, 70, 70, 0.3)',
      outer:
        '11px 11px 30px rgba(100, 100, 100, 0.3),-11px -11px 30px rgba(255, 255, 255, 0.8)',
      'outer-active':
        '15px 15px 30px rgba(100, 100, 100, 0.5),-15px -15px 30px rgba(255, 255, 255, 0.8)',
      input:
        'inset 0.6em 0.6em 10px rgba(0, 0, 0, 0.1), inset -0.6em -1em 10px rgba(255, 255, 255, 0.2), 5px 5px 15px rgba(100, 100, 100, 0.2),-5px -5px 15px rgba(255, 255, 255, 0.5)',
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(5px)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-filters'), require('@tailwindcss/forms')],
};
