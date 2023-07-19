import React from "react";
import Review from "./Review";

const Reviews = () => {
	return (
		<section className="col-[full-start/full-end] py-20 mt-36 bg-[#2c2c2c] rounded-t-3xl grid grid-cols-defaultLayout">
			<h3 className="text-6xl font-bold text-center mt-16 col-[1/-1]">Reviews</h3>
			<div className="py-28 col-[2/-2] grid-cols-3 grid justify-center gap-14">
				<Review />
				<Review />
				<Review />
			</div>
		</section>
	);
};

export default Reviews;
