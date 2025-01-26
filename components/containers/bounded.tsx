import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
	parentClassName?: string;
	id?: string;
}

function Bounded({ children, className, parentClassName, id }: Props) {
	return (
		<section
			className={clsx(
				"w-full flex justify-center snap-center overflow-hidden",
				parentClassName
			)}
			id={id}
		>
			<div
				className={clsx("flex flex-col relative max-w-7xl w-full", className)}
			>
				{children}
			</div>
		</section>
	);
}

export default Bounded;
