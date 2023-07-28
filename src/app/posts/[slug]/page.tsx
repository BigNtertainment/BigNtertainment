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

	console.log(post);

	//TODO: Add site map, comments, badges, next article

	return (
		<main className="col-[center-start/center-end] blog-post-markdown grid grid-cols-7 gap-x-10 my-8">
			<Header
				date={post.publishedAt}
				title={post.title}
				className="col-[1/-2]"
				content={post.content}
				author={post.author}
			/>
			<Baner src={post.cover} title={post.title} className="mt-12 col-[1/-2]" />
			<Content blocks={post.content} className="col-[1/-2]" />
			<div className="flex col-[1/-2] my-6 items-center justify-between">
				<Badges badges={post.badges} />
				<Link
					href="/posts"
					className="py-3 w-max rounded-lg px-7 text-2xl no-underline">
					<span className="underline">Read more posts</span>{" "}
					<span className="no-underline">&rarr;</span>
				</Link>
			</div>
			<PostMap className="col-[-2/-1] row-[2/3] mt-10" />
		</main>
	);
};

export default Post;
