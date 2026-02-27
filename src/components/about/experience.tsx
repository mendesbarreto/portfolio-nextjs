"use client";

import { useState } from "react";

interface Job {
  title: string;
  company: string;
  companyDescription: string;
  size: string;
  period: string;
  location: string;
  highlights: string[];
}

export function Experience() {
  const [expandedJob, setExpandedJob] = useState<number | null>(0);

  const jobs: Job[] = [
    {
      title: "Senior Software Engineering Manager",
      company: "Xpertsea",
      companyDescription: "Predictive shrimp biomass control with AI delivering sustainable aquaculture solutions",
      size: "51 - 100 employees",
      period: "2020-10 – Present",
      location: "Quebec, Canada",
      highlights: [
        "Led a 9-engineer team in the development and scaling of complex applications",
        "Spearheaded a full-stack migration from AWS to Google Cloud, achieving a 20% reduction in infrastructure costs",
        "Led platform re-architecture improving DX and UX, driving product-market fit",
        "Introduced trunk-based development to the team, reducing gitflow overhead and significantly improving feature lead time",
        "Pioneered AI-powered 1:1 methodology creating searchable, data-driven records of discussions and goals",
        "Re-architected CI/CD pipelines, cutting build/deploy time from 50 to 7 minutes",
        "Increased feature delivery velocity by 5x, reducing lead time from 13 weeks to 2 weeks",
        "Implemented Kanban, reducing planning time by 20% with continuous development flow",
        "Designed engineering-product workflow reducing communication friction and meetings",
        "Oversaw the successful launch of 6 major projects",
        "Introduced engineering standards reducing bug rates by 23% and streamlining async communication",
        "Managed all people functions, including performance reviews, mentorship, and conflict resolution",
        "Contributed hands-on code to backend (Python, TS) and frontend (Next.js), accelerating key initiatives",
        "Built cross-platform C++ Computer Vision framework for native iOS and Android"
      ]
    },
    {
      title: "Senior iOS Developer",
      company: "Social.mom",
      companyDescription: "Social Media for mothers focused on delivering a safe and supportive environment",
      size: "11 - 20 employees",
      period: "Oct 2019 – Oct 2020",
      location: "",
      highlights: [
        "Engineered and maintained a high-traffic iOS application, driving the migration of key features from Objective-C to Swift",
        "Led a major re-architecture of the native codebase, cutting maintenance overhead and new feature development time by 20%",
        "Authored automation scripts that eliminated hundreds of hours of manual, repetitive tasks for the development team",
        "Established a formal testing culture by introducing end-to-end (E2E) and unit testing, significantly improving application reliability",
        "Mentored engineers on software design, promoting the adoption of SOLID principles and modern design patterns"
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Levio",
      companyDescription: "Tech Consulting",
      size: "1K - 5K employees",
      period: "Jul 2018 – Oct 2019",
      location: "",
      highlights: [
        "Engineered and maintained scalable, high-availability backend services for multiple clients using .NET C#",
        "Executed complex legacy modernization projects, successfully migrating critical client systems from COBOL to modern .NET platforms",
        "Led a project to migrate customers from legacy version control systems to Git, modernizing their source code management practices",
        "Acted as a key technical consultant, collaborating with cross-functional teams to define requirements and deliver robust solutions",
        "Contributed to the optimization and automation of continuous integration (CI) pipelines to improve build and deployment efficiency"
      ]
    },
    {
      title: "Senior Mobile Engineer",
      company: "Concrete Solutions",
      companyDescription: "Tech Consulting",
      size: "10K+ employees",
      period: "Jul 2015 – Aug 2018",
      location: "",
      highlights: [
        "Progressed from Developer to Senior Engineer, leading the architecture and development of native mobile applications for multiple clients",
        "Developed 3 mobile banking applications and 4 e-commerce apps, delivering high-quality financial and retail solutions",
        "Architected and developed a \"white-label\" e-commerce mobile platform, enabling the rapid deployment of customized storefronts from a single codebase",
        "Delivered multiple technical talks to engineering teams on best practices in coding, testing, and QA implementation",
        "Designed and implemented robust CI/CD pipelines (Jenkins, Bitrise, TravisCI) and promoted TDD/BDD practices (XCTest, Kif)"
      ]
    },
    {
      title: "Lead Game Programmer",
      company: "Editora Globo",
      companyDescription: "Publisher and developer of digital entertainment products",
      size: "500 - 1K employees",
      period: "Aug 2010 – Apr 2015",
      location: "",
      highlights: [
        "Progressed from Programmer to Lead, managing full game development lifecycle and team leadership",
        "Led the end-to-end development of cross-platform games (iOS, Android, Windows) using C# and Unity3D",
        "Architected and built critical backend services for MMO games, including login systems and room controllers, using SmartFoxServer (Java/MySQL)",
        "Designed and developed a reusable Unity3D framework and custom engine tools, significantly increasing team productivity",
        "Implemented JIRA to manage development process"
      ]
    },
    {
      title: "Junior Analyst Programmer",
      company: "People Way",
      companyDescription: "Tech Consulting",
      size: "11 - 50 employees",
      period: "Apr 2009 – Feb 2010",
      location: "",
      highlights: [
        "Developed and maintained enterprise web applications using the J2EE stack (JSP, JSF) and SOAP web services",
        "Managed the client data lifecycle, including database design (MySQL) and building custom reports with JasperReport",
        "Engineered data parsing scripts to process and manipulate diverse formats (SMS, XML, CSV)"
      ]
    }
  ];

  return (
    <section className="mb-12 md:mb-16">
      <h2 className="text-2xl font-bold text-white mb-4">
        <span className="text-mTeal">##</span> Professional Experience
      </h2>
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <div key={index} className="bg-backgroundLight rounded-lg border border-mTeal/20 overflow-hidden hover:border-mTeal transition-all">
            <button
              onClick={() => setExpandedJob(expandedJob === index ? null : index)}
              className="w-full p-6 text-left hover:bg-background/50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
                  <p className="text-mTeal font-semibold">{job.company}</p>
                  <p className="text-mGray text-sm mt-1">{job.companyDescription}</p>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-mGray">
                    <span>{job.period}</span>
                    {job.size && <span>• {job.size}</span>}
                    {job.location && <span>• {job.location}</span>}
                  </div>
                </div>
                <span className={`text-mTeal text-xl transition-transform ${expandedJob === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </div>
            </button>

            {expandedJob === index && (
              <div className="px-6 pb-6 border-t border-mGreen/20 pt-4">
                <ul className="space-y-3">
                  {job.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start">
                      <span className="text-mTeal mr-3 mt-1">▹</span>
                      <span className="text-mGray">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
