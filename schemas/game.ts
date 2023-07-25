const gameSchema = {
	title: "Game",
	name: "game",
	type: "document",
	fields: [
		{
			title: "Name",
			name: "name",
			type: "string",
		},
		{
			title: "Slug",
			name: "slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 100,
			},
		},
		{
			name: "badge",
			title: "Badge",
			type: "reference",
			to: [{ type: "badge" }],
		},
		{
			name: "likes",
			title: "Likes",
			type: "number",
			initialValue: 0,
		},
		{
			name: "publishedAt",
			title: "Published At",
			type: "datetime",
		},
		{
			title: "Cover",
			name: "cover",
			type: "image",
		},
		{
			title: "Gameplay",
			name: "gameplay",
			type: "array",
			of: [{ type: "image" }],
		},
		{
			title: "Description",
			name: "description",
			type: "string",
		},
		{
			title: "Game Link",
			name: "gameLink",
			type: "url",
		},
		{
			name: "content",
			title: "Content",
			type: "array",
			of: [
				{
					type: "block",
					styles: [
						{ title: "Normal", value: "normal" },
						{ title: "H2", value: "h2" },
						{ title: "H3", value: "h3" },
						{ title: "Quote", value: "blockquote" },
					],
					marks: {
						annotations: [
							{
								name: "link",
								type: "object",
								title: "Link",
								fields: [
									{
										name: "href",
										title: "URL",
										type: "url",
									},
								],
							},
						],
					},
				},
				{
					type: "image",
					options: { hotspot: true },
				},
			],
		},
	],
};

export default gameSchema;
