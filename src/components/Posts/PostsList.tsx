import Notion from "@/lib/Notion";
import React from "react";
import PostItem from "./PostItem";

const PostsList = async () => {
	const notion = new Notion();
	const posts = await notion.getPublishedPosts();

	//TODO: Add pagination

	return (
		<div className="grid justify-center mt-16 test">
			{posts.map((post) => (
				<PostItem
					slug={post.slug}
					key={post.id}
					cover={post.cover}
					date={post.date}
					description={post.description}
					title={post.title}
					tags={post.tags}
				/>
			))}
		</div>
	);
};

export default PostsList;
