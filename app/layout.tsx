import type { Metadata } from "next";
import { Outfit, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";

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
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-2G7CCDS44S"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-2G7CCDS44S');
					`}
				</Script>
				{children}
			</body>
		</html>
	);
}
