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
		<div className="justify-start text-gray-400 text-sm md:text-base font-normal font-['Fira_Code']">
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
    <div className="outline-1 outline-mTeal rounded-lg flex flex-col justify-start items-start w-full transition-all">
      <Image
        className="w-full h-auto rounded-t"
        width={331}
        height={201}
        alt="Project Image"
        src={imageUrl}
      />
      <div className="self-stretch p-2 inline-flex justify-start items-start gap-2 flex-wrap">
        {types.map((t, index) => (
          <ProjectListItemType key={index} type={t} />
        ))}
      </div>
      <div className="self-stretch p-4 flex flex-col justify-start items-start gap-4">
        <div className="self-stretch justify-start text-white text-xl md:text-2xl font-medium font-['Fira_Code']">
          {name}
        </div>
        <div className="self-stretch justify-start text-mGray text-sm md:text-base font-normal font-['Fira_Code']">
          {shortDescription}{" "}
        </div>
        <div className="flex flex-wrap justify-start items-start gap-4">
          <div
            data-state="Default"
            data-type="Primary"
            className="px-4 py-2 outline-1 outline-offset-[-1px] outline-mTeal hover:border-mTeal flex justify-start items-start gap-2.5 rounded"
          >
            <div className="justify-start text-white text-sm md:text-base font-medium font-['Fira_Code']">
              {"Live <~>"}
            </div>
          </div>
          <div
            data-state="Default"
            data-type="Secondary"
            className="px-4 py-2 outline-1 outline-offset-[-1px] outline-mTeal hover:border-mTeal flex justify-start items-start gap-2.5 rounded"
          >
            <div className="justify-start text-white text-sm md:text-base font-medium font-['Fira_Code']">
              {"Cached >="}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
