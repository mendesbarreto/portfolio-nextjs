import React from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = "javascript", className }: CodeBlockProps) {
  return (
    <div className={`bg-#003b00 border border-mTeal rounded p-4 font-mono text-sm overflow-x-auto ${className}`}>
      <div className="flex justify-between items-center mb-2 border-b border-mTeal pb-2">
        <span className="text-mTeal text-xs">{language}</span>
        <span className="text-mTeal text-xs cursor-pointer hover:underline">copy</span>
      </div>
      <pre className="text-mGray">
        <code>{code}</code>
      </pre>
    </div>
  );
}
