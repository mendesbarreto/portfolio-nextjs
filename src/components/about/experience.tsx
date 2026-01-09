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
      period: "Oct 2020 – Present",
      location: "Quebec, Canada",
      highlights: [
        "Led a 9-engineer team in the development and scaling of complex applications",
        "Spearheaded a full-stack migration from AWS to Google Cloud, achieving a 20% reduction in infrastructure costs",
        "Led platform re-architecture, improving DX and UX to drive the company to product-market fit",
        "Introduced trunk-based development, reducing gitflow overhead and improving feature lead time",
        "Pioneered AI-powered 1:1 methodology for searchable, data-driven team progress tracking",
        "Re-architected CI/CD pipelines, cutting build and deploy time from 50 minutes to 7 minutes",
        "Increased team productivity by 550%, reducing average feature lead time from 13 weeks to 2 weeks",
        "Implemented Kanban, leading to a 20% reduction in planning time",
        "Introduced engineering standards that improved code quality and reduced bug rates by 23%",
        "Architected cross-platform Computer Vision framework in C++ for native iOS and Android"
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
        "Engineered and maintained high-traffic iOS application",
        "Led major re-architecture of native codebase, cutting maintenance overhead by 20%",
        "Authored automation scripts eliminating hundreds of hours of manual tasks",
        "Established formal testing culture with E2E and unit testing",
        "Mentored engineers on software design, SOLID principles, and modern design patterns"
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Levio",
      companyDescription: "Tech Consulting",
      size: "1K - 5K employees",
      period: "Jul 2018 - Oct 2019",
      location: "",
      highlights: [
        "Engineered scalable, high-availability backend services using .NET C#",
        "Executed complex legacy modernization projects, migrating from COBOL to .NET",
        "Led project to migrate customers from legacy VCS to Git",
        "Acted as key technical consultant across cross-functional teams",
        "Contributed to optimization and automation of CI pipelines"
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
        "Progressed from Developer to Senior Engineer",
        "Developed 3 mobile banking applications and 4 e-commerce apps",
        "Architected white-label e-commerce mobile platform",
        "Delivered technical talks on best practices in coding, testing, and QA",
        "Designed and implemented robust CI/CD pipelines (Jenkins, Bitrise, TravisCI)"
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
        "Progressed from Game Programmer to Lead",
        "Led end-to-end development of cross-platform games (iOS, Android, Windows)",
        "Architected backend services for MMO games using SmartFoxServer (Java/MySQL)",
        "Designed reusable Unity3D framework and custom engine tools",
        "Implemented JIRA to establish team's development process"
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
        "Developed enterprise web applications using J2EE stack (JSP, JSF)",
        "Managed client data lifecycle and database design (MySQL)",
        "Built custom reports with JasperReport",
        "Engineered data parsing scripts for diverse formats (SMS, XML, CSV)"
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
