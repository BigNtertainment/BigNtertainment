// BlogControlls.js

import React, { useEffect } from "react";
import BlogOption from "./BlogOption";

type Props = {
	selectedOption: string;
	setSelectedOption: (option: string) => void;
};

const DEFAULT_OPTION = "Latest";

const BlogControlls = ({ selectedOption, setSelectedOption }: Props) => {
	useEffect(() => {
		if (selectedOption === "") {
			setSelectedOption(DEFAULT_OPTION);
		}
	}, []);

	const options: any[] = []; //TODO: Implement

	return (
		<div className="col-[1/-1] relative after:border-t-2 after:w-full after:absolute after:bottom-0 after:left-0 after:bg-dark-primary after:opacity-[0.08]">
			<ul className="flex justify-center">
				{[DEFAULT_OPTION, ...options].map((game) => {
					return (
						<BlogOption
							key={game}
							isActive={selectedOption === game}
							onClick={() => setSelectedOption(game)}>
							{game}
						</BlogOption>
					);
				})}
			</ul>
		</div>
	);
};

export default BlogControlls;
