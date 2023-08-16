import React from "react";

type Props = {
	children: string;
	isActive?: boolean;
	onClick: () => void;
};

const BlogOption = ({ children, isActive, onClick }: Props) => {
	const activeStyle = "bg-[rgb(47,47,47)] bg-opacity-80 active";

	return (
		<li
			className={`select-none flex whitespace-nowrap items-center text-center justify-center px-7 py-3.5 mb-0.5  relative cursor-pointer transition hover:bg-[rgb(47,47,47)] hover:bg-opacity-80 hover:transition ${
				isActive ? activeStyle : ""
			} blog-option`}
			onClick={onClick}>
			{children}
		</li>
	);
};

export default BlogOption;
