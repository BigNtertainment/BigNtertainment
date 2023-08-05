import React from "react";
import Logo from "../shared/Logo";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="grid grid-cols-defaultLayout items-center justify-center col-[full-start/full-end] relative pb-12 lg:mx-4 footer">
			<div className="col-[center-start/center-end] flex justify-center mt-6 lg:mt-14 mb-9  lg:mb-20">
				<Logo width={100} height={100} className="opacity-50" />
			</div>

			<div className="flex uppercase justify-center mb-5 lg:mb-0 border-t-dark-line-highlight text-dark-secondary border-t row-[2/3] col-[center-start/center-end] pt-5 text-sm gap-4 lg:col-[center-start/col-start_4] lg:row-[2/3]">
				<Link className="transition hover:transition hover:opacity-75" href="/">
					Home
				</Link>
				<Link
					className="transition hover:transition hover:opacity-75"
					href="/games">
					Games
				</Link>
				<Link
					className="transition hover:transition hover:opacity-75"
					href="/posts">
					Posts
				</Link>
				<Link
					className="transition hover:transition hover:opacity-75"
					href="/about">
					About
				</Link>
				<Link
					className="transition hover:transition hover:opacity-75"
					href="/contact">
					Contact
				</Link>
			</div>
			<div className="uppercase text-center border-t-dark-line-highlight text-dark-secondary col-[center-start/center-end] border-t pt-5 row-[3/4] text-sm lg:col-[col-end_5/center-end] lg:row-[2/3]">
				Built by Dzajlopment. All rights reserved &copy;2023
			</div>
		</div>
	);
};

export default Footer;
