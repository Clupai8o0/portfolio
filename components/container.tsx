"use client";

import clsx from "clsx";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { BaseWrapperProps } from "@/lib/props";

interface WrapperProps extends BaseWrapperProps {
	parentClassName?: string;
	outerChildren?: React.ReactNode;
	animate?: {
		tlVars?: gsap.TimelineVars;
		targets: gsap.TweenTarget;
		vars: gsap.TweenVars;
		onScrollAnim?: boolean;
	};
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Container = ({
	className,
	children,
	outerChildren,
	id,
	parentClassName,
	animate,
}: WrapperProps) => {
	const container = useRef(null);

	useGSAP(
		() => {
			if (animate) {
				const finalTlVars = animate.tlVars || {};
				if (animate.onScrollAnim)
					finalTlVars.scrollTrigger = {
						trigger: container.current,
						start: "top center",
					};

				const tl = gsap.timeline(finalTlVars);
				tl.from(animate.targets || "", animate.vars || {});
			}
		},
		{ scope: container }
	);

	return (
		<section
			className={clsx(
				"w-full flex justify-center snap-center overflow-hidden",
				parentClassName
			)}
			id={id}
		>
			{outerChildren}
			<div
				className={clsx("flex flex-col relative max-w-7xl w-full", className)}
				ref={container}
			>
				{children}
			</div>
		</section>
	);
};

export default Container;
