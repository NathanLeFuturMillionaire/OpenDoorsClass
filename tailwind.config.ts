import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // palette définie en section 9
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-sora)"],
      },
    },
  },
};
export default config;