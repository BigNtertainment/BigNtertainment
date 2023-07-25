const sliderSchema = {
	name: "slider",
	title: "Slider",
	type: "document",
	fields: [
		{
			name: "text",
			title: "Text",
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
			],
		},
		{
			name: "image",
			title: "Image",
			type: "image",
		},
	],
};

export default sliderSchema;
