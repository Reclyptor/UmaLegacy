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
        background: "#12101C",
        surface: "#1D1A2B",
        primary: "#B692FF",
        accent: "#FF7EBF",
        secondary: "#6ECBFF",
        highlight: "#FFE877",
        success: "#5FE9B9",
        text: "#F2EDFF",
        label: "#A89DC3",
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
