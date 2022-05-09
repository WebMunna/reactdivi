module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    hcontainer: {
       padding: '4rem',
       mx: 'auto'
    },
    screens: {
      'sm': '447px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      sans2: ['Black Ops One'],
      serif: ['Merriweather', 'serif'],

    },
    extend: {},
  },

  plugins: [],
}
