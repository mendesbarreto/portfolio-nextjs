import React from "react";

interface TerminalProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function TerminalBlock({ children, title, className }: TerminalProps) {
  return (
    <div className={`bg-black border border-mTeal rounded-lg p-4 font-mono scanlines ${className}`}>
      <div className="flex items-center gap-2 mb-3 border-b border-mTeal pb-2">
        <div className="w-3 h-3 rounded-full bg-mRed" />
        <div className="w-3 h-3 rounded-full bg-mYellow" />
        <div className="w-3 h-3 rounded-full bg-mTeal" />
        <span className="ml-2 text-mTeal text-sm">{title || "terminal"}</span>
      </div>
      <div className="text-mGray">
        <span className="text-mTeal">$</span> {children}
      </div>
    </div>
  );
}
