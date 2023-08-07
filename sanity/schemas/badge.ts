export type BadgeColor = "red" | "green" | "violet" | "blue";

const badgeSchema = {
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
