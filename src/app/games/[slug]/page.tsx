import React from "react";
import SanityDatabase from "../../../../sanity/database";

type Props = {
	params: { slug: string };
};

const Page = async ({ params }: Props) => {
	// const database = new SanityDatabase();
	// const game = await database.games.getOne(params.slug);

	// console.log(game);

	return <div>Page</div>;
};

export default Page;
