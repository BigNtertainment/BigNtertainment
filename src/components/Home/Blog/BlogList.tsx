import { useEffect, useState } from "react";
import SanityDatabase from "../../../../sanity/database";
import { Post } from "../../../../sanity/database/controller/post";
import BlogItem from "./BlogItem";

type Props = {
	selectedCategory: string;
};

const DEFAULT_OPTION = "Latest";
const database = new SanityDatabase();

const BlogList = ({ selectedCategory }: Props) => {
	const [posts, setPosts] = useState<Post[] | null>([]);

	useEffect(() => {
		if (selectedCategory === DEFAULT_OPTION) {
			database.posts.getAll({ limit: 6 }).then((data) => setPosts(data));
		} else {
			database.posts
				.getByBadge(selectedCategory, { limit: 6 })
				.then((data) => setPosts(data));
		}
	}, [selectedCategory]);

	if (posts?.length === 0) {
		return (
			<div className="my-20 mt-40 col-[center-start/center-end] font-bold text-center text-4xl">
				No posts found
			</div>
		);
	}

	return (
		<ul className="grid grid-cols-3 mt-20 items-center gap-10 col-[center-start/center-end]">
			{posts!.map((post) => (
				<BlogItem key={post.slug} post={post} style="tile" />
			))}
		</ul>
	);
};

export default BlogList;
