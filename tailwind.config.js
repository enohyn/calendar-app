/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'primary': "#0078D4",
      'secondary': "#e11d48",
      'tertiary': "#1F2E43",
      'danger': "#C92435",
      'warning': "#c2410c",
      'slate-600': '#475569',
      'emerald-600':'#059669',

      'body': "#212529",
      'surface': "#F0FAFF",
      'background': "#FFFFFF",
      'background-gray': "#FAFAFA",

      gray: colors.gray,
      white: colors.white,
      blue: colors.blue,
      indigo: colors.indigo,
      slate: colors.slate,
      zinc: colors.zinc
    },
    container: {
      padding: {
        DEFAULT: '2rem',
      },
    },
  },
  plugins: [],
}

