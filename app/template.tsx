"use client";

import gsap from "gsap";
import { useEffect, useState } from "react";

import { animateLogoOut, animatePageIn } from "@/lib/animations";
import Logo from "@/components/navigation/logo";

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

	useEffect(() => {
		const timeout = setTimeout(
			updateCounter,
			Math.floor(Math.random() * 200) + 50
		);

		// once count turns 100, fade the count out
		if (count === 100) {
			gsap.to("#counter", {
				yPercent: 110,
				duration: 0.5,
				ease: "power1.in",
				delay: 0.3,
			});
			animateLogoOut();
			animatePageIn();
		}
		return () => clearTimeout(timeout);
	}, [count]);

	return (
		<div>
			<div
				id="banner"
				className="h-dvh w-screen fixed top-0 left-0 bg-stone-100 z-[1000]"
			>
				<div className="h-full w-full absolute top-0 left-0 flex items-center justify-center p-24">
					<Logo className="text-black text-4xl md:text-6xl" />
				</div>
				<div className="h-full w-full absolute top-0 left-0 flex items-end justify-end p-12 lg:p-20">
					<div className="overflow-wrapper">
						<span
							className="block font-sans text-6xl md:text-9xl font-regular text-black"
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
