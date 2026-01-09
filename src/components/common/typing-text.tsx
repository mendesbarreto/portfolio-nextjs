"use client";

import React, { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export function TypingText({ text, className, speed = 100 }: TypingTextProps) {
  const [displayText, setDisplayText] = useState(text[0] || "");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayText}
      <span className="cursor-blink">|</span>
    </span>
  );
}
