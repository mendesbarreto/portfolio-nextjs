"use client";

import React from "react";

interface TitleButtonProps {
	onClick?: () => void;
	title: string;
	className?: string;
}

export function TitleButton({ title, onClick, className }: TitleButtonProps) {
	return (
		<button
			onClick={onClick}
			className={`border border-mPurple bg-background text-white py-2 px-4 ${className}`}
		>
			{title}
		</button>
	);
}
