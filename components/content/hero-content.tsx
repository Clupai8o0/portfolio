"use client";

import clsx from "clsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

import { generateKey } from "@/lib/utils";

import Cover from "./cover";
import SparklePop from "./sparkle-pop";
import GradientText from "./gradient-text";

const heroPhrase =
	"Building Creative & Innovative Solutions that just make you go Wow!".split(
		" "
	);

const HeroContent = () => {
	const container = useRef(null);

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
						delay: i === 0 ? 6.65 : 0,
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
		<div ref={container} className="mt-8 md:mt-16" id="home">
			<h1 className="flex flex-wrap justify-start items-center gap-2 md:gap-3 lg:gap-4 font-light font-sans text-6xl md:text-7xl lg:text-[108px] p">
				{heroPhrase.map((word, i) => (
					<div key={generateKey()} className="relative">
						{word === "Wow!" && <SparklePop delay={9} />}

						{/* //* every other word */}
						<div
							className={clsx(
								(word === "Innovative" && "overflow-wrapper-full") ||
									"overflow-wrapper-2"
							)}
						>
							<div className={`word-${i} text-slate-200`}>
								{(() => {
									if (word === "Creative")
										return <GradientText>Creative</GradientText>;
									if (word === "Innovative") return <Cover>Innovative</Cover>;
									if (word === "Solutions")
										return <span className="text-solutions">Solutions</span>;
									if (word === "Wow!")
										return <span className="text-white font-medium">Wow!</span>;

									return word;
								})()}
							</div>
						</div>
					</div>
				))}
			</h1>
		</div>
	);
};

export default HeroContent;
