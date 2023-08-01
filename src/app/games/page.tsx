import React from "react";
import SanityDatabase from "../../../sanity/database";
import EmptyPage from "@/components/shared/EmptyPage";
import GameItem from "@/components/Home/Games/GameItem";

const database = new SanityDatabase();

const Page = async () => {
	const games = await database.games.getAll({ limit: 10 });

	if (!games) {
		return <EmptyPage>No games found!</EmptyPage>;
	}

	return (
		<div className="col-[center-start/center-end] pb-20">
			<h3 className="text-6xl font-bold text-center mb-32 mt-24">Our Games</h3>

			<div className="grid grid-cols-3">
				{games.map((game) => (
					<GameItem key={game.id} game={game} />
				))}
			</div>
		</div>
	);
};

export default Page;
