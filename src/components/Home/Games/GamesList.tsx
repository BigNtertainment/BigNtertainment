import React from "react";
import Game from "./Game";
import prisma from "../../../../prisma/client";

const GamesList = async () => {
	const games = await prisma.game.findMany();

	return (
		<ul className="grid grid-cols-3 gap-10">
			{games.map((game) => (
				<Game key={game.id} name={game.name} img={game.icon} slug={game.slug} />
			))}
		</ul>
	);
};

export default GamesList;
