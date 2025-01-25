import Container from "@/components/container";
import HeroContent from "@/components/content/hero-content";
import Navbar from "@/components/navigation/navbar";

export default function Home() {
	return (
		<main>
			<Container>
				<Navbar />
			</Container>
			<HeroContent />
		</main>
	);
}
