import React from "react";
import { Post } from "../../../../sanity/database/controller/post";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import Badge from "@/components/shared/Badge";
import Heading from "@/components/shared/Heading";
import { MdCalendarMonth } from "react-icons/md";

type Props = {
	post: Post;
	style: "tile" | "sripe";
	className?: string;
};

const StripeItem = ({ post }: { post: Post }) => {
	const date = moment(new Date(post.publishedAt)).format("LL");

	return (
		<Link
			href={`/posts/${post.slug}`}
			className="w-full grid grid-cols-5 transition hover:transition hover:scale-105 ">
			<div className="relative h-full col-[1/3] z-10">
				<Image
					src={post.cover}
					alt={`${post.title} Image`}
					fill={true}
					className=" rounded-l-3xl translate-x-0.5"
				/>
			</div>
			<div className="px-8 py-7 pt-10 col-[3/-1] border border-dark-highlight border-l-transparent rounded-r-3xl">
				<Heading size="lg" className="text-left mb-8 ">
					{post.title}
				</Heading>
				<p className="text-2xl mb-5">{post.description}</p>
				<div className="self-center flex gap-4 mb-5 ">
					{post.badges.map((badge) => (
						<Badge key={badge.id} color={badge.color} name={badge.name} />
					))}
				</div>
				<div className="flex justify-between items-center ">
					<div className=" mb-4 text-left translate-y-1/4">
						<span className="underline">Read</span> &rarr;
					</div>
					<div className="opacity-75 flex gap-3 items-center">
						<MdCalendarMonth /> {date}
					</div>
				</div>
			</div>
		</Link>
	);
};

const TileItem = ({ post }: { post: Post }) => {
	const date = moment(new Date(post.publishedAt)).format("LL");
	return (
		<Link
			href={`/posts/${post.slug}`}
			className="bg-white bg-opacity-5 w-full aspect-[2/3] max-w-[38rem] rounded-xl grid grid-rows-5 overflow-hidden cursor-pointer hover:shadow-2xl transition hover:transition hover:scale-105 z-10 hover:z-0">
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

const BlogItem = ({ post, style }: Props) => {
	if (style === "sripe") {
		return <StripeItem post={post} />;
	}
	if (style === "tile") {
		return <TileItem post={post} />;
	}
};

export default BlogItem;
