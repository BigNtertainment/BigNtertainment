import React from "react";
import GamesList from "./GamesList";
import Btn from "@/components/util/Btn";

const Games = () => {
	return (
		<div className="col-[center-start/center-end] my-36 grid">
			<h3 className="text-6xl font-bold text-center mb-32">Our Games</h3>
			<GamesList />
			<Btn>See more</Btn>
		</div>
	);
};

export default Games;
