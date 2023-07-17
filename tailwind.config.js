const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: {
				defaultGradient: "linear-gradient(-83deg,#ff4747,#0d1042);",
			},
			colors: {},
			backgroundColor: {
				dark: {
					primary: "#252525",
					theme: "#0d1042",
					"neon-green": "#07f468",
				},
				light: {
					theme: "#ff4747",
				},
			},
		},
	},
	plugins: [],
};
