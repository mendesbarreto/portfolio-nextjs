import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function OverlayBox() {
	return (
		// This vh stands for viewport's height and 33.3333 means 100 / 3 basically 1/3 of my screen, if I got it right
		<div className="fixed top-0 left-17 w-5 h-[33.3333vh] bg-background z-50 flex flex-col items-center justify-center space-betj">
			<div key="center-line" className="top-0 h-full justify-center">
				<div className="w-px h-full bg-m-gray"></div>
			</div>
			<div className="mt-[5px] w-full bottom-0">
				<FontAwesomeIcon icon={["fab", "github"]}></FontAwesomeIcon>
			</div>
		</div>
	);
}
