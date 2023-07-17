import React from "react";
import Review from "./Review";

const Reviews = () => {
	return (
		<div className="col-[full-start/full-end] mt-36 bg-[#2c2c2c] rounded-3xl grid grid-cols-[minmax(6rem,1fr)_repeat(8,minmax(min-content,14rem))_minmax(6rem,1fr)_]">
			<h3 className="text-6xl font-bold text-center mt-16 col-[1/-1]">Reviews</h3>
			<div className="py-28 col-[2/-2] grid-cols-3 grid justify-center gap-14">
				<Review />
				<Review />
				<Review />
			</div>
		</div>
	);
};

export default Reviews;
