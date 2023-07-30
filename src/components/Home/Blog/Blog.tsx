"use client";

import { useState } from "react";
import BlogList from "./BlogList";
import BlogControlls from "./BlogControlls";
import Btn from "@/components/shared/LinkButton";

const Blog = () => {
	const [selectedCategory, setSelectedCategory] = useState("");

	return (
		<section className="col-[full-start/full-end] mt-16 grid grid-cols-defaultLayout">
			<h3 className="text-6xl font-bold text-center mb-20 col-[full-start/full-end]">
				Updates
			</h3>
			<BlogControlls
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			<BlogList selectedCategory={selectedCategory} />
			<Btn className="col-[center-start/center-end]" href="/posts">
				Read More
			</Btn>
		</section>
	);
};

export default Blog;
