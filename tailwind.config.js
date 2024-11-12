/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",        // Escanea todos los archivos HTML en la carpeta public
    "./src/**/*.{html,js}"       // Escanea los archivos HTML y JS en la carpeta src
  ],
  theme: {
    extend: {
      fontFamily: {
        hanken: ["'Hanken Grotesk'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

