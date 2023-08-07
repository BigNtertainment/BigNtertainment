import "./globals.css";
import type { Metadata } from "next";
import LayoutProvider from "@/components/layout/LayoutProvider";

export const metadata: Metadata = {
	metadataBase: new URL("https://big-ntertainment-nu.vercel.app/"),
	title: {
		default: "BigNtertainment",
		template: `%s | BigNtertainment`,
	},
	description: "BigNtertainment Game Development Official Website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <LayoutProvider>{children}</LayoutProvider>;
}
