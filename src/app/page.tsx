import { Header } from "@/components/header";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<div className="bg-background min-h-screen">
			<Head>
				<title>Douglas Mendes</title>
				<meta name="description" content="My personal CV and Portifolio" />
			</Head>

			<Header />

			<main>
				<Image
					src="/icons/ic_logo.svg"
					alt="Icon"
					width={50}
					height={50}
					layout="fixed"
				/>
				<h2> Main Content 2</h2>
			</main>
		</div>
	);
}
