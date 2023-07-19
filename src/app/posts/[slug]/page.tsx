import Notion from "@/lib/Notion";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type Props = {
	params: { slug: string };
};

const Post = async ({ params }: Props) => {
	const postSlug = params.slug;
	const notion = new Notion();
	const { post, markdown } = await notion.getBlogPost(postSlug);

	console.log(markdown.parent);

	return (
		<article className="col-[center-start/center-end] blog-post">
			<ReactMarkdown>{markdown.parent}</ReactMarkdown>
		</article>
	);
};

export default Post;
