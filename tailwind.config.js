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
        150: "150px",
        200: "200px",
        250: "250px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        "25percent": "25%",
        "50percent": "50%",
      },
      height: {
        homeCoverLg: "80vh",
        homeCoverSm: "300px",
        homeSectionLg: "70vh",
        homeSectionSm: "400px",
      },
      colors: {
        black: "#222",
        primary: {
          superlight: "#C7D2FE",
          light: "#a5a6ff",
          DEFAULT: "#818CF8",
          dark: "#6366F1",
          superdark: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
        },
        secondary: "#312E81",
        sand: "#7b756d",
        gray: { DEFAULT: "#4B5563", dark: "#374151" },
      },
      fontFamily: {
        serif: ["Bellefair", "ui-serif", "Georgia"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
