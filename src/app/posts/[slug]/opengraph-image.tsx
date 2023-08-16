import { ImageResponse } from "next/server";
import { Props } from "./page1";
import SanityDatabase from "../../../../sanity/database";

export const alt = "BigNtertainment post";

export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

const database = new SanityDatabase();

export default async function og({ params }: Props) {
	const post = await database.posts.getOne(params.slug);

	return new ImageResponse(
		(
			<img
				src={`${post?.cover}&w=1200&h=630&auto=format&q=75`}
				alt={post?.title!!}
			/>
		),
		size
	);
}
