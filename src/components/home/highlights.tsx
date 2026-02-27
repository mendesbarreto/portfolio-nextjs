export function Highlights() {
  const achievements = [
    {
      icon: "🚀",
      title: "Speed Master",
      value: "5x",
      label: "Feature Delivery Velocity",
      description: "Feature lead time: 13 weeks → 2 weeks",
      color: "text-mTeal"
    },
    {
      icon: "⚡",
      title: "Pipeline Wizard",
      value: "86%",
      label: "CI/CD Speed Improvement",
      description: "Build & deploy: 50min → 7min",
      color: "text-mTeal"
    },
    {
      icon: "🚢",
      title: "Shipping Machine",
      value: "30+",
      label: "Apps Launched to Production",
      description: "Mobile, web & games across platforms",
      color: "text-mTeal"
    },
    {
      icon: "💰",
      title: "Cost Optimizer",
      value: "20%",
      label: "Infrastructure Cost Cut",
      description: "Full cloud migration from AWS to GCP",
      color: "text-mTeal"
    },
    {
      icon: "💡",
      title: "Team Catalyst",
      value: "Multi-Year",
      label: "Technical Talks Delivered",
      description: "Best practices in coding, testing & QA",
      color: "text-mTeal"
    },
    {
      icon: "🏦",
      title: "FinTech Builder",
      value: "3",
      label: "Banking Apps Delivered",
      description: "High-security financial mobile solutions",
      color: "text-mTeal"
    },
    {
      icon: "🔄",
      title: "Legacy Slayer",
      value: "COBOL→.NET",
      label: "Modernization Expert",
      description: "Migrated critical legacy systems",
      color: "text-mTeal"
    },
    {
      icon: "🏆",
      title: "Agile Champion",
      value: "TDD/BDD",
      label: "Testing Culture Established",
      description: "Promoted quality practices across teams",
      color: "text-mTeal"
    }
  ];

  return (
    <section className="my-12 md:my-16 px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-backgroundLight p-6 rounded-lg border border-mGray/20 hover:border-mTeal transition-all hover:scale-105 hover:shadow-lg"
          >
            <div className="text-4xl mb-3">{achievement.icon}</div>
            <div className={`text-lg font-bold ${achievement.color} mb-2`}>
              {achievement.title}
            </div>
            <div className={`text-2xl md:text-3xl font-bold ${achievement.color} mb-2`}>
              {achievement.value}
            </div>
            <div className="text-white font-semibold mb-1 text-sm">{achievement.label}</div>
            <div className="text-mGray text-xs">{achievement.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
