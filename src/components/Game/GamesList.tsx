"use client";

import { Game } from "../../../sanity/database/controller/games";
import GameItem from "../Home/Games/GameItem";
import { useEffect, useState } from "react";
import EmptyPage from "../shared/EmptyPage";
import SanityDatabase from "../../../sanity/database";

const database = new SanityDatabase();

const GamesList = () => {
	const [games, setGames] = useState<Game[] | null>(null);
	const [page, setPages] = useState(1);
	const [elementsAmount, setElementsAmount] = useState(0);

	useEffect(() => {
		database.games
			.getAmount()
			.then((data) => setElementsAmount(data?.amount || 0));

		database.games.getAll({ limit: 2, page }).then((data) => {
			setGames(data);
		});
	}, [page]);

	if (!games) {
		return <EmptyPage>No games found!</EmptyPage>;
	}

	return (
		<>
			<div className="list-grid ">
				{games.map((game) => (
					<GameItem key={game.id} game={game} />
				))}
			</div>
		</>
	);
};

export default GamesList;
