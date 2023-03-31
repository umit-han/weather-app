import type { Config } from "tailwindcss";
import tailwindForms from "@tailwindcss/forms";

export default <Partial<Config>>{
  content: ["/pages/**/*.{vue,js,ts}", "/components/**/*.{vue,js,ts}"],
  theme: {
    darkMode: "class",
    colors: {
      primary: "#38BDF8",
      secondary: "#7f8ea3",
      textDark: "#0f172a",
      gray100: "#eff1f3",
      white: "#FFFFFF",
    },
    boxShadow: {
      shallow: "0 0 14px 5px rgba(0, 0, 0, 0.06)",
    },
    borderRadius: {
      small: "4px",
      medium: "8px",
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [tailwindForms()],
};
