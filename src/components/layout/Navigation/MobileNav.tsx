"use client";

import { cn } from "@/lib/utils/tailwind";
import { useState } from "react";
import NavLinks from "./NavLinks";
import NavAuth from "./NavAuth";

const Nav = () => {
	return (
		<div className="fixed lg:hidden right-0 z-30 bg-dark-primary top-0 h-screen">
			<div className="h-full w-full flex items-center justify-center">
				<NavLinks className="flex-col gap-12 w-screen text-2xl">
					<NavAuth childrenClassName="border-none underline" />
				</NavLinks>
			</div>
		</div>
	);
};

const MobileNav = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleActive = () => {
		setIsActive((prevState) => !prevState);
	};

	return (
		<>
			<div
				className={`block lg:hidden space-y-1.5 mr-1 cursor-pointer z-50 ${
					!isActive ? "hover:nav-hover-expand" : ""
				}`}
				onClick={() => toggleActive()}>
				<div
					className={cn(
						"w-6 h-0.5 bg-dark-highlight transition",
						isActive ? "rotate-45 translate-y-2 transition" : ""
					)}></div>
				<div
					className={cn(
						"w-6 h-0.5 bg-dark-highlight transition",
						isActive ? "opacity-0 transition" : ""
					)}></div>
				<div
					className={cn(
						"w-6 h-0.5 bg-dark-highlight transition",
						isActive ? "-rotate-45 -translate-y-2 transition" : ""
					)}></div>
			</div>

			{isActive && <Nav />}
		</>
	);
};

export default MobileNav;
