import { groq } from "next-sanity";
import { getAll, getOne } from "./factory";

export type Game = {
	id: string;
	name: string;
	surname: string;
	personalPageLink: string;
	description: string;
	slug: string;
	image: string;
};

export type GameQuery = {
	getAll: () => Promise<Game[] | null>;
	getOne: (slug: string) => Promise<Game | null>;
};

export async function getAllGames(this: any) {
	const query = groq`*[_type == "game"]{
		"id": _id,
		name,
		badge,
		likes,
		description,
		"slug": slug.current,
		"cover": cover.asset->url,
		"gameplay": gameplay,
		"updatedAt": _updatedAt,
     gameLink,
     content
	}`;

	return getAll.call(this, {
		query,
	});
}

export async function getOneGame(this: any, slug: string) {
	const query = groq`*[_type == "game" && slug.current == $slug][0]{
		"id": _id,
		name,
		badge,
		likes,
		description,
		"slug": slug.current,
		"cover": cover.asset->url,
		"gameplay": gameplay,
		"updatedAt": _updatedAt,
     gameLink,
     content
	}`;

	return getOne.call(this, { query, params: { slug } });
}
