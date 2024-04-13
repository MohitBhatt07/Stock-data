/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fall: {
          "0%": { transform: "translate(0%,-150%) " },
          "100%": { transform: "translate(0%, 0%) " },
         
        },
      },

      animation: {
        fall: "fall 0.5s ease",
      },
    },
  },
  plugins: [],
};
