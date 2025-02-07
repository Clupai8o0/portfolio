"use client";

import { generateKey } from "@/lib/utils";
import React from "react";
import Cover from "./cover";
// import { ColourfulText } from "./colorful-text";
import { HeartPop } from "./pop";

function About() {
	return (
		<section
			className="min-h-screen w-full p"
			data-scroll
			data-scroll-speed="0.3"
		>
			<div className="flex flex-wrap gap-2 md:gap-3 text-5xl md:text-6xl lg:text-8xl font-light">
				{"Hi 👋, I'm Samridh Limbu. A creative developer that loves to make Innovative Solutions to real-world problems. I'm skilled in developing websites and I'm constantly learning new technology. Besides coding, I love reading, making art, and spending time with my loved ones."
					.split(" ")
					.map((word) => (
						<div key={generateKey()} className="overflow-wrapper-2 relative">
							<span>{word}</span>
							{/* {word === "loved" && <HeartPop />}
							{(() => {
								// if (word === "creative")
								// 	return <ColourfulText text="creative" />;
								if (word === "Innovative") return <Cover>Innovative</Cover>;
								if (word === "Solutions")
									return <span className="text-solutions">Solutions</span>;
								if (word === "problems.")
									return (
										<div className="italic">
											<span>problems.</span>
											<div className="holder clip">
												<div className="circle circle1"></div>
												<div className="circle circle2"></div>
											</div>
										</div>
									);

								return <span>{word}</span>;
							})()} */}
						</div>
					))}
			</div>
		</section>
	);
}

export default About;
