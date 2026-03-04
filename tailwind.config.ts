import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f5f7",
          100: "#dae6eb",
          200: "#b5cdd7",
          300: "#8ab1c0",
          400: "#5f95a9",
          500: "#2D5F6B",
          600: "#264f59",
          700: "#1B3A4B",
          800: "#142c38",
          900: "#0d1e26",
        },
        gold: {
          50: "#faf6ef",
          100: "#f2e8d4",
          200: "#e5d1a9",
          300: "#d4b77d",
          400: "#C9A96E",
          500: "#b8944f",
          600: "#9a7a3e",
          700: "#7b612f",
          800: "#5c4923",
          900: "#3d3017",
        },
        warm: {
          50: "#FDFCFA",
          100: "#F8F6F3",
          200: "#F0EDE8",
          300: "#E5E0D8",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        display: ['"Playfair Display"', "Georgia", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
