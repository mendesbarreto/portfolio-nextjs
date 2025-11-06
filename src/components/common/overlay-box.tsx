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
					<div className="w-px h-full bg-m-gray"></div>
				</div>
				<div className="mt-[5px] w-full flex flex-col items-center space-y-2">
					<a
						href="https://github.com/mendesbarreto"
						target="_blank"
						rel="noopener noreferrer"
						className="flex justify-center items-center w-6 h-6 bg-transparent"
					>
						<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
					</a>
					<a
						href="https://www.linkedin.com/in/mendesbarreto/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex justify-center items-center w-6 h-6 bg-transparent"
					>
						<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
					</a>
					<a
						href="https://x.com/DougTheDev"
						target="_blank"
						rel="noopener noreferrer"
						className="flex justify-center items-center w-6 h-6 bg-transparent"
					>
						<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
					</a>
					<a
						href="https://www.facebook.com/douglasMendesBarreto"
						target="_blank"
						rel="noopener noreferrer"
						className="flex justify-center items-center w-6 h-6 bg-transparent"
					>
						<FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
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
								className="flex justify-center items-center w-12 h-12 bg-backgroundLight border border-mPurple/30 rounded-full shadow-lg hover:bg-mPurple/20 transition-colors"
							>
								<FontAwesomeIcon icon={faGithub} size="lg" />
							</a>
							<a
								href="https://www.linkedin.com/in/mendesbarreto/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex justify-center items-center w-12 h-12 bg-backgroundLight border border-mPurple/30 rounded-full shadow-lg hover:bg-mPurple/20 transition-colors"
							>
								<FontAwesomeIcon icon={faLinkedin} size="lg" />
							</a>
							<a
								href="https://x.com/DougTheDev"
								target="_blank"
								rel="noopener noreferrer"
								className="flex justify-center items-center w-12 h-12 bg-backgroundLight border border-mPurple/30 rounded-full shadow-lg hover:bg-mPurple/20 transition-colors"
							>
								<FontAwesomeIcon icon={faTwitter} size="lg" />
							</a>
							<a
								href="https://www.facebook.com/douglasMendesBarreto"
								target="_blank"
								rel="noopener noreferrer"
								className="flex justify-center items-center w-12 h-12 bg-backgroundLight border border-mPurple/30 rounded-full shadow-lg hover:bg-mPurple/20 transition-colors"
							>
								<FontAwesomeIcon icon={faFacebook} size="lg" />
							</a>
						</div>
					)}
					
					{/* FAB button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className={`flex justify-center items-center w-14 h-14 bg-mPurple rounded-full shadow-lg hover:bg-mPurple/80 transition-all ${
							isOpen ? "rotate-45" : ""
						}`}
						aria-label="Toggle social links"
					>
						<FontAwesomeIcon icon={faShare} size="lg" />
					</button>
				</div>
			</div>
		</>
	);
}
