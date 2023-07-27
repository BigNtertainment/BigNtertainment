import React from "react";
import { Author } from "../../../../sanity/database/controller/post";
import Link from "next/link";

type Props = {
	author: Author;
};

const Authors = ({ author }: Props) => {
	return (
		<Link
			className="underline blog-author relative"
			key={author.id}
			href={`/team/${author.slug}`}>
			{author.name} {author.surname}
		</Link>
	);
};

export default Authors;
