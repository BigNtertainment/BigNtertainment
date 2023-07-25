import { Rule } from "sanity";

const recommendedCategoriesSchema = {
	name: "recommendedCategories",
	title: "Recommended Categories",
	type: "document",
	fields: [
		{
			name: "badges",
			title: "Badges",
			type: "array",
			of: [{ type: "reference", to: [{ type: "badge" }] }],
			validation: (Rule: Rule) => Rule.max(6).warning("Maximum 6 badges allowed."),
		},
	],
};

export default recommendedCategoriesSchema;
