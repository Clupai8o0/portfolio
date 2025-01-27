"use client";

import { useEffect, useRef, useState } from "react";
// import Link from "../transition-link";
import Link from "next/link";
import Logo from "../logo";
import { links } from "@/lib/links";
import { generateKey } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
			tl.current = gsap
				.timeline({ paused: true })
				.to(".menu-overlay", {
					duration: 1.25,
					clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
					ease: "power4.inOut",
				})
				.fromTo(
					".menu-link-item-holder",
					{ y: 75 },
					{
						y: 100,
						duration: 1,
						stagger: 0.1,
						ease: "power4.out",
						delay: -0.75,
						// delay: 2,
					}
				);
		},
		{ scope: container }
	);

	useEffect(() => {
		if (isMenuOpen) {
			console.log("animating");
			tl.current.play();
		} else {
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
						{links.map((link) => (
							<div key={generateKey()} className="menu-link-item">
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
