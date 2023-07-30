import { useEffect, useState } from "react";
import SanityDatabase from "../../../../sanity/database";
import { Post } from "../../../../sanity/database/controller/post";
import BlogItem from "./BlogItem";

// import React, { useState } from "react";
// import BlogControlls from "./BlogControlls";
// import BlogInfo from "./BlogInfo";
// import Button from "@/components/shared/LinkButton";
// import useSWR from "swr";
// import { fetcher } from "@/lib/utils/fetchter";
// import { BlogPost } from "@/types/INotion";
// import SanityDatabase from "../../../../sanity/database";

// const BlogList = () => {
// 	const { data } = useSWR("/api/posts?limit=6", fetcher);

// 	// console.log(selectedOption);

// 	let listToRender: React.JSX.Element | React.JSX.Element[] = (
// 		<div className="text-5xl mb-4 font-bold text-center col-[2/-2]">
// 			No posts.
// 		</div>
// 	);

// 	if (data) {
// 		const posts = data.data as BlogPost[];

// 		listToRender = posts.map((post) => <BlogInfo key={post.id} post={post} />);
// 	}

// 	const database = new SanityDatabase();

// 	database.posts.getAll().then((data) => {
// 		console.log(data);
// 	});

// 	return (
// 		<div className="grid grid-cols-[minmax(6rem,1fr)_repeat(8,minmax(min-content,14rem))_minmax(6rem,1fr)_]">
// 			<ul className="grid grid-cols-3 mt-20 col-[2/-2] gap-10">{listToRender}</ul>

// 		</div>
// 	);
// };

// export default BlogList;

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
				.getAll({ badgeName: selectedCategory, limit: 6 })
				.then((data) => setPosts(data));
		}
	}, [selectedCategory]);

	if (!posts) {
		return (
			<div className="grid grid-cols-3 mt-20 items-center gap-10 col-[center-start/center-end]">
				No posts found!
			</div>
		);
	}

	return (
		<ul className="grid grid-cols-3 mt-20 items-center gap-10 col-[center-start/center-end]">
			{posts.map((post) => (
				<BlogItem key={post.slug} post={post} style="tile" />
			))}
		</ul>
	);
};

export default BlogList;
