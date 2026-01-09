import { TerminalHeader } from "@/components/common/terminal-header";
import { ProfessionalSummary } from "@/components/about/professional-summary";
import { TechSkills } from "@/components/about/tech-skills";
import { ManagementSkills } from "@/components/about/management-skills";
import { Experience } from "@/components/about/experience";
import { Education } from "@/components/about/education";

export default function About() {
  return (
    <div className="bg-primary min-h-screen">
      <div className="bg-background max-w-1064 mx-auto pt-8 md:pt-16 px-4 md:px-0 pb-16">
        <TerminalHeader />

        <ProfessionalSummary />
        <ManagementSkills />
        <TechSkills />
        <Experience />
        <Education />
      </div>
    </div>
  );
}
