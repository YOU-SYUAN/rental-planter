/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      desktop: { min: "769px", max: "3000px" },
      tablet: { min: "376px", max: "768px" },
      phone: { min: "100px", max: "375px" },
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
