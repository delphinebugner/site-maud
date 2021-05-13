module.exports = {
  purge: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        100: "100px",
        200: "200px",
        250: "250px",
        300: "300px",
      },
      height: {
        homeCoverLg: "80vh",
        homeCoverSm: "300px",
        homeSectionLg: "70vh",
        homeSectionSm: "400px",
        footerLg: "200px",
      },
      colors: {
        primary: {
          light: "#C7D2FE",
          DEFAULT: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          dark: "#4F46E5",
        },
        secondary: "#312E81",
        sand: "#9b9b9b",
      },
      fontFamily: {
        serif: ["Alex Brush", "ui-serif", "Georgia"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
