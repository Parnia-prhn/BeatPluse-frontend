import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/parts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/parts/headers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/parts/mainContent/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/parts/modals/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/parts/sidebars/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
