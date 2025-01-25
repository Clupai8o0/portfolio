"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { generateKey } from "@/lib/utils";
import { ColourfulText } from "./colorful-text";
import { Cover } from "./text-wrap";
import { Spotlight } from "./spotlight";

function HeroContent() {
	const container = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline();
			tl.from(".hero-word", {
				yPercent: 110,
				duration: 0.5,
				ease: "power1.out",
				stagger: 0.2,
				delay: 4,
			});
		}
		// { scope: container }
	);

	return (
		<div className="mx-auto mt-16 flex justify-center" ref={container}>
			<Spotlight
				className="-top-40 left-0 md:left-[600px] md:-top-16"
				fill="white"
			/>
			<h1 className="text-center text-9xl max-w-7xl flex flex-wrap justify-center gap-2">
				{"Building Creative & Innovative Solutions That Just Make You Go Wow!"
					.split(" ")
					.map((word) => {
						if (word === "Creative")
							return (
								<div className="overflow-wrapper" key={generateKey()}>
									<span className="hero-word block">
										<ColourfulText text="Creative" />
									</span>
								</div>
							);
						if (word === "Innovative")
							return (
								<div className="overflow-wrapper" key={generateKey()}>
									<span className="hero-word block">
										<Cover>Innovative</Cover>
									</span>
								</div>
							);
						if (word === "Solutions")
							return (
								<div className="overflow-wrapper" key={generateKey()}>
									<span className="hero-word block from-yellow-100 bg-clip-text bg-gradient-to-b to-yellow-500 not-italic text-transparent">
										Solutions
									</span>
								</div>
							);

						return (
							<div className="overflow-wrapper" key={generateKey()}>
								<span className="hero-word block">{word}</span>
							</div>
						);
					})}
			</h1>
		</div>
	);
}

export default HeroContent;
