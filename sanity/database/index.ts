import { SanityClient, createClient } from "next-sanity";
import {
	getAllMembers,
	getOneMember,
	type MemberQuery,
} from "./controller/member";
import { BadgeQuery, getAllBadges, getOneBadge } from "./controller/badge";
import { GameQuery, getAllGames, getOneGame } from "./controller/games";

class SanityDatabase {
	private client: SanityClient;

	members: MemberQuery;
	badges: BadgeQuery;
	games: GameQuery;

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

		this.badges = {
			getAll: getAllBadges.bind(this),
			getOne: getOneBadge.bind(this),
		};

		this.games = {
			getAll: getAllGames.bind(this),
			getOne: getOneGame.bind(this),
		};
	}
}

export default SanityDatabase;
