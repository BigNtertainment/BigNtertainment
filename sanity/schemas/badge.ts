import { Rule } from "sanity";

export type BadgeColor = "red" | "green" | "violet" | "blue";

export interface Badge {
	_type: "badge";
	name: string;
	color: BadgeColor;
}

export interface SanityBadgeDocument {
	_id: string;
	_type: "badge";
	name: string;
	color: BadgeColor;
}

const badgeSchema = {
	title: "Badge",
	name: "badge",
	type: "document",
	fields: [
		{
			title: "Name",
			name: "name",
			type: "string",
			validation: (Rule: Rule) => Rule.required().unique(),
		},
		{
			title: "Color",
			name: "color",
			type: "string",
			options: {
				list: [
					{ title: "Red", value: "red" },
					{ title: "Green", value: "green" },
					{ title: "Violet", value: "violet" },
					{ title: "Blue", value: "blue" },
				],
			},
		},
	],
};

export default badgeSchema;
