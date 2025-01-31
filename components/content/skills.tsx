"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import Bounded from "../containers/bounded";
import { Circle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
	const container = useRef(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					pin: true,
					start: "top bottom",
					end: "bottom top",
					scrub: 4,
				},
			});

			tl.fromTo(
				".skills-row",
				{
					x: (i) => {
						return i % 2 === 0
							? gsap.utils.random(600, 400)
							: gsap.utils.random(-600, -400);
					},
				},
				{
					x: (i) => {
						return i % 2 === 0
							? gsap.utils.random(-600, -400)
							: gsap.utils.random(600, 400);
					},
				}
			);
		}, container);

		return () => ctx.revert();
	});

	return (
		<section className="wrapper overflow-hidden" ref={container}>
			<div className="skills-row mb-8 flex items-center justify-center gap-4 text-slate-700">
				{Array.from({ length: 15 }, (_, i) => (
					<React.Fragment key={i}>
						<span
							className="skill-item text-8xl font-extrabold uppercase tracking-tighter"
							style={{ color: i === 7 && "#808080" ? "#808080" : "inherit" }}
						>
							Tech
						</span>
						<span className="text-3xl">
							<Circle />
						</span>
					</React.Fragment>
				))}
			</div>
		</section>
	);
};

export default Skills;
