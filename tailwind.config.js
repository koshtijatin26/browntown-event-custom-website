/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        glam: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        rg: {
          deep: "#0D0B0B", // background
          rose: "#CFA89A", // rose gold
          champ: "#E2C79C", // champagne gold
          copper: "#B97F72", // warm accent
          panel: "rgba(255,255,255,0.05)",
        },
      },
      boxShadow: {
        glam: "0 24px 80px rgba(0,0,0,0.65)",
        card: "0 16px 40px rgba(0,0,0,0.45)",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(.19,1,.22,1)",
      },
    },
  },
  plugins: [],
};
