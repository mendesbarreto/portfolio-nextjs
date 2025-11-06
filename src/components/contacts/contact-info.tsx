"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export function ContactInfo() {
  const contacts = [
    {
      icon: faEnvelope,
      label: "Email",
      value: "mendes-barreto@live.com",
      href: "mailto:mendes-barreto@live.com",
      color: "text-mRed"
    },
    {
      icon: faPhone,
      label: "Phone",
      value: "+1 (581) 748 0657",
      href: "tel:+15817480657",
      color: "text-mGreen"
    },
    {
      icon: faLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mendesbarreto",
      href: "https://www.linkedin.com/in/mendesbarreto",
      color: "text-mBlue"
    },
    {
      icon: faGithub,
      label: "GitHub",
      value: "github.com/mendesbarreto",
      href: "https://github.com/mendesbarreto",
      color: "text-mPurple"
    },
    {
      icon: faMapMarkerAlt,
      label: "Location",
      value: "Gatineau, QC - Canada",
      href: null,
      color: "text-mYellow"
    }
  ];

  return (
    <section className="mb-12">
      <p className="text-mGray text-lg mb-8">
        I&apos;m always open to discussing new opportunities, collaborations, or just connecting with fellow tech enthusiasts.
        Feel free to reach out through any of the channels below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contacts.map((contact, index) => (
          <div key={index} className="bg-backgroundLight p-6 rounded-lg border border-mGray/20 hover:border-mPurple/50 transition-all hover:scale-105">
            {contact.href ? (
              <a href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">
                <div className="flex items-start">
                  <div className={`${contact.color} text-2xl mr-4 mt-1`}>
                    <FontAwesomeIcon icon={contact.icon} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{contact.label}</h3>
                    <p className="text-mGray hover:text-mPurple transition-colors break-all">{contact.value}</p>
                  </div>
                </div>
              </a>
            ) : (
              <div className="flex items-start">
                <div className={`${contact.color} text-2xl mr-4 mt-1`}>
                  <FontAwesomeIcon icon={contact.icon} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{contact.label}</h3>
                  <p className="text-mGray">{contact.value}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 bg-backgroundLight p-8 rounded-lg border border-mPurple/30">
        <h2 className="text-2xl font-bold text-white mb-4">
          <span className="text-mPurple">##</span> Let's Connect
        </h2>
        <p className="text-mGray leading-relaxed mb-4">
          With 14 years of experience in software engineering, I&apos;m passionate about building high-performing teams 
          and scalable solutions. Whether you&apos;re looking for technical leadership, consulting, or collaboration on 
          innovative projects, I&apos;d love to hear from you.
        </p>
        <p className="text-mGreen font-semibold">
          Currently based in Gatineau, QC, Canada 🇨🇦
        </p>
      </div>
    </section>
  );
}
