export function TechSkills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["Python", "JavaScript/TypeScript", "Go", "C++", "C#", "Ruby", "Swift", "Objective-C", "Node.js", "Next.js", "React Native"]
    },
    {
      title: "Architecture & APIs",
      skills: ["GraphQL", "RESTful APIs", "Microservices", "Event-Driven Systems", "Design Patterns", "SOLID Principles"]
    },
    {
      title: "DevOps & Infrastructure",
      skills: ["Docker", "Kubernetes", "CI/CD Pipelines", "Jenkins", "GitHub Actions", "AWS", "Google Cloud"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: "Development Practices",
      skills: ["TDD/BDD", "Unit Testing", "Integration Testing", "E2E Testing", "Automation", "Agile/Scrum/Kanban"]
    }
  ];

  return (
    <section className="mb-12 md:mb-16">
      <h2 className="text-2xl font-bold text-white mb-4">
        <span className="text-mPurple">##</span> Tech Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-backgroundLight p-6 rounded-lg border border-mGray/20">
            <h3 className="text-mYellow font-semibold mb-3">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="bg-background px-3 py-1 rounded text-mGray text-sm border border-mPurple/30 hover:border-mPurple hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
