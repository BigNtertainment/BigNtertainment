const commentSchema = {
	name: "comment",
	title: "Comment",
	type: "object",
	fields: [
		{
			name: "user",
			title: "User",
			type: "string", // You can define a separate schema for users and reference it here
		},
		{
			name: "comment",
			title: "Comment",
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
