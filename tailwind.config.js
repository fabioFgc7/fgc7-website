/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        martian_mono: ["Martian Mono", "monospace"],
        catamaran: ["Catamaran", "sans-serif"],
        la_belle_aurore: ["La Belle Aurore", "cursive"],
        prata: ["Prata", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
