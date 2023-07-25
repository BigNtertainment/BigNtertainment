import { SanityClient } from "sanity";
import { getPhoto } from "../../utils/getExtra";

export type member = {
	id: string;
	name: string;
	surname: string;
	personalPageLink: string;
	description: string;
	slug: string;
	image: string;
};

export type memberQuery = {
	getAll: () => Promise<member[]>;
};

const transformMember = (members: any[]): member[] => {
	return members.map((member) => ({
		id: member._id,
		name: member.firstName,
		surname: member.surname,
		personalPageLink: member.personalPageLink,
		description: member.description,
		slug: member?.slug?.current,
		image: getPhoto(member.image.asset._ref),
	}));
};

export async function getAll(this: any) {
	const client = this.client as SanityClient;

	const query = `*[_type == "member"]`;

	const data = await client.fetch(query);

	return transformMember(data);
}
