"use client";

import React, { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export function TypingText({ text, className, speed = 100 }: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        index++;
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
