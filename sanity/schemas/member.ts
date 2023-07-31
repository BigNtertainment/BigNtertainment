import { generateSlug } from "../utils/dbUtils";

export type Member = {
	name: string;
	surname: string;
	image: string;
	description: string;
	personalPageLink: string;
	slug: string;
};

const memberSchema = {
	name: "member",
	title: "Member",
	type: "document",
	fields: [
		{
			name: "name",
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
				source: (doc: any) => `${doc.name} ${doc.surname}`,
				slugify: (input: string) => generateSlug(input),
			},
		},
	],
};

export default memberSchema;
