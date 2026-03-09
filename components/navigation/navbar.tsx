"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Logo from "./logo";
import Menu from "./menu";

import { animateLogoIn } from "@/lib/animations";
import Link from "./transition-link";

const Navbar = () => {
	const container = useRef(null);

	useGSAP(
		() => {
			animateLogoIn(6);
			gsap.from(["#contact-button", "#menu-button"], {
				yPercent: 100,
				opacity: 0,
				duration: 0.5,
				delay: 6.5,
				stagger: 0.2,
				ease: "power2.out",
			});
		},
		{ scope: container }
	);

	return (
		<header ref={container} className="nav-layout">
			<Logo className="text-white text-xl" />
			<nav className="flex gap-8 items-center">
				<div id="contact-button" className="hidden md:flex gap-4 items-center">
					<Link href="/resume" className="text-white text-base font-light hover:opacity-70 transition duration-300">
						Resume
					</Link>
					<Link href="/contact" className="button">
						Contact
					</Link>
				</div>
				<Menu />
			</nav>
		</header>
	);
};

export default Navbar;
