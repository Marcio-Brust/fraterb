import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-main": "url('../../public/assets/Image/bg.png')",
      },
      colors: {
        primary: "#c1c0c0",
        secondary: "#0480bd",
        tertiary: "#3f626d",
        bgprimary: "#161415",
        bgsecondary: "#555",
      },
      gridTemplateRows: {
        main: "100px auto 650px",
      },
      inset: {
        "-after": "-7px",
      },
      width: {
        whover: "8px",
        ulWidth: "150px",
        celtable: "160px",
      },
      maxWidth: {
        myWidth: "1200px",
      },
      height: {
        Myheigth: "100px",
        hhover: "8px",
        hbtnspan: "2px",
      },
      maxHeight: {
        celHeight: "40px",
      },
      minHeight: {
        mainHeight: "1080px",
      },
      margin: {
        hoverMarginLeft: "-15px",
        hoverMarginTop: "7px",
        btnSpanTop: "5px",
        ulTop: "188px",
      },

      padding: {
        plink: "20px 30px",
        ulTop: "98px",
      },
      transitionDuration: {
        transitionDuration: "0.3s",
      },
      rotate: {
        afterSpanRotate: "-135deg",
        beforeSpanRotate: "135deg",
      },
      animation: {
        showRigth: "showRigth 0.3s ease-in-out forwards",
      },

      keyframes: {
        showRigth: {
          from: { "margin-top": "-200px" },
          to: { "margin-top": "188px" },
        },
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }
        desktopsmall: "1050px",
        // => @media (min-width: 1050px) { ... }
        desktop: "1200px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
