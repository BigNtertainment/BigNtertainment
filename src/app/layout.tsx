import Navigation from "@/components/Home/Navigation/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Home/Footer";

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
			<body className="body">
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}
