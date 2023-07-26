import { groq } from "next-sanity";
import { getAll, getOne } from "./factory";
import { BadgeColor } from "../../schemas/badge";

export type Badge = {
	id: string;
	name: string;
	color: BadgeColor;
};

export type BadgeQuery = {
	getAll: () => Promise<Badge[] | null>;
	getOne: (slug: string) => Promise<Badge | null>;
};

export async function getAllBadges(this: any) {
	const query = groq`*[_type == "badge"]{
		"id": _id,
		name,
    color
	}`;

	return getAll.call(this, {
		query,
	});
}

export async function getOneBadge(this: any, name: string) {
	const query = groq`*[_type == "badge" && name == $name][0]{
		"id": _id,
		name,
    color
	}`;

	return getOne.call(this, { query, params: { name } });
}
