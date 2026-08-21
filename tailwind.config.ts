import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#12100E",
        surface: "#1C1917",
        surfaceRaised: "#242019",
        line: "#33302C",
        paper: "#EDEAE4",
        muted: "#8A8478",
        copper: {
          DEFAULT: "#D98E4A",
          soft: "#D98E4A1A",
        },
        thread: {
          DEFAULT: "#6B9080",
          soft: "#6B90801A",
        },
      },
      fontFamily: {
        mono: ["'IBM Plex Mono'", "monospace"],
        sans: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
