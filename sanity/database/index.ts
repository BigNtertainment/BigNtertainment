import { SanityClient, createClient } from "next-sanity";
import {
	getAllMembers,
	getOneMember,
	type MemberQuery,
} from "./controller/member";
import { BadgeQuery, getAllBadges, getOneBadge } from "./controller/badge";
import {
	GameQuery,
	getAllGames,
	getGamesAmount,
	getOneGame,
} from "./controller/games";
import {
	PostQuery,
	getAllPosts,
	getOnePost,
	getPostsAmount,
	getPostsByBadge,
} from "./controller/post";
import {
	RecommendedCategoryQuery,
	getAllRecommendedCategories,
} from "./controller/recomendedCategories";
import { SliderQuery, getAllSlides } from "./controller/slider";
import { PageQuery, getOnePage } from "./controller/page";
import {
	RecommendedGamesQuery,
	getAllRecommendedGames,
} from "./controller/recomendedGames";

class SanityDatabase {
	private client: SanityClient;

	members: MemberQuery;
	badges: BadgeQuery;
	games: GameQuery;
	posts: PostQuery;
	recommendedCategories: RecommendedCategoryQuery;
	recommendedGames: RecommendedGamesQuery;
	slider: SliderQuery;
	page: PageQuery;

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
			getAmount: getGamesAmount.bind(this),
		};

		this.posts = {
			getAll: getAllPosts.bind(this),
			getOne: getOnePost.bind(this),
			getByBadge: getPostsByBadge.bind(this),
			getAmount: getPostsAmount.bind(this),
		};

		this.recommendedCategories = {
			getAll: getAllRecommendedCategories.bind(this),
		};

		this.recommendedGames = {
			getAll: getAllRecommendedGames.bind(this),
		};

		this.slider = {
			getAll: getAllSlides.bind(this),
		};

		this.page = {
			getOne: getOnePage.bind(this),
		};
	}
}

export default SanityDatabase;
