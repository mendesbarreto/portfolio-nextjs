import Image from "next/image";

interface QuoteBoxProps {
	className?: string;
}

export function QuoteBox({ className }: QuoteBoxProps) {
	return (
		<div className={className}>
			<div className="flex flex-col items-end">
				<div className="p-8 relative inline-flex bg-background border-white border font-fira-code font-24 index z-20">
					The only way to learn a new programming language is by writing
					programs in it.
					<Image
						className="bg-background absolute top-0 left-4 -translate-y-1/2"
						src="/icons/ic_quotes.svg"
						alt="Quote Icon"
						height={20}
						width={25}
					/>
					<Image
						className="bg-background absolute bottom-0 right-4 translate-y-1/2"
						src="/icons/ic_quotes.svg"
						alt="Quote Icon"
						height={20}
						width={25}
					/>
				</div>
				<div className="px-6 py-4 relative inline-flex bg-background border-white border-l border-b border-r font-fira-code font-24 z-10">
					YESSS
				</div>
			</div>
		</div>
	);
}
