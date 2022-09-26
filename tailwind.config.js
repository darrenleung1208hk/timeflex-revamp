/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			primary: "#006398",
			onPrimary: "#ffffff",
			primaryContainer: "#cce5ff",
			onPrimaryContainer: "#001d31",

			secondary: "#3f6a00",
			onSecondary: "#ffffff",
			secondaryContainer: "#b1f661",
			onSecondaryContainer: "#0f2000",

			background: "#fcfcff",
			onBackground: "#1a1c1e",
			surface: "#fcfcff",
			onSurface: "#1a1c1e",

			surfaceVariant: "#dee3eb",
			onSurfaceVariant: "#42474e",
			outline: "#72787e",

			error: "#ba1a1a",
			onError: "#ffffff",
			errorContainer: "#ffdad6",
			onErrorContainer: "#410002",
		},
		extend: {},
	},
	plugins: [],
};
