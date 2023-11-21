/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Violet: "#9e7f66",
        LightViolet: "#939BF4",
        VeryDarkBlue: "#19202D",
        Midnight: "#121721",
        White: "#FFFFFF",
        LightGrey: "#F4F6F8",
        Gray: "#9DAEC2",
        DarkGrey: "#6E8098",
      },
      backgroundImage: {
        MobileHeader: "url('/src/assets/mobile/bg-pattern-header.svg')",
      },
    },
  },
  plugins: [],
};
