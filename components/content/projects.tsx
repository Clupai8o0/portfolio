import Bounded from "../containers/bounded";
import Title from "./title";

function Projects() {
	return (
		<section className="mt-24">
			<Bounded className="mb-12">
				<Title text="My Projects" />
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
