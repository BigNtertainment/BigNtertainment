import Link from "next/link";
import React from "react";
import moment from "moment";
import Authors from "./Authors";
import TimeToRead from "./TimeToRead";
import Location from "./Location";
import { cn } from "@/lib/utils/tailwind";
import { Author } from "../../../../sanity/database/controller/post";
import Heading from "@/components/shared/Heading";

const Header = (post: {
	title: string;
	date: string;
	className?: string;
	content: any;
	author: Author;
}) => {
	const date = moment(new Date(post.date)).format("LL");

	return (
		<div className={cn("-mb-3", post.className)}>
			<Location />
			<Heading size="4xl" className="block mx-0 my-3 text-left">
				{post.title}
			</Heading>
			<div className="text-dark-highlight flex gap-6 blog-info">
				<div>{date}</div>
				<TimeToRead content={post.content} />
				<Authors author={post.author} />
			</div>
		</div>
	);
};

export default Header;
