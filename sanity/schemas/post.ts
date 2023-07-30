const postSchema = {
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			type: "string",
		},
		{
			name: "publishedAt",
			title: "Published At",
			type: "datetime",
			options: {
				default: new Date().toISOString(),
			},
		},
		{
			title: "Cover",
			name: "cover",
			type: "image",
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
			name: "badges",
			title: "Badges",
			type: "array",
			of: [{ type: "reference", to: { type: "badge" } }],
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
		{
			name: "likes",
			title: "Likes",
			type: "number",
			initialValue: 0,
		},
		{
			name: "comments",
			title: "Comments",
			type: "array",
			of: [{ type: "reference", to: { type: "comment" } }], // Use the previously defined commentSchema as an array of comments
		},
		{
			name: "author",
			title: "Author",
			type: "reference",
			to: [{ type: "member" }],
		},
	],
};

export default postSchema;
