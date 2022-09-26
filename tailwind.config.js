/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			primary: "#0284C7",
			onPrimary: "#FFFFFF",
			primaryContainer: "#E0F2FE",
			onPrimaryContainer: "#0C4A6E",

			secondary: "#65A30D",
			onSecondary: "#FFFFFF",
			secondaryContainer: "#ECFCCB",
			onSecondaryContainer: "#365314",

			background: "#F9FAFB",
			onBackground: "#111827",
			surface: "#F9FAFB",
			onSurface: "#111827",
		},
		extend: {},
	},
	plugins: [],
};
