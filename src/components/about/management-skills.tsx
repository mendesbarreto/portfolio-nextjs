export function ManagementSkills() {
  const skills = [
    "Expert in Scrum and Kanban methodologies, fostering collaborative and high-performing teams",
    "Proven track record of mentoring engineers, leading technical teams, and developing talent from junior to senior levels",
    "Experienced in collaborating with product managers, designers, and cross-functional teams to deliver robust solutions",
    "Led client engagements and delivered solutions across multiple organizations as a technical consultant",
    "Successfully managed complex migration projects, full game development lifecycles, and multi-client deliverables",
    "Established development processes using JIRA/Github Projects, implemented CI/CD pipelines, and promoted TDD/BDD practices",
    "Skilled in managing client relationships, defining requirements, and aligning technical solutions with business objectives",
    "Delivered technical talks and presentations to engineering teams on best practices"
  ];

  return (
    <section className="mb-12 md:mb-16">
      <h2 className="text-2xl font-bold text-white mb-4">
        <span className="text-mGreen">##</span> Management Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-#003b00 p-4 rounded-lg border border-mGreen/20 hover:border-mGreen hover:border-glow transition-colors">
            <div className="flex items-start">
              <span className="text-mGreen mr-3 mt-1">▹</span>
              <p className="text-mGray text-sm leading-relaxed">{skill}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
