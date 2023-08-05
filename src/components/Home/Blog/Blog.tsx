"use client";

import { useState } from "react";
import BlogList from "./BlogList";
import BlogControlls from "./BlogControlls";
import Btn from "@/components/shared/LinkButton";
import Heading from "@/components/shared/Heading";

const Blog = () => {
	const [selectedCategory, setSelectedCategory] = useState("");

	return (
		<section className="col-[full-start/full-end] mt-16 grid grid-cols-defaultLayout mb-20">
			<Heading
				animated={true}
				size="4xl"
				className="col-[center-start/center-end] mb-14">
				Updates
			</Heading>
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
