/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customCyan: "#00c4cc", // Ajoute une couleur personnalisée
        bleu: "#0a1a44",
      },
    },
  },
  plugins: [],
};
