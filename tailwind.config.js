/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#230056",
        secondary: "#40009d",
        lightGray: "#636262",
        bgLightGray: "#636262",
      },
      fontFamily: {
        RightRegular: ["RighteousRegular", "sans"],
      },
    },
  },
  plugins: [],
};
