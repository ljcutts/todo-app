/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('/images/bg-mobile-light.jpg')",
        background: "hsl(0, 0%, 98%)",
      },
      backgroundSize: {
        100: "768px",
      },
      letterSpacing: {
        todo: "0.6rem",
      },
      width: {
        "80%": "80%"
      },
    },
  },
  plugins: [],
};
