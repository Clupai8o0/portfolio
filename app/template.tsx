"use client";

import gsap from "gsap";
import { useEffect, useState } from "react";

import { animateLogoOut, animatePageIn } from "@/lib/animations";
import Logo from "@/components/navigation/logo";
import CountUp from "@/components/content/count-up";

interface Props {
	children: React.ReactNode;
}

function Template({ children }: Props) {
	const handleLoad = () => {
		gsap.to(".counter", {
			yPercent: 110,
			duration: 0.5,
			ease: "power1.in",
			delay: 2,
		});
		animateLogoOut(2);
		animatePageIn(3);
	};

	return (
		<div>
			<div
				id="banner"
				className="h-dvh w-screen fixed top-0 left-0 bg-transparent z-[1000]"
				// className="h-dvh w-screen fixed top-0 left-0 bg-stone-100 z-[1000]"
			>
				<div className="h-full w-full absolute top-0 left-0 flex items-center justify-center p-24">
					<Logo className="text-black text-4xl md:text-6xl" />
				</div>
				<div className="h-full w-full absolute top-0 left-0 flex items-end justify-end p-12 lg:p-20">
					<div className="overflow-wrapper">
						<div className="counter">
							<CountUp
								to={100}
								className="font-sans text-6xl md:text-9xl font-regular text-black"
								onEnd={handleLoad}
							/>
						</div>
					</div>
				</div>
			</div>

			{children}
		</div>
	);
}

export default Template;
