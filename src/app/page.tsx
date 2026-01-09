import { Header } from "@/components/common/header";
import { HomeSummary } from "@/components/home/home-summary";
import { Highlights } from "@/components/home/highlights";
import { ProjectList } from "@/components/projects/project-list";
import { QuoteBox } from "@/components/home/quote";
import { TerminalBlock } from "@/components/common/terminal-block";
import { TypingText } from "@/components/common/typing-text";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-primary min-h-screen">
      <div className="bg-background max-w-1064 mx-auto pt-8 md:pt-16 px-4 md:px-0">
        <Head>
          <title>Douglas Mendes</title>
          <meta name="description" content="My personal CV and Portifolio" />
        </Head>

        <Header />
        <TerminalBlock title="profile" className="mb-8">
          <TypingText text="Welcome to Douglas Mendes - Senior Software Engineering Manager" />
        </TerminalBlock>
        <HomeSummary />
        <TerminalBlock title="achievements" className="mb-8">
          <Highlights />
        </TerminalBlock>
        <QuoteBox className="flex justify-center p-4 md:p-8"></QuoteBox>
        <TerminalBlock title="projects" className="mb-16">
          <ProjectList className="relative"></ProjectList>
        </TerminalBlock>
      </div>
    </div>
  );
}
