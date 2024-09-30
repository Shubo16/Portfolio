// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "lm-light-green": "#7CA982",
        "lm-dark-green": "#243E36",
        "lm-pastel-green": "#F1F7ED",

        "dm-swamp-green": "#1a1f16",
        "dm-pine-green": "#1e3f20",
        "dm-lime-green": "#345840",
      },
    },
    fontFamily: {
      sans: ["var(--font-geist-sans)"], // Add GeistSans as the sans-serif font
    },
    screens: {
      sm: "800px",
      md: "1000px",
      lg: "1300px",
    },
  },
  plugins: [require("tailwindcss-animated")],
};
