import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				fira: ["var(--font-fira-code)", "monospace"],
			},
			maxWidth: {
				"1064": "1064px",
			},
			spacing: {
				"1064": "1064px",
				"61": "61px",
			},

			colors: {
				background: "#282C33",
				primary: "#E06B74",
				secondary: "#98C379",
				accent: "#E5C07A",
				info: "#62AEEF",
				warning: "#C778DD",
				success: "#55B6C2",
				neutral: "#ABB2BF",
			},
		},
	},
	plugins: [],
} satisfies Config;
