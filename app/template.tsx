"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

import { animatePageIn } from "@/lib/animations";

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
				yPercent: 100,
				duration: 0.5,
				ease: "power1.in",
				delay: 0.3,
			});
			animatePageIn();
		}
		return () => clearTimeout(timeout);
	}, [count]);

	return (
		<div>
			<div
				id="banner"
				className="h-screen w-screen fixed top-0 left-0 bg-slate-100 z-50 flex items-end justify-end p-24"
			>
				<div className="overflow-wrapper">
					<h1 className="font-mono text-9xl font-black text-black" id="counter">
						{count}
					</h1>
				</div>
			</div>
			{children}
		</div>
	);
}

export default Template;
