"use client";

import { generateKey } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import Cover from "./cover";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import GradientText from "./gradient-text";
import TrueFocus from "./true-focus";
import FallingText from "./falling-text";
import RotatingText from "./rotating-text";
import ShinyText from "./shiny-text";
import clsx from "clsx";

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
								className={clsx("overflow-wrapper-2 relative about-wrapper", word === "problems." && "overflow-wrapper-3")}
							>
								<span className="block about-word">
									{(() => {
										if (word === "Limbu.") return;
										if (word === "developer")
											return (
												<div className="mx-3 my-2">
													<TrueFocus
														sentence="Developer"
														blurAmount={5}
														borderColor="blue"
														animationDuration={2}
														pauseBetweenAnimations={1}
													/>
												</div>
											);
										if (word === "creative") return (
											<GradientText
												colors={[
													"#ffbe0b",
													"#fb5607",
													"#ff006e",
													"#8338ec",
													"#3a86ff",
												]}
												animationSpeed={3}
												showBorder={false}
											>
												Creative
											</GradientText>
										);
										if (word === "Innovative") return <Cover>Innovative</Cover>;
										if (word === "Solutions")
											return <span className="text-solutions">Solutions</span>;
										if (word === "problems.")
											return (
												<span className="">
													<u className="decoration-wavy decoration-red-600 md:underline-offset-[16px]">problems</u>.
												</span>
											);
										if (word === "websites")
											return (
												<RotatingText
													texts={["websites", "applications"]}
													//todo: perfect this later
													mainClassName="px-2 sm:px-2 md:px-5 bg-blue-500 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-xl font-medium"
													staggerFrom={"last"}
													initial={{ y: "100%" }}
													animate={{ y: 0 }}
													exit={{ y: "-120%" }}
													staggerDuration={0.025}
													splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
													transition={{
														type: "spring",
														damping: 30,
														stiffness: 400,
													}}
													rotationInterval={2000}
												/>
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
