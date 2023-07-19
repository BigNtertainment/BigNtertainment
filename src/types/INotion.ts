export type Tag = {
	id: string;
	color: string;
	name: string;
};

type PostAuthor = {
	object: string;
	id: string;
	name: string;
	avatar_url: string;
	type: string;
	person: {
		email: string;
	};
};

export type BlogPost = {
	id: string;
	slug: string;
	cover: string;
	title: string;
	tags: Tag[];
	description: string;
	date: string;
	author: PostAuthor[];
};

export type PostPage = {
	post: BlogPost;
	markdown: string;
};
