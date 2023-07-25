import { Rule } from "sanity";

const recommendedGamesSchema = {
	name: "recommendedGames",
	title: "Recommended Games",
	type: "document",
	fields: [
		{
			name: "games",
			title: "Games",
			type: "array",
			of: [{ type: "reference", to: [{ type: "game" }] }],
			validation: (Rule: Rule) => Rule.max(6).warning("Maximum 6 games allowed."),
		},
	],
};

export default recommendedGamesSchema;
