import React from "react";
import SanityDatabase from "../../../sanity/database";
import EmptyPage from "@/components/shared/EmptyPage";
import GameItem from "@/components/Home/Games/GameItem";
import Heading from "@/components/shared/Heading";

const database = new SanityDatabase();

const Page = async () => {
	const games = await database.games.getAll({ limit: 10 });

	if (!games) {
		return <EmptyPage>No games found!</EmptyPage>;
	}

	return (
		<div className="col-[center-start/center-end] pb-20">
			<Heading size="xl" className="my-14 mb-20">
				Our Games
			</Heading>

			<div className="grid grid-cols-3">
				{games.map((game) => (
					<GameItem key={game.id} game={game} />
				))}
			</div>
		</div>
	);
};

export default Page;
