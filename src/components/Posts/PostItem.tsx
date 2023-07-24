import { Tag } from "@/types/INotion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
	cover: string;
	title: string;
	description: string;
	date: string;
	tags: Tag[];
	slug: string;
};

const PostItem = (props: Props) => {
	return (
		<div className="grid grid-cols-8 max-w-[90rem] rounded-3xl">
			<div className="relative col-[1/4]">
				<Image
					src={props.cover}
					fill={true}
					alt="Post cover"
					className="rounded-l-3xl"
				/>
			</div>
			<div className="py-5 col-[4/-1] grid gap-3 px-10 border-dark-highlight border-l-transparent border rounded-r-3xl">
				<h3>{props.title}</h3>
				<p>{props.description}</p>
				<div>BADGE</div>
				<div>
					<Link href={`/posts/${props.slug}`}>Read &rarr;</Link>
				</div>
			</div>
		</div>
	);
};

export default PostItem;
