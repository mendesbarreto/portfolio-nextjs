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
				className={`border border-mGreen bg-background text-white py-2 px-4 hover:border-glow transition-all ${className}`}
			>
				{title}
			</button>
		);
	}
