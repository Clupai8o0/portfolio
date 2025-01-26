"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { generateKey } from "@/lib/utils";
import { ColourfulText } from "./colorful-text";
import { Cover } from "./text-wrap";
import { Spotlight } from "./spotlight";
import { Sparkle } from "lucide-react";

function HeroContent() {
	const container = useRef(null);

	const sparkleAnim = (
		tl: gsap.core.Timeline,
		id: string,
		y1: number,
		x1: number,
		y2: number,
		x2: number
	) => {
		tl.fromTo(
			id,
			{ yPercent: y1, xPercent: x1, opacity: 0 },
			{
				yPercent: y2,
				xPercent: x2,
				opacity: 1,
				duration: 0.4,
				ease: "power1.out",
			},
			"text-in>"
		);
	};

	useGSAP(
		() => {
			const tl = gsap.timeline();
			tl.from(
				".hero-word",
				{
					yPercent: 110,
					duration: 0.5,
					ease: "power1.out",
					stagger: 0.2,
					delay: 4.5,
				},
				"text-in"
			);

			sparkleAnim(tl, "#sparkle-1", 0, 0, -200, -300);
			// sparkleAnim(tl, "#sparkle-2", 45, 45, 30, -10);
			// sparkleAnim(tl, "#sparkle-3", 40, 40, 80, 300);
			// sparkleAnim(tl, "#sparkle-4", 20, 40, 30, 120);
			// sparkleAnim(tl, "#sparkle-5", 25, 45, 25, 115);
		}
		// { scope: container }
	);

	return (
		<div className="mx-auto mt-16 flex justify-center" ref={container}>
			<Spotlight
				className="-top-40 left-0 md:left-[600px] md:-top-16"
				fill="white"
			/>
			<h1 className="text-[108px] max-w-7xl flex flex-wrap justify-start gap-2 leading-[1] font-light font-sans">
				{"Building Creative & Innovative Solutions that just make you go Wow!"
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
									<span className="hero-word block font-sans font-light">
										<Cover>Innovative</Cover>
									</span>
								</div>
							);
						if (word === "Solutions")
							return (
								<div className="overflow-wrapper" key={generateKey()}>
									<span className="hero-word block from-yellow-100 bg-clip-text bg-gradient-to-b to-yellow-500 not-italic text-transparent font-sans font-medium">
										Solutions
									</span>
								</div>
							);
						if (word === "Wow!")
							return (
								<div
									key={generateKey()}
									className="relative flex items-center justify-center"
								>
									<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
										<Sparkle
											id="sparkle-1"
											className="sparkle h-5 w-5 rotate-12"
										/>
										<Sparkle
											id="sparkle-2"
											className="sparkle h-8 w-8 rotate-45"
										/>
										<Sparkle
											id="sparkle-3"
											className="sparkle h-2 w-2 rotate-6"
										/>
										<Sparkle
											id="sparkle-4"
											className="sparkle h-12 w-12 -rotate-12"
										/>
										<Sparkle
											id="sparkle-5"
											className="sparkle h-4 w-4 -rotate-12"
										/>
									</div>
									<div className="overflow-wrapper">
										<span className="block hero-word font-medium text-white">Wow!</span>
									</div>
								</div>
							);

						return (
							<div className="overflow-wrapper" key={generateKey()}>
								<span className="hero-word block text-slate-300">{word}</span>
							</div>
						);
					})}
			</h1>
		</div>
	);
}

export default HeroContent;
