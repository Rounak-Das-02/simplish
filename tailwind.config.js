/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./layouts/**/*.html", "./content/**/*.md"],
	theme: {
		extend: {
			fontFamily: {
				Inter: ["Inter", "sans-serif"],
				DM_Serif_Text: ["DM Serif Text", "serif"],
				Merriweather: ["Merriweather", "serif"],
			},
		},
	},
	plugins: ["tailwindcss", "autoprefixer"],
};
