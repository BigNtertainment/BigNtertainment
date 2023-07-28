import { groq } from "next-sanity";
import { getAll, getOne } from "./factory";
import { Badge } from "./badge";

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
	content: Array<
		| {
				_type: string;
				style?: string;
				children: Array<{ text: string } | { _type: string; url: string }>;
		  }
		| { _type: string; asset: { _ref: string; _type: string } }
	>;
	likes: number;
	comments: Array<{
		_type: string;
		author: {
			_ref: string;
			_type: string;
		};
		comment: string;
	}>;
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
    "title": title,
    "publishedAt": publishedAt,
    "cover": cover.asset->url,
    "slug": slug.current,
    "badge": badge[]->,
    "content": content,
    "likes": likes,
    "comments": comments,
    "author": author->{"id": _id, name, surname, "slug": slug.current, "image": image.asset->url}
  }`;

	return getOne.call(this, { query, params: { slug } });
}
