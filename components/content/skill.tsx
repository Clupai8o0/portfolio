"use client";

import gsap from "gsap";
import { Circle } from "lucide-react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

interface Props {
	text: string;
}

const Skill = ({ text }: Props) => {
	const container = useRef(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					pin: true,
					start: "top bottom",
					end: "bottom top",
					scrub: 0.2,
				},
			});

			tl.fromTo(
				".skill-row",
				{
					x: (i) => {
						return i % 2 === 0
							? gsap.utils.random(800, 200)
							: gsap.utils.random(-800, -200);
					},
				},
				{
					x: (i) => {
						return i % 2 === 0
							? gsap.utils.random(-800, -200)
							: gsap.utils.random(800, 200);
					},
				}
			);
		}, container);

		return () => ctx.revert();
	});

	return (
		<div className="overflow-wrapper">
			<section
				className="wrapper overflow-hidden skill-wrapper"
				ref={container}
			>
				<div className="skill-row mb-6 md:mb-8 flex items-center justify-center gap-4 text-zinc-800">
					{Array.from({ length: 15 }, (_, i) => (
						<React.Fragment key={i}>
							<span
								className={clsx(
									"skill-item text-4xl md:text-6xl uppercase tracking-tighter font-light whitespace-nowrap",
									(i === 7 && "text-white font-medium") || "inherit"
								)}
								style={{ color: i === 7 && "white" ? "white" : "inherit" }}
							>
								{text}
							</span>
							<span className="text-3xl">
								<Circle className="fill-zinc-800" />
							</span>
						</React.Fragment>
					))}
				</div>
			</section>
		</div>
	);
};

export default Skill;
