import { groq } from "next-sanity";
import { getAll } from "./factory";

import { Game } from "./games";

export type RecommendedGames = {
	games: Game[];
};

export type RecommendedGamesQuery = {
	getAll: () => Promise<RecommendedGames | null>;
};

export async function getAllRecommendedGames(this: any) {
	const query = groq`*[_type == "recommendedGames"][0]{
    games[]->{
      "id": _id,
      name,
      "badges": badges[]->{
        "id": _id,
        color,
        name
      },
      likes,
      description,
      "slug": slug.current,
      "cover": cover.asset->url,
      "gameplay": gameplay[].asset->url,
      "updatedAt": _updatedAt,
       gameLink,
       content
    }
  }`;

	return getAll.call(this, {
		query,
	});
}
