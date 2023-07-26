import { groq } from "next-sanity";
import { getAll } from "./factory";

export type member = {
	id: string;
	name: string;
	surname: string;
	personalPageLink: string;
	description: string;
	slug: string;
	image: string;
};

export type memberQuery = {
	getAll: () => Promise<member[] | null>;
	// getOne: (slug: string) => Promise<member | null>;
};

export async function getAllMembers(this: any) {
	const query = groq`*[_type == "member"]{
		"id": _id,
		name,
		surname,
		personalPageLink,
		description,
		"slug": slug.current,
		"image": image.asset->url
	}`;

	return getAll.call(this, query);
}
