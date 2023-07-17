import React from "react";
import Game from "./Game";

const GamesList = () => {
	return (
		<ul className="grid grid-cols-3 gap-10">
			<Game />
			<Game />
			<Game />
			<Game />
			<Game />
			<Game />
		</ul>
	);
};

export default GamesList;
