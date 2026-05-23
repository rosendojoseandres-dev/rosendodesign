import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Arial", "sans-serif"]
      },
      colors: {
        ink: {
          950: "#06070B",
          900: "#0A0D14",
          800: "#0F1623",
          700: "#162034"
        }
      },
      boxShadow: {
        glass: "0 10px 40px rgba(0,0,0,.35)",
        glow: "0 0 0 1px rgba(255,255,255,.08), 0 20px 80px rgba(0,0,0,.6)"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-8px,0)" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
} satisfies Config;

