import { QueryParams, groq } from "next-sanity";
import { getAll, getOne } from "./factory";
import { Badge } from "./badge";
import { MarkdownBlock } from "@/types/TSanity";
import { Comment } from "../../schemas/comment";
import { AmountResponse } from "./games";
import { paginate } from "../../utils/dbUtils";

export type Author = {
	id: string;
	name: string;
	surname: string;
	image: string;
	personalPageLink: string;
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
	description: string;
};

export type PostQuery = {
	getAll: (params?: QueryParams) => Promise<Post[] | null>;
	getOne: (slug: string) => Promise<Post | null>;
	getByBadge: (
		badgeName: string,
		params?: QueryParams
	) => Promise<Post[] | null>;
	getAmount: () => Promise<AmountResponse | null>;
};

export async function getAllPosts(this: any, params?: QueryParams) {
	const query = groq`*[_type == "post"][${paginate({
		limit: params?.limit,
		page: params?.page,
	})}]{
    "cover": cover.asset->url,
    title,
    "badges": badges[]->{
      "id": _id,
      name,
      color
    },
		description,
    content,
    likes,
    "slug": slug.current,
    publishedAt,
    comments,
    "author": author->{
      "id": _id,
      name,
      surname,
      "image": image.asset->url,
			personalPageLink
    },
  }`;

	return getAll.call(this, {
		query,
		params,
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
		description,
		"slug": slug.current,
		publishedAt,
		comments,
		"author": author->{
			"id": _id,
			name,
			surname,
			"image": image.asset->url,
			personalPageLink
		}
	}`;

	return getOne.call(this, { query, params: { slug } });
}

export async function getPostsByBadge(
	this: any,
	badgeName: string,
	params?: QueryParams
) {
	const query = groq`
    *[_type == "post" && $badgeName in badges[]->name][0...${
					params?.limit || 10
				}]{
      "cover": cover.asset->url,
      title,
      "badges": badges[]->{
        "id": _id,
        name,
        color
      },
      content,
      likes,
			description,
      "slug": slug.current,
      publishedAt,
      comments,
      "author": author->{
        "id": _id,
        name,
        surname,
        "image": image.asset->url,
				personalPageLink
      }
    }
  `;

	return getAll.call(this, { query, params: { badgeName, ...params } });
}

export async function getPostsAmount(this: any) {
	const query = groq`{"amount": count(*[_type == "post"])}`;

	return getAll.call(this, { query });
}
