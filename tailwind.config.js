module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          lighter: '#4F7792',
          light: '#406177',
          DEFAULT: '#2C4251',
          dark: '#1D2B35',
          darker: '#0E161B'
        },
        second: {
          lighter: '#DE9191',
          light: '#D98181',
          DEFAULT: '#C33C54',
          dark: '#CB5252',
          darker: '#BC3838',
        }
      }
    },
  },
  plugins: [],
}
