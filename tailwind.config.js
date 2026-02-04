/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#3b82f6",
        highlight: "#2563eb",
        "highlight-hover": "#1d4ed8",
        border: "#e2e8f0",
        "card-bg": "#ffffff",
        "text-primary": "#1e293b",
        "text-secondary": "#475569",
        "bg-color": "#f8fafc",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
