import { Header } from "@/components/common/header";
import { HomeSummary } from "@/components/home/home-summary";
import { QuoteBox } from "@/components/home/quote";
import Head from "next/head";

export default function Home() {
	return (
		<div className="bg-background min-h-screen">
			<Head>
				<title>Douglas Mendes</title>
				<meta name="description" content="My personal CV and Portifolio" />
			</Head>

			<Header />
			<HomeSummary className="max-w-1064 mx-auto pt-16" />
			<QuoteBox></QuoteBox>
		</div>
	);
}
