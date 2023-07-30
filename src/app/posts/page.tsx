import PostsList from "@/components/Posts/PostsList";
import React from "react";

export const metadata = {
	title: "Posts",
	description: "List of all posts",
	alternates: {
		canonical: `${process.env.baseUrl}/posts`,
	},
};

const Page = () => {
	return (
		<main className="col-[center-start/center-end]">{/* <PostsList /> */}</main>
	);
};

export default Page;
