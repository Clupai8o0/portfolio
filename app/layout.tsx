import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const sans = Outfit({
	variable: "--font-sans",
	subsets: ["latin"],
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
			<body className={`${sans.variable} antialiased`}>{children}</body>
		</html>
	);
}
