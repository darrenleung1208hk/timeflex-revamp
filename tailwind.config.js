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

			surfaceVariant: "#F3F4F6",
			onSurfaceVariant: "#374151",
			outline: "#6B7280",
			outlineVariant: "#E5E7EB",

			error: "#E11D48",
			onError: "#FFFFFF",
			errorContainer: "#FFE4E6",
			onErrorContainer: "#881337",
		},
		extend: {},
	},
	plugins: [],
};
