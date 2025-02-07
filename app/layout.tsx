import type { Metadata } from "next";
import { Outfit, IBM_Plex_Mono } from "next/font/google";

import "./globals.css";

const sans = Outfit({
	variable: "--font-sans",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500"],
});

const mono = IBM_Plex_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500"],
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
			<body className={`${sans.variable} ${mono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
