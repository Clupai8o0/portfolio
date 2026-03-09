import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Resume | Clupai",
	description:
		"Resume of Samridh Limbu — Computer Science student, full-stack developer, and startup founder based in Melbourne.",
};

export default function ResumeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
