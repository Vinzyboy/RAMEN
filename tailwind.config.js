/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        yellow: "rgb(246, 173, 73)",
        red: "rgb(230,0,51)",
        fbg: "rgb(67,61,60)",
        order: "rgb(250,244,231)",
      },
      fontFamily: {
        primary: "Montserrat",
        secondary: "Economica",
        tertiary: "Coming Soon",
      },
      backgroundImage: {
        wood: "url(../img/wood.jpg)",
        ramen: "url(../img/hero-image-2.png)",
        menu: "url(../img/bg.png)",
      },
    },
  },
  plugins: [],
};
