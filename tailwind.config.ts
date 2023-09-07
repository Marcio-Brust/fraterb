import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
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
      opacity: {
        "96": "0.96",
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
        hplay: "450px",
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
        aovivo: "-534px",
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
        pulse: "pulse 0.7s ease-in-out infinite",

        open: "open 0.3s ease-in-out forwards",
        openbtn: "openbtn 0.3s ease-in-out forwards",
      },

      keyframes: {
        showRigth: {
          from: { "margin-top": "-200px" },
          to: { "margin-top": "188px" },
        },
        pulse: {
          "0%": {
            "-webkit-transform": "scale(1)",
            "-webkit-filter": "brightness(100%)",
          },
          "100%": {
            "-webkit-transform": "scale(1)",
            "-webkit-filter": "brightness(200%)",
          },
        },

        open: {
          from: {
            "margin-top": "-534px",
          },
          to: {
            "margin-top": "-96px",
          },
        },
        openbtn: {
          to: {
            "margin-top": "438px",
          },
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
