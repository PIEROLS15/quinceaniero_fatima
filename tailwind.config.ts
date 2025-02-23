import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ccb13b",
        melon: "#fff3ec",
      },
      fontFamily: {
        Tangerine: ["Tangerine", "cursive"],
        Cookie: ["Cookie", "cursive"],
        Dancing: ["Dancing Script", "cursive"],
      }
    },
  },
  plugins: [],
} satisfies Config;
