"use client";

import { generateKey } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { ColourfulText } from "./colorful-text";
import gsap from "gsap";

const heroPhrase =
	"Building Creative & Innovative Solutions that just make you go Wow!".split(
		" "
	);

const HeroContent = () => {
	const container = useRef(null);

	const animateBottomTop = (
		tl: gsap.core.Timeline,
		target: gsap.TweenTarget,
		delay?: number,
		position?: string
	) =>
		tl.from(
			target,
			{
				yPercent: 100,
				duration: 0.5,
				ease: "power4.out",
				delay,
			},
			position
		);

	useGSAP(
		() => {
			const tl = gsap.timeline();

			let j = 0;
			heroPhrase.map((_, i) => {
				tl.from(
					`.word-${i}`,
					{
						yPercent: j === 0 ? 110 : j === 1 ? -110 : 0,
						xPercent: j === 2 ? 110 : j === 3 ? -110 : 0,
						duration: 1,
						ease: "power4.out",
						delay: i === 0 ? 5.65 : 0,
					},
					">-0.75"
				);
				j++;
				if (j === 4) j = 0;
			});
		},
		{ scope: container }
	);

	return (
		<div ref={container} className="mt-16">
			<h1 className="flex flex-wrap justify-start gap-2 lg:gap-4 font-light font-sans text-6xl md:text-7xl lg:text-[108px] p">
				{heroPhrase.map((word, i) => (
					<div key={generateKey()} className="overflow-wrapper-2">
						<div className={`word-${i} text-slate-200`}>
							{(() => {
								if (word === "Creative")
									return <ColourfulText text="Creative" />;

								return word;
							})()}
						</div>
					</div>
				))}
			</h1>
		</div>
	);
};

export default HeroContent;
