/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        red: "#f82c2c",
        lightgray: "#cfcfcf",
        dimgray: "#4d5254",
        forestgreen: "#59ae43",
        darkslategray: {
          "100": "#37465a",
          "200": "#333",
          "300": "#252f3d",
        },
        aliceblue: "#edf3fd",
        royalblue: "#2c7ef8",
        darkgray: "#969696",
        gray: "#fafafa",
        mediumaquamarine: "#5bb59a",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
      },
      borderRadius: {
        "4xs": "9px",
        "31xl": "50px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      "3xs": "10px",
      "5xl": "24px",
      base: "16px",
      "13xl": "32px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};


