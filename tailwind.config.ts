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
				background: "#282C33", // dark gray
				mPurple: "#C778DD", // purple
				mRed: "#E06B74", // red
				mGreen: "#98C379", // green
				mYellow: "#E5C07A", // yellow
				mBlue: "#62AEEF", // blue
				mTeal: "#55B6C2", // teal
				mGray: "#ABB2BF", // gray
			},
		},
	},
	plugins: [],
} satisfies Config;
