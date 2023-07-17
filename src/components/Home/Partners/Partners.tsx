import Image from "next/image";
import React from "react";

const Partners = () => {
	return (
		<div className="col-[center-start/center-end]">
			<h3 className="text-center text-6xl font-bold">Our Partners</h3>
			<div className="my-32 flex  gap-32 justify-center mb-24">
				<Image
					width={50}
					height={50}
					src={"/dzajlopment.svg"}
					alt="partner - dzajlopment"
				/>
				<Image
					width={50}
					height={50}
					src={"/dzajlopment.svg"}
					alt="partner - dzajlopment"
				/>
				<Image
					width={50}
					height={50}
					src={"/dzajlopment.svg"}
					alt="partner - dzajlopment"
				/>
			</div>
		</div>
	);
};

export default Partners;
