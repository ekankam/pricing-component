/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-purple": "var(--brand-purple)",
        "brand-gradient": "var(--brand-gradient)",
        "brand-grey-blue-100": "var(--brand-grey-blue-100)",
        "brand-grey-blue-200": "var(--brand-grey-blue-200)",
        "brand-grey-blue-300": "var(--brand-grey-blue-300)",
        "brand-grey-blue-400": "var(--brand-grey-blue-400)",
      },
    },
  },
  plugins: [],
};
