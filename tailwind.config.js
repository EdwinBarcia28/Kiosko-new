/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        kiosk: {
          primary: "#1E3A8A",
          secondary: "#2563EB",
          background: "#0F172A",
          card: "#FFFFFF",
          text: "#0B1220",
          accent: "#38BDF8"
        }
      }
    },
  },
  plugins: [],
}