import { groq } from "next-sanity";
import { getAll, getOne } from "./factory";
import { Badge } from "./badge";
import { MarkdownBlock } from "@/types/TSanity";
import { Comment } from "../../schemas/comment";

export type Author = {
	id: string;
	name: string;
	surname: string;
	image: string;
	slug: string;
};

export type Post = {
	title: string;
	publishedAt: string;
	cover: string;
	slug: string;
	badges: Badge[];
	content: MarkdownBlock;
	likes: number;
	comments: Comment[];
	author: Author;
};

export type PostQuery = {
	getAll: () => Promise<Post[] | null>;
	getOne: (slug: string) => Promise<Post | null>;
};

export async function getAllPosts(this: any) {
	const query = groq`*[_type == "post"]`;

	return getAll.call(this, {
		query,
	});
}

export async function getOnePost(this: any, slug: string) {
	const query = groq`*[_type == "post" && slug.current == $slug][0]{
		"cover": cover.asset->url,
		title,
		"badges": badges[]->{
			"id": _id,
			name,
			color
		},
		content,
		likes,
		"slug": slug.current,
		publishedAt,
		comments,
		"author": author->{
			"id": _id,
			name,
			surname,
			"slug": slug.current,
			"image": image.asset->url
		}
	}`;

	return getOne.call(this, { query, params: { slug } });
}
