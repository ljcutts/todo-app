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
        check:
          "linear-gradient(to bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%)); ",
      },
      backgroundSize: {
        "50%": "50%",
      },
      letterSpacing: {
        todo: "0.6rem",
      },
      width: {
        "80%": "80%",
      },
      colors: {
        brightBlue: "hsl(220, 98%, 61%)",
      },
    },
  },
  plugins: [],
};
