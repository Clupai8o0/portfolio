"use client";

import { cn, generateKey } from "@/lib/utils";

import Bounded from "../containers/bounded";
import Title from "./title";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { scrollSnapSettings } from "@/lib/animations";
import { Badge } from "../ui/badge";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

const data = [
	{
		id: "govchat",
		title: "GovChat",
		tags: ["RAG", "Next.js", "FastAPI", "VectorDB", "LLM Apps"],
		description:
			"GovChat is an AI-powered web app that lets users explore Australian government datasets using natural-language questions. It combines a Next.js frontend with a Python FastAPI backend to run a retrieval-augmented generation pipeline for grounded, contextual answers.",
		img: "/govchat.png",
	},
	{
		id: "notes-app",
		title: "Notes App (DevOps Pipeline)",
		tags: ["MERN", "TypeScript", "Docker", "Jenkins", "AWS", "Observability"],
		description:
			"A full-stack note-taking app built with a production-style DevOps pipeline. The system is containerized and deployed on AWS, with CI/CD stages covering build, test, code quality, security scanning, and monitoring—built to reflect real engineering workflows, not just “it runs on my laptop.”",
		img: "/notes-app.png",
	},
	{
		id: "nmmun",
		title: "NMMUN",
		tags: ["Production Web", "Next.js", "SEO", "UX/UI", "Live Event"],
		description:
			"A production website/template built for New Millennium Model United Nations (NMMUN), used as the event’s public information hub. Designed for clarity, performance, and fast content updates under live-event constraints.",
		img: "/nmmun.png",
	},
	{
		id: "krishnaveni",
		title: "Krishnaveni School Website",
		tags: ["Freelance", "Next.js", "SEO", "Conversion", "Real Client", "CMS"],
		description:
			"A production website built for Krishnaveni School, integrating Sanity CMS to allow non-technical staff to manage content independently. The system focuses on usability, accessibility, and SEO, enabling the school to update announcements, pages, and information without developer intervention.",
		img: "/krishnaveni.png",
	},
	{
		id: "pas",
		title: "PAS—Password Manager",
		tags: ["Security", "Full-Stack", "Auth", "Data Handling", "Product Build"],
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni praesentium dolorem labore atque, in deleniti ex, ea cupiditate quis nostrum dolores, repellat ad quisquam earum illo molestiae maiores eius laborum!",
		img: "/pas.png",
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
	const [activeCard, setActiveCard] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const breakpoints = data.map((_, index) => index / data.length);
		const snapTo = gsap.utils.snap(breakpoints);

		const context = gsap.context(() => {
			ScrollTrigger.create({
				trigger: containerRef.current,
				start: "top top",
				end: "bottom bottom",
				scrub: true,
				onUpdate: (self) => {
					const latest = self.progress;
					const closest = breakpoints.reduce(
						(acc, breakpoint, index) =>
							Math.abs(latest - breakpoint) <
							Math.abs(latest - breakpoints[acc])
								? index
								: acc,
						0
					);
					setActiveCard(closest);

					// const snapped = snapTo(self.progress);
					// setActiveCard(breakpoints.indexOf(snapped));
				},
			});
		}, [containerRef, activeCard]);

		return () => context.revert();
	}, []);

	useEffect(() => {
		if (!imageRef.current) return;
		gsap.fromTo(
			imageRef.current,
			{ opacity: 0, scale: 0.98 },
			{ opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
		);
	}, [activeCard]);

	return (
		<section className="mt-24">
			<Bounded className="mb-12 md:mb-20">
				<Title text="My Projects" />
				{/* //todo:fix the animation */}
			</Bounded>

			<div className="relative p">
				<div className="max-w-7xl mx-auto" ref={containerRef}>
					<div className="w-full lg:w-1/2">
						{data.map(({ title, tags, description, id, img }) => (
							<div key={generateKey()} id={id}>
								<div className="w-full h-1/3 lg:hidden">
									<img
										src={data[activeCard].img}
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
								<img
									ref={imageRef}
									src={data[activeCard].img}
									alt={data[activeCard].title}
									className="h-screen object-cover object-left"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
