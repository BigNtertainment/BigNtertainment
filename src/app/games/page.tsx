import GamesList from "@/components/Home/Games/GamesList";
import React from "react";

const page = () => {
	return (
		<div className="col-[center-start/center-end] pb-20">
			<h3 className="text-6xl font-bold text-center mb-32 mt-24">Our Games</h3>

			<GamesList />
		</div>
	);
};

export default page;
