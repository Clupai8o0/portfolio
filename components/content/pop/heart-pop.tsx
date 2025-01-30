"use client";

import clsx from "clsx";
import gsap from "gsap";
import React from "react";
import { Heart, Sparkle } from "lucide-react";
import { useGSAP } from "@gsap/react";

const Love = ({ id, className }: { id: string; className: string }) => (
	<Heart
		id={id}
		className={clsx(
			"text-red-400 fill-red-400 z-10 opacity-0",
			className
		)}
	/>
);

const HeartPop = () => {
	const container = React.useRef(null);

	const heartAnim = (id: string, x: number, y: number) => {
		gsap.fromTo(
			id,
			{
				xPercent: x - x / 2,
				yPercent: y - y / 2,
				opacity: 0,
				scale: 0.8,
			},
			{
				xPercent: x,
				yPercent: y,
				opacity: 1,
				scale: 1,
				duration: 0.8,
				ease: "power4.out",
				// delay: id === "#spark-1" ? 8 : 0,
				delay: 8,
			}
			// "="
		);
	};

	useGSAP(
		() => {
			const mm = gsap.matchMedia();

			mm.add("(min-width: 900px)", () => {
				heartAnim("#heart-1", -500, -700);
				heartAnim("#heart-2", 400, 300);
				heartAnim("#heart-3", -90, 300);
				heartAnim("#heart-4", 700, -100);
				heartAnim("#heart-5", 215, -150);
				heartAnim("#heart-6", -400, -80);
			});
			mm.add("(max-width: 899px)", () => {
				heartAnim("#heart-1", -500 * 0.7, -700 * 0.7);
				heartAnim("#heart-2", 400 * 0.7, 300 * 0.7);
				heartAnim("#heart-3", -90 * 0.7, 300 * 0.7);
				heartAnim("#heart-4", 700 * 0.7, -100 * 0.7);
				heartAnim("#heart-5", 215 * 0.7, -150 * 0.7);
				heartAnim("#heart-6", -400 * 0.7, -80 * 0.7);
			});
		},
		{ scope: container }
	);

	return (
		<div
			className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10"
			ref={container}
		>
			<Love id="heart-1" className="h-2 w-2 rotate-3" />
			<Love id="heart-2" className="h-4 w-4 -rotate-2" />
			<Love id="heart-3" className="h-5 w-5 rotate-6" />
			<Love id="heart-4" className="h-6 w-6 -rotate-12" />
			<Love id="heart-5" className="h-8 w-8 rotate-45" />
			<Love id="heart-6" className="h-12 w-12 rotate-3" />
		</div>
	);
};

export default HeartPop;
