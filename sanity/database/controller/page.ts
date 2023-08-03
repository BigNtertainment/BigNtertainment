import { groq } from "next-sanity";
import { getOne } from "./factory";
import { MarkdownBlock } from "@/types/TSanity";

export type Page = {
	content: MarkdownBlock;
};

export type PageQuery = {
	getOne: (slug: string) => Promise<Page | null>;
};

export async function getOnePage(this: any, slug: string) {
	const query = groq`*[_type == "pages" && slug.current == $slug][0]{
    content
  }`;

	return getOne.call(this, { query, params: { slug } });
}
