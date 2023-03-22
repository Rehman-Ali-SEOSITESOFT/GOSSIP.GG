/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  purge: {
    enabled: true,
    content: ["./src/**/*.tsx"],
  },
  content: [
    // Or if using `src` directory:
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
        brandLightOpacity10: "rgba(229, 229, 229, 0.1)",
        brandLightOpacity5: "rgba(229, 229, 229, 0.05)",
        // BRAND DARK COLORS
        brandDark1: "#2e2a2b",
        brandDark2: "#221e1f",
        brandDark3: "#141313",
        // BRAND COLOR
        brand: "#ed4e50",
        // SEMANTIC COLORS
        successIndicator: "#008d52",
        errorIndicator: "#d91618",
        // custom color
        white: "#ffffff",
        bodycolor: "#f8f8f8",
      },
      screens: {
        "mw-2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "mw-xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "mw-lg": { max: "1024px" },
        // => @media (max-width: 1023px) { ... }

        "mw-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "mw-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
