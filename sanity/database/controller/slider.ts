import { groq } from "next-sanity";
import { getAll } from "./factory";

export type Slider = {
	image: string;
	text: any;
};

export type SliderQuery = {
	getAll: () => Promise<Slider[] | null>;
};

export async function getAllSlides(this: any) {
	const query = groq`*[_type == "slider"]{
    text,
		"image": image.asset->url
  }`;

	return getAll.call(this, {
		query,
	});
}
