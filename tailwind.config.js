/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {

      colors: {

        gye: {
          primary: "#0A2540",     // azul profundo
          accent: "#5BC0EB",      // azul celeste
          card: "#EAF6FF",        // fondo tarjetas
          cardHover: "#D4EDFF",
          text: "#0A2540",
          white: "#FFFFFF"
        }

      }

    },
  },
  plugins: [],
}