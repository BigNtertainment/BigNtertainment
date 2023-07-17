"use client";

import React, { useState } from "react";
import BlogControlls from "./BlogControlls";

const BlogList = () => {
	const [selectedOption, setSelectedOption] = useState("");

	return (
		<div>
			<BlogControlls
				selectedOption={selectedOption}
				setSelectedOption={setSelectedOption}
			/>
		</div>
	);
};

export default BlogList;
