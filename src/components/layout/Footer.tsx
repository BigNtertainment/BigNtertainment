import React from "react";
import Logo from "../shared/Logo";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="grid col-[full-start/full-end] relative grid-cols-[minmax(6rem,1fr)_repeat(8,minmax(min-content,14rem))_minmax(6rem,1fr)_]  pb-20 mx-4 pt-10 footer">
			<div className="col-[2/-2] flex justify-center mt-16 mb-32">
				<Logo width={100} height={100} className="opacity-20" />
			</div>
			<div className="col-[2/5] flex uppercase justify-center border-t-dark-highlight text-dark-secondary border-t pt-5 text-xl gap-4">
				<Link href="/">Home</Link>
				<Link href="/games">Games</Link>
				<Link href="/posts">Posts</Link>
				<Link href="/about">About</Link>
				<Link href="/contact">Contact</Link>
			</div>
			<div className="col-[7/-2] uppercase text-center border-t-dark-highlight text-dark-secondary border-t pt-5 text-xl">
				Built by Dzajlopment. All rights reserved &copy;2023
			</div>
		</div>
	);
};

export default Footer;
