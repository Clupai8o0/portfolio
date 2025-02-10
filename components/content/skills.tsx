"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Skill from "./skill";
import Bounded from "../containers/bounded";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
function Skills() {
	const container = useRef(null);
	useGSAP(
		() => {
			gsap.fromTo(
				".word",
				{
					y: 120,
				},
				{
					y: 0,
					duration: 0.5,
					ease: "power1.out",
					scrollTrigger: {
						trigger: ".overflow-wrapper",
						start: "top 75%",
						toggleActions: "play none play none",
					},
				}
			);

			gsap.fromTo(
				".skill-wrapper",
				{
					y: 120,
				},
				{
					y: 0,
					duration: 0.5,
					ease: "power1.out",
					scrollTrigger: {
						trigger: ".skill-wrapper",
						start: "top 75%",
						toggleActions: "play none play none",
					},
				}
			);
		},
		{ scope: container }
	);

	return (
		<section ref={container}>
			<Bounded className="mb-12">
				<h1 className="skills-title text-white text-6xl md:text-7xl lg:text-[108px] text-center">
					<div className="overflow-wrapper flex gap-4 justify-center">
						{"My Skills".split(" ").map((word) => (
							<span className="word">{word}</span>
						))}
					</div>
				</h1>
			</Bounded>

			<Skill text="Web-development" />
			<Skill text="mobile-apps" />
        {/* <Skill />
        <Skill /> */}
		</section>
	);
}

export default Skills;
