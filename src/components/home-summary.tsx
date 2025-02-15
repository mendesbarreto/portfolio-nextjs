"use client";

import React from "react";

import { TitleButton } from "./base-button";
import Image from "next/image";

interface HomeSummaryProps {
	className?: string;
}

export function HomeSummary({ className }: HomeSummaryProps) {
	const handleClick = () => {
		alert("Contact me!");
	};

	return (
		<div className={`flex justify-between items-center ${className}`}>
			<div id="home-summary" className="w-1/2 items-center">
				<div className="flex-col font-fira text-2xl font-bold text-white-600">
					<div>
						<span>Douglas is a </span>
						<span className="text-mPurple">Software Eng. Manager </span>
						<span>and a </span>
						<span className="text-mPurple">Software Developer</span>
					</div>
				</div>
				<div className="font-fira text-mGray pt-8">
					As a polyglot technologist, he is comfortable working with various
					development stacks and programming languages. He also takes pleasure
					in mentoring others and helping them navigate their career paths.
				</div>
				<div className="pt-8">
					<TitleButton onClick={handleClick} title="contact-me"></TitleButton>
				</div>
			</div>

			<div className="flex-initial w-[468px]">
				<Image
					src="/img-profile.svg"
					alt="Icon"
					className="w-full h-auto"
					width={468}
					height={386}
				/>
			</div>
		</div>
	);
}
