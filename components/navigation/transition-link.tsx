"use client";

import { usePathname, useRouter } from "next/navigation";

import { animatePageOut } from "@/lib/animations";

interface Props {
	href: string;
	id?: string;
	className?: string;
	children: React.ReactNode;
}

const Link = ({ href, className, children, id }: Props) => {
	const router = useRouter();
	const pathname = usePathname();

	const handleClick = () => {
		if (pathname !== href) {
			// don't run the animation if we're already on the page`
			animatePageOut(href, router);
		}
	};

	return (
		<button onClick={handleClick} className={className} role="link" id={id}>
			{children}
		</button>
	);
};

export default Link;
