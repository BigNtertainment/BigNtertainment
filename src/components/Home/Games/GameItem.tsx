import Image from "next/image";
import { Game } from "../../../../sanity/database/controller/games";
import Link from "next/link";

type Props = {
	game: Game;
};

const TileItem = ({ game }: { game: Game }) => {
	return (
		<Link
			href={`/games/${game.slug}`}
			className="opacity-90 aspect-square w-full rounded-2xl relative transition hover:transition after:transition hover:after:transition after:rounded-xl overflow-hidden after:bg-black after:opacity-30 after:absolute after:w-full after:h-full after:top-0  hover:after:opacity-90 hover:after:bg-defaultGradient game-panel">
			<div className="z-40 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-white transition font-bold">
				{game.name}
			</div>
			{/* <span className="z-40 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 text-white text-2xl">
				Oficjalna Strona
			</span> */}
			<Image
				src={game.cover}
				fill={true}
				alt={`${game.name} image`}
				className="z-0 rounded-2xl "
			/>
		</Link>
	);
};

const GameItem = ({ game }: Props) => {
	return (
		<Link
			href={`/games/${game.slug}`}
			className="opacity-90 aspect-square w-full rounded-2xl relative transition hover:transition after:transition hover:after:transition after:rounded-xl overflow-hidden after:bg-black after:opacity-30 after:absolute after:w-full after:h-full after:top-0  hover:after:opacity-90 hover:after:bg-defaultGradient game-panel">
			<div className="z-40 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-white transition font-bold">
				{game.name}
			</div>
			<Image
				src={game.cover}
				fill={true}
				alt={`${game.name} image`}
				className="z-0 rounded-2xl "
			/>
		</Link>
	);
};

export default GameItem;
