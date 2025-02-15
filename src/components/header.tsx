import Image from "next/image";
import Link from "next/link";

export function Header() {
	return (
		<header className="bg-background p-4 shadow-md">
			<div className="flex  max-w-1064 mx-auto px-4 flex justify-between items-end h-16">
				<div className="flex items-center font-fira font-bold">
					<Image
						className="mr-2"
						src="/icons/ic_logo.svg"
						alt="Icon"
						width={16}
						height={16}
						layout="fixed"
					/>
					<Link href="/">Douglas Mendes</Link>
				</div>
				<ul className="flex space-x-4 font-fira accent-teal-600">
					<li>
						<Link href="/about">
							<span className="text-purple-600">#</span>
							<span className="text-white">home</span>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<span className="text-purple-600">#</span>
							<span className="text-white">works</span>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<span className="text-purple-600">#</span>
							<span className="text-white">about-me</span>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<span className="text-purple-600">#</span>
							<span className="text-white">contacts</span>
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
