import React from "react";
import NavLinks from "./NavLinks";
import Logo from "@/components/shared/Logo";
import NavAuth from "./NavAuth";

const ClassicNav = () => {
	return (
		<>
			<div className="h-full flex gap-6 ">
				<div className="relative h-full aspect-square ">
					<Logo fill={true} className="opacity-50" />
				</div>
				<div className="flex items-center translate-y-0.5 -translate-x-3 text-xl py-1.5 lg:p-0">
					BigNtertainment
				</div>
				<NavLinks className={"hidden lg:flex"} />
			</div>
			<div className="gap-10 hidden lg:flex">
				<NavAuth />
			</div>
		</>
	);
};

export default ClassicNav;
