export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 4s ease-in-out", // Define the animation name and duration
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 }, // Start fully transparent
          "100%": { opacity: 1 }, // End fully visible
        },
      },
    },
  },
  plugins: [],
};
