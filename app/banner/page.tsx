import Bounded from '@/components/containers/bounded';
import { Cover } from '@/components/content/cover/cover';
import GradientText from '@/components/content/gradient-text';
import HeroContent from '@/components/content/hero-content';
import SparklePop from '@/components/content/sparkle-pop';
import { Spotlight } from '@/components/content/spotlight';
import { generateKey } from '@/lib/utils';
import clsx from 'clsx';
import React from 'react'

const heroPhrase =
	"Building Creative & Innovative Solutions that just make you go Wow!".split(
		" "
	);

function Banner() {
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
				<h1 className="flex flex-wrap justify-start items-center gap-2 md:gap-3 lg:gap-4 font-light font-sans text-6xl md:text-7xl lg:text-[108px] p mt-16">
					{heroPhrase.map((word, i) => (
						<div key={generateKey()} className="relative">
							{word === "Wow!" && <SparklePop delay={9} />}

							{/* //* every other word */}
							<div
								className={clsx(

									(word === "Innovative" && "overflow-wrapper-full") ||
										"overflow-wrapper-2"
								)}
							>
								<div className={`word-${i} text-slate-200`}>
									{(() => {
										if (word === "Creative")
											return <GradientText>Creative</GradientText>;
										if (word === "Innovative") return <Cover>Innovative</Cover>;
										if (word === "Solutions")
											return <span className="text-solutions">Solutions</span>;
										if (word === "Wow!")
											return (
												<span className="text-white font-medium">Wow!</span>
											);

										return word;
									})()}
								</div>
							</div>
						</div>
					))}
				</h1>
			</Bounded>
		</main>
	);
}

export default Banner