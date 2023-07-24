import { Tag } from "@/types/INotion";
import Image from "next/image";
import React from "react";
import Link from "../shared/Link";
import { MdCalendarMonth } from "react-icons/md";
import Badge from "../Home/Blog/Badge";

type Props = {
	cover: string;
	title: string;
	description: string;
	date: string;
	tags: Tag[];
	slug: string;
};

const PostItem = (props: Props) => {
	const badges = props.tags.map((tag) => (
		<Badge key={tag.id} color={tag.color} name={tag.name} />
	));

	return (
		<div className="grid grid-cols-8 max-w-[100rem] rounded-3xl">
			<div className="relative col-[1/4]">
				<Image
					src={props.cover}
					fill={true}
					alt="Post cover"
					className="rounded-l-3xl"
				/>
			</div>
			<div className="pt-5 col-[4/-1] grid px-10 pl-14 border-dark-highlight border-l-transparent border rounded-r-3xl">
				<h3 className="text-4xl font-bold pt-4">{props.title}</h3>
				<p className="text-dark-secondary">{props.description}</p>
				<div className="flex items-start gap-5 text-2xl">{badges}</div>
				<div className="flex justify-between items-center">
					<Link
						href={`/posts/${props.slug}`}
						text="Read"
						className="text-dark-secondary"
					/>
					<div className="text-dark-secondary text-2xl flex items-start gap-2">
						<MdCalendarMonth /> {props.date}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostItem;
