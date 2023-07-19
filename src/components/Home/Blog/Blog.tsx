import React from "react";
import BlogList from "./BlogList";

const Blog = () => {
	return (
		<section className="col-[full-start/full-end] mt-16">
			<h3 className="text-6xl font-bold text-center mb-20">Updates</h3>
			<BlogList />
		</section>
	);
};

export default Blog;
