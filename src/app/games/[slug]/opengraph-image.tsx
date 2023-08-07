import { ImageResponse } from "next/server";
import { Props } from "./page";
import SanityDatabase from "../../../../sanity/database";

export const alt = "BigNtertainment post";

export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

const database = new SanityDatabase();

export default async function og({ params }: Props) {
	const game = await database.games.getOne(params.slug);

	return new ImageResponse(
		(
			<img
				src={`${game?.cover}&w=1200&h=630&auto=format&q=75`}
				alt={game?.name!!}
			/>
		),
		size
	);
}
