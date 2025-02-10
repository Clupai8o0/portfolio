"use client";

import clsx from "clsx";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { generateKey } from "@/lib/utils";

import Cover from "./cover";
import ShinyText from "./shiny-text";
import TrueFocus from "./true-focus";
import GradientText from "./gradient-text";
import RotatingText from "./rotating-text";

const aboutText = [
	"Hi 👋, I'm Samridh Limbu. A creative developer that loves to make Innovative Solutions to real-world problems.",
	"I'm skilled in developing websites and I'm constantly learning new technology.",
	// "Besides coding, I love reading, making art, and spending time with my loved ones.",
];

gsap.registerPlugin(ScrollTrigger);
function About() {
	const container = useRef(null);

	useEffect(() => {
		gsap.utils.toArray(".about-section").forEach((section: any, i) => {
			const wrappers = section.querySelectorAll(".about-wrapper");

			wrappers.forEach((wrapper: any) => {
				const word = wrapper.querySelector(".about-word");

				gsap.fromTo(
					word,
					{
						y: 140,
					},
					{
						y: 0,
						duration: 0.5,
						ease: "power1.out",
						scrollTrigger: {
							trigger: wrapper,
							start: "top 75%",
							toggleActions: "play none play none",
						},
					}
				);
			});
		});
	}, []);

	return (
		<section
			className="min-h-screen w-full p pt-8 md:pt-12 pb-16 md:pb-24 lg:pb-32 relative"
			ref={container}
		>
			<div className="flex flex-col gap-6 md:gap-10 text-5xl md:text-6xl lg:text-8xl font-light">
				{aboutText.map((section) => (
					<section
						className="about-section w-full flex items-center flex-wrap justify-start gap-2 md:gap-3"
						key={generateKey()}
					>
						{section.split(" ").map((word) => (
							<div
								key={generateKey()}
								className={clsx(
									"overflow-wrapper-2 relative about-wrapper",
									word === "problems." && "overflow-wrapper-3",
									word === "Developer" && "overflow-wrapper-2-full",
									word === "Innovative" && "overflow-wrapper-2-full"
								)}
							>
								<span className="block about-word">
									{(() => {
										if (word === "developer")
											return (
												<div className="mx-3 my-2">
													<TrueFocus sentence="Developer" borderColor="blue" />
												</div>
											);
										if (word === "creative")
											return <GradientText>Creative</GradientText>;
										if (word === "Innovative") return <Cover>Innovative</Cover>;
										if (word === "Solutions")
											return <span className="text-solutions">Solutions</span>;
										if (word === "problems.")
											return (
												<span className="">
													<u className="decoration-wavy decoration-red-600 md:underline-offset-[16px]">
														problems
													</u>
													.
												</span>
											);

										if (word === "websites")
											return (
												<RotatingText texts={["websites", "applications"]} />
											);
										if (word === "technology.")
											return <ShinyText text="technology." speed={3} />;

										return word;
									})()}
								</span>
							</div>
						))}
					</section>
				))}
			</div>
		</section>
	);
}

export default About;
