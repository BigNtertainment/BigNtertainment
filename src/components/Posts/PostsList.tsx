import SanityDatabase from "../../../sanity/database";
import BlogItem from "../Home/Blog/BlogItem";
import EmptyPage from "../shared/EmptyPage";

const database = new SanityDatabase();

const PostsList = async () => {
	const posts = await database.posts.getAll({ limit: 10 });

	if (!posts) {
		return <EmptyPage>No posts</EmptyPage>;
	}

	return (
		<div className="py-10 max-w-[90rem]  flex justify-center mx-auto mt-10 gap-10 flex-col">
			{posts.map((post) => (
				<BlogItem key={post.slug} style="sripe" post={post} />
			))}
		</div>
	);
};

export default PostsList;
