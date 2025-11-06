import { Header } from "@/components/common/header";
import { ProfessionalSummary } from "@/components/about/professional-summary";
import { TechSkills } from "@/components/about/tech-skills";
import { ManagementSkills } from "@/components/about/management-skills";
import { Experience } from "@/components/about/experience";
import { Education } from "@/components/about/education";

export default function About() {
  return (
    <div className="bg-primary min-h-screen">
      <div className="bg-background max-w-1064 mx-auto pt-8 md:pt-16 px-4 md:px-0 pb-16">
        <Header />
        
        <div className="mt-8 md:mt-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            <span className="text-mPurple">#</span>about-me
          </h1>
          <div className="w-32 h-1 bg-mPurple mb-8"></div>
        </div>

        <ProfessionalSummary />
        <ManagementSkills />
        <TechSkills />
        <Experience />
        <Education />
      </div>
    </div>
  );
}
