import React from "react";
import SanityDatabase from "../../../sanity/database";

const database = new SanityDatabase();

const Page = () => {
	const games = database.games.getAll({ limit: 10 });

	return (
		<div className="col-[center-start/center-end] pb-20">
			<h3 className="text-6xl font-bold text-center mb-32 mt-24">Our Games</h3>
			<div></div>
		</div>
	);
};

export default Page;
