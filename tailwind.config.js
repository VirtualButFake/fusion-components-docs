const colors = require("tailwindcss/colors");

module.exports = {
	darkMode: "class",
	content: ["./docs/.vitepress/**/*.{html,js,vue,ts,md}"],
	important: true,
	safelist: [
		{
			pattern: /text-([^-]+)-400/,
		},
	],
	theme: {
		colors: {
			current: "currentColor",
			slate: colors.slate,
			amber: colors.amber,
			indigo: colors.indigo,
			blue: colors.blue,
			emerald: colors.emerald,
			fuchsia: colors.fuchsia,
			lime: colors.lime,
			pink: colors.pink,
			rose: colors.rose,
			sky: colors.sky,
			teal: colors.teal,
			violet: colors.violet,
			gray: colors.gray,
			zinc: colors.zinc,
			red: colors.red,
			yellow: colors.yellow,
			green: colors.green,
			cyan: colors.cyan,
			orange: colors.orange,
			amber: colors.amber,
			slate: colors.slate,
			neutral: colors.neutral,
			zinc: colors.zinc,
			stone: colors.stone,
		},
	},
};
