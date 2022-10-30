/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#323232",
        secondary: "#d6d6d6",
        tertirary: "#f5f5f7",
        quaternary: "#fbfbfd",
        link: "#06c",
        purpleGradient: "#29022e",
        footerTextColor: "#6e6e73",
      },
    },
  },
  plugins: [],
};
