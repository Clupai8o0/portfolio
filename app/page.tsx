import Bounded from "@/components/containers/bounded";

export default function Home() {
	return (
		<main>
			<Bounded
				parentClassName="h-[50rem] w-full bg-stone-950 bg-dot-white/[0.3] relative"
				outerChildren={
					<div className="absolute pointer-events-none inset-0 bg-stone-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
				}
			>
				<div></div>
			</Bounded>
		</main>
	);
}
