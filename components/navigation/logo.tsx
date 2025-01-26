import { generateKey } from "@/lib/utils";
import clsx from "clsx";

interface Props {
	className?: string;
}

const Logo = ({ className }: Props) => {
	return (
		<div className="overflow-hidden">
			<h1
				className={clsx(
					"font-sans font-regular flex items-center",
					className
				)}
			>
				{"clupai".split("").map((letter) => (
					<span key={generateKey()} className="block logo-letter">
						{letter}
					</span>
				))}
			</h1>
		</div>
	);
};

export default Logo;
