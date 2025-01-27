"use client";

import { useGSAP } from "@gsap/react";
import Logo from "./logo";
import { useRef } from "react";
import { animateLogoIn } from "@/lib/animations";
import Link from "./transition-link";
import Menu from "./menu/menu";

const Navbar = () => {
	const container = useRef(null);

	useGSAP(
		() => {
			animateLogoIn(6);
		},
		{ scope: container }
	);

	return (
		<header
			ref={container}
			className="h-24 w-full flex items-center justify-between px-4"
		>
			<Logo className="text-white text-xl" />
			<Menu />
		</header>
	);
};

export default Navbar;
