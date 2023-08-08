"use client";

import { Game } from "../../../sanity/database/controller/games";
import GameItem from "../Home/Games/GameItem";
import { useEffect, useState } from "react";
import EmptyPage from "../shared/EmptyPage";
import SanityDatabase from "../../../sanity/database";
import Paginator from "../shared/Pagination/Paginator";

const database = new SanityDatabase();

const elementsPerPage = 6;

const GamesList = () => {
	const [games, setGames] = useState<Game[] | null>(null);
	const [page, setPage] = useState(1);
	const [elementsAmount, setElementsAmount] = useState(0);

	useEffect(() => {
		database.games
			.getAmount()
			.then((data) => setElementsAmount(data?.amount || 0));
	}, []);

	useEffect(() => {
		database.games.getAll({ limit: elementsPerPage, page }).then((data) => {
			setGames(data);
		});
	}, [page]);

	if (!games) {
		return <EmptyPage>No games found!</EmptyPage>;
	}

	return (
		<>
			<div className="list-grid ">
				{games.sort((game1, game2) => {
					if(game1.publishedAt > game2.publishedAt){
						return -1;
					} else if(game1.publishedAt < game2.publishedAt){
						return 1;
					} else {
						return 0;
					}
				}).map((game) => (
					<GameItem key={game.id} game={game} />
				))}
			</div>
			<div className="mt-20 text-center flex justify-center">
				<Paginator
					elementsAmount={elementsAmount}
					page={page}
					setPage={setPage}
					elementsPerPage={elementsPerPage}
				/>
			</div>
		</>
	);
};

export default GamesList;
