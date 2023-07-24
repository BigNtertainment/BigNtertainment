import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
	name: string;
	img: string;
	slug: string;
};

const Game = ({ name, img, slug }: Props) => {
	return (
		<Link
			href={`/games/${slug}`}
			className="opacity-90 aspect-square w-full rounded-2xl relative transition hover:transition after:transition hover:after:transition after:rounded-xl overflow-hidden after:bg-black after:opacity-30 after:absolute after:w-full after:h-full after:top-0  hover:after:opacity-90 hover:after:bg-defaultGradient game-panel">
			<div className="z-40 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-white transition font-bold">
				{name}
			</div>
			{/* <span className="z-40 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 text-white text-2xl">
				Oficjalna Strona
			</span> */}
			<Image
				src={img}
				fill={true}
				alt={`${name} image`}
				className="z-0 rounded-2xl "
			/>
		</Link>
	);
};

export default Game;
