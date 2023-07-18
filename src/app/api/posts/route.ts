import Notion from "@/lib/Notion";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
	const params = new URL(req.url).searchParams;

	const limit = +(params.get("limit") as any as number);

	const notion = new Notion();
	const posts = await notion.getPublishedPosts(limit);

	return NextResponse.json(
		{
			results: posts.length,
			data: posts,
		},
		{
			status: 200,
		}
	);
};
