import React from "react";
import GamesList from "./GamesList";

const Games = () => {
	return (
		<div className="col-[center-start/center-end] my-36 ">
			<h3 className="text-6xl font-bold text-center mb-32">Our Games</h3>
			<GamesList />
		</div>
	);
};

export default Games;
