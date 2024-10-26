/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{svelte,js,ts}"],
  theme: {
    extend: {
      colors: {
        tokyo: {
          night: {
            background: "#1a1b26",
            foreground: "#c0caf5",
            comment: "#565f89",
            cyan: "#7dcfff",
            blue: "#2ac3de",
            darkBlue: "#223249",
            darkGray: "#1f2335",
            gray: "#2f3549",
            red: "#f7768e",
            yellow: "#e0af68",
            green: "#9ece6a",
            magenta: "#bb9af7",
            pink: "#ff007c",
            orange: "#ff9e64",
          },
        },
      },
    },
  },
  plugins: [],
};

