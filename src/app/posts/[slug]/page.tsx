import Content from "@/components/Posts/Post/Content";
import SanityDatabase from "../../../../sanity/database";
import Header from "@/components/Posts/Post/Header";

type Props = {
	params: { slug: string };
};

const Post = async ({ params }: Props) => {
	const database = new SanityDatabase();

	const post = await database.posts.getOne(params.slug);

	if (!post) {
		return <div>bruh</div>;
	}

	return (
		<main className="col-[center-start/center-end] blog-post-markdown grid grid-cols-7 gap-x-10 my-10">
			<Header date={post.publishedAt} title={post.title} />
			<Content blocks={post?.content} />
		</main>
	);
};

export default Post;
