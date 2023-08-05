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
		<div className="list-grid">
			{posts.map((post) => (
				<BlogItem key={post.slug} style="tile" post={post} />
			))}
		</div>
	);
};

export default PostsList;
