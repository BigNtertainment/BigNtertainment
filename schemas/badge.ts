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

export const badgeSchema = {
	title: "Badge",
	name: "badge",
	type: "document",
	fields: [
		{
			title: "Name",
			name: "name",
			type: "string",
		},
		{
			title: "Color",
			name: "color",
			type: "string",
		},
	],
};
