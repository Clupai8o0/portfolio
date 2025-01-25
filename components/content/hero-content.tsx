"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { generateKey } from "@/lib/utils";

function HeroContent() {
	const container = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline();
			tl.from(".hero-word", {
				yPercent: 100,
				duration: 0.5,
				ease: "power1.out",
				stagger: 0.2,
				delay: 4,
			});
		},
		// { scope: container }
	);

	return (
		<div className="mx-auto mt-16 flex justify-center" ref={container}>
			<h1 className="text-center text-9xl max-w-7xl flex flex-wrap justify-center gap-2">
				{"Building Innovative & Creative Solutions That Just Make You Go Wow!"
					.split(" ")
					.map((word) => (
						<div className="overflow-wrapper" key={generateKey()}>
							<span className="hero-word block">{word}</span>
						</div>
					))}
			</h1>
		</div>
	);
}

export default HeroContent;
