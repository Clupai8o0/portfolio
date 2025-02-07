import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
	const banner = document.getElementById("banner");

	if (banner) {
		const tl = gsap.timeline();

		tl.set(banner, {
			yPercent: 0,
		}).to(banner, {
			yPercent: -100,
			duration: 0.8,
			delay: 1,
			ease: "power1.inOut"
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
export const animateLogoOut = () => {
	gsap.to(".logo-letter", {
		yPercent: 110,
		duration: 0.3,
		stagger: 0.05,
		ease: "sine.in",
	});
};