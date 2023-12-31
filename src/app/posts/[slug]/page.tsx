import Content from "@/components/Posts/Post/Content";
import SanityDatabase from "../../../../sanity/database";
import Header from "@/components/Posts/Post/Header";
import Baner from "@/components/Posts/Post/Baner";
import { notFound } from "next/navigation";
import Badges from "@/components/Posts/Post/Badges";
import Link from "next/link";
import { Metadata } from "next";

export type Props = {
	params: { slug: string };
};

const database = new SanityDatabase();

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const post = await database.posts.getOne(params.slug);

	if (!post) {
		return {
			title: "Not Found",
			description: "The page yo are looking for does not exist.",
		};
	}

	return {
		title: post.title,
		description: post.description,
		alternates: {
			canonical: `/posts/${post.slug}`,
			languages: {
				"en-US": `/posts/${post.slug}`,
			},
		},
	};
}

const Post = async ({ params }: Props) => {
	const post = await database.posts.getOne(params.slug);

	if (!post) {
		return notFound();
	}

	return (
		<main className="col-[center-start/center-end] blog-post-markdown  my-8">
			<Header
				date={post.publishedAt}
				title={post.title}
				content={post.content}
				author={post.author}
			/>
			<Baner src={post.cover} title={post.title} className="mt-8 mb-5" />
			<Content blocks={post.content} />
			<div className="flex  my-6 items-center justify-center flex-wrap md:justify-between">
				<Badges badges={post.badges} />
				<Link
					href="/posts"
					className="py-3 w-max rounded-lg px-7 text-lg no-underline">
					<span className="underline">Read more posts</span>{" "}
					<span className="no-underline">&rarr;</span>
				</Link>
			</div>
		</main>
	);
};

export default Post;
