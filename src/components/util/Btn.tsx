import { clsx, type ClassValue } from "clsx";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
}

function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const Btn = ({ className, ...props }: Props) => {
	return (
		<button
			className={cn(
				"mt-16 mx-auto bg-dark-neon-green px-9 py-4 rounded-full  text-light-primary",
				className
			)}
			{...props}>
			{props.children}
		</button>
	);
};

export default Btn;
