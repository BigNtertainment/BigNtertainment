import React from "react";
import SanityDatabase from "../../../sanity/database";
import EmptyPage from "@/components/shared/EmptyPage";
import GameItem from "@/components/Home/Games/GameItem";
import Heading from "@/components/shared/Heading";

const database = new SanityDatabase();

const Page = async () => {
	const games = await database.games.getAll({ limit: 2 });

	const amount = await database.games.getAmount();

	console.log(amount);

	if (!games) {
		return <EmptyPage>No games found!</EmptyPage>;
	}

	return (
		<div className="col-[center-start/center-end] grid pb-10 lg:pb-20">
			<Heading animated={true} size="4xl" className="mx-auto my-10">
				Our Games
			</Heading>

			<div className="list-grid ">
				{games.map((game) => (
					<GameItem key={game.id} game={game} />
				))}
			</div>

			{/* TODO: Add paginator component */}
		</div>
	);
};

export default Page;
