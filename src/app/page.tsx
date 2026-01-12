import { TerminalHeader } from "@/components/common/terminal-header";
import { HomeSummary } from "@/components/home/home-summary";
import { Highlights } from "@/components/home/highlights";
import { ProjectList } from "@/components/projects/project-list";
import { TerminalBlock } from "@/components/common/terminal-block";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-primary min-h-screen">
      <div className="bg-background max-w-1064 mx-auto pt-8 md:pt-16 px-4 md:px-0">
        <Head>
          <title>Douglas Mendes</title>
          <meta name="description" content="My personal CV and Portifolio" />
        </Head>

        <TerminalHeader />
        <HomeSummary />
        <TerminalBlock title="achievements" className="mb-8">
          <Highlights />
        </TerminalBlock>
        <TerminalBlock title="projects" className="mb-16">
          <ProjectList className="relative" underConstruction={false} />
        </TerminalBlock>
      </div>
    </div>
  );
}
