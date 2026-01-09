"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function OverlayBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop: Fixed left sidebar */}
      <div className="hidden md:fixed md:flex top-0 left-17 w-5 h-[33.3333vh] bg-background z-50 flex-col items-center justify-center space-betj">
        <div key="center-line" className="top-0 h-full justify-center">
          <div className="w-px h-full bg-mTeal"></div>
        </div>
        <div className="mt-[5px] w-full flex flex-col items-center space-y-2">
          <a
            href="https://github.com/mendesbarreto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-12 h-12 bg-black border border-mTeal rounded-lg p-3 hover:bg-mTeal/80 transition-all"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" className="text-mTeal" />
          </a>
          <a
            href="https://www.linkedin.com/in/mendesbarreto/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-12 h-12 bg-black border border-mTeal rounded-lg p-3 hover:bg-mTeal/80 transition-all"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-mTeal" />
          </a>
          <a
            href="https://x.com/DougTheDev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-12 h-12 bg-black border border-mTeal rounded-lg p-3 hover:bg-mTeal/80 transition-all"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" className="text-mTeal" />
          </a>
          <a
            href="https://www.facebook.com/douglasMendesBarreto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-12 h-12 bg-black border border-mTeal rounded-lg p-3 hover:bg-mTeal/80 transition-all"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" className="text-mTeal" />
          </a>
        </div>
      </div>

      {/* Mobile: FAB (Floating Action Button) */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <div className="flex flex-col-reverse items-end gap-3">
          {/* Social links */}
          {isOpen && (
            <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-5">
              <a
                href="https://github.com/mendesbarreto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-12 h-12 bg-black border border-mTeal rounded-lg p-3 hover:bg-mTeal/80 transition-all"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" className="text-mTeal" />
              </a>
              <a
                href="https://www.linkedin.com/in/mendesbarreto/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-12 h-12 bg-black border border-mTeal rounded-lg p-3 hover:bg-mTeal/80 transition-all"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-mTeal" />
              </a>
              <a
                href="https://x.com/DougTheDev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-12 h-12 bg-black border border-mTeal rounded-lg p-3 hover:bg-mTeal/80 transition-all"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" className="text-mTeal" />
              </a>
              <a
                href="https://www.facebook.com/douglasMendesBarreto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-12 h-12 bg-black border border-mTeal rounded-lg p-3 hover:bg-mTeal/80 transition-all"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" className="text-mTeal" />
              </a>
            </div>
          )}

          {/* FAB button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex justify-center items-center w-14 h-14 bg-black border border-mTeal rounded-lg shadow-lg hover:bg-mTeal/80 transition-all ${isOpen ? "rotate-45" : ""
              }`}
            aria-label="Toggle social links"
          >
            <FontAwesomeIcon icon={faShare} size="lg" className="text-mTeal" />
          </button>
        </div>
      </div>
    </>
  );
}
