import Content from "@/components/Posts/Post/Content";
import SanityDatabase from "../../../../sanity/database";
import Header from "@/components/Posts/Post/Header";
import Baner from "@/components/Posts/Post/Baner";
import PostMap from "@/components/Posts/Post/PostMap";

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
		<main className="col-[center-start/center-end] blog-post-markdown grid grid-cols-7 gap-x-10 my-8">
			<Header date={post.publishedAt} title={post.title} className="col-[1/-2]" />
			<Baner src={post.cover} title={post.title} className="mt-12 col-[1/-2]" />
			<Content blocks={post?.content} className="col-[1/-2]" />
			<PostMap className="col-[-2/-1] row-[2/3] mt-10" />
		</main>
	);
};

export default Post;
