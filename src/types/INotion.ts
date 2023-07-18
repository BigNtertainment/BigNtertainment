export type Tag = {
	id: string;
	color: string;
	name: string;
};

export type BlogPost = {
	id: string;
	slug: string;
	cover: string;
	title: string;
	tags: Tag[];
	description: string;
	date: string;
};
