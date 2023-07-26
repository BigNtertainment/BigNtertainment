import { groq } from "next-sanity";
import { getAll } from "./factory";

export type Slider = {};

export type SliderQuery = {
	getAll: () => Promise<Slider[] | null>;
};

export async function getAllSlides(this: any) {
	const query = groq`*[_type == "slider"]{
    text,
    image
  }`;

	return getAll.call(this, {
		query,
	});
}
