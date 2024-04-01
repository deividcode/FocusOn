/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "electric-violet": {
          50: "#eef0ff",
          100: "#dfe3ff",
          200: "#c5caff",
          300: "#a3a8fe",
          400: "#817efb",
          500: "#6d5ff5",
          600: "#6246ea",
          700: "#5134ce",
          800: "#422da6",
          900: "#392c83",
          950: "#231a4c",
        },
        "dark-color": "#171717"                
      },
    },
  },
  plugins: [],
};
