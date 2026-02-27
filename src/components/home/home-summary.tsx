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
      <div id="home-summary" className="w-full md:w-1/2">
        <div className="flex-col font-fira-code text-xl md:text-2xl font-bold text-white-600">
          <div>
            <span>I&apos;m a </span>
            <span className="text-mTeal">Senior Software Engineering Manager</span>
          </div>
        </div>
        <div className="font-fira-code text-mGray pt-8 leading-relaxed">
          With <span className="text-mTeal font-semibold">14 years</span> in software engineering, I&apos;ve worked across the full stack,
          leading and mentoring teams that ship quality products. My focus is on delivering what clients actually need
          by collaborating closely with product and design and ruthlessly trimming down processes. This means practical
          agile, a strong focus on automation, and a culture of high quality.
        </div>
        <div className="font-fira-code text-mGray pt-4 leading-relaxed">
          I stay hands-on by architecting systems, managing migrations, and consulting. This keeps my skills sharp
          and helps me understand my team&apos;s challenges.
        </div>
        <div className="font-fira-code text-mTeal pt-4 leading-relaxed font-semibold">
          My goal is simple: build high-performing teams and scalable solutions that actually work.
        </div>
        <div className="pt-8 flex gap-4">
          <TitleButton onClick={handleClick} title="contact-me"></TitleButton>
        </div>
      </div>

      <div className="flex-initial w-full md:w-[468px] max-w-[468px] mb-12">
        <Image
          src="/img-profile.png"
          alt="Icon"
          className="w-full h-auto"
          width={468}
          height={386}
        />
      </div>
    </div>
  );
}
