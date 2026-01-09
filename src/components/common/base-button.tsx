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
			className={`border border-mTeal bg-backgroundLight text-white py-2 px-4 transition-all hover:bg-mTeal ${className}`}
		>
			{title}
		</button>
	);
	}
