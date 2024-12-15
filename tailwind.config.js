/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6B3CC9",
        orange: "#F28D35",
        text: "#2F2F2F",
        green: "#4DCA79",
        blue: "#1CBDDD",
        gradient: "linear-gradient(257deg, #1CBDDD 27.86%, #4DCA79 100%), #FFF",
        textlight: "#6F6C90",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
        Lato: ['"Lato"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
