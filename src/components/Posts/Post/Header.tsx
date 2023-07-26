import Link from "next/link";
import React from "react";
import moment from "moment";
import Authors from "./Authors";
import TimeToRead from "./TimeToRead";
import Location from "./Location";

const Header = (post: { title: string; date: string }) => {
	const date = moment(new Date(post.date)).format("LL");

	return (
		<div className="col-[1/-2] -mb-3">
			<Location />
			<h1 className="text-7xl font-bold my-4">{post.title}</h1>
			<div className="text-dark-highlight flex gap-6 blog-info">
				<div>{date}</div>
				<TimeToRead />
				<Authors />
			</div>
		</div>
	);
};

export default Header;
