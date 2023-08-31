/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./src*.{tsx,jsx,ts,js}",
	],
	theme: {
		colors: {
			// ### Light Theme

			veryLightGray: "hsl(0, 0%, 98%)",
			veryLightGrayishBlue: "hsl(236, 33%, 92%)",
			lightGrayishBlue: "hsl(233, 11%, 84%)",
			darkGrayishBlue: "hsl(236, 9%, 61%)",
			lightVeryDarkGrayishBlue: "hsl(235, 19%, 35%)",

			// ### Dark Theme

			darkVeryDarkBlue: "hsl(235, 21%, 11%)",
			darkVeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
			darkLightGrayishBlue: "hsl(234, 39%, 85%)",
			darkLightGrayishBlue: "hsl(236, 33%, 92%)", // hover
			darkGrayishBlue: "hsl(234, 11%, 52%)",
			darkLighterVeryDarkGrayishBlue: "hsl(233, 14%, 35%)",
			darkVeryDarkGrayishBlue: "hsl(237, 14%, 26%)",
		},
		fontFamily: {
			josefinSans: "'Josefin Sans', sans-serif",
		},
		extend: {},
	},
	plugins: [],
	darkMode: "class"
};
