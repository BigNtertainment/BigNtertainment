import Badge from "@/components/Home/Blog/Badge";
import Notion from "@/lib/Notion";
import moment from "moment";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import slugify from "slugify";

type Props = {
	params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const slug = params.slug;
	const notion = new Notion();
	const { post } = await notion.getBlogPost(slug);

	if (!post) {
		return {
			title: "Not Found",
			description: "The page is not found",
		};
	}

	return {
		title: post.title,
		description: post.description,
		alternates: {
			canonical: `${process.env.baseUrl}/posts/${slug}`,
		},
	};
}

const Post = async ({ params }: Props) => {
	const slug = params.slug;
	const notion = new Notion();
	const { post, markdown } = await notion.getBlogPost(slug);

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

	const badges = post.tags.map((tag) => (
		<Badge key={tag.id} color={tag.color} name={tag.name} />
	));

	return (
		<main className="col-[center-start/center-end] blog-post-markdown grid grid-cols-7 gap-x-10 my-10">
			<div className="col-[1/-2] -mb-3">
				<Link href="/">Home</Link>
				<div className="-translate-y-0.5 inline-block mx-1.5 text-dark-highlight">
					»{" "}
				</div>
				<Link href="/posts">Posts</Link>
				<h1 className="text-7xl font-bold my-4">{post.title}</h1>
				<div className="text-dark-highlight flex gap-6 blog-info">
					<div>{moment(new Date(post.date)).format("LL")}</div>
					<div>{timeToRead} min</div>
					<div>{authors}</div>
				</div>
			</div>
			<article className="prose prose-invert prose-2xl max-w-fit col-[1/-2]">
				<ReactMarkdown>{markdown.parent}</ReactMarkdown>
				<div className="flex items-center justify-between my-10 mt-20">
					<div className="flex items-center justify-center gap-5">{badges}</div>
					<Link
						href="/posts"
						className="py-3 w-max rounded-lg px-7 text-3xl no-underline">
						<span className="underline">Read more posts</span>{" "}
						<span className="no-underline">&rarr;</span>
					</Link>
				</div>
			</article>
			<aside className="mt-10">XD</aside>
		</main>
	);
};

export default Post;
