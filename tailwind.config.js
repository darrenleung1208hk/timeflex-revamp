/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			primary: "#1891D7",
			onPrimary: "#FFFFFF",
			primaryContainer: "#D8EEFB",
			onPrimaryContainer: "#0C4A6E",

			secondary: "#7CC02E",
			onSecondary: "#FFFFFF",
			secondaryContainer: "#E9F6DB",
			onSecondaryContainer: "#365314",
		},
		extend: {},
	},
	plugins: [],
};
