import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F1EA",
        paper: "#FBF8F2",
        ink: "#1F1B16",
        mocha: "#3E342A",
        peach: "#F4C6A0",
        sage: "#B8C9A9",
        butter: "#F4E1A1",
        rose: "#E8B4B8",
        sky: "#BCD4DE",
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        hand: ["Caveat", "cursive"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.2)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 2.5s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
        twinkle: "twinkle 3s ease-in-out infinite",
        "spin-slow": "spinSlow 20s linear infinite",
        "spin-slow-rev": "spinSlow 28s linear infinite reverse",
      },
    },
  },
  plugins: [],
};

export default config;
