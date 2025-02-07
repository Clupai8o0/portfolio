"use client";

import clsx from "clsx";
import gsap from "gsap";
import React from "react";
import { Sparkle } from "lucide-react";
import { useGSAP } from "@gsap/react";

const Spark = ({ id, className }: { id: string; className: string }) => (
	<Sparkle
		id={id}
		className={clsx(
			"text-yellow-400 fill-yellow-400 z-10 opacity-0",
			className
		)}
	/>
);

const SparklePop = ({ delay }: { delay?: number }) => {
	const container = React.useRef(null);

	const sparkleAnim = (id: string, x: number, y: number) => {
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
				delay,
			}
			// "="
		);
	};

	useGSAP(
		() => {
			const mm = gsap.matchMedia();

			mm.add("(min-width: 900px)", () => {
				sparkleAnim("#spark-1", -500, -700);
				sparkleAnim("#spark-2", 400, 300);
				sparkleAnim("#spark-3", -90, 300);
				sparkleAnim("#spark-4", 700, -100);
				sparkleAnim("#spark-5", 215, -150);
				sparkleAnim("#spark-6", -400, -80);
			});
			mm.add("(max-width: 899px)", () => {
				sparkleAnim("#spark-1", -500 * 0.7, -700 * 0.7);
				sparkleAnim("#spark-2", 400 * 0.7, 300 * 0.7);
				sparkleAnim("#spark-3", -90 * 0.7, 300 * 0.7);
				sparkleAnim("#spark-4", 700 * 0.7, -100 * 0.7);
				sparkleAnim("#spark-5", 215 * 0.7, -150 * 0.7);
				sparkleAnim("#spark-6", -400 * 0.7, -80 * 0.7);
			});
		},
		{ scope: container }
	);

	return (
		<div
			className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10"
			ref={container}
		>
			<Spark id="spark-1" className="h-2 w-2 rotate-3" />
			<Spark id="spark-2" className="h-4 w-4 -rotate-2" />
			<Spark id="spark-3" className="h-5 w-5 rotate-6" />
			<Spark id="spark-4" className="h-6 w-6 -rotate-12" />
			<Spark id="spark-5" className="h-8 w-8 rotate-45" />
			<Spark id="spark-6" className="h-12 w-12 rotate-3" />
		</div>
	);
};

export default SparklePop;
