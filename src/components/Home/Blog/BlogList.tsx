"use client";

import React, { useState } from "react";
import BlogControlls from "./BlogControlls";
import BlogInfo from "./BlogInfo";
import Btn from "@/components/util/Btn";

const BlogList = () => {
	const [selectedOption, setSelectedOption] = useState("");

	return (
		<div className="grid grid-cols-[minmax(6rem,1fr)_repeat(8,minmax(min-content,14rem))_minmax(6rem,1fr)_]">
			<BlogControlls
				selectedOption={selectedOption}
				setSelectedOption={setSelectedOption}
			/>
			<ul className="grid grid-cols-3 mt-24 col-[2/-2] gap-10">
				<BlogInfo />
				<BlogInfo />
				<BlogInfo />
				<BlogInfo />
				<BlogInfo />
				<BlogInfo />
			</ul>
			<Btn className="col-[2/-2]">Read More</Btn>
		</div>
	);
};

export default BlogList;
