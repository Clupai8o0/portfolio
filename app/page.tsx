"use client";

import { useEffect } from "react";

import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import Bounded from "@/components/containers/bounded";
import HeroContent from "@/components/content/hero-content";
import ClipImage from "@/components/content/clip-image";
import { Spotlight } from "@/components/content/spotlight";
import About from "@/components/content/about";

export default function Home() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;

			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<main>
			<Bounded
				parentClassName="h-[50rem] w-full bg-stone-950 bg-dot-white/[0.3] relative"
				outerChildren={
					<>
						<Spotlight />
						<div className="absolute pointer-events-none inset-0 bg-stone-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
					</>
				}
			>
				<Navbar />
				<HeroContent />
			</Bounded>

			<ClipImage />

			<div className="h-screen w-screen"></div>

			<Bounded>
				<About />
			</Bounded>

			<Footer />
		</main>
	);
}
