"use client";

import { useEffect, useState } from "react";
import useDarkMode from "@/hooks/useDarkMode";
import Image from "next/image";

const Logo = (props: any) => {
	const [enabled, setEnabled] = useDarkMode();
	const [src, setSrc] = useState<string | undefined>(undefined);

	useEffect(() => {
		const imageSrc = `/logo-${enabled ? "dark" : "light"}.svg`;

		if (process.browser) {
			setSrc(imageSrc);
		} else {
			// Set the source to undefined during SSR
			setSrc(undefined);
		}
	}, [enabled]);

	if (!src) {
		// Return a placeholder or loading state during SSR
		return (
			<Image
				loading="lazy"
				src="/logo-dark.svg"
				alt="BigNtertainment logo"
				{...props}
			/>
		);
	}

	return (
		<Image loading="lazy" src={src} alt="BigNtertainment logo" {...props} />
	);
};

export default Logo;
