export type Comment = {
	user: string;
	content: string;
	publishedAt: string;
	likes: number;
};

const commentSchema = {
	name: "comment",
	title: "Comment",
	type: "object",
	fields: [
		{
			name: "user",
			title: "User",
			type: "string",
		},
		{
			name: "content",
			title: "Content",
			type: "text",
		},
		{
			name: "publishedAt",
			title: "Published At",
			type: "datetime",
		},
		{
			name: "likes",
			title: "Likes",
			type: "number",
			initialValue: 0,
		},
	],
};

export default commentSchema;
