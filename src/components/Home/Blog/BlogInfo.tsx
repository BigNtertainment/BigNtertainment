import { BlogPost } from "@/types/INotion";
import Image from "next/image";
import React from "react";
import Badge from "./Badge";
import Link from "next/link";

type Props = {
	post: BlogPost;
};

const BlogInfo = ({ post }: Props) => {
	return (
		<Link
			href={`/posts/${post.slug}`}
			className="bg-white bg-opacity-5 w-full aspect-[2/3] rounded-xl grid grid-rows-5 overflow-hidden cursor-pointer hover:shadow-2xl transition hover:transition hover:scale-105 z-10 hover:z-0">
			<div className="row-[1/3] relative">
				<Image src={post.cover} alt={`${post.title} Image`} fill={true} />
			</div>
			<div className="mt-8 mx-8 flex flex-col justify-between">
				<div className="flex gap-5 text2xl">
					<div className="text-[#ff4747] font-bold">BigNtertainment</div>
					<div className="opacity-75">{post.date}</div>
				</div>
				<div className="text-4xl font-bold mb-6">{post.title}</div>
			</div>
			<div className="mx-8 opacity-80">{post.description}</div>
			<div className=" mx-8 flex justify-between">
				<div className="self-center flex gap-4">
					{post.tags.map((tag) => (
						<Badge key={tag.id} name={tag.name.replace("#", "")} color={tag.color} />
					))}
				</div>
				<div className="self-center mb-4 text-left translate-y-1/4">
					<span className="underline">Read More</span> &rarr;
				</div>
			</div>
		</Link>
	);
};

export default BlogInfo;
