// Filename: memberSchema.ts
import { Schema } from "@sanity/schema";

// Define the schema for the member
const memberSchema = Schema.compile({
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
				source: "firstName", // Use 'firstName' field as the source for the slug
				slugify: (input: string) => input.toLowerCase().replace(/\s+/g, "-"),
			},
		},
	],
});

export default memberSchema;
