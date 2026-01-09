import { ProjectListItem } from "./project-item";

export interface ProjectsProps {
  className?: string;
  underConstruction?: boolean;
}

export function ProjectList({ className, underConstruction = true }: ProjectsProps) {
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

  if (underConstruction) {
    return (
      <div className={`px-4 md:px-0 ${className}`}>
        <div className="flex flex-col items-center justify-center p-12">
          <div className="text-center">
            <div className="text-4xl mb-4">🚧</div>
            <div className="text-2xl text-mTeal mb-4">Under Construction</div>
            <div className="text-mGray max-w-md">
              My portfolio is being updated with exciting new projects.
              Check back soon to see what I&apos;ve been building!
            </div>
          </div>
        </div>
      </div>
    );
  }

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
