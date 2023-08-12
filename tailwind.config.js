/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      // backgroundColor: {},

      fontFamily: {
        poppins: ["var(--font-poppins)"],
        // changa: ["var(--font-changa_One"],
        // roboto: ["var(--font-roboto"],
      },

      colors: {
        lessWhite: "rgba(255, 255, 255, 0.8)",
        grey: "rgba(255, 183, 183, 0.7)",
        grey2: "rgba(163, 150, 148, 1)",
        circleRed: "#682314",
      },
    },
  },
  plugins: [],
};
