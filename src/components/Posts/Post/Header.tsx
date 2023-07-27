import Link from "next/link";
import React from "react";
import moment from "moment";
import Authors from "./Authors";
import TimeToRead from "./TimeToRead";
import Location from "./Location";
import { cn } from "@/lib/utils/tailwind";
import { Author } from "../../../../sanity/database/controller/post";

const Header = (post: {
	title: string;
	date: string;
	className: string;
	content: any;
	author: Author;
}) => {
	const date = moment(new Date(post.date)).format("LL");

	return (
		<div className={cn("-mb-3", post.className)}>
			<Location />
			<h1 className="text-7xl font-bold my-4">{post.title}</h1>
			<div className="text-dark-highlight flex gap-6 blog-info">
				<div>{date}</div>
				<TimeToRead content={post.content} />
				<Authors author={post.author} />
			</div>
		</div>
	);
};

export default Header;
