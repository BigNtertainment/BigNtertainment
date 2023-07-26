import Content from "@/components/Posts/Post/Content";
import SanityDatabase from "../../../../sanity/database";

type Props = {
	params: { slug: string };
};

const Post = async ({ params }: Props) => {
	const database = new SanityDatabase();

	const post = await database.posts.getOne(params.slug);

	return <Content blocks={post?.content} />;
};

export default Post;
