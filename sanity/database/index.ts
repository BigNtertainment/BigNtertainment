import { SanityClient, createClient } from "next-sanity";
import {
	getAllMembers,
	getOneMember,
	type memberQuery,
} from "./controller/member";

class SanityDatabase {
	private client: SanityClient;

	members: memberQuery;

	constructor() {
		this.client = createClient({
			projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
			dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
			apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
			useCdn: false,
		});

		this.members = {
			getAll: getAllMembers.bind(this),
			getOne: getOneMember.bind(this),
		};
	}
}

export default SanityDatabase;
