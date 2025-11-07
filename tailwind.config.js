/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem", // 24px
        sm: "2rem",
        lg: "2rem",
        xl: "0",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1110px", // matches Figma container width
      },
    },
    extend: {
      colors: {
        primary: "#D87D4A", // Accent Orange
        "primary-light": "#FBAF85", // Light Orange
        black: "#000000",
        "black-100": "#101010",
        "grey-100": "#F1F1F1",
        "grey-200": "#FAFAFA",
        white: "#FFFFFF",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        h1: [
          "56px",
          {
            lineHeight: "58px",
            letterSpacing: "2px",
            fontWeight: "700",
            textTransform: "uppercase",
          },
        ],
        h2: [
          "40px",
          {
            lineHeight: "44px",
            letterSpacing: "1.5px",
            fontWeight: "700",
            textTransform: "uppercase",
          },
        ],
        h3: [
          "32px",
          {
            lineHeight: "36px",
            letterSpacing: "1.15px",
            fontWeight: "700",
            textTransform: "uppercase",
          },
        ],
        h4: [
          "28px",
          {
            lineHeight: "38px",
            letterSpacing: "2px",
            fontWeight: "700",
            textTransform: "uppercase",
          },
        ],
        h5: [
          "24px",
          {
            lineHeight: "33px",
            letterSpacing: "1.7px",
            fontWeight: "700",
            textTransform: "uppercase",
          },
        ],
        h6: [
          "18px",
          {
            lineHeight: "24px",
            letterSpacing: "1.3px",
            fontWeight: "700",
            textTransform: "uppercase",
          },
        ],
        overline: [
          "14px",
          {
            lineHeight: "19px",
            letterSpacing: "10px",
            fontWeight: "400",
            textTransform: "uppercase",
          },
        ],
        subtitle: [
          "13px",
          {
            lineHeight: "25px",
            letterSpacing: "1px",
            fontWeight: "700",
            textTransform: "uppercase",
          },
        ],
        body: [
          "15px",
          {
            lineHeight: "25px",
            fontWeight: "500",
          },
        ],
      },
      boxShadow: {
        button: "0 2px 4px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        DEFAULT: "8px",
      },
    },
  },
  plugins: [],
};
