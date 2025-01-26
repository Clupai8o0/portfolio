"use client";

import { generateKey } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Navbar = () => {
	const container = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline();
			tl.from(".logo-letter", {
				yPercent: 100,
				duration: 0.3,
				stagger: 0.05,
				ease: "sine.inOut",
				delay: 7,
				opacity: 0,
			});
		},
		{ scope: container }
	);

	return (
		<header
			className="h-20 flex items-center w-full border-b border-white border-opacity-0"
			ref={container}
		>
			<nav className="w-full flex items-center justify-between">
				<div className="overflow-wrapper">
					<h1 className="text-xl font-sans font-regular text-white flex items-center">
						{"clupai".split("").map((letter) => (
							<span key={generateKey()} className="block logo-letter">
								{letter}
							</span>
						))}
					</h1>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
