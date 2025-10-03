import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import "./fontAwesomeConfig";
import { OverlayBox } from "@/components/common/overlay-box";

const firaCode = Fira_Code({
	subsets: ["latin"],
	variable: "--font-fira-code",
});

export const metadata: Metadata = {
	title: "Douglas Mendes - Portfolio",
	description: "Software Engineering Manager and Developer Portfolio",
	viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${firaCode.variable} antialiased font-fira-code`}>
				<OverlayBox></OverlayBox>
				{children}
			</body>
		</html>
	);
}
