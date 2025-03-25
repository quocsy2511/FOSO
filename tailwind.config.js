/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      ralewaye: ["var(--font-raleway)", "sans-serif"],
    },
    extend: {
      screens: {
        "3xl": "1760px",
        std: "1400px",
        xlg: "1366px",
        lgd: { max: "1023px" },
        mdd: { max: "767px" },
        xs: "430px",
      },
      colors: {
        typo: {
          green: "#052B1E",
          black: {
            1: "#25272A",
            2: "#17181A",
            3: "#050505",
            4: "#231F20",
          },
          gray: {
            1: "#33404A",
            2: "#ACB3C7",
            3: "#667F93",
            4: "#809FB8",
            5: "#4D5F6E",
          },
          blue: "#0F4F9E",
        },
        backgroundColor: {
          blue: "#E2F0FE",
          green: {
            1: "#1AD598",
            2: "#15AA7A",
            3: "#D1F7EA",
            4: "#A3EED6",
            5: "#10805B",
          },
        },
      },
      backgroundImage: {
        "linear-card-horizontal":
          "linear-gradient(to right top, #013DA0 0%, #0142A9 11%, #0148B3 22%, #024EBC 33% , #0254C5 44% , #025ACE 56% , #0261D7 67%, #0267E1 78%, #036EEA 89% , #0375F3 100%)",
        "linear-card-vertical":
          "linear-gradient(to left top, #013DA0 0%, #0142A9 11%, #0148B3 22%, #024EBC 33% , #0254C5 44% , #025ACE 56% , #0261D7 67%, #0267E1 78%, #036EEA 89% , #0375F3 100%)",
        "linear-card-vertical-2":
          "linear-gradient(to right top, #013DA0 0%, #0142A9 11%, #0148B3 22%, #024EBC 33% , #0254C5 44% , #025ACE 56% , #0261D7 67%, #0267E1 78%, #036EEA 89% , #0375F3 100%)",
        "linear-button-horizontal":
          "linear-gradient(to bottom,  rgba(9, 9, 11, 0.01)  0%, rgba(9, 9, 11 , 0.1)  100%)",
        "linear-text-green":
          "linear-gradient(to right, #53B086 0%, #53B086 100%)",
      },
    },
  },
  plugins: [],
};
