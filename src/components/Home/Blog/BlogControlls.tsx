import React from "react";
import BlogOption from "./BlogOption";

const BlogControlls = () => {
	return (
		<div className="border-b-2">
			<ul className="flex justify-center">
				<BlogOption>Latest</BlogOption>
				<BlogOption>Golf Control</BlogOption>
				<BlogOption>Fifa 23</BlogOption>
			</ul>
		</div>
	);
};

export default BlogControlls;
