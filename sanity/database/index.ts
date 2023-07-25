import { SanityClient, createClient } from "next-sanity";

class SanityDatabase {
	private client: SanityClient;

	constructor() {
		this.client = createClient({
			projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
			dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
			apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
		});
	}
}

export default SanityDatabase;
