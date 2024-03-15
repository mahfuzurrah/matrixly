import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

// Plugin to add each Tailwind color as a global CSS variable
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, value]) => [`--${key}`, value])
  );

  addBase({
    ":root": newVars,
  });
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: 'class',
  theme: {
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "18px",
      h1: "56px",
      h2: "40px",
      h3: "36px",
      h4: "22px",
    },
    container: {
      center: true, // Centers the container horizontally
      padding: {
        DEFAULT: "1rem", // Default padding for the container
        sm: "2rem", // Padding on small screens
        lg: "4rem", // Padding on large screens
      },
      // Define the maximum width of the container for different screen sizes
      screens: {
        sm: "640px", // Small screens, like smartphones (max-width: 640px)
        md: "768px", // Medium screens, like tablets (max-width: 768px)
        lg: "1024px", // Large screens, like laptops (max-width: 1024px)
        xl: "1280px", // Extra large screens, like desktops (max-width: 1280px)
      },
    },
    extend: {
      colors: {
        primary: "#3F3EED",
        sec: "#0D1B2E",
        title: "#0D1B2E",
        desc: "#7F8EA4",
      },
      backgroundImage: {
        "hero-banner": "url('/img/Hero.png')",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "meteor-effect": "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;
