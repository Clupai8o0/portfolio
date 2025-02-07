"use client";

import { useEffect } from "react";
import Logo from "../navigation/logo";
import gsap from "gsap";
import { generateKey } from "@/lib/utils";

const generateRows = () => {
	const rows = [];
	for (let i = 1; i <= 3; i++) {
		rows.push(
			<div className="row" key={generateKey()}>
				<div className="card card-left">
					<img
						src="/img.jpg"
						alt="some picture"
						className="w-full h-full object-cover"
						width={100}
						height={100}
					/>
				</div>
				<div className="card card-right">
					<img
						src="/img.jpg"
						alt="some picture"
						className="w-full h-full object-cover"
						width={100}
						height={100}
					/>
				</div>
			</div>
		);
	}

	return rows;
};

function CTA() {
	useEffect(() => {
		const scrollTriggerSettings = {
			trigger: ".main",
			start: "top 25%",
			toggleActions: "play reverse play reverse",
		};

		const leftXValues = [-800, -900, -400];
		const rightXValues = [800, 900, 400];
		const leftRotationValues = [-30, -20, -35];
		const rightRotationValues = [30, 20, 35];
		const yValues = [100, -150, -400];

		gsap.utils.toArray(".row").forEach((row: any, index) => {
			const cardLeft = row.querySelector(".card-left");
			const cardRight = row.querySelector(".card-right");

			gsap.to(cardLeft, {
				x: leftXValues[index],
				scrollTrigger: {
					trigger: ".main",
					start: "top center",
					end: "150% bottom",
					scrub: true,
					onUpdate: (self) => {
						const progress = self.progress;
						cardLeft.style.transform = `translateX(${
							progress * leftXValues[index]
						}px) translateY(${progress * yValues[index]}px) rotate(${
							progress * leftRotationValues[index]
						}deg)`;
						cardRight.style.transform = `translateX(${
							progress * rightXValues[index]
						}px) translateY(${progress * yValues[index]}px) rotate(${
							progress * rightRotationValues[index]
						}deg)`;
					},
				},
			});
		});

		gsap.to(".logo", {
			scale: 1,
			duration: 0.5,
			ease: "power1.out",
			scrollTrigger: scrollTriggerSettings,
		});

		gsap.to(".line p", {
			y: 0,
			duration: 0.5,
			ease: "power1.out",
			stagger: 0.1,
			scrollTrigger: scrollTriggerSettings,
		});

		gsap.to("button", {
			y: 0,
			opacity: 1,
			duration: 0.5,
			ease: "power1.out",
			delay: 0.25,
			scrollTrigger: scrollTriggerSettings,
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<section className="relative text-white">
			<div className="main w-screen h-[150vh] flex-col relative justify-center items-center flex overflow-x-hidden">
				<div className="main-content absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
					<Logo className="logo text-white text-2xl" />

					<div className="copy my-8 flex flex-col justify-center items-center">
						<div className="line">
							<p>Delve into coding without clutter.</p>
						</div>
						<div className="line">
							<p>One subscription. Endless web design.</p>
						</div>
						<div className="line">
							<p>Take the fast lane to master.</p>
						</div>
					</div>

					<div className="btn">
						<button className="relative px-4 py-8 text-lg text-white border-2 border-white rounded-full bg-none outline-none translate-y-[30px] opacity-0">
							Get Pro
						</button>
					</div>
				</div>

				{generateRows()}
			</div>

			<div className="h-[50vh] items-start flex justify-center overflow-x-hidden w-screen relative">
				<a href="https://clupai.com" className="text-[4vw] text-white">
					Link in description
				</a>
			</div>
		</section>
	);
}

export default CTA;
