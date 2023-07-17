import React from "react";

type Props = {
	children: string;
	isActive?: boolean;
	onClick: () => void;
};

const BlogOption = ({ children, isActive, onClick }: Props) => {
	const activeStyle = "bg-red-300";

	return (
		<li
			className={`px-3 py-2 mx-1 ${isActive ? activeStyle : ""}`}
			onClick={onClick}>
			{children}
		</li>
	);
};

export default BlogOption;
