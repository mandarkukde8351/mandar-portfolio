import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        electric: {
          50: "#eff6ff",
          100: "#dbeafe",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        neon: {
          purple: "#8b5cf6",
          violet: "#7c3aed",
          pink: "#ec4899",
        },
        pharma: {
          teal: "#0891b2",
          cyan: "#06b6d4",
          indigo: "#4f46e5",
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        "spin-slow": "spin 20s linear infinite",
        "orbit": "orbit 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(80px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(80px) rotate(-360deg)" },
        },
      },
      backgroundImage: {
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)",
        "hero-radial": "radial-gradient(ellipse 80% 70% at 60% 40%, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)",
        "section-fade": "linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)",
      },
      boxShadow: {
        "glass": "0 8px 32px rgba(99,102,241,0.08), 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
        "glass-hover": "0 20px 60px rgba(99,102,241,0.15), 0 8px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
        "glow-blue": "0 0 40px rgba(59,130,246,0.3), 0 0 80px rgba(99,102,241,0.15)",
        "glow-purple": "0 0 40px rgba(139,92,246,0.3), 0 0 80px rgba(124,58,237,0.15)",
        "inner-soft": "inset 0 2px 6px rgba(99,102,241,0.06), inset 0 0 0 1px rgba(255,255,255,0.6)",
        "card": "0 4px 24px rgba(15,23,42,0.06), 0 1px 4px rgba(15,23,42,0.04)",
        "card-hover": "0 16px 48px rgba(15,23,42,0.10), 0 4px 12px rgba(99,102,241,0.08)",
      },
      backdropBlur: {
        "xs": "2px",
        "2xl": "40px",
        "3xl": "60px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
