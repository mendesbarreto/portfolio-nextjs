import Image from "next/image";

export interface ProjectsProps {
	name: string;
	shortDescription: string;
	types: string[];
	imageUrl: string;
}

interface ProjectListItemTypeProps {
	type: string;
}

function ProjectListItemType({ type }: ProjectListItemTypeProps) {
	return (
		<div className="justify-start text-gray-400 text-base font-normal font-['Fira_Code']">
			{type}
		</div>
	);
}

export function ProjectListItem({
	name,
	shortDescription,
	types,
	imageUrl = "https://placehold.co/331x201",
}: ProjectsProps) {
	return (
		<div className="outline-1 outline-gray-400 inline-flex flex-col justify-start items-start">
			<Image
				className="w-80 h-52 border-b border-gray-400"
				width={331}
				height={201}
				alt="Project Image"
				src={imageUrl}
			/>
			<div className="self-stretch p-2 inline-flex justify-start items-start gap-2">
				{types.map((t, index) => (
					<ProjectListItemType key={index} type={t} />
				))}
			</div>
			<div className="self-stretch p-4 border-t border-gray-400 flex flex-col justify-start items-start gap-4">
				<div className="self-stretch justify-start text-white text-2xl font-medium font-['Fira_Code']">
					{name}
				</div>
				<div className="self-stretch justify-start text-gray-400 text-base font-normal font-['Fira_Code']">
					{shortDescription}{" "}
				</div>
				<div className="inline-flex justify-start items-start gap-4">
					<div
						data-state="Default"
						data-type="Primary"
						className="px-4 py-2 outline-1 outline-offset-[-1px] outline-purple-400 flex justify-start items-start gap-2.5"
					>
						<div className="justify-start text-white text-base font-medium font-['Fira_Code']">
							{"Live <~>"}
						</div>
					</div>
					<div
						data-state="Default"
						data-type="Secondary"
						className="px-4 py-2 outline-1 outline-offset-[-1px] outline-gray-400 flex justify-start items-start gap-2.5"
					>
						<div className="justify-start text-gray-400 text-base font-medium font-['Fira_Code']">
							{"Cached >="}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
