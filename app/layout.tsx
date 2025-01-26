import type { Metadata } from "next";
import { Tulpen_One, Outfit, IBM_Plex_Mono, Space_Mono } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const sans = Outfit({
	variable: "--font-sans",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500"],
});
const mono = Space_Mono({
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
			<body className={clsx(sans.variable, mono.variable)}>{children}</body>
		</html>
	);
}
