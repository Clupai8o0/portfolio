"use client";

import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { BackgroundGradient } from "../containers/background-gradient";

gsap.registerPlugin(ScrollTrigger);
function ClipImage() {
	const container = useRef(null);

	useGSAP(
		() => {
			gsap.from(".about-image", {
				y: 50,
				opacity: 0,
				duration: 0.8,
				ease: "power4.out",
				delay: 9,
			});

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
			clipAnimation.to(".about-image", {
				top: 0
			}, "=")
		},
		{ scope: container }
	);

	return (
		<div className="min-h-screen w-screen" data-scroll data-scroll-speed="0.3">
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
		</div>
	);
}

export default ClipImage;
