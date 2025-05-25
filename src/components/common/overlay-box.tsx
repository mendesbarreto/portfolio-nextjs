import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faTwitter,
	faFacebook,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons"; // Import the specific icons

export function OverlayBox() {
	return (
		<div className="fixed top-0 left-17 w-5 h-[33.3333vh] bg-background z-50 flex flex-col items-center justify-center space-betj">
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
	);
}
