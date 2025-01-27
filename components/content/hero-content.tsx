"use client";

import { generateKey } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { ColourfulText } from "./colorful-text";

const HeroContent = () => {
	const container = useRef(null);

	useGSAP(() => {}, { scope: container });

	return (
		<div ref={container} className="mt-16">
			<h1 className="flex flex-wrap justify-start gap-2 lg:gap-4 font-light font-sans text-6xl md:text-7xl lg:text-[108px] p">
				{"Building Creative & Innovative Solutions that just make you go Wow!"
					.split(" ")
					.map((word) => (
						<div key={generateKey()} className="overflow-wrapper">
							{(() => {
								if (word === "Creative")
									return (
										<div className="word-top">
											<ColourfulText text="Creative" />
										</div>
									);

								return <div className="word-bottom text-slate-200">{word}</div>;
							})()}
						</div>
					))}
			</h1>
		</div>
	);
};

export default HeroContent;
