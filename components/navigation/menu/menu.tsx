"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { links } from "@/lib/links";

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
		<div className="menu-container" ref={container}>
			{/* menu-bar */}
			<div className="menu-bar">
				<div className="menu-logo">
					<Link href="/">Codegrid</Link>
				</div>
				<div className="menu-open" onClick={toggleMenu}>
					<p>Menu</p>
				</div>
			</div>

			{/* menu-overlay */}
			<div className="menu-overlay">
				{/* menu-overlay-bar */}
				<div className="menu-overlay-bar">
					<div className="menu-logo">
						<Link href="/">Codegrid</Link>
					</div>
					<div className="menu-close">
						<p onClick={toggleMenu}>Close</p>
					</div>
				</div>

				{/* menu overlay items */}
				<div className="menu-close-icon" onClick={toggleMenu}>
					<p>&#x2715;</p>
				</div>
				<div className="menu-copy">
					<div className="menu-links">
						{links.map((link, index) => (
							<div key={index} className="menu-link-item">
								<div className="menu-link-item-holder" onClick={toggleMenu}>
									<Link className="menu-link" href={link.path}>
										{link.label}
									</Link>
								</div>
							</div>
						))}
					</div>
					<div className="menu-info">
						<div className="menu-info-col">
							<a href="#">X &#8599;</a>
							<a href="#">Instagram &#8599;</a>
							<a href="#">LinkedIn &#8599;</a>
							<a href="#">Behance &#8599;</a>
							<a href="#">Dribbble &#8599;</a>
						</div>
						<div className="menu-info-col">
							<p>info@codegrid.com</p>
							<p>0923 3984 23</p>
						</div>
					</div>
				</div>
				<div className="menu-preview">
					<p>View ShowReel</p>
				</div>
			</div>
		</div>
	);
};

export default Menu;
