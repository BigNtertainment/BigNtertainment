"use client";

import React, { useEffect } from "react";
import BlogOption from "./BlogOption";

type Props = {
	selectedOption: string;
	setSelectedOption: (option: string) => void;
};

const DUMMY_DATA = ["Latest", "Golf Control", "Fifa 23"];

const BlogControlls = ({ selectedOption, setSelectedOption }: Props) => {
	useEffect(() => {
		if (selectedOption === "") {
			setSelectedOption(DUMMY_DATA[0]);
		}
	}, []);

	return (
		<div className="border-b-2 col-[1/-1]">
			<ul className="flex justify-center">
				{DUMMY_DATA.map((game) => {
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
