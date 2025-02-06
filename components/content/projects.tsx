import React from "react";
import Bounded from "../containers/bounded";

function Projects() {
	return (
		<section>
			<Bounded>
				<h1 className="text-white">Projects</h1>
			</Bounded>
			<div className="flex">
				<div className="w-1/2">
					<div className="h-screen w-full text-white">
						<h1>Hi</h1>
					</div>
					<div className="h-screen w-full text-white">
						<h1>Hi</h1>
					</div>
					<div className="h-screen w-full text-white">
						<h1>Hi</h1>
					</div>
				</div>
				<div className="sticky w-1/2 h-screen top-0">
					<div className="slide">
						<div className="slide-bg-img">
							<img src="/img.jpg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
