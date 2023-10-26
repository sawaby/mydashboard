/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        "3xl": "14px 17px 40px 4px",
        inset: "inset 0px 18px 22px",
        darkinset: "0px 4px 4px inset",
      },
      backgroundImage: {
        customBg: "linear-gradient(to bottom, #FFC46B, #FF9B05)",
      },
    },

    colors: {
      white: "#ffffff",
      lightPrimary: "#F4F7FE",
      gray: {
        50: "#F5F6FA",
        100: "#EEF0F6",
        200: "#DADEEC",
        300: "#C9D0E3",
        400: "#B0BBD5",
        500: "#B5BED9",
        600: "#A3AED0",
        700: "#707eae",
        800: "#2D396B",
        900: "#1B2559",
      },
      zinc: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
        950: "#09090b",
      },
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#fbcf33",
        500: "#eab308",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12",
      },
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2152ff",
        700: "#1d4ed8",
        800: "#344e86",
        900: "#00007d",
      },
      background: {
        100: "rgb(244 247 254)",
        900: "#070f2e",
      },
      brand: {
        500: "#422AFB",
      },
      shadow: {
        100: "var(--shadow-100)",
        500: "rgba(112, 144, 176, 0.08)",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
}
