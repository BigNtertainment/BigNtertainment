import { SanityClient, createClient } from "next-sanity";
import {
	getAllMembers,
	getOneMember,
	type MemberQuery,
} from "./controller/member";
import { BadgeQuery, getAllBadges, getOneBadge } from "./controller/badge";
import { GameQuery, getAllGames, getOneGame } from "./controller/games";
import { PostQuery, getAllPosts, getOnePost } from "./controller/post";
import {
	RecommendedCategoryQuery,
	getAllRecommendedCategories,
} from "./controller/recomendedCategories";

class SanityDatabase {
	private client: SanityClient;

	members: MemberQuery;
	badges: BadgeQuery;
	games: GameQuery;
	posts: PostQuery;
	recommendedCategories: RecommendedCategoryQuery;

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

		this.posts = {
			getAll: getAllPosts.bind(this),
			getOne: getOnePost.bind(this),
		};

		this.recommendedCategories = {
			getAll: getAllRecommendedCategories.bind(this),
		};
	}
}

export default SanityDatabase;
