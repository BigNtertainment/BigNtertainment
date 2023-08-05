import React from "react";
import Logo from "../shared/Logo";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="grid grid-cols-defaultLayout items-center justify-center col-[full-start/full-end] relative pb-12 mx-4 pt-6 footer">
			<div className="col-[center-start/center-end] flex justify-center mt-2 lg:mt-16 mb-9  lg:mb-20">
				<Logo width={100} height={100} className="opacity-50" />
			</div>

			<div className="flex uppercase justify-center mb-5 lg:mb-0 border-t-dark-line-highlight text-dark-secondary border-t row-[2/3] col-[center-start/center-end] pt-5 text-sm gap-4 lg:col-[center-start/col-start_4] lg:row-[2/3]">
				<Link href="/">Home</Link>
				<Link href="/games">Games</Link>
				<Link href="/posts">Posts</Link>
				<Link href="/about">About</Link>
				<Link href="/contact">Contact</Link>
			</div>
			<div className="uppercase text-center border-t-dark-line-highlight text-dark-secondary col-[center-start/center-end] border-t pt-5 row-[3/4] text-sm lg:col-[col-end_5/center-end] lg:row-[2/3]">
				Built by Dzajlopment. All rights reserved &copy;2023
			</div>
		</div>
	);
};

export default Footer;
