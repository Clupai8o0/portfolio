"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

import { animatePageIn } from "@/lib/animations";
import { generateKey } from "@/lib/utils";

interface Props {
	children: React.ReactNode;
}

function Template({ children }: Props) {
	const [count, setCount] = useState(0);

	const updateCounter = () => {
		if (count === 100) return;
		const addedValue = count + Math.floor(Math.random() * 10) + 1;
		if (addedValue > 100) return setCount(100);
		setCount(addedValue);
	};

	// useEffect(() => {
	// 	gsap.fromTo(
	// 		".logo-letter",
	// 		{
	// 			yPercent: 100,
	// 		},
	// 		{
	// 			duration: 0.1,
	// 			stagger: 0.05,
	// 			ease: "power1.out",
	// 			yPercent: 0,
	// 			delay: 0.1,
	// 		}
	// 	);
	// }, []);

	useEffect(() => {
		const timeout = setTimeout(
			updateCounter,
			Math.floor(Math.random() * 200) + 50
		);

		// once count turns 100, fade the count out
		if (count === 100) {
			gsap.to("#counter", {
				yPercent: 100,
				duration: 0.5,
				ease: "power1.in",
				delay: 0.3,
			});
			gsap.to(".logo-letter", {
				yPercent: 100,
				duration: 0.3,
				stagger: 0.05,
				ease: "power1.in",
			});
			animatePageIn();
		}
		return () => clearTimeout(timeout);
	}, [count]);

	return (
		<div>
			<div
				id="banner"
				className="h-screen w-screen fixed top-0 left-0 bg-stone-100 z-50"
			>
				<div className="h-full w-full absolute top-0 left-0 flex items-center justify-center p-24">
					<div className="overflow-wrapper">
						<h1 className="text-6xl font-sans font-regular text-black flex items-center">
							{"clupai".split("").map((letter) => (
								<span key={generateKey()} className="block logo-letter">
									{letter}
								</span>
							))}
						</h1>
					</div>
				</div>
				<div className="h-full w-full absolute top-0 left-0 flex items-end justify-end p-24">
					<div className="overflow-wrapper">
						<span
							className="block font-sans text-9xl font-regular text-black"
							id="counter"
						>
							{count}
						</span>
					</div>
				</div>
			</div>
			{children}
		</div>
	);
}

export default Template;
