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
			spacing: {
				"1064": "1064px",
				"61": "61px",
			},
			colors: {
				background: "#282C33",
				mPurple: "#C778DD",
				mRed: "#E06B74",
				mGreen: "#98C379",
				mYellow: "#E5C07A",
				mBlue: "#62AEEF",
				mTeal: "#55B6C2",
				mGray: "#ABB2BF",
			},
		},
	},
	plugins: [],
} satisfies Config;
