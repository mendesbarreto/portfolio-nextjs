import { ProjectListItem } from "./project-item";

export interface ProjectsProps {
  className?: string;
}

export function ProjectList({ className }: ProjectsProps) {
  const projects = [
    {
      name: "Skynet",
      description: "Save the humanity from itself",
      types: ["CSS", "HTML"],
      imageUrl: "https://placehold.co/331x201",
    },
    {
      name: "Skynet",
      description: "Save the humanity from itself",
      types: ["CSS", "HTML"],
      imageUrl: "https://placehold.co/331x201",
    },
    {
      name: "Skynet",
      description: "Save the humanity from itself",
      types: ["CSS", "HTML"],
      imageUrl: "https://placehold.co/331x201",
    },
    {
      name: "Skynet",
      description: "Save the humanity from itself",
      types: ["CSS", "HTML"],
      imageUrl: "https://placehold.co/331x201",
    },
    {
      name: "Skynet",
      description: "Save the humanity from itself",
      types: ["CSS", "HTML"],
      imageUrl: "https://placehold.co/331x201",
    },
  ];
  return (
    <div className={`px-4 md:px-0 ${className}`}>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
        {projects.map((project, index) => (
          <ProjectListItem
            key={index}
            name={project.name}
            imageUrl={project.imageUrl}
            shortDescription={project.description}
            types={project.types}
          />
        ))}
      </div>
    </div>
  );
}
