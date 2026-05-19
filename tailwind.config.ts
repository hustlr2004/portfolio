import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#080c1a",
        void: "#04060f",
        accent: {
          primary: "#4f8ef7",
          secondary: "#8b5cf6",
          success: "#06d6a0"
        },
        line: "rgba(255, 255, 255, 0.09)"
      },
      fontFamily: {
        heading: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-jetbrains-mono)", "monospace"],
        mono: ["var(--font-jetbrains-mono)", "monospace"]
      },
      boxShadow: {
        glow: "0 0 24px rgba(79, 142, 247, 0.42)",
        success: "0 0 22px rgba(6, 214, 160, 0.28)"
      }
    }
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".glass-card": {
          "@apply rounded-2xl border-[0.5px] border-line bg-white/[0.035] backdrop-blur-md": {}
        },
        ".glow": {
          "box-shadow": "0 0 20px rgba(59, 130, 246, 0.4)"
        }
      });
    })
  ]
};

export default config;
