/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        xbox: {
          DEFAULT: "#107C10",   // --verde
          neon: "#2ECC40",
          bg: "#0E0E0E",
          ui: "#323232"
        }
      },
      fontFamily: {
        sans: ["Poppins", "Segoe UI", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: [],
}

