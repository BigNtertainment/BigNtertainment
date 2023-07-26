import { groq } from "next-sanity";
import { getAll } from "./factory";

export type RecommendedCategory = {};

export type RecommendedCategoryQuery = {
	getAll: () => Promise<RecommendedCategory[] | null>;
};

export async function getAllRecommendedCategories(this: any) {
	const query = groq`*[_type == "recommendedCategories"]`;

	return getAll.call(this, {
		query,
	});
}
