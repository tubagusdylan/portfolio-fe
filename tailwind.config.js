/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/img/bg-home.svg')",
        "hero-mobile": "url('/src/assets/img/bg-home-mobile.svg')",
      },
      width: {
        "project-card": "calc(50% - 40px)",
      },
      colors: {
        orange: "#F77F4B",
        blue: "#2F4858",
        grey: "#757496",
        "dark-orange": "#AA3B0B",
      },
    },
  },
  plugins: [],
};
