import { groq } from "next-sanity";
import { getAll } from "./factory";
import { Badge } from "./badge";

export type RecommendedCategory = {
	badges: Badge[];
};

export type RecommendedCategoryQuery = {
	getAll: () => Promise<RecommendedCategory[] | null>;
};

export async function getAllRecommendedCategories(this: any) {
	const query = groq`*[_type == "recommendedCategories"]{
    badges[]->{
		"id": _id,
		name,
    color
	}
  }`;

	return getAll.call(this, {
		query,
	});
}
