const pagesSchema = {
	title: "Pages",
	name: "pages",
	type: "document",
	fields: [
		{
			title: "Title",
			name: "title",
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

export default pagesSchema;
