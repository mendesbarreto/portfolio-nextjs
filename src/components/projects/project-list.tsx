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
		<div className={className}>
			<div className="left-[2px] top-[90px] absolute inline-flex justify-start items-start gap-4">
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
			<div className="w-[701px] left-0 top-0 absolute inline-flex justify-start items-center gap-4">
				<div className="flex justify-start items-start">
					<div className="justify-start text-purple-400 text-3xl font-medium font-['Fira_Code']">
						#
					</div>
					<div className="justify-start text-white text-3xl font-medium font-['Fira_Code']">
						projects
					</div>
				</div>
				<div className="flex-1 h-px bg-purple-400" />
			</div>
			<div className="left-[911px] top-[10px] absolute justify-start text-white text-base font-medium font-['Fira_Code']">
				{"View all ~~>"}
			</div>
		</div>
	);
}
