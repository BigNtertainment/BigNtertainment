import { cn } from "@/lib/utils/tailwind";
import Image from "next/image";
import React from "react";

const Baner = ({
	src,
	title,
	className,
}: {
	src: string;
	title: string;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"relative aspect-video rounded-3xl overflow-hidden",
				className
			)}>
			<Image src={src} alt={`${title} - image`} fill={true} />
		</div>
	);
};

export default Baner;
