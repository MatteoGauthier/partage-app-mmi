module.exports = {
	mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	// purge: false,
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				dark: "#15332d",
				primary: "#62BFAD",
			},
      
		},
	},
  presets: [require('tw-utils/font/manrope/sans')]
}
