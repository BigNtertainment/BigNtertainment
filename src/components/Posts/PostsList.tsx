import SanityDatabase from "../../../sanity/database";
import BlogItem from "../Home/Blog/BlogItem";

const database = new SanityDatabase();

const PostsList = async () => {
	const posts = await database.posts.getAll({ limit: 10 });

	if (!posts) {
		return <div>No posts</div>;
	}

	return (
		<div className="py-10 max-w-6xl flex justify-center mx-auto mt-10 gap-10 flex-col">
			{posts.map((post) => (
				<BlogItem key={post.slug} style="sripe" post={post} />
			))}
		</div>
	);
};

export default PostsList;
