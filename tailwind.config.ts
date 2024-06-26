import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "noir-fond": "#151515",
        "gris-case": "#333333",
        "bleu-surete": "#4553A4",
        "rouge-incendie": "#DF0A14",
        "vert-securite": "#009245",
        "jaune-elec": "#e1bf02",
        "blanc-fond": "#D9D9D9",
        "grisclaire-case": "#B3B3B3",
      },
      fontFamily: {
        mPlusLight: ["MPLUS1p-Light", "sans-serif"],
        mPlusRegular: ["MPLUS1p-Regular", "sans-serif"],
        mPlusBlack: ["MPLUS1p-Black", "sans-serif"],
        mPlusBold: ["MPLUS1p-Bold", "sans-serif"],
      },
      boxShadow: {
        shadowblue:
          "0 0 8px #4553A4, inset 0 0 8px #4553A4, 0 0 10px #4553A4, inset 0 0 16px #4553A4, 0 0 32px #4553A4, inset 0 0 32px #4553A4",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
