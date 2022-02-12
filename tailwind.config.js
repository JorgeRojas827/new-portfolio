module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
      spacing: {
        92: "375px",
      },
    },
  },
  plugins: [],
};
