"use client";

import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function ClipImage() {
	const container = useRef(null);

	useGSAP(
		() => {
			const clipAnimation = gsap.timeline({
				scrollTrigger: {
					trigger: "#clip",
					start: "center center",
					end: "+=800 center",
					scrub: 0.5,
					pin: true,
					pinSpacing: true,
				},
			});

			clipAnimation.to(".mask-clip-path", {
				width: "100vw",
				height: "100vh",
				borderRadius: 0,
			});
		},
		{ scope: container }
	);

	return (
		<div className="relative w-screen h-screen" ref={container}>
			<div className="h-dvh w-screen" id="clip">
				<div className="mask-clip-path about-image">
					<img
						src="/img.jpg"
						alt="Background"
						className="absolute left-0 top-0 size-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
}

export default ClipImage;
