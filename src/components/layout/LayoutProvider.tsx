"use client";

import { usePathname } from "next/navigation";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();

	if (pathname.startsWith("/studio")) {
		return (
			<html lang="en" className="html-studio">
				<body>{children}</body>
			</html>
		);
	}

	return (
		<html lang="en">
			<body className="body">
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
};

export default LayoutProvider;
