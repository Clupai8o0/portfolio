"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Logo from "./logo";
import Menu from "./menu";

import { animateLogoIn } from "@/lib/animations";

const Navbar = () => {
	const container = useRef(null);

	useGSAP(
		() => {
			animateLogoIn(6);
			gsap.from("#menu-button", {
				yPercent: 100,
				opacity: 0,
				duration: 0.5,
				delay: 6.5,
				ease: "power4.out",
			});
		},
		{ scope: container }
	);

	return (
		<header
			ref={container}
			className="nav-layout"
		>
			<Logo className="text-white text-xl" />
			<Menu />
		</header>
	);
};

export default Navbar;
