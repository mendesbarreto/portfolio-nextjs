"use client";

import { useState } from "react";

export interface ProjectsProps {
  className?: string;
  underConstruction?: boolean;
}

interface Project {
  name: string;
  shortDescription: string;
  types: string[];
  company?: string;
  role?: string;
  timePeriod?: string;
  link?: string;
  highlights?: string[];
}

export function ProjectList({ className, underConstruction = false }: ProjectsProps) {
  const [expandedProject, setExpandedProject] = useState<number | null>(0);

  const projects: Project[] = [
    {
      name: "Kampi",
      shortDescription: "Intelligent copilot for shrimp farmers using AI and computer vision to replace manual guesswork with data-driven insights. Features three pillars: Pond Vision for biometric monitoring via smartphone photos, Optima for predictive analytics and growth forecasting, and FarmBook for team coordination across the production chain.",
      types: ["Python", "TypeScript", "NodeJS", "NextJS", "Google Cloud", "Terraform", "Ansible", "C++", "Android", "iOS", "React Native"],
      company: "Xpertsea",
      role: "Senior Software Engineering Manager",
      timePeriod: "Oct 2021 – Present",
      link: "https://bekampi.com/",
      highlights: [
        "Led cross-functional team in development of AI-powered platform with three product pillars",
        "Architected technical strategy for predictive analytics and computer vision systems",
        "Managed technical roadmap for omnichannel platform supporting iOS, iPadOS, and web",
        "Directed infrastructure modernization using Google Cloud, Terraform, and Ansible"
      ]
    },
    {
      name: "Social.Mom",
      shortDescription: "Social network platform designed to counter social isolation during motherhood and reinforce the social safety net of families. Enables mothers to connect locally, plan activities, and access community groups and organizations in their area through a bilingual interface.",
      types: ["iOS", "Android", "Java Springboot", "React"],
      company: "Social.mom",
      role: "Senior Native iOS Developer",
      timePeriod: "Oct 2019 – Aug 2021",
      link: "https://social.mom/en",
      highlights: [
        "Engineered and maintained high-traffic iOS application with bilingual support (English/French)",
        "Led major re-architecture reducing maintenance overhead and new feature development time by 20%",
        "Established formal testing culture with E2E and unit testing for improved application reliability"
      ]
    },
    {
      name: "Meu Carrefour",
      shortDescription: "All-in-one retail companion and cornerstone of Carrefour Brazil's omnichannel strategy, empowering millions of users to manage loyalty rewards, shop for groceries online, and streamline in-store visits through smart utility tools like barcode scanning and proximity services.",
      types: ["iOS native", "TypeScript", "NodeJS", "JAVA"],
      company: "Carrefour Brazil",
      role: "Senior iOS Developer",
      timePeriod: "Feb 2016 – Jun 2016",
      highlights: [
        "Developed comprehensive mobile shopping experience with barcode scanner and store locator",
        "Implemented loyalty program integration with Purple Label discounts and cashback tracking",
        "Built shopping list management system with cross-platform synchronization"
      ]
    },
    {
      name: "Itaú Unibanco",
      shortDescription: "Mobile banking application for one of Brazil's largest financial institutions, providing users with secure access to core banking services including account management and financial transactions.",
      types: ["Windows Phone", "iOS", ".NET"],
      company: "Itaú Unibanco",
      role: "Windows Phone and iOS Developer",
      timePeriod: "July 2015 – Jan 2016",
      highlights: [
        "Implemented login with CPF for secure user authentication",
        "Developed account statement functionality for transaction history access",
        "Built transfers and payments features for core banking operations"
      ]
    },
    {
      name: "Mundo do Sítio",
      shortDescription: "Persistent, multi-user virtual world designed to integrate pedagogical goals with immersive gameplay as a digital extension of the Sítio do Picapau Amarelo IP. Featured complex economy, social interactions, and library of educational mini-games for millions of Brazilian students.",
      types: ["Unity 3D", "Flash ActionScript", "Java", "SmartFox Server", "HTML5/JS"],
      company: "Editora Globo",
      role: "Lead Game Programmer / Full Stack",
      timePeriod: "Aug 2010 – Apr 2015",
      highlights: [
        "Engineered full-stack architecture handling high-concurrency traffic with low-latency communication",
        "Developed interactive gameplay mechanics and real-time state synchronization for 30+ educational mini-games",
        "Implemented secure authentication, profile registration, and parental control features for children's platform"
      ]
    }
  ];

  if (underConstruction) {
    return (
      <div className={`px-4 md:px-0 ${className}`}>
        <div className="flex flex-col items-center justify-center p-12">
          <div className="text-center">
            <div className="text-4xl mb-4">🚧</div>
            <div className="text-2xl text-mTeal mb-4">Under Construction</div>
            <div className="text-mGray max-w-md">
              My portfolio is being updated with exciting new projects.
              Check back soon to see what I&apos;ve been building!
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className={className}>
      <h2 className="text-2xl font-bold text-white mb-4">
        <span className="text-mTeal">##</span> Main Projects
      </h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-backgroundLight rounded-lg border border-mTeal/20 overflow-hidden hover:border-mTeal transition-all">
            <button
              onClick={() => setExpandedProject(expandedProject === index ? null : index)}
              className="w-full p-6 text-left hover:bg-background/50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                  <p className="text-mTeal font-semibold text-sm md:text-base">
                    {project.role && <span>{project.role}</span>}
                    {project.role && project.company && <span className="text-mGray"> • </span>}
                    {project.company && <span>{project.company}</span>}
                  </p>
                  <p className={`text-mGray text-sm md:text-base mt-2 ${expandedProject === index ? '' : 'line-clamp-2'}`}>
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.types.map((type, tIndex) => (
                      <span key={tIndex} className="px-2 py-1 bg-background border border-mTeal/30 rounded text-xs md:text-sm text-mGray">
                        {type}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 mt-2 text-xs md:text-sm text-mGray">
                    <span className="text-mTeal">{project.timePeriod}</span>
                  </div>
                </div>
                <span className={`text-mTeal text-xl transition-transform ${expandedProject === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </div>
            </button>

            {expandedProject === index && (
              <div className="px-6 pb-6 border-t border-mGreen/20 pt-4">
                <ul className="space-y-3 mb-4">
                  {project.highlights?.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start">
                      <span className="text-mTeal mr-3 mt-1">▹</span>
                      <span className="text-mGray text-sm md:text-base">{highlight}</span>
                    </li>
                  ))}
                </ul>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-mTeal/10 border border-mTeal hover:bg-mTeal/20 rounded transition-colors text-mTeal font-semibold text-sm md:text-base"
                  >
                    <span>View Live Site</span>
                    <span className="ml-2">↗</span>
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
