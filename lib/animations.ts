import gsap from "gsap";
import { SnapOptions } from "lenis/snap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = (delay?: number) => {
	const banner = document.getElementById("banner");

	if (banner) {
		const tl = gsap.timeline();

		tl.set(banner, {
			yPercent: 0,
		}).to(banner, {
			yPercent: -100,
			duration: 0.8,
			delay,
			ease: "power1.inOut",
		});
	}
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
	const banner = document.getElementById("banner");

	if (banner) {
		const tl = gsap.timeline();

		tl.set(banner, {
			yPercent: 100,
		}).to(banner, {
			yPercent: 0,
			duration: 0.8,
			onComplete: () => {
				router.push(href);
			},
		});
	}
};

export const animateLogoIn = (delay?: number) => {
	gsap.to(".logo-letter", {
		yPercent: 0,
		duration: 0.3,
		stagger: 0.05,
		delay,
		ease: "power4.out",
	});
};
export const animateLogoOut = (delay?: number) => {
	gsap.to(".logo-letter", {
		yPercent: 110,
		duration: 0.3,
		stagger: 0.05,
		delay,
		ease: "sine.in",
	});
};

export const scrollSnapSettings: SnapOptions = {
	type: "proximity",
	lerp: 0.1,
	duration: 0.8,
	velocityThreshold: 2,
	easing: (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2),
	// onSnapStart: (snap) => {
	// 	console.log("snap start", snap);
	// },
	// onSnapComplete: (snap) => {
	// 	console.log("snap finish", snap);
	// },
};

// random comment