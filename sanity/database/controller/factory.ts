import { FilteredResponseQueryOptions, QueryParams } from "next-sanity";
import { SanityClient } from "sanity";
import { paginate } from "../../utils/dbUtils";

export type factoryQuery = {
	query: string;
	params?: QueryParams;
	options?: FilteredResponseQueryOptions;
	cb?: (data: any) => any;
};

export async function getAll(
	this: any,
	{ query, params, options = { filterResponse: true }, cb }: factoryQuery
) {
	const client = this.client as SanityClient;

	const data = await client.fetch(query, params, options);

	if (!data) {
		return null;
	}

	if (!cb) {
		return data;
	}

	return cb(data);
}

export async function getOne(
	this: any,
	{ query, params, options = { filterResponse: true }, cb }: factoryQuery
) {
	const client = this.client as SanityClient;
	const data = await client.fetch(query, params, options);

	if (!data) {
		return null;
	}

	if (!cb) {
		return data;
	}

	return cb(data);
}
