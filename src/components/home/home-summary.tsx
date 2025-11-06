"use client";

import React from "react";

import { TitleButton } from "../common/base-button";
import Image from "next/image";

interface HomeSummaryProps {
	className?: string;
}

export function HomeSummary({ className }: HomeSummaryProps) {
	const handleClick = () => {
		alert("Contact me!");
	};

	return (
		<div className={`flex flex-col md:flex-row justify-between items-center gap-8 px-4 md:px-0 ${className}`}>
			<div id="home-summary" className="w-full md:w-1/2 items-center">
				<div className="flex-col font-fira-code text-xl md:text-2xl font-bold text-white-600">
					<div>
						<span>Douglas is a </span>
						<span className="text-mPurple">Senior Software Eng. Manager </span>
						<span>and </span>
						<span className="text-mPurple">Full-Stack Developer</span>
					</div>
				</div>
				<div className="font-fira-code text-mGray pt-8 leading-relaxed">
					With <span className="text-mPurple font-semibold">14 years</span> in software engineering, 
					Douglas leads and mentors high-performing teams that ship quality products. 
					As a <span className="text-mYellow">polyglot technologist</span>, he&apos;s comfortable 
					working across the full stack with various languages and frameworks.
				</div>
				<div className="font-fira-code text-mGray pt-4 leading-relaxed">
					His focus: practical agile, automation, and building scalable solutions that actually work.
				</div>
				<div className="pt-8 flex gap-4">
					<TitleButton onClick={handleClick} title="contact-me"></TitleButton>
				</div>
			</div>

			<div className="flex-initial w-full md:w-[468px] max-w-[468px]">
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
