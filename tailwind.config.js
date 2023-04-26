/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  // mode: "jit",
  purge: {
    enabled: true,
    content: ["./src/**/*.tsx"],
  },

  content: [
    // Or if using `src` directory:
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {
      colors: {
        // BRAND LIGHT COLOR'S
        brandLightOpacity100: "#e5e5e5",
        brandLightOpacity90: "rgba(229, 229, 229, 0.9)",
        brandLightOpacity70: "rgba(229, 229, 229, 0.7)",
        brandLightOpacity50: "rgba(229, 229, 229, 0.5)",
        brandLightOpacity30: "rgba(229, 229, 229, 0.3)",
        brandLightOpacity20: "rgba(229, 229, 229, 0.2)",
        brandLightOpacity10: "rgba(229, 229, 229, 0.1)",
        brandLightOpacity5: "rgba(229, 229, 229, 0.05)",
        // BRAND DARK COLORS
        brandDark1: "#2e2a2b",
        brandDark2: "#221e1f",
        brandDark3: "#141313",
        borderEditProfile: "rgba(34, 30, 31, 0.2)",
        // BRAND COLOR
        brand: "#ed4e50",
        black: "#000000",
        // SEMANTIC COLORS
        successIndicator: "#008d52",
        errorIndicator: "#d91618",
        // custom color
        white: "#ffffff",
        iconBackground: "#ededed",
        bodycolor: "#f8f8f8",
        grayCard: "rgba(34, 30, 31, 0.1)",
        grayCardHover: "rgba(34, 30, 31, 30%)",
        textColor: "rgba(34, 30, 31, 0.9)",
        textColorGray: "rgba(34, 30, 31, 0.7)",
        commentBg: "rgba(46, 42, 43, 0.7)",
        secSaprator: "#ED4E50",
        userprofilebg: "#2a2627",
        arrowicon: "#e3e2e2",
        choosebox: "#e3e3e3",

        modalChoose: "#d8d7d8",
        modalBtn: "#cfcfcf",
        custom: {
          DEFAULT: "#363233",
        },
        custom2: {
          DEFAULT: "#282425",
        },
        bodycustom: {
          DEFAULT: "rgba(34, 30, 31, 0.5)",
        },
        darkScollorBarColor: "rgba(34, 30, 31, 0.5)",
      },
      screens: {
        "mx-14": { max: "1430px" },
        "mx-13": { max: "1330px" },
        "mw-xl": { max: "1279px" },
        "mw-12": { max: "1200px" },
        "mw-11": { max: "1100px" },
        // => @media (max-width: 1279px) { ... }
        "mw-lg": { max: "1024px" },
        "mw-9": { max: "900px" },
        // => @media (max-width: 1023px) { ... }
        "mw-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }
        "mw-sm1": { max: "690px" },
        "mw-sm2": { min: "691px" },
        "mw-sm": { max: "639px" },
        "mw-sm4": { max: "500px" },
        "mw-sm5": { max: "450px" },
        "mw-sm3": { max: "400px" },
        // => @media (max-width: 639px) { ... }
      },
      margin: {
        "88px": "88px",
        "38px": "38px",
        "68px": "68px",
        "126px": "126px",
        "291px": "291px",
      },
      width: {
        "300px": "300px",
        "168px": "168px",
        "624px": "624px",
        "464px": "464px",
      },
      boxShadow: {
        "3xshadow": "0px 8px 20px #000000",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
