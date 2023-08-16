import { useEffect, useState } from "react";
import SanityDatabase from "../../../../sanity/database";
import { Post } from "../../../../sanity/database/controller/post";
import BlogItem from "./BlogItem";
import EmptyPage from "@/components/shared/EmptyPage";
import LoadingPost from "@/components/shared/loading/Post";

type Props = {
	selectedCategory: string;
};

const DEFAULT_OPTION = "Latest";
const database = new SanityDatabase();

const BlogList = ({ selectedCategory }: Props) => {
	const [posts, setPosts] = useState<Post[] | null>([]);
	const [isInProgress, setIsInProgress] = useState(true);

	useEffect(() => {
		if (selectedCategory === DEFAULT_OPTION) {
			database.posts.getAll({ limit: 6 }).then((data) => {
				setPosts(data);
				setIsInProgress(false);
			});
		} else {
			database.posts.getByBadge(selectedCategory, { limit: 6 }).then((data) => {
				setPosts(data);
				setIsInProgress(false);
			});
		}
	}, [selectedCategory]);

	if (isInProgress) {
		return (
			<ul className="list-grid mt-14 col-[center-start/center-end]">
				<LoadingPost />
				<LoadingPost />
				<LoadingPost />
				<LoadingPost />
				<LoadingPost />
				<LoadingPost />
			</ul>
		);
	}

	if (posts?.length === 0) {
		return <EmptyPage className="mt-10">No posts found.</EmptyPage>;
	}

	return (
		<ul className="list-grid mt-14 col-[center-start/center-end]">
			{posts!
				.sort((post1, post2) => {
					if (post1.publishedAt > post2.publishedAt) {
						return -1;
					} else if (post1.publishedAt < post2.publishedAt) {
						return 1;
					} else {
						return 0;
					}
				})
				.map((post) => (
					<BlogItem key={post.slug} post={post} style="tile" />
				))}
		</ul>
	);
};

export default BlogList;
