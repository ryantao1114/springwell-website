import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        forestDeep: "#173B33",
        forest: "#1F3A34",
        sage: "#AAB8AC",
        moss: "#748566",
        champagne: "#D1AE6A",
        ivory: "#FAF7F2",
        charcoal: "#2C2C2C"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(23, 59, 51, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
