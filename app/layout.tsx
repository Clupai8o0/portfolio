import type { Metadata } from "next";
import { DM_Sans, Tulpen_One, League_Spartan, Outfit } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const sans = Outfit({
	variable: "--font-sans",
	subsets: ["latin"],
});
const mono = Tulpen_One({
	variable: "--font-mono",
	subsets: ["latin"],
	weight: ["400"],
});

export const metadata: Metadata = {
	title: "Clupai",
	description:
		"Building innovative and creative solutions that just make you go wow!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={clsx(sans.variable, mono.variable)}>
				{children}
			</body>
		</html>
	);
}
