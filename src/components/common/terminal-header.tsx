"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { TypingText } from "./typing-text";

export function TerminalHeader() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tabs = [
    { name: "home", path: "/" },
    { name: "about-me", path: "/about" },
    { name: "contacts", path: "/contacts" }
  ];

  const activeTab = tabs.find(tab => tab.path === pathname)?.name || "home";

  if (!mounted) {
    return null;
  }

  return (
    <header className="bg-background border border-mTeal rounded-lg mb-8 overflow-hidden">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3 border-b border-mTeal pb-3 relative">
          {/* Left: Window controls (visible on desktop only) */}
          <div className="flex items-center gap-2 md:flex hidden">
            <div className="w-3 h-3 rounded-full bg-mRed" />
            <div className="w-3 h-3 rounded-full bg-mYellow" />
            <div className="w-3 h-3 rounded-full bg-mTeal" />
          </div>

          {/* Middle: Spacer (grows to fill space) */}
          <div className="flex-1"></div>

          {/* Right: Navigation (centered) */}
          <nav className="flex gap-2 font-fira-code">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.path}
                className={`px-4 py-1 rounded transition-all ${
                  activeTab === tab.name
                    ? "bg-backgroundLight text-mTeal border border-mTeal"
                    : "text-mGray hover:text-mTeal hover:bg-backgroundLight/50"
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="text-mGray font-mono">
          <span className="text-mTeal">$</span>{' '}
          <TypingText text="Welcome to Douglas Mendes - Senior Software Engineering Manager" />
        </div>
      </div>
    </header>
  );
}
