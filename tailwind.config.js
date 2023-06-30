/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: "Roboto",
      },
      backgroundImage: {
        toggle: "var(--bg-toggle)",
      },
      colors: {
        white: "#ffffff",
        toolbar: "hsla(var(--background-header))",
        overlay: "hsla(var(--background-overlay))",
        keyboard: "hsla(var(--background-keyboard))",
        icon: "hsla(var(--bg-icon))",
        black: "#000000",
        black2: "#202537",
        black3: "#56575E",
        green: "#6aaa64",
        yellow: "#ceb02c",
        gray: "#939b9f",
        gray2: "rgba(147, 155, 159, 0.30)",
        gray3: "rgba(218, 220, 224, 0.30)",
        gray4: "#D3D6DA",
        gray5: "#f3f3f3",
        gray6: "#818181",
        background: "hsla(var(--background))",
        foreground: "hsla(var(--foreground))",
      },
      animation: {
        flip: "flip 0.35s linear",
        fadeInW: "fadeIn 1s linear 5s",
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(360deg)" },
        },
        fadeInW: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0.6 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
