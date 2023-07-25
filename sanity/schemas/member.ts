const memberSchema = {
	name: "member",
	title: "Member",
	type: "document",
	fields: [
		{
			name: "firstName",
			title: "First Name",
			type: "string",
		},
		{
			name: "surname",
			title: "Surname",
			type: "string",
		},
		{
			name: "image",
			title: "Image",
			type: "image",
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
		{
			name: "personalPageLink",
			title: "Personal Page Link",
			type: "url",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "firstName",
				slugify: (input: string) => input.toLowerCase().replace(/\s+/g, "-"),
			},
		},
	],
};

export default memberSchema;
