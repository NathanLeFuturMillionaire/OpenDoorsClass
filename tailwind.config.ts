import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-sora)", "sans-serif"],
      },
      colors: {
        primary: "#2563EB",
        secondary: "#0EA5E9",
        accent: "#F59E0B",
        bgLight: "#FAFAFA",
        bgDark: "#0B0E14",
        textLight: "#111827",
        textDark: "#F9FAFB",
        success: "#16A34A",
        error: "#DC2626",
      },
      borderRadius: {
        xl: "0.75rem", // 12px par défaut pour cartes/modales
      },
    },
  },
  plugins: [],
};

export default config;