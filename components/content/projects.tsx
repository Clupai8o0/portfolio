"use client";

import Snap from "lenis/snap";
import { useLenis } from "lenis/react";

import { cn, generateKey } from "@/lib/utils";

import Bounded from "../containers/bounded";
import Title from "./title";
import { useEffect } from "react";
import { scrollSnapSettings } from "@/lib/animations";
import { Badge } from "../ui/badge";

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

const colors = [
	"oklch(0.704 0.191 22.216)",
	"oklch(0.828 0.189 84.429)",
	"oklch(0.792 0.209 151.711)",
	"oklch(0.789 0.154 211.53)",
	"oklch(0.673 0.182 276.935)",
	"oklch(0.702 0.183 293.541)",
	"oklch(0.74 0.238 322.16)",
	"oklch(0.718 0.202 349.761)",
	"oklch(0.704 0.04 256.788)",
];

function Projects() {
	// useLenis((lenis) => {
	// 	const snap = new Snap(lenis, scrollSnapSettings);
	// 	snap.addElement(document.getElementById<HTMLDivElement>("project-1"), {
	// 		align: "center",
	// 	});
	// 	snap.addElement(document.getElementById<HTMLDivElement>("project-2"), {
	// 		align: "center",
	// 	});
	// }, []);

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

								<div className="h-2/3 lg:h-screen w-full flex flex-col justify-center items-start text-white pr-8">
									<h1 className="text-7xl">{title}</h1>
									<div className="flex flex-wrap gap-2 mt-4 mb-4">
										{tags.map((tag) => {
											const color =
												colors[Math.floor(Math.random() * colors.length)];

											return (
												<Badge
													variant="outline"
													key={generateKey()}
													className="rounded-full"
													style={{
														borderColor: color,
														color: color,
													}}
												>
													{tag}
												</Badge>
											);
										})}
									</div>
									<p className="opacity-60 font-thin">{description}</p>
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
