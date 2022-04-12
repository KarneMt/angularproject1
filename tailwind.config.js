module.exports = {
  content: ["./src/**/*.{html,js}"],
  //darkMode: false, // or 'media' or 'class'
  //In V3 nicht nötig bzw. Warnung
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
