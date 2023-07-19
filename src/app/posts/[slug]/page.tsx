import Notion from "@/lib/Notion";
import Link from "next/link";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import slugify from "slugify";

type Props = {
	params: { slug: string };
};

const Post = async ({ params }: Props) => {
	const postSlug = params.slug;
	const notion = new Notion();
	const { post, markdown } = await notion.getBlogPost(postSlug);

	const wordsCount = markdown.parent.split(" ").length;

	const timeToRead = Math.round(wordsCount / 200);

	const authors = post.author.map((author) => (
		<Link
			className="underline blog-author relative"
			key={author.id}
			href={`/team/${slugify(author.name.toLowerCase())}`}>
			{author.name}
		</Link>
	));

	return (
		<main className="col-[center-start/center-end] blog-post-markdown grid grid-cols-7 gap-x-10 mt-7">
			<div className="col-[1/-2]">
				<Link href="/">Home</Link>
				<div className="-translate-y-0.5 inline-block mx-1.5 text-dark-highlight">
					»{" "}
				</div>
				<Link href="/posts">Posts</Link>
				<h1 className="text-7xl font-bold my-4">{post.title}</h1>
				<div className="text-dark-highlight flex gap-6 blog-info">
					<div>{post.date}</div>
					<div>{timeToRead} min</div>
					<div>{authors}</div>
				</div>
			</div>
			<article className="prose prose-invert prose-2xl max-w-fit col-[1/-2]">
				<ReactMarkdown>{markdown.parent}</ReactMarkdown>
			</article>
			<aside className="mt-10">XD</aside>
		</main>
	);
};

export default Post;
