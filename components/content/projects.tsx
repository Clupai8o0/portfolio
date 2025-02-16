"use client";

import Snap from "lenis/snap";
import { useLenis } from "lenis/react";

import { generateKey } from "@/lib/utils";

import Bounded from "../containers/bounded";
import Title from "./title";
import { useEffect } from "react";
import { scrollSnapSettings } from "@/lib/animations";

const data = [
	{
		id: "project-1",
		title: "Project 1",
		tags: ["tag 1", "tag 2", "tag 3"],
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni praesentium dolorem labore atque, in deleniti ex, ea cupiditate quis nostrum dolores, repellat ad quisquam earum illo molestiae maiores eius laborum!",
		img: "/img.jpg",
	},
	{
		id: "project-2",
		title: "Project 2",
		tags: ["tag 1", "tag 2", "tag 3"],
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni praesentium dolorem labore atque, in deleniti ex, ea cupiditate quis nostrum dolores, repellat ad quisquam earum illo molestiae maiores eius laborum!",
		img: "/img.jpg",
	},
];

function Projects() {
	useLenis((lenis) => {
		const snap = new Snap(lenis, scrollSnapSettings);
		snap.addElement(document.getElementById<HTMLDivElement>("project-1"), {
			align: "center",
		});
		snap.addElement(document.getElementById<HTMLDivElement>("project-2"), {
			align: "center",
		});
	}, []);

	return (
		<section className="mt-24">
			<Bounded className="mb-12 md:mb-20">
				<Title text="My Projects" />
				{/* //todo:fix the animation */}
			</Bounded>

			<div className="relative p">
				<div className="max-w-7xl mx-auto">
					<div className="w-full lg:w-1/2">
						{data.map(({ title, tags, description, id }) => (
							<div key={generateKey()} id={id}>
								<div className="w-full h-1/3 lg:hidden">
									<img
										src="/img.jpg"
										alt=""
										className="h-full w-full object-cover"
									/>
								</div>
								<div className="h-2/3 lg:h-screen w-full flex flex-col justify-center items-start text-white">
									<h1 className="text-">{title}</h1>
									<ul>
										{tags.map((tag) => (
											<li key={generateKey()}>{tag}</li>
										))}
									</ul>
									<p>{description}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="absolute w-screen h-full top-0 left-0">
					<div className="w-1/2 h-screen top-0 left-1/2 sticky">
						<div className="slide">
							<div className="slide-bg-img">
								<img src="/img.jpg" alt="" className="h-screen object-cover" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
