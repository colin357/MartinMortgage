import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark forest green — primary brand (buttons, headers, footer)
        primary: {
          50:  "#f0f7f1",
          100: "#d9edda",
          200: "#b3dbb5",
          300: "#7ec282",
          400: "#4ba352",
          500: "#2E8135",
          600: "#236827",
          700: "#1B5E20",  // main dark green
          800: "#144718",
          900: "#0d2f10",
        },
        // Bright / lime green — accent (top bar, highlights, badges)
        accent: {
          50:  "#f3fae8",
          100: "#e2f4c4",
          200: "#c5e98a",
          300: "#a3d855",
          400: "#82C341",  // bright lime green (matches logo/site)
          500: "#6aaa2c",
          600: "#548a20",
          700: "#406a18",
          800: "#2d4d11",
          900: "#1a2e09",
        },
        warm: {
          50:  "#FDFCFA",
          100: "#F8F6F3",
          200: "#F0EDE8",
          300: "#E5E0D8",
        },
      },
      fontFamily: {
        sans:    ['"Montserrat"', '"Inter"', "system-ui", "sans-serif"],
        display: ['"Montserrat"', '"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
