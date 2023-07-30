import React from "react";
import { Post } from "../../../../sanity/database/controller/post";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import Badge from "@/components/shared/Badge";

type Props = {
	post: Post;
	style: "tile" | "sripe";
	className?: string;
};

const BlogItem = ({ post }: Props) => {
	const date = moment(new Date(post.publishedAt)).format("LL");

	return (
		<Link
			href={`/posts/${post.slug}`}
			className="bg-white bg-opacity-5 w-full aspect-[2/3] rounded-xl grid grid-rows-5 overflow-hidden cursor-pointer hover:shadow-2xl transition hover:transition hover:scale-105 z-10 hover:z-0">
			<div className="row-[1/3] relative">
				<Image src={post.cover} alt={`${post.title} Image`} fill={true} />
			</div>
			<div className="mt-8 mx-8 flex flex-col justify-between">
				<div className="flex gap-5 text2xl">
					<div>
						<span className="text-badge-red font-bold">BigNtertainment </span>
					</div>
					<div className="opacity-75">{date}</div>
				</div>
				<div className="text-4xl font-bold mb-6">{post.title}</div>
			</div>
			<div className="mx-8 opacity-80">{post.description}</div>
			<div className=" mx-8 flex justify-between">
				<div className="self-center flex gap-4">
					{post.badges.map((badge) => (
						<Badge key={badge.id} color={badge.color} name={badge.name} />
					))}
				</div>
				<div className="self-center mb-4 text-left translate-y-1/4">
					<span className="underline">Read More</span> &rarr;
				</div>
			</div>
		</Link>
	);
};

export default BlogItem;
