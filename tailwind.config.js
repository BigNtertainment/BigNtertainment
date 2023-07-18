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
			colors: {
				dark: {
					highlight: "#343434",
				},
			},
			textColor: {
				light: {
					primary: "#252525",
				},
				dark: {
					secondary: "#686868",
				},
			},
			backgroundColor: {
				dark: {
					primary: "#252525",
					theme: "#0d1042",
					"neon-green": "#07f468",
				},
				light: {
					primary: "#eaeaea",
					theme: "#ff4747",
				},
			},
		},
	},
	plugins: [],
};
