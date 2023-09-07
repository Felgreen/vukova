/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "././components/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily:{
        archivoBlack: "ArchivoBlack",
        montSemiBold:"MontSemiBold",
        montBold:"MontBold",
        montBlack:"MontBlack",
        montReg:"MontReg",
        montBoldItalic:"MontBoldItalic",
        montBlackItalic:"MontBlackItalic",
        montLightItalic:"MontLightItalic",
        montThinItalic:"MontThinItalic"
        },
      },
  },
  plugins: [],
}
