import { BlogPost } from "@/types/INotion";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export default class Notion {
	protected client: Client;
	protected n2m: NotionToMarkdown;

	constructor() {
		this.client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });
		this.n2m = new NotionToMarkdown({ notionClient: this.client });
	}

	private readonly database = process.env.NOTION_BLOG_DATABASE_ID ?? "";

	async getPublishedPosts(limit?: number | undefined) {
		const response = await this.client.databases.query({
			database_id: this.database,
			filter: {
				property: "Published",
				checkbox: {
					equals: true,
				},
			},
			sorts: [
				{
					property: "Created",
					direction: "descending",
				},
			],
			page_size: limit,
		});

		return response.results.map((res) => {
			return Notion.pageToPost(res);
		});
	}

	private static pageToPost(page: any): BlogPost {
		let cover = page.cover;

		switch (cover?.type) {
			case "file":
				cover = page.cover?.file;
				break;
			case "external":
				cover = page.cover?.external?.url;
				break;
			default:
				// add default cover
				cover = "";
		}

		return {
			id: page.id,
			cover,
			title: page.properties.Name.title[0]?.plain_text,
			tags: page.properties.Tags.multi_select,
			description: page.properties.Description.rich_text[0]?.plain_text,
			date: page.properties.Updated.date?.start,
			slug: page.properties.Slug.formula.string,
		};
	}
}
