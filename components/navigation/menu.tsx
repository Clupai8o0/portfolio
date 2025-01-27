"use client";

import { gsap } from "gsap";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { contact, links, socials } from "@/lib/links";
import { ArrowUpRight, MenuIcon, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import Logo from "./logo";

const Menu = () => {
	const container = useRef(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const tl = useRef(null);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useGSAP(
		() => {
			gsap.set(".menu-link-item-holder", { y: 75 });
			//@ts-ignore
			tl.current = gsap
				.timeline({ paused: true })
				.to(".menu-overlay", {
					duration: 1.25,
					clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
					ease: "power4.inOut",
				})
				.to(".menu-link-item-holder", {
					y: 0,
					duration: 1,
					stagger: 0.1,
					ease: "power4.out",
					delay: -0.75,
				});
		},
		{ scope: container }
	);

	useEffect(() => {
		if (isMenuOpen) {
			//@ts-ignore
			tl.current.play();
		} else {
			//@ts-ignore
			tl.current.reverse();
		}
	}, [isMenuOpen]);

	return (
		<div ref={container} className="flex items-center">
			<button
				className="text-white cursor-pointer text-xl font-sans"
				onClick={toggleMenu}
				id="menu-button"
			>
				<MenuIcon className="w-8 h-8" />
			</button>

			{/* menu-overlay */}
			<div className="fixed-full w-screen h-dvh py-8 px-4 md:px-8 bg-slate-100 z-10 flex menu-overlay">
				<div className="w-full h-full flex max-w-7xl mx-auto relative">
					{/* menu-overlay-bar */}
					<div className="fixed-top-center nav-layout z-[1] max-w-7xl">
						<Link href="/">
							<Logo className="text-black text-xl" />
						</Link>
						<button className="text-black cursor-pointer" onClick={toggleMenu}>
							<X className="h-8 w-8" />
						</button>
					</div>

					{/* menu overlay items */}
					<div className="hidden lg:block flex-[2]"></div>

					<div className="flex-[4] flex flex-col justify-between pt-32 lg:pt-16">
						<div>
							{links.map((link, index) => (
								<div key={index} className="overflow-wrapper w-max">
									{/* //! not so sure about this line */}
									<div
										className="menu-link-item-holder relative"
										onClick={toggleMenu}
									>
										<Link
											className="text-black text-6xl md:text-7xl font-light"
											href={link.path}
										>
											{link.label}
										</Link>
									</div>
								</div>
							))}
						</div>

						<div className="flex gap-2">
							<div className="flex-1 flex flex-col justify-end">
								{socials.map((social) => (
									<a
										href={social.path}
										className="flex items-center gap-1"
										key={social.label}
									>
										{social.label} <ArrowUpRight className="w-4 h-4" />
									</a>
								))}
							</div>
							<div className="flex-1 flex flex-col justify-end">
								<a href={`mailto:${contact.email}`}>{contact.email}</a>
								<a href={`tel:${contact.phone.split(" ").join("-")}`}>
									{contact.phone}
								</a>
							</div>
						</div>
					</div>
					<div className="flex-[4]" />
				</div>
			</div>
		</div>
	);
};

export default Menu;
