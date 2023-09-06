/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#10E8FE",
          secondary: "#C90BFE",
        },
        black: {
          main: "#000000",
          off: "#12151C",
          secondary: "#1A2B6B",
        },
        white: {
          main: "#ffffff",
          secondary: "#DFE7FB",
          off: "#F5F7FD",
        },
        yellow: {
          main: "#FBD72B",
        },
        orange: {
          main: "#F9484A",
        },
        purple:{
          main:"#150050"
        },
        cyan:{
          main:"#00ECE2"
        }
      },
      boxShadow: {
        main: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
        cards: "20px 20px 43px #e8e8e8,20px -20px 43px #ffffff",
        circle: "354px 354px 354px",
        peerCards: "4px 17px 92px -40px rgba(91,19,218,0.8)",
      },
      borderRadius: {
        oval: "31% 69% 75% 25% / 30% 48% 52% 70%",
      },
      dropShadow: {
        text: "10px 10px 164px -6px rgba(19, 65, 211, 0.86)",
      },
    },
  },
  plugins: [],
};