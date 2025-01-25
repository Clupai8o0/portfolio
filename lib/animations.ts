import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
	const banner = document.getElementById("banner");

	if (banner) {
		const tl = gsap.timeline();

		tl.set(banner, {
			xPercent: 0,
		})
			.to(banner, {
				xPercent: 100,
				duration: 0.8,
				delay: 1,
			})
			.to(
				banner,
				{
					borderTopLeftRadius: "50vh",
					borderBottomLeftRadius: "50vh",
					duration: 0.4,
				},
				"<"
			);
	}
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
	const banner = document.getElementById("banner");

	if (banner) {
		const tl = gsap.timeline();

		tl.set(banner, {
			xPercent: -100,
			borderTopRightRadius: "50vh",
			borderBottomRightRadius: "50vh",
			borderTopLeftRadius: 0,
			borderBottomLeftRadius: 0,
		})
			.to(banner, {
				xPercent: 0,
				duration: 0.8,
				onComplete: () => {
					router.push(href);
				},
			})
			.to(
				banner,
				{
					borderTopRightRadius: 0,
					borderBottomRightRadius: 0,
					duration: 0.4,
				},
				"<"
			);
	}
};
