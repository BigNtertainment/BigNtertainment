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
			typography: (theme) => ({
				DEFAULT: {
					css: {
						p: {
							color: theme("colors.dark.highlight"),
							fontSize: "1.6rem",
						},
						"*": {
							color: theme("textColor.dark.primary"),
						},
					},
				},
			}),

			backgroundImage: {
				defaultGradient: "linear-gradient(-83deg,#ff4747,#0d1042);",
			},
			gridTemplateColumns: {
				defaultLayout:
					"[full-start] minmax(6rem,1fr) [center-start] repeat(8,[col-start] minmax(min-content,14rem) [col-end]) [center-end] minmax(6rem,1fr) [full-end]",
			},
			colors: {
				dark: {
					highlight: "#888",
				},
			},
			textColor: {
				light: {
					primary: "#252525",
				},
				dark: {
					primary: "#d6d6d6",
					secondary: "#888",
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
	plugins: [require("@tailwindcss/typography")],
};
