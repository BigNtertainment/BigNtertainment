import React from "react";

const Game = () => {
	return (
		<div
			role="status"
			className="rounded-3xl bg-dark-loading animate-pulse md:p-6 aspect-square">
			<span className="sr-only">Loading...</span>
		</div>
	);
};

export default Game;
