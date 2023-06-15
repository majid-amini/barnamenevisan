/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      primaryColor: {
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
      },
      secondaryColor: {
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
      },
      lightBlueColor: "#93c5fd",
      darkBlueColor: "#1d4ed8",
      whiteColor: "#fff",
      darkColor: "#2d2d2d",
      lightGrayColor: "#eee",
      darkGrayColor: "#6b7280",
    },
    extend: {},
  },
  plugins: [],
};
