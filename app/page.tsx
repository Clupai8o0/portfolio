"use client";

import ReactLenis from "lenis/react";

import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import Bounded from "@/components/containers/bounded";
import HeroContent from "@/components/content/hero-content";
import ClipImage from "@/components/content/clip-image";
import { Spotlight } from "@/components/content/spotlight";
import About from "@/components/content/about";
import Skills from "@/components/content/skills";
import Projects from "@/components/content/projects";
import CTA from "@/components/content/cta";

export default function Home() {
	return (
		<ReactLenis root>
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

				<Skills />

				<Projects />

				<CTA />

				<Footer />
			</main>
		</ReactLenis>
	);
}
