import { Header } from "@/components/common/header";
import { HomeSummary } from "@/components/home/home-summary";
import { ProjectList } from "@/components/projects/project-list";
import { QuoteBox } from "@/components/home/quote";
import Head from "next/head";

export default function Home() {
	return (
		<div className="bg-amber-50 min-h-screen">
			<div className="bg-background max-w-1064 mx-auto pt-16">
				<Head>
					<title>Douglas Mendes</title>
					<meta name="description" content="My personal CV and Portifolio" />
				</Head>

				<Header />
				<HomeSummary />
				<QuoteBox className="flex justify-center p-8"></QuoteBox>
				<ProjectList className="relative"></ProjectList>
			</div>
		</div>
	);
}
