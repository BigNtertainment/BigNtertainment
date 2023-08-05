import Content from "@/components/Posts/Post/Content";
import SanityDatabase from "../../../../sanity/database";
import Header from "@/components/Posts/Post/Header";
import Baner from "@/components/Posts/Post/Baner";
import PostMap from "@/components/Posts/Post/PostMap";
import { notFound } from "next/navigation";
import Badges from "@/components/Posts/Post/Badges";
import Link from "next/link";

type Props = {
	params: { slug: string };
};

const Post = async ({ params }: Props) => {
	const database = new SanityDatabase();

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
			<Baner src={post.cover} title={post.title} className="mt-8" />
			<Content blocks={post.content} />
			<div className="flex  my-6 items-center justify-between">
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
