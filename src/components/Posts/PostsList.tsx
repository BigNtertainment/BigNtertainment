"use client";

import { useEffect, useState } from "react";
import SanityDatabase from "../../../sanity/database";
import { Post } from "../../../sanity/database/controller/post";
import BlogItem from "../Home/Blog/BlogItem";
import EmptyPage from "../shared/EmptyPage";
import Paginator from "../shared/Pagination/Paginator";

const database = new SanityDatabase();
const elementsPerPage = 9;

const PostsList = () => {
	const [posts, setPosts] = useState<Post[] | null>(null);
	const [page, setPage] = useState(1);
	const [elementsAmount, setElementsAmount] = useState(0);

	useEffect(() => {
		database.posts
			.getAmount()
			.then((data) => setElementsAmount(data?.amount || 0));
	}, []);

	useEffect(() => {
		database.posts
			.getAll({ limit: elementsPerPage, page })
			.then((data) => setPosts(data));
	}, [page]);

	if (!posts) {
		return <EmptyPage>No posts</EmptyPage>;
	}

	return (
		<>
			<div className="list-grid">
				{posts.map((post) => (
					<BlogItem key={post.slug} style="tile" post={post} />
				))}
			</div>
			<div className="mt-20 text-center flex justify-center">
				<Paginator
					elementsAmount={elementsAmount}
					page={page}
					setPage={setPage}
					elementsPerPage={elementsPerPage}
				/>
			</div>
		</>
	);
};

export default PostsList;
