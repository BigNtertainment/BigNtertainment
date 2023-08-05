import { useEffect, useState } from "react";
import SanityDatabase from "../../../../sanity/database";
import { Post } from "../../../../sanity/database/controller/post";
import BlogItem from "./BlogItem";
import EmptyPage from "@/components/shared/EmptyPage";

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
		return <EmptyPage>No posts found.</EmptyPage>;
	}

	return (
		<ul className="list-grid mt-20 col-[center-start/center-end]">
			{posts!.map((post) => (
				<BlogItem key={post.slug} post={post} style="tile" />
			))}
		</ul>
	);
};

export default BlogList;
