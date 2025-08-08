// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        main: "var(--color-main)",
        yellow: "var(--color-yellow)",
        orange: "var(--color-orange)",
        pink: "var(--color-pink)",
        blue: "var(--color-blue)",
      },
    },
  },
  plugins: [],
};
