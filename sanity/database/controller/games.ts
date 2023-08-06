import { QueryParams, groq } from "next-sanity";
import { getAll, getOne } from "./factory";
import { Badge } from "./badge";
import { MarkdownBlock } from "@/types/TSanity";
import { paginate } from "../../utils/dbUtils";

export type Game = {
	id: string;
	name: string;
	badge: Badge;
	likes: number;
	description: string;
	slug: string;
	cover: string;
	gameplay: string[];
	updatedAt: string;
	gameLink: string;
	content: MarkdownBlock;
};

export type AmountResponse = {
	amount: number;
};

export type GameQuery = {
	getAll: (params?: QueryParams) => Promise<Game[] | null>;
	getOne: (slug: string) => Promise<Game | null>;
	getAmount: () => Promise<AmountResponse | null>;
};

export async function getAllGames(this: any, params?: QueryParams) {
	const query = groq`*[_type == "game"][${paginate({
		limit: params?.limit,
		page: params?.page,
	})}]{
		"id": _id,
		name,
		"badges": badges[]->{
			"id": _id,
			color,
			name
		},
		likes,
		description,
		"slug": slug.current,
		"cover": cover.asset->url,
		"gameplay": gameplay[].asset->url,
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
		"badges": badges[]->{
			"id": _id,
			color,
			name
		},
		likes,
		description,
		"slug": slug.current,
		"cover": cover.asset->url,
		"gameplay": gameplay[].asset->url,
		"updatedAt": _updatedAt,
     gameLink,
     content
	}`;

	return getOne.call(this, { query, params: { slug } });
}

export async function getAmount(this: any) {
	const query = groq`{"amount": count(*[_type == "game"])}`;

	return getAll.call(this, { query });
}
