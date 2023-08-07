import SanityDatabase from "../../sanity/database";

const database = new SanityDatabase();

export default async function sitemap() {
	const baseUrl = "https://big-ntertainment-nu.vercel.app/";

	// Get All Posts
	const posts = await database.posts.getAll();
	const postUrls =
		posts?.map((post) => {
			return {
				url: `${baseUrl}/posts/${post.slug}`,
				lastModified: new Date(),
			};
		}) ?? [];

	// Get All Games
	const games = await database.posts.getAll();
	const gamesUrls =
		games?.map((game) => {
			return {
				url: `${baseUrl}/games/${game.slug}`,
				lastModified: new Date(),
			};
		}) ?? [];

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/posts`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/games`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
		},
		...postUrls,
		...gamesUrls,
	];
}
