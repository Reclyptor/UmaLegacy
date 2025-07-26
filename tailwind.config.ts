import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        background: "#0C0F0C",
        surface: "#141914",
        glass: "rgba(16, 24, 16, 0.65)",
        primary: "#B692FF",
        accent: "#FF7EBF",
        secondary: "#6ECBFF",
        highlight: "#FFE877",
        success: "#5FE9B9",
        text: "#F2EDFF",
        label: "#F2EDFF",
        border: "#3C3650",
        disabled: "#646464",
        r: "#AAA9AD",
        sr: "#D4AF37",
        ssr: "#B9F2FF",
      }
    },
  },
  plugins: [],
} satisfies Config;
