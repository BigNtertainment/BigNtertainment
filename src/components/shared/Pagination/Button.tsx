import { cn } from "@/lib/utils/tailwind";
import React from "react";

type Props = {
	children: React.ReactNode;
	disabled?: boolean;
	className?: string;
	onClick?: () => void;
};

const Button = ({ children, className, onClick }: Props) => {
	return (
		<button
			onClick={onClick}
			className={cn("flex items-center gap-1", className)}>
			{children}
		</button>
	);
};

export default Button;
