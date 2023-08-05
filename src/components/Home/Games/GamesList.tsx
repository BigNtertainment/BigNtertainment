import EmptyPage from "@/components/shared/EmptyPage";
import SanityDatabase from "../../../../sanity/database";
import GameItem from "./GameItem";

const database = new SanityDatabase();

const GamesList = async () => {
	const games = await database.games.getAll({ limit: 6 });

	if (!games) {
		return <EmptyPage>No games.</EmptyPage>;
	}

	return (
		<div className="list-grid mt-14 mb-4">
			{games.map((game) => (
				<GameItem key={game.id} game={game} />
			))}
		</div>
	);
};

export default GamesList;
