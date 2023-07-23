"use client";

import React, { useEffect, useState } from "react";
import BlogControlls from "./BlogControlls";
import BlogInfo from "./BlogInfo";
import Btn from "@/components/util/LinkButton";
import useSWR from "swr";
import { fetcher } from "@/lib/utils/fetchter";
import { BlogPost } from "@/types/INotion";

const BlogList = () => {
	const [selectedOption, setSelectedOption] = useState("");
	const { data } = useSWR("/api/posts?limit=6", fetcher);

	let listToRender: React.JSX.Element | React.JSX.Element[] = (
		<div className="text-5xl mb-4 font-bold text-center col-[2/-2]">
			No posts.
		</div>
	);

	if (data) {
		const posts = data.data as BlogPost[];

		listToRender = posts.map((post) => <BlogInfo key={post.id} post={post} />);
	}

	return (
		<div className="grid grid-cols-[minmax(6rem,1fr)_repeat(8,minmax(min-content,14rem))_minmax(6rem,1fr)_]">
			<BlogControlls
				selectedOption={selectedOption}
				setSelectedOption={setSelectedOption}
			/>
			<ul className="grid grid-cols-3 mt-20 col-[2/-2] gap-10">{listToRender}</ul>
			<Btn className="col-[2/-2]">Read More</Btn>
		</div>
	);
};

export default BlogList;
