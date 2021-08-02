module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'boardgame': "url('../public/boardgame.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
