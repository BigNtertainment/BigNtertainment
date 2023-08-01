import SanityDatabase from "../../../../sanity/database";
import GameItem from "./GameItem";

const database = new SanityDatabase();

const GamesList = async () => {
	const games = await database.games.getAll({ limit: 6 });

	if (!games) {
		return <div className="text-4xl text-center">No games.</div>;
	}

	return (
		<div className="grid grid-cols-3">
			{games.map((game) => (
				<GameItem key={game.id} game={game} />
			))}
		</div>
	);
};

export default GamesList;
