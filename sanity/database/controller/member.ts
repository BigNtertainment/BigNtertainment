import { SanityClient } from "next-sanity";

export type memberQuery = {
	getAll: () => void;
};

export function getAll(this: any) {
	const { client } = this;

	console.log(client);
}
