import React from "react";
import Logo from "../util/Logo";

const Footer = () => {
	return (
		<div className="grid grid-cols-[minmax(6rem,1fr)_repeat(8,minmax(min-content,14rem))_minmax(6rem,1fr)_] pb-28">
			<div className="col-[2/-2] flex justify-center mt-16 mb-32">
				<Logo width={100} height={100} />
			</div>
			<div className="col-[2/5] flex uppercase justify-center border-t-white border-t pt-5 text-xl gap-4">
				<span>Home</span>
				<span>Home</span>
				<span>Home</span>
			</div>
			<div className="col-[7/-2] uppercase text-center border-t-white border-t pt-5 text-xl">
				Built by Dzajlopment. All rights reserved &copy;2023
			</div>
		</div>
	);
};

export default Footer;
