/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1200px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        black1: "#E6ECF2",
        black2: "#CCD1DE",
        black3: "#3D444E",
        black4: "#222836",
        black5: "#111926",
        ////grey
        grey1: "#FAFAFA",
        grey2: "#F5F5F5",
        grey3: "#E0E0E0",
        grey4: "#9E9E9E",
        grey5: "#757575",
        grey6: "#616161",
        grey7: "#424242",
        grey8: "#1A1A1A",
        ///geekblue
        geekblue0: "#F0F5FF",
        geekblue1: "#D6E4FF",
        geekblue2: "#ADC6FF",
        geekblue3: "#85A5FF",
        geekblue4: "#597EF7",
        geekblue5: "#2F54EB",
        geekblue6: "#1D39C4",
        geekblue7: "#10239E",
        geekblue8: "#061178",
        geekblue9: "#030852",

        green: {
          ...colors.green,
          DEFAULT: "#34A852",
          1: "#D9F7BE",
          5: "#52C41A",
        },

        sideBarbg: "#0C1D32",
        sideBarItemhoverbg: "#0c131a",
        sideBarItemhoverbgSubmenu: "#1f2f42",
        primary: "var(--primary)",
        red: {
          DEFAULT: "#D71920",
        },
        gray: {
          ...colors.neutral,
        },
      },
      dropShadow: {
        card: "0px 2px 4px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") }, // 1.5rem or 24px
        h2: { fontSize: theme("fontSize.xl") }, // 1.25rem or 20px
        h3: { fontSize: theme("fontSize.lg") }, // 1.125 or 18px
        h4: { fontSize: theme("fontSize.base") }, // 1rem or 16px
        h5: { fontSize: theme("fontSize.sm") }, // 0.875 or 14px
        h6: { fontSize: theme("fontSize.xs") }, // 0.75 or 12px
      });
    }),
  ],
};
