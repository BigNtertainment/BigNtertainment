// BlogControlls.js

import React, { useEffect, useState } from "react";
import BlogOption from "./BlogOption";
import SanityDatabase from "../../../../sanity/database";

type Props = {
	selectedCategory: string;
	setSelectedCategory: (option: string) => void;
};

const DEFAULT_OPTION = "Latest";
const database = new SanityDatabase();

const BlogControlls = ({ selectedCategory, setSelectedCategory }: Props) => {
	const [options, setOptions] = useState<string[]>([]);

	useEffect(() => {
		if (selectedCategory === "") {
			setSelectedCategory(DEFAULT_OPTION);
		}
	}, []);

	useEffect(() => {
		database.recommendedCategories.getAll().then((data) => {
			if (!data) {
				return;
			}

			if (!data[0]) {
				return;
			}

			setOptions(
				data[0].badges?.map((badge) => {
					return badge.name;
				})
			);
		});
	}, [selectedCategory]);

	return (
		<div className="col-[full-start/full-end] relative after:border-t-2 after:w-full after:absolute after:bottom-0 after:left-0 after:bg-dark-primary after:opacity-[0.08]">
			<ul className="flex justify-center flex-wrap">
				{[DEFAULT_OPTION, ...options].map((game) => {
					return (
						<BlogOption
							key={game}
							isActive={selectedCategory === game}
							onClick={() => setSelectedCategory(game)}>
							{game}
						</BlogOption>
					);
				})}
			</ul>
		</div>
	);
};

export default BlogControlls;
