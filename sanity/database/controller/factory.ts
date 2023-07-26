import { SanityClient } from "sanity";

export async function getAll(
	this: any,
	query: string,
	cb?: (data: any) => any
) {
	const client = this.client as SanityClient;
	const data = await client.fetch(query);

	if (!data) {
		return null;
	}

	if (!cb) {
		return data;
	}

	return cb(data);
}
