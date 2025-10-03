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
			{/* Section header */}
			<div className="flex justify-start items-center gap-4 mb-12 md:mb-24">
				<div className="flex justify-start items-start">
					<div className="justify-start text-purple-400 text-2xl md:text-3xl font-medium font-['Fira_Code']">
						#
					</div>
					<div className="justify-start text-white text-2xl md:text-3xl font-medium font-['Fira_Code']">
						projects
					</div>
				</div>
				<div className="flex-1 h-px bg-purple-400" />
			</div>
			
			{/* View all link - positioned above on mobile, to the right on desktop */}
			<div className="flex justify-end mb-8 md:absolute md:right-0 md:top-[10px] md:mb-0">
				<span className="text-white text-sm md:text-base font-medium font-['Fira_Code']">
					{"View all ~~>"}
				</span>
			</div>

			{/* Projects grid */}
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
