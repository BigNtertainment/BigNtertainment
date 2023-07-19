import Link from "next/link";
import React from "react";

type Props = {
	name: string;
	color: string;
};

const Badge = ({ name, color }: Props) => {
	const badgeName = name.replace("#", "");

	return (
		<Link
			href={`/posts?tag=${badgeName}`}
			className="rounded-full border-[#07f468] border px-5 py-0.5 text-[#07f468] no-underline">
			{badgeName}
		</Link>
	);
};

export default Badge;
