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
        // --- POLICES ACTUELLES ---
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],

        // --- POLICES POUR L'E-LEARNING ---
        // 1. Titres & Hero Section (Design moderne & Premium)
        heading: ["var(--font-heading)", "sans-serif"],     // Ex: Plus Jakarta Sans / Sora
        serif: ["var(--font-serif)", "Georgia", "serif"],    // Ex: Playfair Display / Merriweather

        // 2. Interface / App & Tableaux de bord (Excellente lisibilité)
        ui: ["var(--font-ui)", "system-ui", "sans-serif"],   // Ex: Outing / Figtree

        // 3. Notes, Exercices & Post-it (Style manuscrit / Pédagogique)
        handwriting: ["var(--font-handwriting)", "cursive"], // Ex: Caveat / Kalam / Patrick Hand
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
        navy: { 950: "#0A0F1E", 900: "#0F1729" },
        paper: "#FAFAF7",
        mist: "#F0F1F4",
        gold: { 50: "#FBF6EC", 100: "#F3E7C9", 400: "#D2AE6B", 600: "#B8924A", 700: "#96742F" },
        slate: { 500: "#6B7280", 600: "#5B6472" },
      },
      borderRadius: {
        xl: "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;