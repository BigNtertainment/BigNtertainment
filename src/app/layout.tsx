import Navigation from "@/components/layout/Navigation/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import LayoutProvider from "@/components/layout/LayoutProvider";

export const metadata: Metadata = {
	title: {
		default: "BigNtertainment",
		template: `%s | BigNtertainment`,
	},
	description: "BigNtertainment Game Development website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <LayoutProvider>{children}</LayoutProvider>;
}
