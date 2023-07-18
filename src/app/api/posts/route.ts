import Notion from "@/lib/Notion";
import { NextResponse } from "next/server";

export const GET = async () => {
	const notion = new Notion();
	const posts = await notion.getPublishedPosts();

	return NextResponse.json(
		{
			data: posts,
		},
		{
			status: 200,
		}
	);
};
