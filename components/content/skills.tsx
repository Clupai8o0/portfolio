"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Skill from "./skill";
import Bounded from "../containers/bounded";
import { useRef } from "react";
import Title from "./title";

gsap.registerPlugin(ScrollTrigger);
function Skills() {
	const container = useRef(null);
	useGSAP(
		() => {
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
		<section ref={container} id="skills">
			<Bounded className="mb-12">
				<Title text="My Skills" />
			</Bounded>

			<Skill text="Web-development" />
			<Skill text="mobile-apps" />
			{/* <Skill />
        <Skill /> */}
		</section>
	);
}

export default Skills;
