import React from "react";

type Props = {
	children: string;
	isActive?: boolean;
};

const BlogOption = ({ children, isActive }: Props) => {
	const activeStyle = "bg-red-300";

	return (
		<li className={`px-3 py-2 mx-1 ${isActive ? activeStyle : ""}`}>
			{children}
		</li>
	);
};

export default BlogOption;
