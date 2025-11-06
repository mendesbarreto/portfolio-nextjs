"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="bg-background p-4 shadow-md">
			<div className="flex  max-w-1064 mx-auto px-4 justify-between items-end h-16">
				<div className="flex items-center font-fira-code font-bold">
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

				{/* Hamburger menu button for mobile */}
				<button
					className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
				>
					<span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
					<span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
					<span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
				</button>

				{/* Desktop navigation */}
				<ul className="hidden md:flex space-x-4 font-fira-code accent-teal-600">
					<li>
						<Link href="/" className="hover:text-mGray transition-colors">
							<span className="text-mPurple">#</span>
							<span className="text-white">home</span>
						</Link>
					</li>
					<li>
						<Link href="/about" className="hover:text-mGray transition-colors">
							<span className="text-mPurple">#</span>
							<span className="text-white">about-me</span>
						</Link>
					</li>
					<li>
						<Link href="/contacts" className="hover:text-mGray transition-colors">
							<span className="text-mPurple">#</span>
							<span className="text-white">contacts</span>
						</Link>
					</li>
				</ul>
			</div>

			{/* Mobile navigation */}
			{isMenuOpen && (
				<nav className="md:hidden mt-4 pb-4">
					<ul className="flex flex-col space-y-4 font-fira-code">
						<li>
							<Link href="/" onClick={() => setIsMenuOpen(false)}>
								<span className="text-mPurple">#</span>
								<span className="text-white">home</span>
							</Link>
						</li>
						<li>
							<Link href="/about" onClick={() => setIsMenuOpen(false)}>
								<span className="text-mPurple">#</span>
								<span className="text-white">about-me</span>
							</Link>
						</li>
						<li>
							<Link href="/contacts" onClick={() => setIsMenuOpen(false)}>
								<span className="text-mPurple">#</span>
								<span className="text-white">contacts</span>
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
}
