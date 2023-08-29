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
			veryDarkGrayishBlue: "hsl(235, 19%, 35%)",

			// ### Dark Theme

			veryDarkBlue: "hsl(235, 21%, 11%)",
			veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
			lightGrayishBlue: "hsl(234, 39%, 85%)",
			lightGrayishBlue: "hsl(236, 33%, 92%)", // hover
			darkGrayishBlue: "hsl(234, 11%, 52%)",
			veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
			veryDarkGrayishBlue: "hsl(237, 14%, 26%)",
		},
		fontFamily: {
			josefinSans: "'Josefin Sans', sans-serif",
		},
		extend: {},
	},
	plugins: [],
};
