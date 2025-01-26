import Container from "@/components/container";
import ClipImage from "@/components/content/clip-image";
import HeroContent from "@/components/content/hero-content";
import Navbar from "@/components/navigation/navbar";

export default function Home() {
	return (
		<main>
			<Container
				parentClassName="h-[40rem] w-full bg-black bg-dot-white/[0.3] relative"
				// parentClassName="h-[50rem] w-full bg-black bg-grid-white/[0.2] relative"
				outerChildren={
					<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
				}
			>
				<Navbar />
				<HeroContent />
			</Container>
			<ClipImage />
		</main>
	);
}
