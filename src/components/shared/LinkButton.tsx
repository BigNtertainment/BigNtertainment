import { cn } from "@/lib/utils/tailwind";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
	children: ReactNode;
	className?: string;
	href: string;
}

const Btn = ({ className, href, ...props }: Props) => {
	return (
		<Link
			href={href}
			className={cn(
				"mt-16 mx-auto bg-dark-neon-green px-6 py-3 rounded-full  text-light-primary transition hover:scale-105 shadow-md hover:transition",
				className
			)}
			{...props}>
			{props.children}
		</Link>
	);
};

export default Btn;
