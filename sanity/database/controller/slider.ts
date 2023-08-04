import { groq } from "next-sanity";
import { getAll } from "./factory";
import { MarkdownBlock } from "@/types/TSanity";

export type Slider = {
	image: string;
	text: MarkdownBlock;
	link: string;
	linkCaption: string;
};

export type SliderQuery = {
	getAll: () => Promise<Slider[] | null>;
};

export async function getAllSlides(this: any) {
	const query = groq`*[_type == "slider"]{
    text,
		"image": image.asset->url,
		link,
		linkCaption
  }`;

	return getAll.call(this, {
		query,
	});
}
