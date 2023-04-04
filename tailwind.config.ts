import type { Config } from "tailwindcss";
import tailwindForms from "@tailwindcss/forms";

export default <Partial<Config>>{
  content: ["/pages/**/*.{vue,js,ts}", "/components/**/*.{vue,js,ts}"],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#38BDF8",
      white: "#FFFFFF",
      secondary: "#7f8ea3",
      textLight: "#ebf4f1",
      gray: "#eff1f3",

      dark: "#1F2A37",
      darkSecondary: "#f1e7d0",
      textDark: "#0f172a",
      darkGray: "#6a6a6a45",
    },
    boxShadow: {
      shallow: "0 0 14px 5px rgba(0, 0, 0, 0.06)",
    },
    borderRadius: {
      small: "4px",
      medium: "8px",
    },
  },
  plugins: [tailwindForms()],
};
