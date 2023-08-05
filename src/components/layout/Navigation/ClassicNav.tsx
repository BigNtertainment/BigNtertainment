import React from "react";
import NavLinks from "./NavLinks";
import Logo from "@/components/shared/Logo";
import NavAuth from "./NavAuth";

const ClassicNav = () => {
	return (
		<>
			<div className="h-full flex gap-3 ">
				<div className="relative h-full aspect-square w-9 lg:w-12 ">
					<Logo className="opacity-60" fill={true} />
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
