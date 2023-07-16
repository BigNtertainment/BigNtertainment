import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "BigNtertainment",
	description: "BigNtertainment Games",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="body">{children}</body>
		</html>
	);
}
