import React from "react";
import NavLinks from "./NavLinks";
import Logo from "@/components/shared/Logo";
import Link from "next/link";

const ClassicNav = () => {
	return (
		<>
			<div className="h-full flex gap-3 ">
				<Link href="/" className="relative h-full aspect-square w-11 lg:w-12 ">
					<Logo className="opacity-50" fill={true} />
				</Link>

				<NavLinks className={"hidden lg:flex"} />
			</div>
		</>
	);
};

export default ClassicNav;
