import React from "react";
import BlogList from "./BlogList";

const Blog = () => {
	return (
		<div className="col-[full-start/full-end] ">
			<h3 className="text-6xl font-bold text-center mb-16">Updates</h3>
			<BlogList />
		</div>
	);
};

export default Blog;
