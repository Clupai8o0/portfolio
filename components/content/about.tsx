"use client";

import { generateKey } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import Cover from "./cover";
// import { ColourfulText } from "./colorful-text";
import { HeartPop } from "./pop";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import GradientText from "./gradient-text";
import DecryptedText from "./decrypted-text";
import TrueFocus from "./true-focus";

const aboutText = [
	"Hi 👋, I'm Samridh Limbu. A creative developer that loves to make Innovative Solutions to real-world problems.",
	"I'm skilled in developing websites and I'm constantly learning new technology.",
	"Besides coding, I love reading, making art, and spending time with my loved ones.",
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
							start: "top 60%",
							toggleActions: "play reverse play reverse",
						},
					}
				);
			});
		});
	}, []);

	return (
		<section
			className="min-h-screen w-full p py-8 md:py-12 lg:py-20"
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
								className="overflow-wrapper-2 relative about-wrapper"
							>
								<span className="block about-word">
									{(() => {
										if (word === "Samridh")
											return (
												<DecryptedText
													text="Samridh"
													animateOn="view"
													revealDirection="start"
												/>
											);
										if (word === "Limbu.")
											return (
												<DecryptedText
													text="Limbu."
													animateOn="view"
													revealDirection="start"
												/>
											);
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
										if (word === "creative")
											return (
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
