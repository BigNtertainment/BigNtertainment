import { cn } from "@/lib/utils/tailwind";
import React from "react";

type Props = {
	children: React.ReactNode;
	disabled?: boolean;
	className?: string;
	active?: boolean;
	onClick?: () => void;
};

const Button = ({ children, className, onClick, disabled, active }: Props) => {
	const disabledClass = "opacity-20 hover:bg-transparent";

	const activeClass =
		"!bg-[#2a2a2a] hover:transition transition hover:shadow-md text-dark-primary";

	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={cn(
				"flex items-center gap-1 px-5 py-3 rounded-3xl text-dark-secondary  transition hover:transition   hover:bg-dark-line-highlight",
				disabled ? disabledClass : "",
				active ? activeClass : "",
				className
			)}>
			{children}
		</button>
	);
};

export default Button;
