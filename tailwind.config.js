/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        publicSans: ['"Public Sans"', "system-ui"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "custom-light": "0px 8px 24px 0px rgba(25, 28, 31, 0.12)",
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
