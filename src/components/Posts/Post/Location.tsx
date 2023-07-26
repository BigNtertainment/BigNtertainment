"use client";

import Link from "next/link";

const Location = () => {
	return (
		<>
			<Link href="/">Home</Link>
			<div className="-translate-y-0.5 inline-block mx-1.5 text-dark-highlight">
				»{" "}
			</div>
			<Link href="/posts">Posts</Link>
		</>
	);
};

export default Location;
