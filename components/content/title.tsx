"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { generateKey } from "@/lib/utils";

interface Props {
	text: string;
}

gsap.registerPlugin(ScrollTrigger);
const Title = ({ text }: Props) => {
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
						trigger: ".overflow-wrapper-2",
						start: "top 75%",
						toggleActions: "play none play none",
					},
				}
			);
		},
		{ scope: container }
	);

	return (
		<h1
			className="text-white text-6xl md:text-7xl lg:text-[108px] text-center"
			ref={container}
		>
			<div className="overflow-wrapper-2 flex gap-4 justify-center">
				{text.split(" ").map((word) => (
					<span className="word block" key={generateKey()}>{word}</span>
				))}
			</div>
		</h1>
	);
};

export default Title;
