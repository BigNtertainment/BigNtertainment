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

	private readonly databaseId = process.env.NOTION_BLOG_DATABASE_ID ?? "";

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
				cover = "/defaultPostBackground.png";
		}

		const createTime = new Date(page?.properties?.Created?.created_time);

		const date = `${createTime.getFullYear()}-${
			createTime.getMonth() + 1 < 10
				? `0${createTime.getMonth() + 1}`
				: createTime.getMonth() + 1
		}-${
			createTime.getDate() < 10 ? `0${createTime.getDate()}` : createTime.getDate()
		}`;

		return {
			id: page.id,
			cover,
			title: page.properties.Name.title[0]?.plain_text,
			tags: page.properties.Tags.multi_select,
			description: page.properties.Description.rich_text[0]?.plain_text,
			date: page.properties.Updated.date?.start || date,
			slug: page.properties.Slug.formula.string,
			author: page?.properties?.Author?.people,
		};
	}

	async getPublishedPosts(limit?: number | undefined) {
		const response = await this.client.databases.query({
			database_id: this.databaseId,
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

	async getBlogPost(id: string) {
		const response = await this.client.databases.query({
			database_id: this.databaseId,
			filter: {
				property: "Slug",
				formula: {
					string: {
						equals: id,
					},
				},
			},
		});

		const page = response?.results[0];

		if (!page) {
			throw "No results available";
		}

		const mdBlocks = await this.n2m.pageToMarkdown(page.id);
		const markdown = this.n2m.toMarkdownString(mdBlocks);
		const post = Notion.pageToPost(page);

		return {
			post,
			markdown,
		};
	}
}
