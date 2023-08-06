import React from "react";
import NavLinks from "./NavLinks";
import Logo from "@/components/shared/Logo";

const ClassicNav = () => {
	return (
		<>
			<div className="h-full flex gap-3 ">
				<div className="relative h-full aspect-square w-11 lg:w-12 ">
					<Logo className="opacity-50" fill={true} />
				</div>

				<NavLinks className={"hidden lg:flex"} />
			</div>
		</>
	);
};

export default ClassicNav;
