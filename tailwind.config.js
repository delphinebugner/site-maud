module.exports = {
  purge: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        homeCoverLg: "80vh",
        homeCoverSm: "400px",
        homeSectionLg: "70vh",
        homeSectionSm: "400px",
        footerLg: "200px",
      },
      colors: {
        primary: {
          light: "#C7D2FE",
          DEFAULT: "#818CF8",
          dark: "#4F46E5",
        },
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
